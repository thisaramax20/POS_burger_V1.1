function toggleMenu() {
    let menu = document.querySelector(".menu-links");
    let icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

let allFoodItems = [
    {
        name: "Burger",
        details: [{
            code: "CL-BR-LR-#01",
            name: "Classic Burger (Large)",
            img: "img/burger/classic burger.jpg",
            par: "some text",
            price: 750.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CL-BR-LR",
            addCartId: "btn-CL-BR-LR",
            functionName: "addClassicBurgerLarge"
        },
        {
            code: "CL-BR-R-#02",
            name: "Classic Burger (Regular)",
            img: "img//burger/large burger.jpg",
            par: "some text",
            price: 1500.00,
            discount: 0.15,
            quantity: 10,
            expiredate: "",
            quantityId: "CL-BR-R",
            addCartId: "btn-CL-BR-R",
            functionName: "addClassicBurgerRegular"
        },
        {
            code: "TU-BR-#03",
            name: "Turkey Burger",
            img: "img/burger/turkey burger.jpg",
            par: "some text",
            price: 1600.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "TU-BR",
            addCartId: "btn-TU-BR",
            functionName: "addTurkeyburger"
        },
        {
            code: "CHI-BR-LR-#04",
            name: "Chicken Burger (Large)",
            img: "img/burger/chicken burger large.jpg",
            par: "some text",
            price: 1400.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CHI-BR-LR",
            addCartId: "btn-CHI-BR-LR",
            functionName: "addChickenBurgerLarge"
        },
        {
            code: "CHI-BR-R-#05",
            name: "Chicken Burger (Regular)",
            img: "img/burger/chicken burger regular.jpg",
            par: "some text",
            price: 800.00,
            discount: 0.2,
            quantity: 10,
            expiredate: "",
            quantityId: "CHI-BR-R",
            addCartId: "btn-CH-BR-R",
            functionName: "addChickenBurgerRegular"
        },
        {
            code: "CHE-BR-LR-#06",
            name: "Cheese Burger (Large)",
            img: "img/burger/cheese burger large.jpg",
            par: "some text",
            price: 1000.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CHE-BR-LR",
            addCartId: "btn-CHE-BR-LR",
            functionName: "addCheeseBurgerLarge"
        },
        {
            code: "CHE-BR-R-#07",
            name: "Cheese Burger (Regular)",
            img: "img/burger/cheese burger regular.jpg",
            par: "some text",
            price: 600.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CHE-BR-R",
            addCartId: "btn-CHE-BR-R",
            functionName: "addCheeseBurgerRegular"
        },
        {
            code: "BAC-BR-#08",
            name: "Bacon Burger",
            img: "img/burger/bacon burger.jpg",
            par: "some text",
            price: 650.00,
            discount: 0.15,
            quantity: 10,
            expiredate: "",
            quantityId: "BAC-BR",
            addCartId: "btn-BAC-BR",
            functionName: "addBaconBurger"
        },
        {
            code: "SH-BR-#09",
            name: "Shawarma Burger",
            img: "img/burger/shawarma burger.jpg",
            par: "some text",
            price: 800.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "SH-BR",
            addCartId: "btn-SH-BR",
            functionName: "addShawarmaBurger"
        },
        {
            code: "OL-BR-#10",
            name: "Olive Burger",
            img: "img/burger/olive burger.jpg",
            par: "some text",
            price: 1800.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "OL-BR",
            addCartId: "btn-OL-BR",
            functionName: "addOliveBurger"
        },
        {
            code: "CHE-BR-DB-#11",
            name: "Double-Cheese Burger",
            img: "img/burger/double cheese burger.jpg",
            par: "some text",
            price: 1250.00,
            discount: 0.2,
            quantity: 10,
            expiredate: "",
            quantityId: "CHE-BR-DB",
            addCartId: "btn-CHE-BR-DB",
            functionName: "addCheeseBurgerDouble"
        },
        {
            code: "CR-BR-R-#12",
            name: "Crispy Chicken Burger (Regular)",
            img: "img/burger/crispy chicken burger regular.jpg",
            par: "some text",
            price: 1200.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CR-BR-R",
            addCartId: "btn-CR-BR-R",
            functionName: "addChickenBurgerCrispyRegular"
        },
        {
            code: "CR-BR-LR-#13",
            name: "Crispy Chicken Burger (Large)",
            img: "img/burger/crispy chicken burger large.jpg",
            par: "some text",
            price: 1600.00,
            discount: 0.1,
            quantity: 10,
            expiredate: "",
            quantityId: "CR-BR-LR",
            addCartId: "btn-CR-BR-LR",
            functionName: "addChickenBurgerCrispyLarge"
        },
        {
            code: "PN-BR-#14",
            name: "Paneer Burger",
            img: "img/burger/paneer burger.jpg",
            par: "some text",
            price: 900.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "PN-BR",
            addCartId: "btn-PN-BR",
            functionName: "addPaneerBurger"
        },
        ]
    },
    {
        name: "Submarine",
        details: [{
            code: "CH-SB-CR-LR-#01",
            name: "Crispy Chicken Submarine (Large)",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 2000.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CH-SB-CR-LR",
            addCartId: "btn-CH-SB-CR-LR",
            functionName: "addCrispyChickenSubLarge"
        },
        {
            code: "CH-SB-CR-R-#02",
            name: "Crispy Chicken Submarine (Regular)",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 1500.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CH-SB-CR-R",
            addCartId: "btn-CH-SB-CR-R",
            functionName: "addCrispyChickenSubRegular"
        },
        {
            code: "CH-SB-LR-#03",
            name: "Chicken Submarine (Large)",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 1800.00,
            discount: 0.03,
            quantity: 10,
            quantityId: "CH-SB-LR",
            addCartId: "btn-CH-SB-LR",
            functionName: "addChickenSubLarge"
        },
        {
            code: "CH-SB-R-#04",
            name: "Chicken Submarine (Regular)",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 1400.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CH-SB-R",
            addCartId: "btn-CH-SB-R",
            functionName: "addChickenSubRegular"
        },
        {
            code: "GR-SB-#05",
            name: "Grinder Submarine",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 2300.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "GR-SB",
            addCartId: "btn-GR-SB",
            functionName: "addGrinderSub"
        },
        {
            code: "CHE-SB-#06",
            name: "Cheese Submarine",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 2200.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CHE-SB",
            addCartId: "btn-CHE-SB",
            functionName: "addCheeseSub"
        },
        {
            code: "CHE-CH-SB-DB-#07",
            name: "Double Cheese n Chicken Submarine",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 1900.00,
            discount: 0.16,
            quantity: 10,
            expiredate: "",
            quantityId: "CHE-CH-SB-DB",
            addCartId: "btn-CHE-CH-SB-DB",
            functionName: "addDoubleCheeseChickenSub"
        },
        {
            code: "SP-SB-HG-#08",
            name: "Special Horgie Submarine",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 2800.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "SP-SB-HG",
            addCartId: "btn-SP-SB-HG",
            functionName: "addSpecialHorgieSub"
        },
        {
            code: "MS-SP-SB-#09",
            name: "MOS Special Submarine",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 3000.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "MS-SP-SB",
            addCartId: "btn-MS-SP-SB",
            functionName: "addMosSpecialSub"
        },
        ]
    },
    {
        name: "Fries",
        details: [{
            code: "ST-FR-LR-#01",
            name: "Steak Fries (Large)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 1200.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "ST-FR-LR",
            addCartId: "btn-ST-FR-LR",
            functionName: "addSteakFriesLarge"
        },
        {
            code: "ST-FR-MD-#02",
            name: "Steak Fries (Medium)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 600.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "ST-FR-MD",
            addCartId: "btn-ST-FR-MD",
            functionName: "addSteakFriesMedium"
        },
        {
            code: "FE-FR-LR-#03",
            name: "French Fries (Large)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 800.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "FE-FR-LR",
            addCartId: "btn-FE-FR-LR",
            functionName: "addFrenchFriesLarge"
        },
        {
            code: "FE-FR-MD-#04",
            name: "French Fries (Medium)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 650.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "FE-FR-MD",
            addCartId: "btn-FE-FR-MD",
            functionName: "addFrenchFriesMedium"
        },
        {
            code: "FE-FR-SM-#05",
            name: "French Fries (Small)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 450.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "FE-FR-SM",
            addCartId: "btn-FE-FR-SM",
            functionName: "addFrenchFriesSmall"
        },
        {
            code: "SW-PT-FR-LR-#06",
            name: "Sweet Potato Fries (Large)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 600.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "SW-PT-FR-LR",
            addCartId: "btn-SW-PT-FR-LR",
            functionName: "addSweetPotatoFriesLarge"
        }
        ]
    },
    {
        name: "Pasta",
        details: [{
            code: "CHE-CH-PS-#01",
            name: "Chicken n Cheese Pasta",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 1600.00,
            discount: 0.15,
            quantity: 10,
            expiredate: "",
            quantityId: "CHE-CH-PS",
            addCartId: "btn-CHE-CH-PS",
            functionName: "addChickenCheesePasta"
        },
        {
            code: "CH-PS-PN-#02",
            name: "Chicken Penne Pasta",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 1700.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CH-PS-PN",
            addCartId: "btn-CH-PS-PN",
            functionName: "addChickenPenePasta"
        },
        {
            code: "TU-PS-#03",
            name: "Ground Turkey Pasta Bake",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 2900.00,
            discount: 0.1,
            quantity: 10,
            expiredate: "",
            quantityId: "TU-PS",
            addCartId: "btn-TU-PS",
            functionName: "addTurkeyPasta"
        },
        {
            code: "CR-PS-#04",
            name: "Creamy Shrimp Pasta",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 2000.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "CR-PS",
            addCartId: "btn-CR-PS",
            functionName: "addCreamyPasta"
        },
        {
            code: "LM-PS-#05",
            name: "Lemon Butter Pasta",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 1950.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "LM-PS",
            addCartId: "btn-LM-PS",
            functionName: "addLemonPasta"
        },
        {
            code: "TN-PS-#06",
            name: "Tagliatelle Pasta",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 2400.00,
            discount: 0.01,
            quantity: 10,
            expiredate: "",
            quantityId: "TN-PS",
            addCartId: "btn-TN-PS",
            functionName: "addTangilatePasta"
        },
        {
            code: "BK-PS-RV-#07",
            name: "Baked Ravioli",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 2000.00,
            discount: 0.01,
            quantity: 10,
            quantityId: "BK-PS-RV",
            addCartId: "btn-BK-PS-RV",
            functionName: "addBakedRavioli"
        }
        ]
    },
    {
        name: "Chicken",
        details: [{
            code: "FR-CH-SM-#01",
            name: "Fried Chicken (Small)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 1200.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "FR-CH-SM",
            addCartId: "btn-FR-CH-SM",
            functionName: "addFriedChickenSmall"
        },
        {
            code: "FR-CH-R-#02",
            name: "Fried Chicken (Regular)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 2300.00,
            discount: 0.1,
            quantity: 10,
            expiredate: "",
            quantityId: "FR-CH-R",
            addCartId: "btn-FR-CH-R",
            functionName: "addFriedChickenRegular"
        },
        {
            code: "FR-CH-LR-#03",
            name: "Fried Chicken (Large)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 3100.00,
            discount: 0.05,
            quantity: 10,
            expiredate: "",
            quantityId: "FR-CH-LR",
            addCartId: "btn-FR-CH-LR",
            functionName: "addFriedChickenLarge"
        },
        {
            code: "HT-WG-LR-#04",
            name: "Hot Wings (Large)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 2400.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "HT-WG-LR",
            addCartId: "btn-HT-WG-LR",
            functionName: "addHotWingsLarge"
        },
        {
            code: "DV-CH-LR-#05",
            name: "Devilled Chicken (Large)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 900.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "DV-CH-LR",
            addCartId: "btn-DV-CH-LR",
            functionName: "addDevilledChickenLarge"
        },
        {
            code: "BB-CH-R-#06",
            name: "BBQ Chicken (Regular)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 2100.00,
            discount: 0,
            quantity: 10,
            expiredate: "",
            quantityId: "BB-CH-R",
            addCartId: "btn-BB-CH-R",
            functionName: "addBbqChickenRegular"
        }
        ]
    },
    {
        name: "Beverages",
        details: [{
            code: "PP-BV-#01",
            name: "Pepsi (330ml)",
            img: "img/beverages/beverages.jpg",
            par: "some text",
            price: 990.00,
            discount: 0.05,
            quantity: 10,
            expiredate: "2025-07-09",
            quantityId: "PP-BV",
            addCartId: "btn-PP-BV",
            functionName: "addPepsi"
        },
        {
            code: "CC-BV-#02",
            name: "Coca-Cola (330ml)",
            img: "img/beverages/beverages.jpg",
            par: "some text",
            price: 1230.00,
            discount: 0,
            quantity: 10,
            expiredate: "2025-07-09",
            quantityId: "CC-BV",
            addCartId: "btn-CC-BV",
            functionName: "addCocaCola"
        },
        {
            code: "SP-BV-#03",
            name: "Sprite (330ml)",
            img: "img/beverages/beverages.jpg",
            par: "some text",
            price: 1500.00,
            discount: 0.03,
            quantity: 10,
            expiredate: "2025-07-09",
            quantityId: "SP-BV",
            addCartId: "btn-SP-BV",
            functionName: "addSpriter"
        },
        {
            code: "MR-BV-#04",
            name: "Mirinda (330ml)",
            img: "img/beverages/beverages.jpg",
            par: "some text",
            price: 850.00,
            discount: 0.07,
            quantity: 10,
            expiredate: "2025-07-09",
            quantityId: "MR-BV",
            addCartId: "btn-MR-BV",
            functionName: "addMiranda"
        }
        ]
    }
];

function updateMenu(Obj) {
    let foods = document.getElementById("foods");
    let content = `<div class="row my-lg-5 my-sm-3 justify-content-center">`;
    let count = 0;
    Obj.details.forEach(data => {

        if (count != 3) {
            content += `<div class="col-lg-4">
                    <div class="card bg-dark text-white" style="width: 18rem;">
                        <img src="${data.img}" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.par}</p>
                            <p id="price">Rs.${data.price}</p>
                                
                                <p id="${data.quantityId}">Available : ${data.quantity}</p>
                        </div>
                    </div>
                </div>`
            count++;
        } else {
            count = 0;
            content += `</div><div class="row my-lg-5 my-sm-3 justify-content-center">
                        <div class="col-lg-4">
                    <div class="card bg-dark text-white" style="width: 18rem;">
                        <img src="${data.img}" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.par}</p>
                            <p id="price">Rs.${data.price}</p>
                                
                                <p id="${data.quantityId}">Available : ${data.quantity}</p>
                        </div>
                    </div>
                </div>`
            count++;
        }

    })

    content += `</div>`;
    foods.innerHTML = content;
}

function updateMenuCart(Obj) {
    let foods = document.getElementById("foods");
    let content = `<div class="row my-lg-5 my-sm-3 justify-content-center">`;
    let count = 0;
    Obj.details.forEach(data => {

        if (count != 3) {
            content += `<div class="col-lg-4">
                    <div class="card bg-dark text-white" style="width: 18rem;">
                        <img src="${data.img}" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.par}</p>
                            <p>Rs.${data.price}</p>
                                
                                <p id="${data.quantityId}">Available : ${data.quantity}</p>
                                <p>Discount : ${data.discount * 100}%</p>
                                <button onclick="${data.functionName}()" id="${data.addCartId}" class="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>`
            count++;
        } else {
            count = 0;
            content += `</div><div class="row my-lg-5 my-sm-3 justify-content-center">
                        <div class="col-lg-4">
                    <div class="card bg-dark text-white"rd" style="width: 18rem;">
                        <img src="${data.img}" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.par}</p>
                            <p>Rs.${data.price}</p>
                                
                                <p id="${data.quantityId}">Available : ${data.quantity}</p>
                                <p>Discount : ${data.discount * 100}%</p>
                                <button onclick="${data.functionName}()" id="${data.addCartId}" class="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>`
            count++;
        }

    })

    content += ` </div>
                    <div class="container text-center">
        </div>`;
    foods.innerHTML = content;
}

function updateBurgerMenu() {
    updateMenu(allFoodItems[0]);
}
function updateSubmarineMenu() {
    updateMenu(allFoodItems[1]);
}
function updateFriesMenu() {
    updateMenu(allFoodItems[2]);
}
function updatePastaMenu() {
    updateMenu(allFoodItems[3]);
}
function updateChickenMenu() {
    updateMenu(allFoodItems[4]);
}
function updateBeveragesMenu() {
    updateMenu(allFoodItems[5]);
}


function updateBurgerMenuCart() {
    updateMenuCart(allFoodItems[0]);
}
function updateSubmarineMenuCart() {
    updateMenuCart(allFoodItems[1]);
}
function updateFriesMenuCart() {
    updateMenuCart(allFoodItems[2]);
}
function updatePastaMenuCart() {
    updateMenuCart(allFoodItems[3]);
}
function updateChickenMenuCart() {
    updateMenuCart(allFoodItems[4]);
}
function updateBeveragesMenuCart() {
    updateMenuCart(allFoodItems[5]);
}

let customerDetails = [];
let cusID = 0;

function getCustomer() {
    let cusName = document.getElementById("name").value;
    let cusTelephone = document.getElementById("telephone").value;
    if (cusName == "" || cusTelephone == "") {
        alert("All fields must be filled out");
        return false;
    } else {
        customerDetails.push({
            ID: "BR-CS-" + ++cusID,
            name: cusName,
            telephone: cusTelephone,
            items: [],
        })
        let sectionMenu = document.getElementById("customerPage");
        let content = `<div class="heading">
            <h2 class="text-center">OUR BEST MENU</h2>
            <p class="text-center ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam non sed deleniti iure.
            </p>
        </div>
        <div class="button text-center">
            <button onclick="updateBurgerMenuCart()" class="btn btn-outline-warning mx-4">Burgers</button>
            <button onclick="updateSubmarineMenuCart()" class="btn btn-outline-warning mx-4">Submarines</button>
            <button onclick="updateFriesMenuCart()" class="btn btn-outline-warning mx-4">Fries</button>
            <button onclick="updatePastaMenuCart()" class="btn btn-outline-warning mx-4">Pasta</button>
            <button onclick="updateChickenMenuCart()" class="btn btn-outline-warning mx-4">Chicken</button>
            <button onclick="updateBeveragesMenuCart()" class="btn btn-outline-warning mx-4">Beverages</button>
        </div>
        <div id="foods" class="food-items container">
            <div class="row my-lg-5 my-sm-3 justify-content-center">
                <div class="col-lg-4">
                    <div class="card bg-dark text-white" style="width: 18rem;">
                        <img src="img//burger/large burger.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Classic Burger (Large)</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <p id="price">Rs.850</p>
                                
                                <p id="${allFoodItems[0].details[0].quantityId}">Available : ${allFoodItems[0].details[0].quantity}</p>
                                <p>Discount : ${allFoodItems[0].details[0].discount * 100}%</p>
                                <button onclick="${allFoodItems[0].details[0].functionName}()" id="${allFoodItems[0].details[0].addCartId}" class="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card bg-dark text-white" style="width: 18rem;">
                        <img src="img/burger/classic burger.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Classic Burger (Regular)</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                                <p id="price">Rs.850</p>
                                    
                                    <p id="${allFoodItems[0].details[1].quantityId}">Available : ${allFoodItems[0].details[1].quantity}</p>
                                    <p>Discount : ${allFoodItems[0].details[1].discount * 100}%</p>
                                    <button onclick="${allFoodItems[0].details[1].functionName}()" id="${allFoodItems[0].details[1].addCartId}" class="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card bg-dark text-white" style="width: 18rem;">
                        <img src="img/burger/turkey burger.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Turkey Burger</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                                <p id="price">Rs.850</p>
                                    
                                    <p id="${allFoodItems[0].details[2].quantityId}">Available : ${allFoodItems[0].details[2].quantity}</p>
                                    <p>Discount : ${allFoodItems[0].details[2].discount * 100}%</p>
                                    <button onclick="${allFoodItems[0].details[2].functionName}()" id="${allFoodItems[0].details[2].addCartId}" class="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-lg-5 my-sm-3 justify-content-center">
                <div class="col-lg-4">
                    <div class="card bg-dark text-white" style="width: 18rem;">
                        <img src="img/burger/chicken burger large.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Chicken Burger (Large)</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <p id="price">Rs.850</p>
                                
                                <p id="${allFoodItems[0].details[3].quantityId}">Available : ${allFoodItems[0].details[3].quantity}</p>
                                <p>Discount : ${allFoodItems[0].details[3].discount * 100}%</p>
                                    <button onclick="${allFoodItems[0].details[3].functionName}()" id="${allFoodItems[0].details[3].addCartId}" class="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card bg-dark text-white" style="width: 18rem;">
                        <img src="img/burger/chicken burger regular.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Chicken Burger (Regular)</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                                <p id="price">Rs.850</p>
                                    
                                    <p id="${allFoodItems[0].details[4].quantityId}">Available : ${allFoodItems[0].details[4].quantity}</p>
                                    <p>Discount : ${allFoodItems[0].details[4].discount * 100}%</p>
                                    <button onclick="${allFoodItems[0].details[4].functionName}()" id="${allFoodItems[0].details[4].addCartId}" class="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card bg-dark text-white" style="width: 18rem;">
                        <img src="img/burger/cheese burger regular.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Cheese Burger (Large)</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                                <p id="price">Rs.850</p>
                                    
                                    <p id="${allFoodItems[0].details[5].quantityId}">Available : ${allFoodItems[0].details[5].quantity}</p>
                                    <p>Discount : ${allFoodItems[0].details[5].discount * 100}%</p>
                                    <button onclick="${allFoodItems[0].details[5].functionName}()" id="${allFoodItems[0].details[5].addCartId}" class="btn btn-outline-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center">
        <button onclick="displayCart()" class="btn btn-outline-primary">Proceed to checkout</button>
        </div>
        <section id="cart">
        <div class="container text-center my-4">
            <table class="table table-borderless table-dark bg-opacity-50 rounded-3" id="tblCart">

            </table>
        </div>
    </section>`;
        sectionMenu.innerHTML = content;
    }
}

let orderNumber = 0;
let tempItemCodeList = [];
let tempQuantitytList = [];

function getItemCode() {
    customerDetails.forEach(data => {
        data.items.forEach(code => {
            tempItemCodeList.push(code.code);
        })
    })
    return tempItemCodeList;
}
function getQuantity() {
    customerDetails.forEach(data => {
        data.items.forEach(code => {
            tempQuantitytList.push(code.quantity);
        })
    })
    return tempQuantitytList;
}

let pay = 0;
function payment() {
    let data = document.getElementById("thanks");
    if(pay===1){
        return false;
    }else{
        orderDetails.push({
            orderId: "OR-" + ++orderNumber,
            customer: {
                cusID: customerDetails[customerDetails.length-1].ID,
                name: customerDetails[customerDetails.length - 1].name,
                telephone: customerDetails[customerDetails.length - 1].telephone
            },
            date: new Date(),
            itemList: {
                code: getItemCode(),
                price: tempPriceList,
                discount: tempDiscountList,
                quantity: getQuantity()
            },
            orderTotal: total
        });
        pay++;
        let content = `<h4 class="text-center my-3">Enjoy your burger... Do come again...</h4>`;
        data.innerHTML=content;
    }
    
}


function addFoodItemToCustomer(item) {
    if (item.expiredate == "") {
        if (item.quantity > 0) {
            let quantity = document.getElementById(item.quantityId);
            let foundItem = false;

            customerDetails.forEach(details => {
                details.items.forEach(data => {
                    if (data.code === item.code) {
                        data.quantity++;
                        foundItem = true;
                        return;
                    }
                });
                if (foundItem) return;
            });

            if (!foundItem) {
                customerDetails[customerDetails.length - 1].items.push({
                    code: item.code,
                    quantity: 1
                });
            }

            quantity.innerText = "Available : " + --item.quantity;
        } else {
            return false;
        }
    } else {
        let today = new Date();
        let ex = new Date(item.expiredate);
        if (today > ex) {
            alert("It is expired.");
            return false;
        } else {
            if (item.quantity > 0) {
                let quantity = document.getElementById(item.quantityId);
                let foundItem = false;

                customerDetails.forEach(details => {
                    details.items.forEach(data => {
                        if (data.code === item.code) {
                            data.quantity++;
                            foundItem = true;
                            return;
                        }
                    });
                    if (foundItem) return;
                });

                if (!foundItem) {
                    customerDetails[customerDetails.length - 1].items.push({
                        code: item.code,
                        quantity: 1
                    });
                }

                quantity.innerText = "Available : " + --item.quantity;
            } else {
                return false;
            }
        }
    }
}

let total;

let orderDetails = [];
let tempPriceList = [];
let tempDiscountList = [];

function displayCart() {
    let tbl = document.getElementById("tblCart");
    total = 0;
    let content = `<table class="table table-borderless table-dark bg-opacity-50 rounded-3" id="tblCart">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price (Rs.)</th>
                    <th scope="col">Discount</th>
                  </tr>
                </thead> 
                <tbody>`;
    customerDetails.forEach(data => {
        data.items.forEach(item => {
            allFoodItems.forEach(catogory => {
                catogory.details.forEach(get => {
                    if (get.code === item.code) {
                        content += `<tr>
                                    <td>${get.name}</td>
                                    <td>${item.quantity}</td>
                                    <td>${get.price}</td>
                                    <td>${get.discount * 100}%</td>
                                </tr>`;
                        tempPriceList.push(get.price);
                        tempDiscountList.push(get.discount);
                        total += (item.quantity * get.price) - (get.discount * get.price * item.quantity);
                    }
                })
            })
        })
    })

    content += `</tbody>
              </table>
              <p class="text-center my-4">Your total : Rs.${total}</p>
              <button onclick="payment()" class="btn btn-outline-primary my-4">Pay and enjoy your order</button>
              <h4 id="thanks">`;
    tbl.innerHTML = content;
}

function addClassicBurgerLarge() {
    addFoodItemToCustomer(allFoodItems[0].details[0]);
}
function addClassicBurgerRegular() {
    addFoodItemToCustomer(allFoodItems[0].details[1]);
}
function addTurkeyburger() {
    addFoodItemToCustomer(allFoodItems[0].details[2]);
}
function addChickenBurgerLarge() {
    addFoodItemToCustomer(allFoodItems[0].details[3]);
}
function addChickenBurgerRegular() {
    addFoodItemToCustomer(allFoodItems[0].details[4]);
}
function addCheeseBurgerLarge() {
    addFoodItemToCustomer(allFoodItems[0].details[5]);
}
function addCheeseBurgerRegular() {
    addFoodItemToCustomer(allFoodItems[0].details[6]);
}
function addBaconBurger() {
    addFoodItemToCustomer(allFoodItems[0].details[7]);
}
function addShawarmaBurger() {
    addFoodItemToCustomer(allFoodItems[0].details[8]);
}
function addOliveBurger() {
    addFoodItemToCustomer(allFoodItems[0].details[9]);
}
function addCheeseBurgerDouble() {
    addFoodItemToCustomer(allFoodItems[0].details[10]);
}
function addChickenBurgerCrispyRegular() {
    addFoodItemToCustomer(allFoodItems[0].details[11]);
}
function addChickenBurgerCrispyLarge() {
    addFoodItemToCustomer(allFoodItems[0].details[12]);
}
function addPaneerBurger() {
    addFoodItemToCustomer(allFoodItems[0].details[13]);
}


function addCrispyChickenSubLarge() {
    addFoodItemToCustomer(allFoodItems[1].details[0]);
}
function addCrispyChickenSubRegular() {
    addFoodItemToCustomer(allFoodItems[1].details[1]);
}
function addChickenSubLarge() {
    addFoodItemToCustomer(allFoodItems[1].details[2]);
}
function addChickenSubRegular() {
    addFoodItemToCustomer(allFoodItems[1].details[3]);
}
function addGrinderSub() {
    addFoodItemToCustomer(allFoodItems[1].details[4]);
}
function addCheeseSub() {
    addFoodItemToCustomer(allFoodItems[1].details[5]);
}
function addDoubleCheeseChickenSub() {
    addFoodItemToCustomer(allFoodItems[1].details[6]);
}
function addSpecialHorgieSub() {
    addFoodItemToCustomer(allFoodItems[1].details[7]);
}
function addMosSpecialSub() {
    addFoodItemToCustomer(allFoodItems[1].details[8]);
}


function addSteakFriesLarge() {
    addFoodItemToCustomer(allFoodItems[2].details[0]);
}
function addSteakFriesMedium() {
    addFoodItemToCustomer(allFoodItems[2].details[1]);
}
function addFrenchFriesLarge() {
    addFoodItemToCustomer(allFoodItems[2].details[2]);
}
function addFrenchFriesMedium() {
    addFoodItemToCustomer(allFoodItems[2].details[3]);
}
function addFrenchFriesSmall() {
    addFoodItemToCustomer(allFoodItems[2].details[4]);
}
function addSweetPotatoFriesLarge() {
    addFoodItemToCustomer(allFoodItems[2].details[5]);
}


function addChickenCheesePasta() {
    addFoodItemToCustomer(allFoodItems[3].details[0]);
}
function addChickenPenePasta() {
    addFoodItemToCustomer(allFoodItems[3].details[1]);
}
function addTurkeyPasta() {
    addFoodItemToCustomer(allFoodItems[3].details[2]);
}
function addCreamyPasta() {
    addFoodItemToCustomer(allFoodItems[3].details[3]);
}
function addLemonPasta() {
    addFoodItemToCustomer(allFoodItems[3].details[4]);
}
function addTangilatePasta() {
    addFoodItemToCustomer(allFoodItems[3].details[5]);
}
function addBakedRavioli() {
    addFoodItemToCustomer(allFoodItems[3].details[6]);
}


function addFriedChickenSmall() {
    addFoodItemToCustomer(allFoodItems[4].details[0]);
}
function addFriedChickenRegular() {
    addFoodItemToCustomer(allFoodItems[4].details[1]);
}
function addFriedChickenLarge() {
    addFoodItemToCustomer(allFoodItems[4].details[2]);
}
function addHotWingsLarge() {
    addFoodItemToCustomer(allFoodItems[4].details[3]);
}
function addDevilledChickenLarge() {
    addFoodItemToCustomer(allFoodItems[4].details[4]);
}
function addBbqChickenRegular() {
    addFoodItemToCustomer(allFoodItems[4].details[5]);
}


function addPepsi() {
    addFoodItemToCustomer(allFoodItems[5].details[0]);
}
function addCocaCola() {
    addFoodItemToCustomer(allFoodItems[5].details[1]);
}
function addSpriter() {
    addFoodItemToCustomer(allFoodItems[5].details[2]);
}
function addMiranda() {
    addFoodItemToCustomer(allFoodItems[5].details[3]);
}

let adminDetails = [
    {
        userName: "BR-AD-01",
        password: "1234"
    },
    {
        userName: "BR-AD-02",
        password: "5678"
    },
];

function login() {
    let typedUserName = document.getElementById("adminID").value;
    let typedPassword = document.getElementById("adminPassword").value;

    let proceed = document.getElementById("adminCoverPage");
    let content = `<div class="container text-center my-4" id="adminCoverPage">
        <h2>Welcome Admin</h1>
    <div class="button text-center">
            <button onclick="customerManagement()" class="btn btn-outline-warning mx-4">Customer Management</button>
            <button onclick="salesManagement()" class="btn btn-outline-warning mx-4">Sales Management</button>
        </div>
        </div>
        <h1 id="option">`;

    let success = false;    
    adminDetails.forEach(data => {
        if (data.userName === typedUserName && data.password === typedPassword) {
            proceed.innerHTML=content;
            success = true;
            return;
        }
        if (success) {
            return false;
        }
        else{
            alert("Please try again...");
        }
    })
}

function customerManagement(){
    let reload = document.getElementById("option");
    let content =  `<div class="container button text-center my-4">
            <button onclick="addNewCustomer()" class="btn btn-outline-warning mx-4">Add New Customer</button>
            <button onclick="viewCus()" class="btn btn-outline-warning mx-4">View Customer Details</button>
            <button onclick="editCustomer()" class="btn btn-outline-warning mx-4">Edit Customer Details</button>
        </div>
        <h1 id="cusOption">`
    reload.innerHTML=content;    
}

function salesManagement(){
    let reload = document.getElementById("option");
    let content =  `<div class="container button text-center my-4">
            <button onclick="report()" class="btn btn-outline-warning mx-4">Monthly Report</button>
            <button onclick="report()" class="btn btn-outline-warning mx-4">Annual Report</button>
            <button onclick="reportCustomer()" class="btn btn-outline-warning mx-4">Customer Report</button>
        </div>
        <h1 id="salesOption">`
    reload.innerHTML=content;    
}

function report(){
    let data = document.getElementById("salesOption");
    let content = `<table class="table table-borderless table-dark my-4" id="tblCart">
                <thead>
                  <tr>
                    <th scope="col">Item Code</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead> 
                <tbody>`;

    allFoodItems.forEach(data =>{
        data.details.forEach(list =>{
            content+=`<tr>
                    <td>${list.code}</td>
                    <td>${list.name}</td>
                    <td>${list.quantity}</td>
                    </tr>`;
        })
    })
    
    let total = 0; 
    orderDetails.forEach(data =>{
        total+=data.orderTotal;
    })
    content+=`</tbody></table>
                <h5 class="text-center my-3">Sales : Rs.${total}</h5>`;            
    data.innerHTML=content;
                
}

function reportCustomer(){
    let data = document.getElementById("salesOption");
    let content = `<table class="table table-borderless table-dark my-4" id="tblCart">
                <thead>
                  <tr>
                    <th scope="col">Customer ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Sales</th>
                  </tr>
                </thead> 
                <tbody>`;

    orderDetails.forEach(data =>{
        content+=`<tr>
                    <td>${data.customer.cusID}</td>
                    <td>${data.customer.name}</td>
                    <td>${data.orderTotal}</td>
                    `;
    })
    data.innerHTML=content;            
}

function addNewCustomer(){
    let data = document.getElementById("cusOption");
    let content = `<div class="container text-center my-4" id="addCustomerNew">
        <h2>Please Fill the below Details</h1>   
    
        <div class="mb-3">
            <label for="adminID" class="form-label">Name</label>
            <input type="text" class="form-control bg-black text-white" id="cusName" placeholder="BR-AD-01">
          </div>
        <div class="mb-3">
            <label for="adminID" class="form-label">Telephone</label>
            <input type="number" class="form-control bg-black text-white" id="cusTel">
          </div>

          <button onclick="addNewCus()" class="btn btn-outline-warning mx-4 text-center">Proceed</button>
          
    </div>`;
    data.innerHTML=content;
}

function editCustomer(){
    let data = document.getElementById("cusOption");
    let content = `<div class="container text-center my-4" id="EditCustomer">
        <h2>Search by ID</h1>   
    
        <div class="mb-3">
            <label for="cusID" class="form-label">Enter Customer ID</label>
            <input type="text" class="form-control bg-black text-white" id="cusId" placeholder="BR-CS-01">
          </div>
        <div class="mb-3">
            <label for="cusID" class="form-label">Enter New Name</label>
            <input type="text" class="form-control bg-black text-white" id="cusName" placeholder="BR-CS-01">
          </div>
        <div class="mb-3">
            <label for="cusID" class="form-label">Enter New Telephone</label>
            <input type="text" class="form-control bg-black text-white" id="cusTel" placeholder="BR-CS-01">
          </div>
          <button onclick="editDetails()" class="btn btn-outline-warning mx-4 text-center">Proceed</button>
          
    </div>`;
    data.innerHTML=content;
}

function editDetails(){
    let id = document.getElementById("cusId").value;
    let name = document.getElementById("cusName").value;
    let tel = document.getElementById("cusTel").value;
    customerDetails.forEach(data =>{
        if (data.ID===id) {
            data['name']=name;
            data['telephone']=tel;
            alert("Success...");
        }else{
            alert("There is no record by that ID...");
            return false;
        }
    })
    
}

function addNewCus(){
    let name = document.getElementById("cusName").value;
    let tel = document.getElementById("cusTel").value;
    customerDetails.push({
        ID: "BR-CUS" + ++cusID,
        name: name,
        telephone: tel,
        items: [],
    });
}


function viewCus(){
    let data = document.getElementById("cusOption");
    let content = `<table class="table table-borderless table-dark my-4 fw-lighter" id="tblCart">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Telephone</th>
                    <th scope="col">Order</th>
                  </tr>
                </thead> 
                <tbody>`;
    let success = false;
    customerDetails.forEach(data =>{
        content+=`<tr>
                    <td>${data.name}</td>
                    <td>${data.telephone}</td>
                    `;

                    orderDetails.forEach(order =>{
                        if(order.customer.name===data.name){
                            content+=`<td>${order.orderId}</td>
                                        </tr>`;
                            success=true;
                            return;            
                        }
                        if(!success){
                            return;
                        }
                    })   
    })       
      
    data.innerHTML=content;
}

function loadCustomerpage(){
    let data = document.getElementById("bodyMain");
    let content = `<div id="customerPage" class="container my-5">
    <div>
        <h3 class="text-center">Please fill out these details to enjoy your burger</h3><hr>
    </div>
    <div class="container">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input required type="text" class="form-control bg-black text-white" id="name" placeholder="Saman">
          </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Telephone</label>
            <input required type="text" class="form-control bg-black text-white" id="telephone" placeholder="0754329765">
          </div>
        <button type="button" onclick="getCustomer()" class="btn btn-outline-primary">Submit</button>  
    </div>

    <section id="menu">   


    </section>
    
    <section id="cart">
        <div class="container text-center">
            <table class="table table-borderless table-dark bg-transparent" id="tblCart">

            </table>
        </div>
    </section>
    </div>`;

    data.innerHTML=content;
}

function loadAdminpage(){
    let data = document.getElementById("bodyMain");
    let content = `<div class="container text-center my-4" id="adminCoverPage">
        <h2 class="my-4">Welcome Admin</h1>
         <h4 class="my-4">Please Log in to Proceed</h4>   
    
        <div class="mb-3">
            <label for="adminID" class="form-label">User Name</label>
            <input type="text" class="form-control bg-black text-white" id="adminID" placeholder="BR-AD-01">
          </div>
        <div class="mb-3">
            <label for="adminID" class="form-label">Password</label>
            <input type="password" class="form-control bg-black text-white" id="adminPassword">
          </div>

          <button onclick="login()" class="btn btn-outline-warning mx-4 text-center">Login</button>
          
    </div>`;

    data.innerHTML=content;
}
