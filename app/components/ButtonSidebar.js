"use client";
import Image from "next/image";
import HeaderBannerStyle from "./HeaderBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ButtonSidebar({ link, icon, text, active }) {
    return (
        <Link href={link || ""}>
            <div
                className={`text-zinc-600 w-full dark:text-gray-200 flex flex-row items-center p-3 px-4 rounded my-2 hover:pl-6 ${
                    active && " bg-zinc-800 shadow dark:bg-zinc-700"
                }`}
            >
                <FontAwesomeIcon
                    icon={icon}
                    className={`text-lg w-[32px] ${active && "text-gray-100"}`}
                />
                <p className={`ml-4 ${active && "text-gray-100"}`}>{text}</p>
            </div>
        </Link>
    );
}
