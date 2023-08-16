"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../public/img/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { recoleta } from "@/app/fonts/fonts";
export default function Header() {
  return (
    <>
      <header className="theme-main-menu theme-menu-one dark-bg">
        <div className="inner-content">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link href="/" >
                <Image alt={"Logo"} src={Logo} width={65} height={65}
                       style={{animation: "rotate 8s linear infinite"}}
                />
              </Link>
            </div>
          {/*

          <div className="right-widget d-flex align-items-center">
              <button className="sidebar-nav-button"
                      type="button" data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight">
                <div style={{color: '#fff'}}>
                  <MenuIcon />
                </div>
              </button>
            </div>

          */}
          </div>
        </div>
      </header>
    </>
  );
}