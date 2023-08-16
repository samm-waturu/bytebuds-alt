import { gordita, recoleta } from "@/app/fonts/fonts";
import Footer from "../components/Footer";
import { CallRounded } from "@mui/icons-material";

export default function Projects() {
  return (
    <>
      <div className="main-page-wrapper dark-bg">
        <div className="inside-hero-three dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={recoleta.className}>
                  <h2 className="page-title">Preview live<span> Projects</span></h2>
                </div>
              </div>
              <div className="col-xl-5 col-md-6 ms-auto">
                <p className={gordita.className}>Grouped in simple categories. <br /> Each category contains two
                  different use cases. Click on the
                  link to preview the use case </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="case-details-one dark-bg border-top">
        <div className="container">
          <div className={recoleta.className}>
            <h3 className="title text-center">Projects</h3>
          </div>
          <br />
          <div className="row text-center">

            <div className="col-xl-3 ms-auto">

              <h3 style={{ color: "#FF2759FF" }} className={recoleta.className}>Corporate: </h3>

              <p className={gordita.className}>

                <a target="_blank" rel="noopener" href="https://themesflat.co/html/suprimo/index.html"> Legal
                  agency </a>

                <br />

                <a target="_blank" rel="noopener" href="https://iori-nextjs-v1.vercel.app/"> Consulting business </a>

              </p>

            </div>
            <div className="col-xl-3 ms-auto">

              <h3 style={{ color: "#FF2759FF" }} className={recoleta.className}>Retail: </h3>

              <p className={gordita.className}>

                <a target="_blank" rel="noopener" href="https://ciseco-nextjs.vercel.app/"> clothe store </a>

                <br />

                <a target="_blank" rel="noopener" href="https://helendo.jamstacktemplates.dev/"> furniture store </a>

              </p>

            </div>
            <div className="col-xl-3 ms-auto">

              <h3 style={{ color: "#FF2759FF" }} className={recoleta.className}>Non profit: </h3>


              <p className={gordita.className}>

                <a target="_blank" rel="noopener" href="https://webtend.site/html/thefude/index.html"> Charity </a>

                <br />

                <a target="_blank" rel="noopener" href="https://webdevcode.com/html/towngov1/index.html"> City
                  goverment </a>

              </p>

            </div>
            <div className="col-xl-3 ms-auto">

              <h3 style={{ color: "#FF2759FF" }} className={recoleta.className}>Creative:</h3>

              <p className={gordita.className}>

                <a target="_blank" rel="noopener" href="https://bytebuds-demo-4.netlify.app"> Agency </a>

                <br />

                <a target="_blank" rel="noopener" href="https://bytebuds-demo-6.netlify.app/"> Photography </a>

              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="fancy-banner-nine dark-bg pb-80 lg-pb-50 ">
        <div className="container">
          <div className="inner-content position-relative">
            {/*<img src="images/shape/shape_63.svg" alt="" className="shapes shape-one" />*/}
            <div className="row">
              <div className="col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-xl-8 col-lg-7 col-md-9">
                    <div className={recoleta.className}>
                      <h2 className="title text-center text-md-start"
                          style={{ color: "#E6E6E6FF", fontWeight: "light" }}>Any <span> project</span> in mind? Let’s
                        chat.</h2>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-3 d-flex justify-content-md-end justify-content-center">
                    <a href="#" className="arrow-btn ripple-btn tran3s sm-mt-30"> <CallRounded /></a>
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