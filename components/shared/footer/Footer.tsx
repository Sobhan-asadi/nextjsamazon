import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="w-full">
        <Button
          variant={"ghost"}
          className="w-full rounded-none bg-gray-800 *:text-gray-300"
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          <samp className="">Back to top</samp>
        </Button>
      </div>

      <div className="bg-black p-4 *:text-gray-300">
        <div className="flex justify-center gap-3 text-sm">
          <Link href={"/page/conditions-of-use"}>Conditions of Use</Link>
          <Link href={"/page/privacy-policy"}>Privacy Policy</Link>
          <Link href={"/page/help"}>Help</Link>
        </div>

        <div className="flex justify-center text-sm text-gray-300">
          <p>© 2024 Amazon Clone. All rights reserved.</p>
        </div>

        <div className="mt-8 flex justify-center text-sm text-gray-300">
          +989362572474 |
          <a
            href="https://github.com/Sobhan-asadi/nextjsamazon"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </footer>
  );
}
