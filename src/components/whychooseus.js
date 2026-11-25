import { createHeaderSection } from "./headersections";
export function createWhyChooseUsSection() {
    return `
  <div class="why-choose-us p-4" id="services">
    <div class="container">
      ${createHeaderSection("We Provide High-Tech", "Products!", '<i class="fa-solid fa-shield-halved"></i>')}
      <div class="row ">
        <div class="col-12 col-md-3 col-lg-3 mb-2">
          <div class="box  rounded-4 p-4 d-flex flex-column align-items-center align-items-md-baseline align-items-lg-baseline justify-content-center gap-3">
            <i class="fa-solid fa-shield-halved rounded-circle d-flex justify-content-center align-items-center"></i>
            <h3 class="text-white text-capitalize ">
              Lifetime Guarantee
            </h3>
            <p class="lh-lg text-white">
              We stand behind our products with comprehensive warranty coverage.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-3 col-lg-3 mb-2">
          <div class="box  rounded-4 p-4 d-flex flex-column align-items-center align-items-md-baseline align-items-lg-baseline justify-content-center gap-3">
            <i class="fa-solid fa-tags rounded-circle d-flex justify-content-center align-items-center"></i>
            <h3 class="text-white text-capitalize ">Good Price</h3>
            <p class="lh-lg text-white">
              Competitive pricing without compromising on quality.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-3 col-lg-3 mb-2">
          <div class="box  rounded-4 p-4 d-flex flex-column align-items-center align-items-md-baseline align-items-lg-baseline justify-content-center gap-3">
            <i class="fa-solid fa-download rounded-circle d-flex justify-content-center align-items-center"></i>
            <h3 class="text-white text-capitalize ">Free Updates</h3>
            <p class="lh-lg text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              asperiores
            </p>
          </div>
        </div>
        <div class="col-12 col-md-3 col-lg-3 mb-2">
          <div class="box  rounded-4 p-4 d-flex flex-column align-items-center align-items-md-baseline align-items-lg-baseline justify-content-center gap-3">
            <i class="fa-solid fa-headset rounded-circle d-flex justify-content-center align-items-center"></i>
            <h3 class="text-white text-capitalize ">24/7 Support</h3>
            <p class="lh-lg text-white">
              Round-the-clock customer support for all your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
