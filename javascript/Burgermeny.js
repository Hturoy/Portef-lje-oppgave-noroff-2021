const burgerClose = document.querySelector (".burgerClose")
const burgerOpen = document.querySelector (".burgerIkon")

function burgerMeny() {
    const links = document.querySelector(".burger-container--links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}

burgerOpen.addEventListener("click", ()=>{
    burgerOpen.style.display = "none"
    burgerClose.style.display = "inline"
    document.body.classList.add("noscroll");
})

burgerClose.addEventListener("click", ()=>{
    burgerOpen.style.display = "inline"
    burgerClose.style.display = "none"
    document.body.classList.remove("noscroll");
})

