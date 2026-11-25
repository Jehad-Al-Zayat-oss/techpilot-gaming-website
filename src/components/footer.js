export function createFooter() {
  return `
        <footer class="p-4" id="contacts">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-4 location mb-4">
        <h3 class="text-white mb-3 text-capitalize">our location</h3>
        <p class="text-white mb-3">
          Lorem ipsum adipiscing elit. Duis dignissim erat pharetra ....
        </p>
        <ul class="mb-3">
          <li class="d-flex align-items-center gap-2 text-white">
            <i class="fa-solid fa-house-chimney"></i>
            <span>No. 96, South City, London</span>
          </li>
          <li class="d-flex align-items-center gap-2 text-white">
            <i class="fa-solid fa-phone-volume"></i>
            <span>+1 222 3333</span>
          </li>
          <li class="d-flex align-items-center gap-2 text-white">
            <i class="fa-solid fa-envelope"></i>
            <span>info@example.com</span>
          </li>
        </ul>
      </div>
      <div class="col-md-6 col-lg-4 links mb-4">
        <h3 class="text-white mb-3 text-capitalize">more links</h3>
        <ul class="d-flex flex-column gap-2">
          <li>
            <a
              href="#home"
              class="d-flex align-items-center gap-2 text-capitalize text-white link"
            >
              <i class="fa-solid fa-angle-right"></i>
              <span>home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              class="d-flex align-items-center gap-2 text-capitalize text-white link"
            >
              <i class="fa-solid fa-angle-right"></i>
              <span>about</span>
            </a>
          </li>
          <li>
            <a
              href="#products"
              class="d-flex align-items-center gap-2 text-capitalize text-white link"
            >
              <i class="fa-solid fa-angle-right"></i>
              <span>products</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              class="d-flex align-items-center gap-2 text-capitalize text-white link"
            >
              <i class="fa-solid fa-angle-right"></i>
              <span>services</span>
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              class="d-flex align-items-center gap-2 text-capitalize text-white link"
            >
              <i class="fa-solid fa-angle-right"></i>
              <span>contacts</span>
            </a>
          </li>
        </ul>
      </div>
      <form class="col-md-6 col-lg-4 newsletter mb-4">
        <h3 class="text-white mb-3 text-capitalize">newsletter</h3>
        <div
          class="mb-3 input-group rounded-5 w-100 p-0 d-flex justify-content-between"
        >
          <input type="email" class="px-4" placeholder="email" />
          <input type="submit" value="subscribe" class="text-capitalize" />
        </div>
        <h3 class="text-white mb-3 text-capitalize">Stay Connected</h3>
        <div class="icon d-flex align-items-center gap-2">
          <a aria-label="tiktok"
            href="#tiktok"
            class="d-flex align-items-center justify-content-center rounded-circle text-white"
          >
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a aria-label="twitter"
            href="#twitter"
            class="d-flex align-items-center justify-content-center rounded-circle text-white"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a aria-label="facebook"
            href="#facebook"
            class="d-flex align-items-center justify-content-center rounded-circle text-white"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a aria-label="instagram"
            href="#instagram"
            class="d-flex align-items-center justify-content-center rounded-circle text-white"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </form>
    </div>
  </div>
</footer>
<div
  class="d-flex justify-content-center align-items-center w-100 text-white copyright p-2 text-center"
>
  Copyright &copy CODE4EDUCATION. All Rights Reserved
</div>

    `;
}
