import { gordita, recoleta } from "@/app/fonts/fonts";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      <div className="main-page-wrapper">
        <div className="pricing-section-one dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-xxl-9 col-xl-10 col-lg-8 col-md-10 m-auto">
                <div className="title-style-one white-vr text-center">
                  <div className={recoleta.className}>
                    <h2 className="title">Solo, corporate or team? I’ve got you <span>covered</span></h2>
                  </div>
                </div>
              </div>
            </div>
            <ul className="nav nav-tabs justify-content-center pricing-nav-one" role="tablist">
              <li className="nav-item" role="presentation">
                <div className={gordita.className}>
                  <span className="nav-link active" role="tab">Project</span>
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div className={gordita.className}>
                  <span className="nav-link" role="tab">Quotes</span>
                </div>
              </li>
            </ul>
            <div className="pricing-table-area-one">
              <div className={gordita.className}>

                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="pr-table-wrapper">
                          <div className="pack-name">Static</div>
                          <div className="pack-details">For hobbyists & MSMEs</div>
                          <div className="top-banner d-md-flex">
                            <div className="price"><sup>$</sup>57</div>
                            <div>
                              <span>Paid once, 15$</span>
                              <em> static Mon maintenance</em>
                            </div>
                          </div>
                          <ul className="pr-feature">
                            <><b>Features</b></>
                            <hr />
                            <li>Basic functions</li>
                            <li>Basic web design</li>
                            <li>Source code license</li>
                            <li>No CMS + Database</li>
                            <hr />
                            <><b>Tech stack & hosting</b></>
                            <hr />
                            <li>ReactJS</li>
                            <li>5 web pages Max</li>
                            <li>Digital ocean Droplets</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="pr-table-wrapper active most-popular">
                          <div className="pack-name">Dynamic</div>
                          <div className="pack-details">For Freelancers & SMEs</div>
                          <div className="top-banner d-md-flex">
                            <div className="price">
                              <sup>$</sup>104</div>
                            <div>
                              <span>Starts at 104<sup>$</sup> </span>
                              <em>fluid mon maintenance</em>
                            </div>
                          </div>
                          <ul className="pr-feature">
                            <><b>Features</b></>
                            <hr />
                            <li>Advanced Functions</li>
                            <li>Advanced styling</li>
                            <li>Source code license</li>
                            <li>CMS + Database </li>
                            <hr />
                            <><b>Tech stack & hosting</b></>
                            <hr />
                            <li>NextJS</li>
                            <li>Dynamic no. of pages</li>
                            <li>Vercel Hosting platform </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="pr-table-wrapper">
                          <div className="pack-name">Fullstack</div>
                          <div className="pack-details">Corporates & Enterprises</div>
                          <div className="top-banner d-md-flex">
                            <div className="price"><sup>$</sup>347</div>
                            <div>
                              <span>Starts at <sup>$</sup> 347 </span>
                              <em>scalable maintenance</em>
                            </div>
                          </div>
                          <hr/>
                          <Link href="/contact" className="trial-button">Request a Quote</Link>
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
    </>
  );
}