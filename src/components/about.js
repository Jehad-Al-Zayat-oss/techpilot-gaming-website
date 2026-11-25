import aboutImg from "../assets/image/about (2).webp";
import { createHeaderSection } from "../components/headersections";
export function createAboutSection() {
  return `
  <div class="w-100 about" id="about">
    <div class="container ">
      ${createHeaderSection(
        "About",
        "TechPilot",
        '<i class="fa-solid fa-gamepad"></i>',
      )}
      <div class="row">
        <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center flex-column mb-5">
          <img class="about-img img-fluid" src='${aboutImg}' alt="about" loading="lazy">
        </div>
        <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center flex-column">
          <div class="info rounded-4 p-4 mb-5 d-flex flex-column align-items-center align-items-md-baseline align-items-lg-baseline">
            <i class="fa-solid fa-rocket d-flex align-items-center justify-content-center mb-3"></i>
            <h3 class="text-capitalize text-white mb-2">our mission</h3>
            <p class="text-white text-center text-md-start text-lg-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              voluptate rerum. Quis ad iste illum similique, incidunt quisquam
              provident molestiae vero molestias! In aperiam sed mollitia nemo
              tempore. Nobis, esse!
            </p>
          </div>
          <div class="features row gap-1 p-2 p-lg-0 p-md-0">
            <p class="text-white d-flex align-items-center gap-2  col-12 col-md-5 col-lg-5 rounded-5 p-2">
              <i class="fa-regular fa-circle-check"></i> Premium Quality
              Products
            </p>
            <p class="text-white d-flex align-items-center gap-2  col-12 col-md-5 col-lg-5 rounded-5 p-2">
              <i class="fa-regular fa-circle-check"></i> 24/7 Customer Support
            </p>
            <p class="text-white d-flex align-items-center gap-2  col-12 col-md-5 col-lg-5 rounded-5 p-2">
              <i class="fa-regular fa-circle-check"></i> Fast Worldwide Shipping
            </p>
            <p class="text-white d-flex align-items-center gap-2  col-12 col-md-5 col-lg-5 rounded-5 p-2">
              <i class="fa-regular fa-circle-check"></i> 2-Year Warranty
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>;
  `;
}
