"use client";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="m-auto text-4xl max-w-xl flex flex-col justify-center items-center mt-12">
      404, Page Not Found
      <Link href="./" className="p-6 hover:text-green2">
        Home
      </Link>
    </div>
  );
}
