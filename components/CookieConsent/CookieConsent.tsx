"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [preferences, setPreferences] = useState({
        preferences: false,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = Cookies.get("cookieConsent");
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 5000); // ⏱️ show after 5s
            return () => clearTimeout(timer);
        }
    }, []);

    const handleToggle = (key: keyof typeof preferences) => {
        setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleAccept = () => {
        Cookies.set("cookieConsent", JSON.stringify(preferences), { expires: 365 });
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div
                className="
          fixed bottom-0 left-0 w-full
          lg:bottom-4 lg:right-4 lg:left-auto lg:w-[380px]
          border border-gray-200 shadow-xl
          rounded-none lg:rounded-lg p-5 z-[60] animate-fadeIn
          bg-white
          sm:bg-white/80 sm:backdrop-blur-md text-center
        "
            >
                <h4 className="text-sm font-bold text-gray-900 ">
                    Accept Cookies & Privacy Policy
                </h4>
                <p className="text-xs text-gray-700 mt-1">
                    Our website uses cookies to ensure you get the best browsing
                    experience.{" "}
                    <Link
                        href="/privacy-policy"
                        target="_blank"
                        className="text-blue-600 hover:underline text-xs"
                    >
                        More information
                    </Link>
                </p>

                {/* Optional: Advanced options hidden by default */}
                <div className="hidden mt-4">
                    <h5 className="font-semibold text-gray-800 text-sm mb-2">
                        Select which cookies you want to accept
                    </h5>
                    <ul className="space-y-2 text-xs">
                        <li className="flex items-center space-x-2">
                            <input type="checkbox" checked disabled className="rounded" />
                            <label className="text-gray-700">Essential</label>
                        </li>
                        <li className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={preferences.preferences}
                                onChange={() => handleToggle("preferences")}
                                className="rounded text-blue-600"
                            />
                            <label className="text-gray-700">Site Preferences</label>
                        </li>
                        <li className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={preferences.analytics}
                                onChange={() => handleToggle("analytics")}
                                className="rounded text-blue-600"
                            />
                            <label className="text-gray-700">Analytics</label>
                        </li>
                        <li className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={preferences.marketing}
                                onChange={() => handleToggle("marketing")}
                                className="rounded text-blue-600"
                            />
                            <label className="text-gray-700">Marketing</label>
                        </li>
                    </ul>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-3">
                    <Button
                        size="sm"
                        onClick={handleAccept}
                        className="w-fit flex-1 text-xs bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Accept <span className="">Cookies</span>
                    </Button>
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setIsVisible(false)}
                        className="w-fit flex-1 text-xs"
                    >
                        Dismiss
                    </Button>
                </div>
            </div>
        )
    );
}
