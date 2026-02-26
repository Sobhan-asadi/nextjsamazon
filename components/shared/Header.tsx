import { App_NAME } from "@/lib/constants";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

import data from "@/lib/data";
import Menu from "./header/menu";
import Search from "./header/search";

export default async function Header() {
  return (
    <header className="bg-black text-white">
      <div className="px-2">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <Link
              href="/"
              className="header-button m-1 flex items-center font-extrabold md:text-2xl"
            >
              <Image
                src={"/icons/logo.svg"}
                width={40}
                height={40}
                alt={`logo`}
              />
              {App_NAME}
            </Link>
          </div>

          <div className="hidden max-w-xl flex-1 md:block">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="block py-2 md:hidden">
          <Search />
        </div>
      </div>

      <div className="mb-px flex h-12 items-center bg-gray-800 px-3">
        <Button
          variant="ghost"
          className="header-button flex h-full items-center gap-1 px-3 text-base hover:bg-gray-600 [&_svg]:size-5"
        >
          <MenuIcon />
          <span>All</span>
        </Button>
        <div className="flex h-full flex-wrap items-center gap-3 overflow-hidden">
          {data.headerMenus.map((menu) => (
            <Link
              className="header-button flex h-full items-center px-3"
              href={menu.href}
              key={menu.href}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
