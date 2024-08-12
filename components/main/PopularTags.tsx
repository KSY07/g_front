import { ReviewCard } from "@/components/main/ReviewCard";
import {PremiumReviewCard} from "@/components/main/PremiumReviewCard";
import { useEffect, useState } from "react";
import axios from "axios";

export function PopularTags() {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    axios.get("/company/list")
      .then(e => {
        console.log(e.data);
        setCompanyList(e.data);
      }).catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <section className="popular-tags">
      <div className="container mx-auto p-4">
        <div className="mb-10">
          <h1 className="text-lg font-bold">시공 사례</h1>
          <p>선택한 지역의 시공전문가를 보여드립니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {
            companyList.map((item:any) => {
                return (
                  <>
                    <PremiumReviewCard
                      companyName={item.companyName}
                      key={item.companyName} rating={item.rating}
                      image={item.companyThumbnail}
                      premium={item.premium} />
                  </>
                )
              }
            )
          }
        </div>
      </div>
    </section>
  );
}
