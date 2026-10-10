"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaDumbbell, FaEnvelope, FaHouse, FaImages } from "react-icons/fa6";

const tabs = [
  { id: "home", label: "Home", href: "/", icon: FaHouse },
  { id: "programs", label: "Programs", href: "/training-programs", icon: FaDumbbell },
  { id: "gallery", label: "Gallery", href: "/#gallery", icon: FaImages },
  { id: "contact", label: "Contact", href: "/#contact", icon: FaEnvelope },
];

export function MobileTabBar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname === "/training-programs" ? "programs" : "home");

  useEffect(() => {
    const updateActiveTab = () => {
      if (pathname === "/training-programs") {
        setActiveTab("programs");
        return;
      }

      const section = window.location.hash.slice(1);
      setActiveTab(section === "gallery" || section === "contact" ? section : "home");
    };

    updateActiveTab();
    window.addEventListener("hashchange", updateActiveTab);

    return () => window.removeEventListener("hashchange", updateActiveTab);
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 flex justify-center md:hidden">
      <nav
        aria-label="Mobile navigation"
        className="pointer-events-auto grid w-[calc(100%-2rem)] max-w-[390px] grid-cols-4 gap-1 rounded-[24px] border border-white/20 bg-[#111]/90 p-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[#111]/70"
      >
        {tabs.map(({ id, label, href, icon: Icon }) => {
          const isActive = activeTab === id;

          return (
            <Link
              key={id}
              href={href}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setActiveTab(id)}
              className={`flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-[18px] px-1 text-[10px] font-bold transition-[background-color,color,transform] duration-150 active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3339] ${
                isActive
                  ? "bg-white/14 text-[#ff3339] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
                  : "text-white/65 hover:bg-white/8 hover:text-white"
              }`}
            >
              <Icon aria-hidden="true" className="h-[19px] w-[19px]" />
              <span className="truncate leading-none">{label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
