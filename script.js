const galleryImages = document.querySelectorAll(".gallery img")
const modal = document.getElementById("modal")
const modalImg = document.getElementById("modal-img")
const closeBtn = document.getElementById("close")
const left = document.getElementById("pre")
const right = document.getElementById("next")

let currenrIndex = 0

function showModal(index) {
  modal.style.display = "flex"
  modalImg.src = galleryImages[index].src
  currenrIndex = index
}



galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    showModal(index)
  })
})

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})

left.addEventListener("click", (e) => {
  e.stopPropagation()
  currenrIndex = (currenrIndex - 1 + galleryImages.length) % galleryImages.length
  showModal(currenrIndex)
})

right.addEventListener("click", (e) => {
  e.stopPropagation()
  currenrIndex = (currenrIndex + 1) % galleryImages.length
  showModal(currenrIndex)
})


document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowLeft") left.click();
    if (e.key === "ArrowRight") right.click();
    if (e.code === "Space") closeBtn.click();
    console.log(e.key);
  }
})