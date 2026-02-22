const loading = document.querySelector("#loading")
window.addEventListener("load", () => {
    loading.classList.add("loaded")
})
const h1 = document.querySelector("#title")
if (window.matchMedia && window.matchMedia('(min-device-width: 800px)').matches) {
    h1.textContent = "Miyabi Kakeru"
}
