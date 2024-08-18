import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Star from "../../public/star.png";
import { useRouter } from "next/navigation";

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
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                             width="10.000000pt" height="10.000000pt" viewBox="0 0 1280.000000 1222.000000"
                             preserveAspectRatio="xMidYMid meet">
                            <metadata>
                                Created by potrace 1.15, written by Peter Selinger 2001-2017
                            </metadata>
                            <g transform="translate(0.000000,1222.000000) scale(0.100000,-0.100000)"
                               fill="rgb(255,239,59)" stroke="none">
                                <path d="M6273 12205 c-115 -32 -205 -96 -266 -187 -19 -29 -304 -602 -635
                                -1273 -330 -671 -719 -1461 -864 -1755 l-264 -535 -220 -32 c-3672 -539 -3667
                                -538 -3722 -557 -100 -35 -199 -123 -248 -219 -76 -148 -69 -309 18 -454 23
                                -37 448 -457 1450 -1430 1270 -1233 1418 -1380 1413 -1403 -2 -14 -39 -223
                                -80 -465 -42 -242 -111 -645 -155 -895 -43 -250 -124 -718 -180 -1040 -56
                                -322 -135 -778 -176 -1015 -90 -512 -92 -552 -30 -680 102 -216 358 -320 574
                                -233 31 13 836 432 1788 931 l1731 906 804 -420 c442 -231 1223 -640 1734
                                -907 512 -268 953 -495 980 -504 63 -22 202 -23 268 -3 111 33 228 129 277
                                225 29 57 50 146 50 212 0 32 -41 292 -90 578 -138 795 -261 1506 -371 2145
                                -56 319 -124 716 -153 882 l-52 303 1422 1392 c965 944 1432 1408 1453 1442
                                43 71 62 130 68 211 16 208 -126 413 -324 468 -32 9 -379 61 -770 117 -392 55
                                -1034 145 -1425 200 -392 56 -868 123 -1058 150 -190 26 -419 58 -510 71 -91
                                12 -170 27 -177 33 -6 6 -399 799 -873 1761 -473 963 -877 1774 -898 1804 -44
                                65 -131 131 -210 161 -74 29 -207 36 -279 15z" />
                            </g>
                        </svg>
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
