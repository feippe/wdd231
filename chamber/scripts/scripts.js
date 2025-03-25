document.addEventListener("DOMContentLoaded", function () {
    addHeader();
    addFooter();
});

async function addHeader() {
    const path = `partials/header.html`;
    const response = await fetch(path);
    const text = await response.text();
    const content = document.createRange().createContextualFragment(text);
    document.querySelector("body").prepend(content);
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

    switch (getPageFile()) {
        case "index.html":
            document.querySelector("nav>ul>li:nth-child(1)>a").className = "selected";
            break;
        case "discover.html":
            document.querySelector("nav>ul>li:nth-child(2)>a").className = "selected";
            break;
        case "directory.html":
            document.querySelector("nav>ul>li:nth-child(3)>a").className = "selected";
            break;
        case "join.html":
            document.querySelector("nav>ul>li:nth-child(4)>a").className = "selected";
            break;

    }
}

async function addFooter() {
    const path = `partials/footer.html`;
    const response = await fetch(path);
    const text = await response.text();
    const content = document.createRange().createContextualFragment(text);
    document.querySelector("body").append(content);
    if (Date.parse(document.lastModified) != 0) {
        let lastModification = `Last Modification: ${document.lastModified}`;
        document.getElementById("lastModification").innerHTML = lastModification;
    }
    const date = new Date();
    let year = date.getFullYear();
    document.getElementById("footerYear").innerHTML = year;
}

function getPageFile() {
    let path = window.location.pathname;
    return path === "/" ? "index.html" : path.split("/").pop();
}