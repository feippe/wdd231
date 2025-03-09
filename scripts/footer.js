function putYearInFooter() {
    const date = new Date();
    let year = date.getFullYear();
    document.getElementById("footerYear").innerHTML = year;
}
function putLastModificationInFooter() {
    if (Date.parse(document.lastModified) != 0) {
        let lastModification = `Last Modification: ${document.lastModified}`;
        document.getElementById("lastModified").innerHTML = lastModification;
    }
}

putYearInFooter();
putLastModificationInFooter();