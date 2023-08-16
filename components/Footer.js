import Link from "next/link";
import Image from "next/image";
import Logo from "../public/img/logo.png";
import { ArrowCircleLeftTwoTone, ArrowCircleRightTwoTone } from "@mui/icons-material";


export default function Footer({ page1, page2 }) {
  const pages = [`welcome`, `projects`, `pricing`, `contact`, `null`];
  return (
    <>
      <div className="vcamp-footer-four dark-bg">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-xxl-10 m-auto">
                <ul
                  className="style-none footer-nav d-flex flex-wrap justify-content-center align-items-center md-mt-60">
                  <li style={{ color: "#e7e7e7" }}>
                    <Link href={`/${page1}`}>
                      {/*i had issues with using || (or) operator */}
                      {page1 === pages[0] && (<ArrowCircleLeftTwoTone sx={{ fontSize: 40 }} />)}
                      {page1 === pages[1] && (<ArrowCircleLeftTwoTone sx={{ fontSize: 40 }} />)}
                      {page1 === pages[2] && (<ArrowCircleLeftTwoTone sx={{ fontSize: 40 }} />)}
                    </Link>
                  </li>
                  <li className="logo text-center">
                    <a href="/">
                      <Image alt={"Logo"} src={Logo} width={65} height={65}
                             style={{ animation: "rotate 5s linear infinite" }} />
                    </a>
                  </li>
                  <li style={{ color: "#e7e7e7" }}>
                    <Link href={`/${page2}`}>
                      {page2 === pages[0] && (<ArrowCircleRightTwoTone sx={{ fontSize: 40 }} />)}
                      {page2 === pages[1] && (<ArrowCircleRightTwoTone sx={{ fontSize: 40 }} />)}
                      {page2 === pages[2] && (<ArrowCircleRightTwoTone sx={{ fontSize: 40 }} />)}
                      {page2 === pages[3] && (<ArrowCircleRightTwoTone sx={{ fontSize: 40 }} />)}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}