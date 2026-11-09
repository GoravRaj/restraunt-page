import data from "../data/crema_and_craft_data.json";

function loadHome(container) {
    const homeHeading = document.createElement("h1");
    const tagLine = document.createElement("p");

    const descContainer = document.createElement("div");
    const descPara = document.createElement("p");

    const openingDaysUL = document.createElement("ul");
    const openingDaysLI_1 = document.createElement("li");
    const openingDaysLI_2 = document.createElement("li");

    openingDaysLI_1.innerText = `${data.home_section.opening_hours.monday_to_friday}`;
    openingDaysLI_2.innerText = `${data.home_section.opening_hours.saturday_to_sunday}`;
    openingDaysUL.appendChild(openingDaysLI_1);
    openingDaysUL.appendChild(openingDaysLI_2);

    descPara.innerText = `${data.home_section.about_us}`;
    descContainer.appendChild(descPara);

    tagLine.innerText = `${data.home_section.sub_headline}`;
    homeHeading.innerText = `${data.home_section.headline}`;

    container.innerHTML = "";

    container.appendChild(homeHeading);
    container.appendChild(tagLine);
    container.appendChild(descContainer);
    container.appendChild(openingDaysUL);
}


export default loadHome;
