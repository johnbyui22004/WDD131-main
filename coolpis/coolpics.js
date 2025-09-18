const menuBtn = document.querySelector("button");
const navLinks = document.querySelectorAll("a");
let isHidden = true;
const gallerySection = document.querySelector("section.gallery");

menuBtn.addEventListener("click", () => {
    if (isHidden) {
        navLinks.forEach(link => link.classList.remove("hidden"));
        isHidden = false;
    } else {
        navLinks.forEach(link => link.classList.add("hidden"));
        isHidden = true;
    }
});

const imageModal = document.createElement("dialog");
imageModal.innerHTML = `<img><button id="closeBtn">close</button>`;
document.body.appendChild(imageModal);

imageModal.querySelector("#closeBtn").addEventListener("click", function() {
    imageModal.close();
});

gallerySection.addEventListener("click", function(e) {
    const clickedImg = e.target.closest("img");
    if (!clickedImg) return;
    const basePath = clickedImg.src.split("-")[0];
    imageModal.querySelector("img").src = `${basePath}-full.jpeg`;
    imageModal.showModal();
});