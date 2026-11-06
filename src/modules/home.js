
function loadHome(container) {
    const homeHeading = document.createElement("h1");
    const tagLine = document.createElement("p");

    const descContainer = document.createElement("div");
    const descPara = document.createElement("p");

    const openingDaysUL = document.createElement("ul");
    const openingDaysLI_1 = document.createElement("li");
    const openingDaysLI_2 = document.createElement("li");

    openingDaysLI_1.innerText = "Monday – Friday: 7:00 AM – 7:00 PM";
    openingDaysLI_2.innerText = "Saturday – Sunday: 8:00 AM – 8:00 PM (Fresh Pastries Daily)";
    openingDaysUL.appendChild(openingDaysLI_1);
    openingDaysUL.appendChild(openingDaysLI_2);

    descPara.innerText = "At Crema & Craft, we treat coffee as both a science and an art form. Sourced from sustainable high-altitude farms and roasted in small batches, every cup is brewed to highlight unique tasting notes. Whether you're grabbing a morning flat white or settling in with a book over cold brew, we’re here to fuel your day."
    descContainer.appendChild(descPara);

    tagLine.innerText = `"why pasta is eaten in small quantity" is it grammatically correct?`
    homeHeading.innerText = "Your Daily Ritual, Perfected.";

    container.appendChild(homeHeading);
    container.appendChild(tagLine);
    container.appendChild(descContainer);
    container.appendChild(openingDaysUL);
}


export default loadHome;
