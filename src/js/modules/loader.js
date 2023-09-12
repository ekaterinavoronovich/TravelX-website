function loader() {
  const loader = document.querySelector("#loader");
  window.addEventListener('load', () => {
    // setTimeout(() => {
      loader.classList.add("wrapper-loader__hidden");
    // }, 1000);
  });
}
export default loader;