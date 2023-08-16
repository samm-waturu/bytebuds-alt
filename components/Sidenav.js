"use client";
import { gordita } from "@/app/fonts/fonts";
import Image from "next/image";
import Logo from "../public/img/logo.png";
import CloseIcon from '@mui/icons-material/Close';


export default function SideNav() {
  return (
    <div className={gordita.className}>
      <div className="offcanvas offcanvas-end sidebar-nav dark-style" id="offcanvasRight">
        <div className="offcanvas-header">
          <div className="logo">
            <a href="/">
              {/*<Image src={Logo} alt={"Logo"} width={65} height={65} />*/}
            </a>
          </div>
          <button type="button" className="close-btn tran3s" data-bs-dismiss="offcanvas" aria-label="Close">
            <i
              className="bi bi-x-lg">

              <CloseIcon />

            </i>
          </button>

        </div>
        <div className="address-block">
          <h4 className="title">Our Address</h4>
          <p>Country .... <br />road road</p>
          <p>Urgent issue? call us at <br /><a href="tel:310.841.5500">310.841.5500</a></p>
        </div>
        <ul className="d-flex social-icon style-none mt-20">
          <li><a href="/">
            <i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
  );
}