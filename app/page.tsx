"use client";
import { PopularTags } from "@/components/main/PopularTags";
import {Carousel} from "@/components/carousel/Carousel";

export default function Home() {

    return (
      <>
          <h1 className="text-xl text-center mb-10">공간을 더욱 스마트하게, 공간 손길</h1>
          <div className="p-4">
            <Carousel />
          </div>
          <main className="flex min-h-screen flex-col items-center p-10">
            <PopularTags />
          </main>
      </>
  );
}
