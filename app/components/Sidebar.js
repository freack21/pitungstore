"use client";
import Image from "next/image";
import HeaderBannerStyle from "./HeaderBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChain,
    faDollarSign,
    faHome,
    faLock,
    faLockOpen,
    faMessage,
    faQuestionCircle,
    faSave,
    faSearch,
    faTag,
    faTags,
    faTicket,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ButtonSidebar from "./ButtonSidebar";
import { useState } from "react";

export default function Sidebar({ hidden, handlerCloseButton }) {
    const [activeButton, setActiveButton] = useState(0);
    const dashboardNav = [
        {
            icon: faHome,
            text: "Beranda",
        },
        {
            icon: faSearch,
            text: "Cek Transaksi",
        },
        {
            icon: faTag,
            text: "Daftar Harga",
        },
    ];
    const helpNav = [
        {
            icon: faLockOpen,
            text: "Ketentuan",
        },
        {
            icon: faChain,
            text: "Reseller",
        },
        {
            icon: faQuestionCircle,
            text: "FAQ",
        },
        {
            icon: faMessage,
            text: "Kontak Kami",
        },
    ];
    return (
        <div
            className={`min-h-screen w-1/5 absolute top-0 left-0 flex-col items-center shadow  transition duration-300 bg-gray-100 dark:bg-zinc-800 ${
                hidden
                    ? "max-md:-translate-x-full"
                    : "max=md:ml-0 max-md:translate-x-0"
            } lg:flex max-md:w-1/2 max-sm:w-2/3`}
        >
            <Link href={"/"}>
                <Image
                    src={"/images/logo.png"}
                    width={150}
                    height={72}
                    alt="Logo"
                    className="m-4 my-6"
                />
            </Link>
            <div className="flex items-center absolute right-10 top-8 md:left-8 lg:hidden">
                <button
                    className={`block absolute ${HeaderBannerStyle.hamburgerActive}`}
                    onClick={handlerCloseButton}
                >
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

            <h2 className="w-full px-4 uppercase mt-3 text-zinc-500 dark:text-gray-400">
                <strong>Dashboard</strong>
            </h2>
            <ul className="block w-full px-3">
                {dashboardNav.map((data, i) => (
                    <li key={i} onClick={() => setActiveButton(i)}>
                        <ButtonSidebar
                            text={data.text}
                            icon={data.icon}
                            active={activeButton == i}
                        />
                    </li>
                ))}
            </ul>
            <h2 className="w-full px-4 uppercase mt-4 text-zinc-500 dark:text-gray-400">
                <strong>Pusat Bantuan</strong>
            </h2>
            <ul className="block w-full px-3">
                {helpNav.map((data, i) => (
                    <li
                        key={i + dashboardNav.length}
                        onClick={() => setActiveButton(i + dashboardNav.length)}
                    >
                        <ButtonSidebar
                            text={data.text}
                            icon={data.icon}
                            active={activeButton == i + dashboardNav.length}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
