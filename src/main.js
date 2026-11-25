import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "./style.css";
import "../src/css/navbar.css";
import "../src/css/landing.css";
import "../src/css/headersections.css";
import "../src/css/about.css";
import "../src/css/featured.css";
import "../src/css/ProductsCarousel.css";
import "../src/css/whychooseus.css";
import "../src/css/ourStats.css";
import "../src/css/footer.css";

import { createNavbar } from "./components/navbar";
import { createLanding } from "./components/landing";
import { createAboutSection } from "./components/about";
import { createFeaturedSection } from "./components/featured";
import { createProductsCarouselSection } from "./components/ProductsCarousel";
import { createWhyChooseUsSection } from "./components/whychooseus";
import { createOurStats } from "./components/ourStats";
import { createFooter } from "./components/footer";
import { setupOurStatsSection } from "./components/setupAboutEffects";
import { scrollEffects } from "./components/scrollEffects";
import { linksActiveEffects } from "./components/linksActiveEffects";

document.querySelector("#app").innerHTML = `
${createNavbar()}
${createLanding()}
${createAboutSection()}
${createFeaturedSection()}
${createProductsCarouselSection()}
${createWhyChooseUsSection()}
${createOurStats()}
${createFooter()}

`;

setupOurStatsSection();
scrollEffects();
linksActiveEffects();
