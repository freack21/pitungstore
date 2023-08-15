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
            title: "Title1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iste.",
        },
        {
            img: "https://img.freepik.com/free-vector/blogger-review-concept_23-2148527124.jpg?w=826&t=st=1691917651~exp=1691918251~hmac=cd120a8bea6f30829ce22d054b91c38a1f3d878fb41d1c3f495b83c83a3b4988",
            title: "Title2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            img: "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?w=826&t=st=1690393401~exp=1690394001~hmac=d6110c914b764b545e85c10ecfa511623642b38a604c06099a63d5b8e42d910c",
            title: "Title3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae.",
        },
        {
            img: "https://img.freepik.com/free-photo/young-lady-use-cellphone-order-online-shopping-product-paying-bills-with-banking-app-with-transaction-successful-stay-house-quarantine-activity-fun-activity-coronavirus-prevention_7861-3270.jpg?w=996&t=st=1690393461~exp=1690394061~hmac=d7b02a908ad4eae3d84fc282c9977a20dd985c4cb8f38fac5994d125cf4d22b1",
            title: "Title4",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur atque excepturi aliquid non! Ad sapiente delectus recusandae? Tempore, quibusdam officiis quasi iure nemo fugit perferendis laudantium excepturi reprehenderit non necessitatibus dolorum consequuntur exercitationem libero enim dolores itaque rem maiores culpa fugiat adipisci at unde! Ipsa quod quo ex quasi.",
        },
    ];
    // const slides = [
    //     {
    //         img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    //     },
    //     {
    //         img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    //     },
    //     {
    //         img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    //     },

    //     {
    //         img: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    //     },
    //     {
    //         img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    //     },
    // ];
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
                className="w-full h-full bg-center bg-cover duration-100 rounded-xl bg-neutral-300 dark:bg-zinc-900"
                style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
            >
                <div className="w-full h-full dark:bg-black/20 rounded-xl flex items-center flex-col justify-center px-12 py-2 lg:px-32">
                    <h1 className="text-xl lg:text-2xl font-bold p-1 px-4 rounded-lg bg-gray-50/50 text-zinc-800 dark:bg-black/40 dark:text-gray-50 tracking-wider">
                        {slides[currentIndex].title}
                    </h1>
                    <p className="text-sm lg:text-md font-normal p-2 rounded-md bg-gray-50/50 text-zinc-800 dark:bg-black/40 dark:text-gray-50 mt-2 lg:mt-8 text-center max-h-[120px] overflow-hidden">
                        {slides[currentIndex].text}
                    </p>
                </div>
            </div>
            <FontAwesomeIcon
                icon={faChevronLeft}
                className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 lg:left-8 p-2 rounded-full w-4 h-4 text-white dark:text-zinc-900 bg-black/20 dark:bg-white/50 cursor-pointer"
                onClick={prevSlide}
            />
            <FontAwesomeIcon
                icon={faChevronRight}
                className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 lg:right-8 p-2 rounded-full w-4 h-4 text-white dark:text-zinc-900 bg-black/20 dark:bg-white/50 cursor-pointer"
                onClick={nextSlide}
            />
            <div className="flex justify-center py-2">
                {slides.map((slide, i) => (
                    <FontAwesomeIcon
                        key={i}
                        icon={faCircle}
                        className={`w-1.5 h-1.5 mx-1 ${
                            currentIndex == i
                                ? "text-zinc-800 dark:text-gray-50"
                                : "text-zinc-400 dark:text-gray-500"
                        } cursor-pointer`}
                        onClick={() => setCurrentIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
}
