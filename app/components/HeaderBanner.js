"use client";
import Image from "next/image";
import HeaderBannerStyle from "./HeaderBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoon,
    faQuestionCircle,
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function HeaderBanner() {
    const [hidden, setHidden] = useState(true);
    const hamburgerClick = () => {
        setHidden((prev) => !prev);
    };
    const changeTheme = () => {
        document.querySelector("html").classList.toggle("dark");
    };
    return (
        <>
            <div
                className={
                    "bg-gray-100 min-h-2 p-2 px-4 dark:text-gray-200 rounded-lg shadow-md flex justify-center relative content-center dark:bg-zinc-800 md:px-8 lg:ml-auto lg:w-4/5 lg:py-4"
                }
            >
                <div className="flex items-center absolute left-5 top-8 md:left-8 lg:hidden">
                    <button className="block absolute" onClick={hamburgerClick}>
                        <span
                            className={`${HeaderBannerStyle.hamburgerLine} origin-top-left transition ease-in-out duration-300 dark:bg-gray-100`}
                        ></span>
                        <span
                            className={`${HeaderBannerStyle.hamburgerLine} transition ease-in-out duration-300 dark:bg-gray-100`}
                        ></span>
                        <span
                            className={`${HeaderBannerStyle.hamburgerLine} origin-bottom-left transition ease-in-out duration-300 dark:bg-gray-100`}
                        ></span>
                    </button>
                </div>
                <Image
                    src={"/images/logo.png"}
                    width={120}
                    height={60}
                    alt="Logo"
                />
                <div className="absolute right-5 top-5">
                    <input
                        type="checkbox"
                        class={`opacity-0 ${HeaderBannerStyle.checkbox} absolute`}
                        onChange={changeTheme}
                        id="checkbox"
                    />
                    <label
                        for="checkbox"
                        class="bg-zinc-900 w-[50px] h-[26px] flex rounded-full relative p-1.5 cursor-pointer justify-between content-center"
                    >
                        <FontAwesomeIcon
                            icon={faMoon}
                            className={"text-gray-200"}
                        />
                        <FontAwesomeIcon icon={faSun} color="#f39c12" />
                        <span class="bg-white w-[22px] h-[22px] absolute top-[2px] left-[2px] origin-top-left rounded-full transition transform duration-200 transition-linear block"></span>
                    </label>
                </div>
            </div>
            <Sidebar hidden={hidden} handlerCloseButton={hamburgerClick} />
        </>
    );
}
