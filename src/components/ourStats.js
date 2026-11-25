import { createHeaderSection } from "./headersections";
export function createOurStats() {
    return `
        <div class="our-stats py-5" id="faqts">
            <div class="container">
                ${createHeaderSection("our", "stats", '<i class="fa-solid fa-chart-column"></i>')}
                <div class="row py-4">
                    <div class="col-md-3 col-lg-3">
                        <div class="box d-flex align-items-center justify-content-center flex-column gap-2 rounded-4 p-4 mb-2">
                            <i class="fa-solid fa-diagram-project fs-2"></i>
                            <span class="counter fw-bold fs-4" data-counter="300">0</span>
                            <p class="text-uppercase text-white">projects</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div class="box d-flex align-items-center justify-content-center flex-column gap-2 rounded-4 p-4 mb-2">
                            <i class="fa-solid fa-star fs-2"></i>
                            <span class="counter fw-bold fs-4" data-counter="8.9">0</span>
                            <p class="text-uppercase text-white">RATING</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div class="box d-flex align-items-center justify-content-center flex-column gap-2 rounded-4 p-4 mb-2">
                            <i class="fa-solid fa-users-line fs-2"></i>
                            <span class="counter fw-bold fs-4" data-counter="3000">0</span>
                            <p class="text-uppercase text-white">CUSTOMERS</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div class="box d-flex align-items-center justify-content-center flex-column gap-2 rounded-4 p-4 mb-2">
                            <i class="fa-solid fa-user-astronaut fs-2"></i>
                            <span class="counter fw-bold fs-4 "data-counter="23">0</span>
                            <p class="text-uppercase text-white">TEAM MEMBERS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}