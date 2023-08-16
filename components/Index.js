/*Home page*/
import { gordita, recoleta } from "../app/fonts/fonts";
import Demo2 from "../public/img/demo2.jpg";
import Demo4 from "../public/img/demo4.jpg";
import Demo5 from "../public/img/demo5.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <div className="page-scroll-element-one dark-bg">

        <div className={gordita.className}>
          <div className="scroll-bar"><span>Scroll</span></div>
        </div>

        {/*SOCIALS*/}

        <div className={gordita.className}>
          <div className="social-elemnet">
            <ul className="style-none d-flex align-items-center">
              <li>Follow us</li>
              <li>-</li>
              <li><a href="#" className="tran3s">Fb.</a></li>
              <li>-</li>
              <li><a href="#" className="tran3s">Tw.</a></li>
              <li>-</li>
              <li><a href="#" className="tran3s">Tg.</a></li>
            </ul>
          </div>
        </div>

        {/*SECTIONS*/}

        <div id="page-scroll-container-one">

          {/*ONE*/}
          <div className="spl-section-one section">

            <div className={gordita.className}>
              <div className="section-no">01.</div>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">

                  <div className={recoleta.className}>
                    <ul className="category-list style-none">
                      <li className="active"><span>Welcome</span></li>
                      <li><span>Projects</span></li>
                      <li><span>Contact</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 ms-auto">
                  <div id="carouselOne">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <Link href={"/welcome"} replace prefetch className="d-block">
                          <Image src={Demo4} alt={""} className={"w-100"} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*TWO*/}
          <div className="spl-section-one section">

            <div className={gordita.className}>
              <div className="section-no">02.</div>
            </div>

            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className={recoleta.className}>
                    <ul className="category-list style-none">
                      <li><span>Welcome</span></li>
                      <li className={"active"}><span>Projects</span></li>
                      <li><span>Contact</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 ms-auto">
                  <div id="carouselTwo">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <Link prefetch replace className="d-block"  href={"/projects"}>
                          <Image src={Demo2} alt={""} className={"w-100"} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*THREE*/}
          <div className="spl-section-one section">

            <div className={gordita.className}>
              <div className="section-no">03.</div>
            </div>

            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">

                  <div className={recoleta.className}>
                    <ul className="category-list style-none font-recoleta">
                      <li><span>Welcome</span></li>
                      <li><span>Projects</span></li>
                      <li className={"active"}><span>Contact</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 ms-auto">
                  <div id="carouselTwo">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <Link replace prefetch className="d-block" href="/contact">
                          <Image src={Demo5} alt={""} className={"w-100"} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


