"use client";
import InstallIcon from "@/icons/install-icon";
import NotificationsIcon from "@/icons/notifications-icon";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ContentHeaderNavigation from "./content-header-navigation";
import ContentHeaderPopup from "./content-header-popup";

// todo : handle user image better in the future

const ContentHeader = () => {
    const { data: session } = useSession();

    // console.log(session);
    return (
        <header
            className={`flex w-full items-center justify-between ${
                !session ? "py-2" : "py-4"
            } bg-neutral-900 pl-6 pr-4`}
        >
            <ContentHeaderNavigation />

            {session && session.user?.image ? (
                <nav className="flex gap-2">
                    <Link
                        href={"/install"}
                        className="flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-3 py-1 text-sm font-bold transition-all hover:scale-105"
                    >
                        <InstallIcon />
                        <span>Install App</span>
                    </Link>

                    <Link
                        href={"/notifications"}
                        className="rounded-full bg-neutral-950 p-2 transition-all hover:scale-105"
                    >
                        <NotificationsIcon />
                    </Link>

                    <ContentHeaderPopup>
                        <button>
                            <figure className="rounded-full bg-neutral-950 p-1 transition-all hover:scale-105 hover:bg-black">
                                <Image
                                    src={session.user?.image}
                                    alt="Profile picture"
                                    width={24}
                                    height={24}
                                    className="rounded-full object-cover"
                                />
                            </figure>
                        </button>
                    </ContentHeaderPopup>
                </nav>
            ) : (
                <div className="flex items-center gap-8 font-bold">
                    <Link
                        href={"/signup"}
                        className="text-neutral-400 transition-all hover:scale-105 hover:font-extrabold hover:text-neutral-100"
                    >
                        Sign up
                    </Link>
                    <Link
                        href={"/login"}
                        className="rounded-full bg-neutral-100 px-8 py-3 text-neutral-950 transition-all hover:scale-105 hover:font-extrabold"
                    >
                        Log in
                    </Link>
                </div>
            )}
        </header>
    );
};

export default ContentHeader;
