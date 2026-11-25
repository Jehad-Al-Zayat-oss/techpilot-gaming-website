import product1 from "../assets/image/product.webp";
export function createProductsCarouselSection() {
  return `
  <div class="product-carousel px-2 py-4">
    <div class="container ">
      <div class="box row p-4 rounded-4 ">
        <div class="col-12 col-md-8 col-lg-8 d-flex flex-column  justify-content-center gap-2">
          <h2 class="text-white ">Ultimate Gaming Bundle</h2>
          <h2 class="fw-bold discount">Save 30%</h2>
          <p class="text-white-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            libero, doloribus nulla dicta tempora ab delectusdolorem .....
          </p>
          <button class="btn rounded-5 ">shop now</button>
        </div>
        <div class="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center justify-content-center gap-2">
          <img src="${product1}" class="img-fluid" alt="product" loading="lazy">
        </div>
      </div>
    </div>
  </div>
  `;
}
