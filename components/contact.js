import { gordita, recoleta } from "@/app/fonts/fonts";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  return (

    <>

      <div className="main-page-wrapper dark-bg">

        <div className="inside-hero-one dark-bg hero-spacing">
          <div className="container">
            <div className={recoleta.className}>
              <h2 className="page-title">Get in Touch</h2>
            </div>

            <div className={gordita.className}>
              <p>Get our all info and also can message us directly from here</p>
            </div>
          </div>
        </div>

        <div className="contact-section-four mt-120 lg-mt-100">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="address-block-one text-center mb-40">
                  <div className="icon d-flex align-items-center justify-content-center m-auto">
                    <LocationOnIcon sx={{ fontSize: 40 }} />
                  </div>
                  <div className={recoleta.className}>
                    <h5 className="title">My Address</h5>
                  </div>
                  <div className={gordita.className}>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="address-block-one text-center mb-40">
                  <div className="icon d-flex align-items-center justify-content-center m-auto">
                    <EmailIcon sx={{ fontsize: 40 }} />
                  </div>
                  <div className={recoleta.className}>
                    <h5 className="title">Email Info</h5>
                  </div>
                  <div className={gordita.className}>
                    <p>Mail me <span>
                      <a href="mailto:muiruri.samwel@outlook.com" className="call"> Mail</a>
                    </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="address-block-one text-center mb-40">
                  <div className="icon d-flex align-items-center justify-content-center m-auto">
                    <PhoneIcon sx={{ fontsize: 40 }} />
                  </div>
                  <div className={recoleta.className}>
                    <h5 className="title">Call me</h5>
                  </div>
                  <div className={gordita.className}>
                    <p>Reach me at 
                      <span>
                      <a href="tel:0768989025" className="call"> Tell</a>
                    </span>

                    </p>
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
