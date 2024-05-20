"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuBar() {
  const pathname = usePathname();
  return (
    <div className="bg-[#092C59] h-screen text-white *:w-full">
      <div className="h-16 flex items-center justify-center gap-2 px-3">
        <div className="size-10 bg-gray-100 rounded-full"></div>
        <div className="text-lg">clossValue</div>
      </div>
      <div className="py-4 flex flex-col gap-1">
        {[
          { name: "注文一覧", pathname: "/rental/orderlist" },
          { name: "備品管理", pathname: "/rental/item" },
          { name: "ホテル管理", pathname: "/rental/hotel" },
        ].map((menu, index) => (
          <Link key={index} href={menu.pathname}>
            <div className="flex items-center h-10 hover:bg-[#071F3C]">
              <div
                className={`w-1 h-full ${
                  pathname === menu.pathname ? "bg-[#7FB7D1]" : ""
                }`}
              ></div>
              <div className="px-6 text-sm">{menu.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
