import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex w-full gap-3">
        <Link href={"/signin"} className="header-button flex items-center">
          Hello, Sign in
        </Link>

        <Link href={"/cart"} className="header-button">
          <div className="flex items-end">
            <ShoppingCartIcon className="h-7 w-7" />
            <span className="font-bold">Cart</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}
