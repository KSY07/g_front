import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

interface ReviewCardProps {
  // title:string,
  // rating:number,
  // image:any,
  // content:string,
}

export const ReviewCard = (p: ReviewCardProps) => {
  return (
    <>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">업체명</h4>
          <p className="text-tiny uppercase font-bold">
            최근 상담 *건, 총 공사 *건
          </p>
          <small className="text-default-500">Rating</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </>
  );
};
