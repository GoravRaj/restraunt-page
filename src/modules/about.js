import data from "../data/crema_and_craft_data.json";

function loadAbout(container) {
    const {header, address, phone, email, perks} = data.contact_section;

    const aboutHeading = document.createElement("h1");
    aboutHeading.innerText = header;

    const infoContainer = document.createElement("div");
    const perksContainer = document.createElement("div");

    const infoHeading = document.createElement("h2");
    infoHeading.innerText = "Location & Info:";

    const perksHeading = document.createElement("h2");
    perksHeading.innerText = "Cafe Perks:";

    const perksPara = document.createElement("p");
    perksPara.innerText = perks;

    const infoList = document.createElement("ul");
    const addressLI = document.createElement("li");
    const phoneLI = document.createElement("li");
    const emailLI = document.createElement("li");
    

    addressLI.innerText = address;
    phoneLI.innerText = phone;
    emailLI.innerText = email;

    infoList.append(addressLI, phoneLI, emailLI);

    infoContainer.append(infoHeading, infoList);
    perksContainer.append(perksHeading, perksPara);
    container.innerHTML = "";
    container.append(aboutHeading, infoContainer, perksContainer);

}

export default loadAbout;