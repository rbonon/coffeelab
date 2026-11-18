const footer = document.querySelector("[data-build]");
const metadata = new URL("build-info.json", document.currentScript.src);

fetch(metadata)
  .then((response) => response.ok ? response.json() : null)
  .then((build) => {
    if (build) footer.textContent = `Planning docs updated ${build.updated}`;
  })
  .catch(() => {});
