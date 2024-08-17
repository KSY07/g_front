'use client'

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper_style.css';
import { Navigation } from "swiper/modules";


export default function CompanyInfo() {

  return (
    <section className="flex min-h-screen flex-col min-w-full items-center p-10">
      <Card className="max-w-[1000px] w-full p-10">
        <CardHeader className="flex flex-row justify-between gap-3 items-start">
          <div className="flex flex-col">
            <p className="text-4xl">디자인 몬도</p>
            <ScrollShadow className="max-w-[400px] max-h-[200px]">
              <p className="text-sm text-gray-400">테스트 회사 설명 입니다. 회사 설명입니다. 회사 설명입니다.</p>
            </ScrollShadow>
          </div>
          <div className="flex w-1/2 ml-4">
            <Image alt="Logo" className="object-cover rounded-xl"
                   src="https://nextui.org/images/hero-card-complete.jpeg"
            />
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="p-6">
          <div className="flex flex-row justify-between">
            <p className="text-2xl">고객 후기</p>
            <Button color="primary">후기 작성</Button>
          </div>
          <div className="flex flex-col p-10">
            <Card className="max-w-[800px] w-full p-10">
              <CardHeader className="flex flex-col items-start">
                <p className="text-xl">리뷰 제목</p>
                <p>유저 이름</p>
                <p>별점</p>
              </CardHeader>
              <Divider />
              <CardBody className="p-6">
                <div>내용</div>
                <Swiper navigation={true} modules={[Navigation]} className="mt-10" centeredSlides={true} slidesPerView={3} spaceBetween={30}>
                  <SwiperSlide><Image alt="Logo" className="object-cover rounded-xl" src="https://nextui.org/images/hero-card-complete.jpeg" width={400}/></SwiperSlide>
                  <SwiperSlide><Image alt="Logo" className="object-cover rounded-xl" src="https://nextui.org/images/hero-card-complete.jpeg" width={400}/></SwiperSlide>
                  <SwiperSlide><Image alt="Logo" className="object-cover rounded-xl" src="https://nextui.org/images/hero-card-complete.jpeg" width={400}/></SwiperSlide>
                  <SwiperSlide><Image alt="Logo" className="object-cover rounded-xl" src="https://nextui.org/images/hero-card-complete.jpeg" width={400}/></SwiperSlide>
                  <SwiperSlide><Image alt="Logo" className="object-cover rounded-xl" src="https://nextui.org/images/hero-card-complete.jpeg" width={400}/></SwiperSlide>
                </Swiper>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </section>
  )
}