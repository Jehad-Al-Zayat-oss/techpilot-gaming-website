import card1Img from "../assets/image/card1.webp";
import card2Img from "../assets/image/card2.webp";
import card3Img from "../assets/image/card3.webp";
import card4Img from "../assets/image/card4.webp";
import { createHeaderSection } from "../components/headersections";
export function createFeaturedSection() {
  return `
  <div class="features-section " id="products">
    <div class="container">
      ${createHeaderSection(
        "Featured",
        "Gaming Gear",
        '<i class="fa-solid fa-computer-mouse"></i>',
      )}
      <div class="row justify-content-center ">
        <div class="col-10 col-md-4 col-lg-3 mb-4">
          <div class="card rounded-4 py-3">
            <div class="image d-flex align-items-center justify-content-center">
               <img src="${card1Img}" alt="card1" loading="lazy"> 
            </div>
            <div class="info d-flex align-items-center justify-content-center flex-column gap-2 p-2">
              <span class="text-uppercase fw-bold">gaming</span>
              <h3 class="text-uppercase text-white text-center ">
                PRO X WIRELESS
              </h3>
              <p class="text-capitalize text-white mb-4 text-center ">
                Gaming Headset with Blue VO!CE
              </p>
              <button class="btn rounded-5 text-capitalize">read more</button>
            </div>
          </div>
        </div>
        <div class="col-10 col-md-4 col-lg-3 mb-4">
          <div class="card rounded-4 py-3">
            <div class="image d-flex align-items-center justify-content-center">
               <img src="${card2Img}" alt="card2" loading="lazy"> 
            </div>
            <div class="info d-flex align-items-center justify-content-center flex-column gap-2 p-2">
              <span class="text-uppercase fw-bold">OFFICE & OTHERS</span>
              <h3 class="text-uppercase text-white text-center ">STREAMCAM</h3>
              <p class="text-capitalize text-white mb-4 text-center ">
                Premium Webcam for Streaming
              </p>
              <button class="btn rounded-5 text-capitalize">read more</button>
            </div>
          </div>
        </div>
        <div class="col-10 col-md-4 col-lg-3 mb-4">
          <div class="card rounded-4 py-3">
            <div class="image d-flex align-items-center justify-content-center">
               <img src="${card3Img}" alt="card3" loading="lazy"> 
            </div>
            <div class="info d-flex align-items-center justify-content-center flex-column gap-2 p-2">
              <span class="text-uppercase fw-bold">gaming</span>
              <h3 class="text-uppercase text-white text-center ">
                G502 HERO WIRELESS
              </h3>
              <p class="text-capitalize text-white mb-4 text-center ">
                High Performance Mouse
              </p>
              <button class="btn rounded-5 text-capitalize">read more</button>
            </div>
          </div>
        </div>
        <div class="col-10 col-md-4 col-lg-3 mb-4">
          <div class="card rounded-4 py-3">
            <div class="image d-flex align-items-center justify-content-center">
               <img src="${card4Img}" alt="card4" loading="lazy"> 
            </div>
            <div class="info d-flex align-items-center justify-content-center flex-column gap-2 p-2">
              <span class="text-uppercase fw-bold">gaming</span>
              <h3 class="text-uppercase text-white text-center ">G840 XL</h3>
              <p class="text-capitalize text-white mb-4 text-center ">
                Gaming Mouse Pad
              </p>
              <button class="btn rounded-5 text-capitalize">read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
