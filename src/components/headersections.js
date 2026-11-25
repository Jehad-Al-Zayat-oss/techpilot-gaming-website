export function createHeaderSection(fTitle = "", lTitle = "", icon = "") {
  return `
  <div class="header-section w-100 text-center d-flex justify-content-center align-items-center flex-column gap-2 pt-5 mb-4">
    <h2>
      <span class="f-title text-capitalize text-white">${fTitle}</span>
      <span class="l-title text-capitalize ">${lTitle}</span>
    </h2>
    <span class="icon">${icon}</span>
  </div>
  `;
}
