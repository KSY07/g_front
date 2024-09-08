import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { StarSvg } from "@/components/common/StarSvg";
import { Divider } from "@nextui-org/divider";
import { Swiper, SwiperSlide } from "swiper/swiper-react";
import { Navigation } from "swiper/types/modules";
import { Image } from "@nextui-org/image";

export const Review = (p:any) => {

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
  );
}