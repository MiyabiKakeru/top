const loading = document.querySelector("#loading")
window.addEventListener("load", () => {
    loading.classList.add("loaded")
})
const pc = document.querySelector(".pc")
if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
    pc.remove()
}
