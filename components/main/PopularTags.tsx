import { ReviewCard } from "@/components/main/ReviewCard";
import {PremiumReviewCard} from "@/components/main/PremiumReviewCard";
import { useEffect, useState } from "react";

export function PopularTags() {
  const [premiumReviewCards, setPremiumReviewCards] = useState([]);
  const [reviewCards, setReviewCards] = useState([]);

  useEffect(() => {
    // fetch("/company/list", {
    //   method: "GET",
    // }).then(res => {
    //   console.log(res.json());
    // });
  }, []);

  return (
    <section className="popular-tags">
      <div className="container mx-auto p-4">
        <div className="mb-10">
          <h1 className="text-lg font-bold">시공 사례</h1>
          <p>선택한 지역의 시공전문가를 보여드립니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PremiumReviewCard />
          <PremiumReviewCard />
        </div>
      </div>
    </section>
  );
}
