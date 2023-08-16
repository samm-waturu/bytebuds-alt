

import { gordita, recoleta } from "@/app/fonts/fonts";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <div className="main-page-wrapper dark-bg">
        <div className="case-details-one dark-bg border-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 m-auto">
                <div className={gordita.className}>
                  <h6 className="sub-heading">Hello</h6>
                </div>
                <div className={recoleta.className}>
                  <h3 className="title">Salutations</h3>
                </div>
                <div className={gordita.className }>
                  <div className="border-top"></div>
                  <p>
                    Hello! Welcome to ByteBuds. I am  <b>サム</b>, a freelancer under ByteBuds.
                    Capable of crafting ...from static | dynamic to well optimized fullstack web apps,
                    using technologies proven capable of delivering the best results.
                  </p>
                  <p>
                    My preferred stack of Frontend web technologies include: Vanilla javascript, Typescript,  ReactJS, NextJS,
                    stylized components Tailwind CSS and Bootstrap.
                    Preferred Backend web technologies include : NodeJS + MongoDB, Sanity CMS, FireBase, Medusa, Wordpress and Clerk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}