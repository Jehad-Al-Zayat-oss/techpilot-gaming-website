import logoIcon from "../assets/favicon.svg";
export function createNavbar() {
  return `
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-2 sticky-top" >
  
  <div class="container ">
    <a class="navbar-brand logo d-flex justify-content-center align-items-center fw-bold gap-1 text-white" href="#">
    <img src="${logoIcon}" style="max-width:30px;" alt="logo" > 
    Tech<span>Pilot</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars-staggered"></i>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex gap-3 pt-2">
        <a class="nav-link active text-white fw-bold px-2 " aria-current="page" href="#home">Home</a>
        <a class="nav-link text-white fw-bold px-2 " href="#about">About</a>
        <a class="nav-link text-white fw-bold px-2 " href="#products">Products</a>
        <a class="nav-link text-white fw-bold px-2 " href="#services">Services</a>
        <a class="nav-link text-white fw-bold px-2 " href="#faqts">Facts</a>
        <a class="nav-link text-white fw-bold px-2 " href="#contacts">Contacts</a>
        <a class="phone nav-link text-black btn rounded-5 fw-bold" href="#"><i class="fa-solid fa-phone"></i> Call Now</a>
      </div>
  </div>
  </div>
</nav>
    `;
}
