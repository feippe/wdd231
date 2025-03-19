const membersURL = "data/members.json";

function businessCardTemplate(data) {
    let string = `<div class="businessCard">
                    <div class="businessCard-name">
                        <h3>${data.name}</h3>
                    </div>
                    <div class="businessCard-tagLine">${data.address}, ${data.city}</div>
                    <div class="businessCard-imageContent">
                        <img src="${data.image}" alt="${data.name}">
                    </div>
                    <div class="businessCard-email"><b>EMAIL: </b><a href="mailto:${data.email}">${data.email}</a></div>
                    <div class="businessCard-phone"><b>PHONE: </b><a href="tel:${data.phoneNumber}">${data.phoneNumber}</a></div>
                    <div class="businessCard-url"><b>URL: </b><a href="https://${data.websiteUrl}">${data.websiteUrl}</a></div>
                </div>`;
    return document.createRange().createContextualFragment(string);
}

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(data) {
    let membersContent = document.getElementById("businessCardsContent");
    data.members.forEach(member => {
        membersContent.append(businessCardTemplate(member));
    });
}

getMembers();

document.querySelector("#gridButton").addEventListener("click", () => {
    document.querySelector("#businessCardsContent").classList.add("grid");
    document.querySelector("#businessCardsContent").classList.remove("list");
});

document.querySelector("#listButton").addEventListener("click", () => {
    document.querySelector("#businessCardsContent").classList.add("list");
    document.querySelector("#businessCardsContent").classList.remove("grid");
});