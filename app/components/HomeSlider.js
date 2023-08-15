"use client";
import {
    faChevronLeft,
    faChevronRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function HomeSlider({}) {
    const slides = [
        {
            img: "https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-22153.jpg?w=826&t=st=1690393035~exp=1690393635~hmac=51d9736936d51af2364070a07eaccd7eb376c9bb98f1761c801f54c97e3accf3",
        },
        {
            img: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148527124.jpg?w=826&t=st=1691917651~exp=1691918251~hmac=cd120a8bea6f30829ce22d054b91c38a1f3d878fb41d1c3f495b83c83a3b4988",
        },
        {
            img: "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?w=826&t=st=1690393401~exp=1690394001~hmac=d6110c914b764b545e85c10ecfa511623642b38a604c06099a63d5b8e42d910c",
        },
        {
            img: "https://img.freepik.com/free-photo/young-lady-use-cellphone-order-online-shopping-product-paying-bills-with-banking-app-with-transaction-successful-stay-house-quarantine-activity-fun-activity-coronavirus-prevention_7861-3270.jpg?w=996&t=st=1690393461~exp=1690394061~hmac=d7b02a908ad4eae3d84fc282c9977a20dd985c4cb8f38fac5994d125cf4d22b1",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        const newIndex =
            currentIndex == slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const prevSlide = () => {
        const newIndex =
            currentIndex == 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div className="w-full max-w-[1440px] h-[240px] lg:h-[480px] m-auto group relative py-4 px-2 lg:px-4">
            <div
                className="w-full h-full bg-center bg-cover duration-500 rounded-xl transition ease-in-out"
                style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
            >
                <div className="w-full h-full dark:bg-black/20"></div>
            </div>
            <FontAwesomeIcon
                icon={faChevronLeft}
                className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 lg:left-8 p-2 rounded-full w-4 h-4 text-white dark:text-black bg-black/20 dark:bg-white/20 cursor-pointer"
                onClick={prevSlide}
            />
            <FontAwesomeIcon
                icon={faChevronRight}
                className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 lg:right-8 p-2 rounded-full w-4 h-4 text-white dark:text-black bg-black/20 dark:bg-white/20 cursor-pointer"
                onClick={nextSlide}
            />
            <div className="flex justify-center py-2">
                {slides.map((slide, i) => (
                    <FontAwesomeIcon
                        key={i}
                        icon={faCircle}
                        className={`text-zinc-400 dark:text-gray-500 w-2 h-2 mx-0.5 ${
                            currentIndex == i &&
                            "text-zinc-800 dark:text-gray-100"
                        } cursor-pointer`}
                        onClick={() => setCurrentIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
}
