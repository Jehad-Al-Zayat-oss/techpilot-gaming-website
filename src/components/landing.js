import mouseImg from "../assets/image/pngwing.com (1).webp"
export function createLanding() {
    return `
    
    <div class="landing d-flex align-items-center justify-content-center py-4" id="home">
    <div class="container">
    <div class="row">
    <div class="info col-12 col-lg-6 ">
      <div class="d-flex flex-column justify-content-center align-items-center  align-items-lg-start h-100">
        <h1 class="fw-bold mb-3" >Welcome to TechPilot</h1>
        <p class=" mb-3 text-white text-center text-md-start text-lg-start fw-bold fs-5">Professional Gaming Gear for Champions</p>
        <p class="text-white-50 text-center text-lg-start ">
          To provide gamers with cutting-edge gear that enhances their gaming
          experience and helps them achieve peak performance.
        </p>
        <button class="btn fw-bold rounded-5 d-flex justify-content-center align-items-center gap-2 mb-3"><i class="fa-solid fa-gamepad"></i>Explore Products</button>
        <div class="feature d-flex align-items-center gap-2 justify-content-center justify-content-lg-start justify-content-md-start ">
        <p class="py-2 px-3 rounded-5 d-flex justify-content-center align-items-center gap-2"><i class="fa-solid fa-trophy"></i>Pro Choice</p>
        <p class="py-2 px-3 rounded-5 d-flex justify-content-center align-items-center gap-2"><i class="fa-solid fa-bolt"></i>Premium Quality</p>
        </div>
      </div>
    </div>
    <div class="hero col-12 col-lg-6  d-flex justify-content-center align-items-start align-items-md-center  align-items-lg-center ">
    <img  src="${mouseImg}" class="img-fluid " alt="mouse" fetchpriority="high" >
    </div>
    </div>
  </div>
   </div>
  `;
}
