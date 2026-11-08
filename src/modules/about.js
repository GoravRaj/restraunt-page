import data from "../data/crema_and_craft_data.json";

function loadAbout(container) {
    const menuContainer = document.createElement("div");

    const coffeeList = document.createElement("ul");
    const bakeryList = document.createElement("ul");

    // appending coffee items
    data.menu_section.categories[0].items.forEach((item) => {
        const listItem = document.createElement("li");

        const itemDesc = document.createElement("p");
        const itemDetail = document.createElement("p");
        const itemName = document.createElement("span");
        const itemPrice = document.createElement("span");
        
        itemName.innerText = item.name;
        itemPrice.innerText = " - " + item.price;
        itemDetail.append(itemName, itemPrice);
        itemDesc.innerText = item.description;

        listItem.append(itemDetail, itemDesc);
        coffeeList.appendChild(listItem);
    });

        // appending Bakery items
        data.menu_section.categories[1].items.forEach((item) => {
            const listItem = document.createElement("li");
    
            const itemDesc = document.createElement("p");
            const itemDetail = document.createElement("p");
            const itemName = document.createElement("span");
            const itemPrice = document.createElement("span");
            
            itemName.innerText = item.name;
            itemPrice.innerText = " - " + item.price;
            itemDetail.append(itemName, itemPrice);
            itemDesc.innerText = item.description;
    
            listItem.append(itemDetail, itemDesc);
            bakeryList.appendChild(listItem);
        });

    

    const coffeeSection = document.createElement("div");
    const bakerySection = document.createElement("div");

    coffeeSection.appendChild(coffeeList);
    bakerySection.appendChild(bakeryList);

    menuContainer.append(coffeeSection, bakerySection);

    container.appendChild(menuContainer);
    


}

export default loadAbout;