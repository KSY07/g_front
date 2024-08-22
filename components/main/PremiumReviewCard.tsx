import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Star from "../../public/star.png";
import { useRouter } from "next/navigation";
import { StarSvg } from "@/components/common/StarSvg";

interface PremiumReviewCardProps {
    companyName:string,
    rating:number,
    image:string,
    premium:boolean,
}

export const PremiumReviewCard = (p: PremiumReviewCardProps) => {
    const router = useRouter();
    const onClickCompany = (id:number) => {
        router.push(`/info?id=${id}`);
    }

    return (
        <>
            <Card className="py-4 max-w-[500px]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{p.companyName}</h4>
                    <p className="text-tiny uppercase font-bold">
                        최근 상담 *건, 총 공사 *건
                    </p>
                    <small className="text-default-500 flex">
                        <StarSvg />
                        <p style={{marginLeft: "10px"}}>평점 {p.rating} / 5.0</p>
                        </small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                      onClick={() => onClickCompany(1)}
                      alt="Card background"
                      className="object-cover rounded-xl cursor-pointer"
                      src={p.image}
                      width={500}
                      height={200}
                    />
                </CardBody>
            </Card>
        </>
    );
};
