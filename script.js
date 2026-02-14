const loading = document.querySelector("#loading")
window.addEventListener("load", () => {
    loading.classList.add("loaded")
})
const h1 = document.querySelector("h1")
if (window.matchMedia && window.matchMedia('(min-device-width: 800px)').matches) {
    h1.textContent = "Miyabi Kakeru"
}
