function openMobileMenu() {
    document.querySelector("header nav").style.display = "grid";
}
function closeMobileMenu() {
    document.querySelector("header nav").style.display = "none";
}


document.querySelector("header nav span img").addEventListener('click', () => {
    console.log("bbb");
    closeMobileMenu();
});

document.querySelector("#mobile-menu img").addEventListener('click', () => {
    console.log("aaa");
    openMobileMenu();
});