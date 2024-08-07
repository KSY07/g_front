import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import './Carousel.css';
import { useEffect, useRef, useState } from "react";
import {useKeenSlider} from "keen-slider/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export const Carousel = () => {
    const router = useRouter();
    const [slideList, setSlideList] = useState([]);
    const [slider, setSlider] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const sliderRef = useRef(null);

    useEffect(() => {
        axios.get("/board/tips/all")
          .then((res) => {
              console.log(res.data);
              setSlideList(res.data);
          }).catch((e) => {
            console.error(e);
        });
    }, []);

    useEffect(() => {
        if (slideList.length > 0 && sliderRef.current) {
            const slider = new KeenSlider(sliderRef.current, {
                loop: true,
                centered: true,
                slides: {
                    perView: 1.2,
                    spacing: 10,
                },
            });

            setSlider(slider);

            // Cleanup on unmount
            return () => {
                slider.destroy();
            };
        }
    }, [slideList]);

    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {
                        slideList.map((slide, index) => {
                            return (
                              <div className="keen-slider__slide" key={index} style={{cursor:"pointer"}} onClick={() => router.push(`/interiorTip?id=${slide.id}`)}>
                                  <img src={slide.thumbnailBase64String} alt={slide.title} />
                              </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
