import React, { JSX } from "react";

export default function Layout({ children }: { children: JSX.Element }) {
  return <div className="w-full md:w-[500px] mx-auto px-3 py-5">{children}</div>;
}
