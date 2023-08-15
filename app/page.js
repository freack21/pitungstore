import HeaderBanner from "./components/HeaderBanner";
import HomeSlider from "./components/HomeSlider";

export default function Home() {
    return (
        <div className="bg-gray-200 p-4 min-h-screen dark:bg-zinc-900">
            <HeaderBanner />
            <main className=" lg:ml-auto lg:w-4/5 ">
                <HomeSlider />
            </main>
        </div>
    );
}
