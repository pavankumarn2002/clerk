import Link from "next/link";
import React from "react";
import { UserButton,useAuth } from "@clerk/nextjs";
export default function () {
    return (
        <div>
            <ul className="flex justify-between m-10 items-center">
                <div>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                </div>
                <div className="flex gap-10">
                    <Link href="/sign-in">
                        <li>Login</li>
                    </Link>
                    <Link href="/sign-up">
                        <li>Signup</li>
                    </Link>
                    <Link href="/profile">
                        <li>Profile</li>
                    </Link>
                    <UserButton afterSwitchSessionUrl="/"/>
                </div>
            </ul>
        </div>
    );
}
