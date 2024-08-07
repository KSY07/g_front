'use client'
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "@/components/carousel/Carousel";

export default function InteriorTipPage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<
    {id:string, title: string, content: string, createdAt: string, likes:number, thumbnailBase64String:string}
  >({id:"", title:"", content:"", createdAt:"", likes:"", thumbnailBase64String:""});
    const dummyData = {
      title: "테스트 타이틀",
      contents: "<p>테스트 컨텐츠</p><p>테스트</p><p></p>",
    };
    const removeEscape = (str) => {
      return str.replace(/\\/g, '');
    }

  useEffect(() => {
    const id = searchParams.get("id");
    console.log(id);
    axios.get(`/board/tips?id=${id}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

    return (
        <>
            <section className="flex min-h-screen flex-col items-center p-10">
                <p className="text-5xl">{data.title}</p>
              <div className="mt-16">
                <div dangerouslySetInnerHTML={{__html: removeEscape(data.content)}}></div>
              </div>
              <div className="flex flex-col items-center mt-16">
                <h1>다른 팁 더보기</h1>
              </div>
            </section>
        </>
    )
}