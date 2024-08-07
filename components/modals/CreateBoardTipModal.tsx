import { Input } from "@nextui-org/input";
import {ModalBody, ModalContent, ModalFooter} from "@nextui-org/modal";
import dynamic from 'next/dynamic';
import { useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Button } from "@nextui-org/button";
import { toast } from "react-toastify";
import axios from "axios";

interface CreateBoardTipModalProps {
  onClose: () => void;
}

const ReactQuill = dynamic(async () => {
  const {default: RQ} = await import("react-quill");
  return function comp({forwardedRef, ...props}) {
    return <RQ ref={forwardedRef} {...props} />;
  };
}, {
  loading: () => <div>...loading</div>,
  ssr: false,
});



export const CreateBoardTipModal = ({onClose}:CreateBoardTipModalProps) => {
    const [content, setContent] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [thumbnail, setThumbnail] = useState();
    const [images, setImages] = useState<any[]>([]);
    const QuillRef = useRef<ReactQuill>();
    const thumbnailRef = useRef();
    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],[{ 'align': []}], [{'font': []}], ['link', 'image', 'video', 'formula']
    ]
    //let quill =QuillRef.current?.getEditor();


    const uploadedThumbnail = () => {
      //@ts-ignore
        const file = thumbnailRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = (e) => {
          //@ts-ignore
          setThumbnail(reader.result);
        }
    }

    const onClickSubmit = () => {
      const contents = {
        title: title,
        content: content
      }
      const formData = new FormData();
      formData.append("dto", new Blob([JSON.stringify(contents)], { type: 'application/json' }));
      formData.append("thumbnail", thumbnailRef.current.files[0]);

      axios.post('/board/tips/save', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }).then(response => {
          if(response.status === 201) {
            toast("인테리어 팁 작성이 완료되었습니다. 새로고침 해주세요.");
            onClose();
          }
      }).catch(error => {
        console.log(error);
      });
    }

    const imageHandler = async () => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();
      input.addEventListener("change", async () => {
          if(!input.files || !QuillRef.current) return;

          const file = input.files[0];

          const formData = new FormData();
          formData.append('image', file);

          const range = QuillRef.current?.getEditor().getSelection(true);

          try {
              const response = await axios.post('/board/image/upload', formData);
              setImages((prevImagesUrlList)  => [...prevImagesUrlList, response.data]);
              console.log(response.data);
              QuillRef.current.getEditor()
                .insertEmbed(range.index, 'image', response.data);
          } catch (error) {
            if(axios.isAxiosError(error)) {
              if (error.message === 'Network Error') {
                alert('이미지 크기(10MB)를 초과하였습니다.');
              }
            } else {
              console.error(error);
            }
          }

      })
    }

    if (QuillRef.current) {
      const toolbar = QuillRef.current.getEditor().getModule('toolbar');
      toolbar.addHandler('image', imageHandler);
    }

    return(
        <>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody>
                          <h1>인테리어 팁 작성</h1>
                          <h1>제목</h1>
                          <Input type="text" size="lg" value={title} onChange={(e) => setTitle(e.target.value)} />
                          <h1>썸네일 업로드</h1>
                          {
                            thumbnail &&
                            <img className="size-28" src={thumbnail ? thumbnail: ""} alt={"Thumbnail"} />
                          }
                          <input type="file" ref={thumbnailRef} accept="image/*" onChange={() => uploadedThumbnail()} />
                          <h1>내용</h1>
                          <div className="overflow-y-auto flex justify-center">
                            <ReactQuill placeholder="인테리어 팁을 작성해 주세요."
                                        style={{ width: "90%", height: "500px"}}
                                        forwardedRef={QuillRef}
                                        theme="snow"
                                        modules={{
                                          toolbar: toolbarOptions,
                                        }}
                                        value={content}
                                        onChange={setContent}
                            />
                          </div>
                          <Button onClick={() => onClickSubmit()}>등록하기</Button>
                        </ModalBody>
                        <ModalFooter />
                    </>
                )}
            </ModalContent>
        </>
    )
}