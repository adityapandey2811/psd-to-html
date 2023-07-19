function changeColor(div) {
    const divs = document.getElementsByClassName("blogs-data-nav-label");

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove("clicked");
    }

    div.classList.add("clicked");
}