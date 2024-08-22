import { Input } from "@nextui-org/input";
import {ModalBody, ModalContent, ModalFooter} from "@nextui-org/modal";
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Button } from "@nextui-org/button";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { Image } from "@nextui-org/image";

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



export const ReviewCreateModal = ({onClose}:CreateBoardTipModalProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [userInfo, setUserInfo] = useState();
  const [content, setContent] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [rating, setRating] = useState<>();
  const [images, setImages] = useState<any[]>([]);
  const [imagePreviews, setImagePreviews] = useState<any[]>();
  const QuillRef = useRef<ReactQuill>();
  const thumbnailRef = useRef();
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],[{ 'align': []}], [{'font': []}], ['link', 'image', 'video', 'formula']
  ]
  //let quill =QuillRef.current?.getEditor();

  function addFile(e:any) {
    const selectedFiles = Array.from(e.target.files);
    const totalFiles = [...images, ...selectedFiles].slice(0, 10);
    setImages(totalFiles);

    const totalPreviews = totalFiles.map(file => URL.createObjectURL(file));
    setImagePreviews(totalPreviews);
  }

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo") as string));
  }, []);

  const onClickSubmit = () => {
    const contents = {
      title: title,
      content: content,
      rating: rating,
      userId: userInfo?.userId,
      companyPk: searchParams.get("id")
    }
    console.log(userInfo);
    const formData = new FormData();
    formData.append("dto", new Blob([JSON.stringify(contents)], { type: 'application/json' }));

    images.forEach(image => {
      formData.append("images", image);
    })

    axios.post('/board/reviews', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then(response => {
      if(response.status === 201) {
        toast("리뷰 작성이 완료되었습니다. 새로고침 해주세요.");
        router.refresh();
        onClose();
      }
    }).catch(error => {
      console.log(error);
    });
  }

  return(
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <h1>리뷰 작성</h1>
              <h1>제목</h1>
              <Input type="text" size="lg" value={title} onChange={(e) => setTitle(e.target.value)} />
              <h1>내용</h1>
              <Input type="number" placeholder="평점 입력 최대 5.0" size="lg" value={rating} onChange={(e) => setRating(e.target.value)} />
              <div className="overflow-y-auto flex justify-center">
                <ReactQuill placeholder="인테리어 팁을 작성해 주세요."
                            style={{ width: "90%", height: "100px"}}
                            forwardedRef={QuillRef}
                            theme="snow"
                            modules={{
                              toolbar: toolbarOptions,
                            }}
                            value={content}
                            onChange={setContent}
                />
              </div>
              <div className="mt-10 flex flex-col">
                <h1>후기 사진 업로드</h1>
                <Input type="file" onChange={(e) => addFile(e)} />
                <div className="mt-4 p-4 flex flex-row border-1 h-auto">
                  {imagePreviews?.map((preview, index) => (
                    <div><Image className="object-cover rounded-xl" key={index} src={preview} width={200} height={100} /></div>
                  ))}
                </div>
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