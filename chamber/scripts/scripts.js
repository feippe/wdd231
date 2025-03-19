document.addEventListener("DOMContentLoaded", function () {
    if (Date.parse(document.lastModified) != 0) {
        let lastModification = `Last Modification: ${document.lastModified}`;
        document.getElementById("lastModification").innerHTML = lastModification;
    }
    const date = new Date();
    let year = date.getFullYear();
    document.getElementById("footerYear").innerHTML = year;

    document.querySelector("#menuIcon .openIcon").addEventListener("click", function () {
        document.querySelector("nav").style.display = "inline-block";
        document.querySelector("#menuIcon .closeIcon").style.display = "inline-block";
        document.querySelector("#menuIcon .openIcon").style.display = "none";
        window.scrollTo(0, 0);
        document.querySelector("body").style.overflowY = "hidden";
    });

    document.querySelector("#menuIcon .closeIcon").addEventListener("click", function () {
        document.querySelector("nav").style.display = "none";
        document.querySelector("#menuIcon .closeIcon").style.display = "none";
        document.querySelector("#menuIcon .openIcon").style.display = "inline-block";
        document.querySelector("body").style.overflowY = "auto";
    });
});