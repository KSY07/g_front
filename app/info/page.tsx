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
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { StarSvg } from "@/components/common/StarSvg";
import { Modal, useDisclosure } from "@nextui-org/modal";
import { ReviewCreateModal } from "@/components/modals/ReviewCreateModal";
import { ConstructionExampleCreateModal } from "@/components/modals/ConstructionExampleModal";

const useReviewDisclosure = () => {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  return {
    isReviewModalOpen: isOpen,
    onReviewModalOpen: onOpen,
    onReviewModalOpenChange: onOpenChange,
    onReviewModalClose: onClose,
  }
}

const useConstructionExampleDisclosure = () => {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  return {
    isCEModalOpen: isOpen,
    onCEModalOpen: onOpen,
    onCEModalOpenChange: onOpenChange,
    onCEModalClose: onClose,
  }
}

export default function CompanyInfo() {
  const {isReviewModalOpen, onReviewModalOpen, onReviewModalOpenChange, onReviewModalClose} = useReviewDisclosure();
  const {isCEModalOpen, onCEModalOpen, onCEModalOpenChange, onCEModalClose} = useConstructionExampleDisclosure();
  const [companyInfo, setCompanyInfo] = useState({});
  const [reviewList, setReviewList] = useState([]);
  const [constructionExampleList, setConstructionExampleList] = useState([]);
  const searchParams = useSearchParams();
  useEffect(() => {
    const id = searchParams.get("id");
    axios.get(`/board/companyInfo?companyPk=${id}`)
      .then((res) => {
        console.log(res.data);
        setCompanyInfo(res.data);
        setReviewList(res.data.reviewList);
        setConstructionExampleList(res.data.constructionExampleList);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Modal isOpen={isReviewModalOpen} size="3xl" onOpenChange={onReviewModalOpenChange}>
        <ReviewCreateModal onClose={onReviewModalClose} />
      </Modal>
      <Modal isOpen={isCEModalOpen} size="3xl" onOpenChange={onCEModalOpenChange}>
        <ConstructionExampleCreateModal onClose={onCEModalClose} />
      </Modal>
    <section className="flex min-h-screen flex-col min-w-full items-center p-10">
      <Card className="max-w-[1000px] w-full p-10">
        <CardHeader className="flex flex-row justify-between gap-3 items-start">
          <div className="flex flex-col">
            <p className="text-4xl">{companyInfo.companyName}</p>
            <ScrollShadow className="max-w-[400px] max-h-[200px]">
              <p className="text-sm text-gray-400">테스트 회사 설명 입니다. 회사 설명입니다. 회사 설명입니다.</p>
            </ScrollShadow>
          </div>
          <div className="flex w-1/2 ml-4">
            <Image alt="Logo" className="object-cover rounded-xl"
                   src={companyInfo.companyThumbnail}
            />
          </div>
        </CardHeader>
        <Divider />

        <CardBody className="p-6">
          <div className="flex flex-row justify-between">
            <p className="text-2xl">시공 사례</p>
            <Button color="primary" onClick={onCEModalOpen}>시공 사례 작성</Button>
          </div>
          <div className="flex flex-col p-10">
            {
              constructionExampleList.map(ce => {
                return (
                  <>
                    <Card className="max-w-[800px] w-full p-10">
                      <CardHeader className="flex flex-col items-start">
                        <p className="text-xl">{ce.title}</p>
                      </CardHeader>
                      <Divider />
                      <CardBody className="p-6">
                        <div>내용</div>
                        <div>{ce.contents}</div>
                        <Swiper navigation={true} modules={[Navigation]} className="mt-10" centeredSlides={true}
                                slidesPerView={3} spaceBetween={30}>
                          {
                            ce.imageUrlList.map((url, index) => {
                              return (<>
                                <SwiperSlide>
                                  <Image key={index}
                                         alt="Logo" className="object-cover rounded-xl"
                                         src={url}
                                         width={400} />
                                </SwiperSlide>
                              </>)
                            })
                          }
                        </Swiper>
                      </CardBody>
                    </Card>
                  </>
                )
              })
            }
          </div>
          <Divider />
          <div className="flex flex-row justify-between mt-10">
            <p className="text-2xl">고객 후기</p>
            <Button color="primary" onClick={onReviewModalOpen}>후기 작성</Button>
          </div>
          <div className="flex flex-col p-10">
            {
              reviewList.map(review => {
                return (
                  <>
                    <Card className="max-w-[800px] w-full p-10">
                      <CardHeader className="flex flex-col items-start">
                        <p className="text-xl">{review.title}</p>
                        <p>{review.userName}</p>
                        <div className="flex flex-row">
                          <StarSvg />
                          <p className="ml-4">{review.rating} / 5.0</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="p-6">
                        <div>{review.contents}</div>
                        <Swiper navigation={true} modules={[Navigation]} className="mt-10" centeredSlides={true}
                                slidesPerView={3} spaceBetween={30}>
                          {
                            review.imageUrlList.map((url, index) => {
                              return (<>
                                <SwiperSlide>
                                  <Image key={index}
                                         alt="Logo" className="object-cover rounded-xl"
                                         src={url}
                                         width={400} />
                                </SwiperSlide>
                              </>)
                            })
                          }
                        </Swiper>
                      </CardBody>
                    </Card>
                  </>
                )
              })
            }
          </div>
        </CardBody>
      </Card>
    </section>
    </>
  )
}