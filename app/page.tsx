"use client"
import Cart from "@/components/Cart";
import CountModal from "@/components/CountModal";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { Provider } from "@/context/Context";
import React from "react";

export default function Home() {
  return (
    <Provider>
      <div className="min-h-screen font-sans">
        <Header />
        <div className="pt-16">
          <Menu />
        </div>
      </div>
      <CountModal />
      <Cart />
    </Provider>
  );
}
