import { ShoppingBagIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex w-full gap-3">
        <Link href={"/signin"} className="flex flex-col items-center gap-1">
          <UserIcon className="h-7 w-7" />
          <span className="text-sm font-bold">Sign in</span>
        </Link>

        <Link href={"/cart"} className="flex flex-col items-center gap-1">
          <ShoppingBagIcon className="h-7 w-7" />
          <span className="text-sm font-bold">Cart</span>
        </Link>
      </nav>
    </div>
  );
}
