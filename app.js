function toggleMenu() {
    let menu = document.querySelector(".menu-links");
    let icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

let allFoodItems = [
    {
        name:"Burger",
        details:[{
            name: "Classic Burger (Large)",
            img: "img/burger/classic burger.jpg",
            par: "some text",
            price: 750.00,
            quantity: 10
        },
        {
            name: "Classic Burger (Regular)",
            img: "img//burger/large burger.jpg",
            par: "some text",
            price: 1500.00,
            quantity: 10
        },
        {
            name: "Turkey Burger",
            img: "img/burger/turkey burger.jpg",
            par: "some text",
            price: 1600.00,
            quantity: 10
        },
        {
            name: "Chicken Burger (Large)",
            img: "img/burger/chicken burger large.jpg",
            par: "some text",
            price: 1400.00,
            quantity: 10
        },
        {
            name: "Chicken Burger (Regular)",
            img: "img/burger/chicken burger regular.jpg",
            par: "some text",
            price: 800.00,
            quantity: 10
        },
        {
            name: "Cheese Burger (Large)",
            img: "img/burger/cheese burger large.jpg",
            par: "some text",
            price: 1000.00,
            quantity: 10
        },
        {
            name: "Cheese Burger (Regular)",
            img: "img/burger/cheese burger regular.jpg",
            par: "some text",
            price: 600.00,
            quantity: 10
        },
        {
            name: "Bacon Burger",
            img: "img/burger/bacon burger.jpg",
            par: "some text",
            price: 650.00,
            quantity: 10
        },
        {
            name: "Shawarma Burger",
            img: "img/burger/shawarma burger.jpg",
            par: "some text",
            price: 800.00,
            quantity: 10
        },
        {
            name: "Olive Burger",
            img: "img/burger/olive burger.jpg",
            par: "some text",
            price: 1800.00,
            quantity: 10
        },
        {
            name: "Double-Cheese Burger",
            img: "img/burger/double cheese burger.jpg",
            par: "some text",
            price: 1250.00,
            quantity: 10
        },
        {
            name: "Crispy Chicken Burger (Regular)",
            img: "img/burger/crispy chicken burger regular.jpg",
            par: "some text",
            price: 1200.00,
            quantity: 10
        },
        {
            name: "Crispy Chicken Burger (Large)",
            img: "img/burger/crispy chicken burger large.jpg",
            par: "some text",
            price: 1600.00,
            quantity: 10
        },
        {
            name: "Paneer Burger",
            img: "img/burger/paneer burger.jpg",
            par: "some text",
            price: 900.00,
            quantity: 10
        },
        ]
    },
    {
        name:"Submarine",
        details:[{
            name: "Crispy Chicken Submarine (Large)",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 2000.00,
            quantity: 10
        },
        {
            name: "Crispy Chicken Submarine (Regular)",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 1500.00,
            quantity: 10
        },
        {
            name: "Chicken Submarine (Large)",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 1800.00,
            quantity: 10
        },
        {
            name: "Chicken Submarine (Regular)",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 1400.00,
            quantity: 10
        },
        {
            name: "Grinder Submarine",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 2300.00,
            quantity: 10
        },
        {
            name: "Cheese Submarine",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 2200.00,
            quantity: 10
        },
        {
            name: "Double Cheese n Chicken Submarine",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 1900.00,
            quantity: 10
        },
        {
            name: "Special Horgie Submarine",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 2800.00,
            quantity: 10
        },
        {
            name: "MOS Special Submarine",
            img: "img/submarine/submarine.jpg",
            par: "some text",
            price: 3000.00,
            quantity: 10
        },
        ]
    },
    {
        name:"Fries",
        details:[{
            name: "Steak Fries (Large)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 1200.00,
            quantity: 10
        },
        {
            name: "Steak Fries (Medium)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 600.00,
            quantity: 10
        },
        {
            name: "French Fries (Large)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 800.00,
            quantity: 10
        },
        {
            name: "French Fries (Medium)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 650.00,
            quantity: 10
        },
        {
            name: "French Fries (Small)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 450.00,
            quantity: 10
        },
        {
            name: "Sweet Potato Fries (Large)",
            img: "img/fries/fries.jpg",
            par: "some text",
            price: 600.00,
            quantity: 10
        }
        ]
    },
    {
        name:"Pasta",
        details:[{
            name: "Chicken n Cheese Pasta",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 1600.00,
            quantity: 10
        },
        {
            name: "Chicken Penne Pasta",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 1700.00,
            quantity: 10
        },
        {
            name: "Ground Turkey Pasta Bake",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 2900.00,
            quantity: 10
        },
        {
            name: "Creamy Shrimp Pasta",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 2000.00,
            quantity: 10
        },
        {
            name: "Lemon Butter Pasta",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 1950.00,
            quantity: 10
        },
        {
            name: "Tagliatelle Pasta",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 2400.00,
            quantity: 10
        },
        {
            name: "Baked Ravioli",
            img: "img/pasta/pasta.jpg",
            par: "some text",
            price: 2000.00,
            quantity: 10
        }
        ]
    },
    {
        name:"Chicken",
        details:[{
            name: "Fried Chicken (Small)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 1200.00,
            quantity: 10
        },
        {
            name: "Fried Chicken (Regular)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 2300.00,
            quantity: 10
        },
        {
            name: "Fried Chicken (Large)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 3100.00,
            quantity: 10
        },
        {
            name: "Hot Wings (Large)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 2400.00,
            quantity: 10
        },
        {
            name: "Devilled Chicken (Large)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 900.00,
            quantity: 10
        },
        {
            name: "BBQ Chicken (Regular)",
            img: "img/chicken/chicken.jpg",
            par: "some text",
            price: 2100.00,
            quantity: 10
        }
        ]
    },
    {
        name:"Beverages",
        details:[{
            name: "Pepsi (330ml)",
            img: "img/beverages/beverages.jpg",
            par: "some text",
            price: 990.00,
            quantity: 10
        },
        {
            name: "Coca-Cola (330ml)",
            img: "img/beverages/beverages.jpg",
            par: "some text",
            price: 1230.00,
            quantity: 10
        },
        {
            name: "Sprite (330ml)",
            img: "img/beverages/beverages.jpg",
            par: "some text",
            price: 1500.00,
            quantity: 10
        },
        {
            name: "Mirinda (330ml)",
            img: "img/beverages/beverages.jpg",
            par: "some text",
            price: 850.00,
            quantity: 10
        }
        ]
    }
];

let burger = [{
    name: "Classic Burger (Large)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 750.00,
    quantity: 10
},
{
    name: "Classic Burger (Regular)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1500.00,
    quantity: 10
},
{
    name: "Turkey Burger",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1600.00,
    quantity: 10
},
{
    name: "Chicken Burger (Large)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1400.00,
    quantity: 10
},
{
    name: "Chicken Burger (Regular)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 800.00,
    quantity: 10
},
{
    name: "Cheese Burger (Large)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1000.00,
    quantity: 10
},
{
    name: "Cheese Burger (Regular)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 600.00,
    quantity: 10
},
{
    name: "Bacon Burger",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 650.00,
    quantity: 10
},
{
    name: "Shawarma Burger",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 800.00,
    quantity: 10
},
{
    name: "Olive Burger",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1800.00,
    quantity: 10
},
{
    name: "Double-Cheese Burger",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1250.00,
    quantity: 10
},
{
    name: "Crispy Chicken Burger (Regular)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1200.00,
    quantity: 10
},
{
    name: "Crispy Chicken Burger (Large)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1600.00,
    quantity: 10
},
{
    name: "Paneer Burger",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 900.00,
    quantity: 10
},
];

let fries = [{
    name: "Steak Fries (Large)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1200.00,
    quantity: 10
},
{
    name: "Steak Fries (Medium)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 600.00,
    quantity: 10
},
{
    name: "French Fries (Large)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 800.00,
    quantity: 10
},
{
    name: "French Fries (Medium)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 650.00,
    quantity: 10
},
{
    name: "French Fries (Small)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 450.00,
    quantity: 10
},
{
    name: "Sweet Potato Fries (Large)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 600.00,
    quantity: 10
}
];

let pasta = [{
    name: "Chicken n Cheese Pasta",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1600.00,
    quantity: 10
},
{
    name: "Chicken Penne Pasta",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1700.00,
    quantity: 10
},
{
    name: "Ground Turkey Pasta Bake",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 2900.00,
    quantity: 10
},
{
    name: "Creamy Shrimp Pasta",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 2000.00,
    quantity: 10
},
{
    name: "Lemon Butter Pasta",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1950.00,
    quantity: 10
},
{
    name: "Tagliatelle Pasta",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 2400.00,
    quantity: 10
},
{
    name: "Baked Ravioli",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 2000.00,
    quantity: 10
}
];

let chicken = [{
    name: "Fried Chicken (Small)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1200.00,
    quantity: 10
},
{
    name: "Fried Chicken (Regular)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 2300.00,
    quantity: 10
},
{
    name: "Fried Chicken (Large)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 3100.00,
    quantity: 10
},
{
    name: "Hot Wings (Large)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 2400.00,
    quantity: 10
},
{
    name: "Devilled Chicken (Large)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 900.00,
    quantity: 10
},
{
    name: "BBQ Chicken (Regular)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 2100.00,
    quantity: 10
}
];

let beverages = [{
    name: "Pepsi (330ml)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 990.00,
    quantity: 10
},
{
    name: "Coca-Cola (330ml)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1230.00,
    quantity: 10
},
{
    name: "Sprite (330ml)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 1500.00,
    quantity: 10
},
{
    name: "Mirinda (330ml)",
    img: "img/classic burger.jpg",
    par: "some text",
    price: 850.00,
    quantity: 10
}
];

function updateMenu(Obj){
    let foods = document.getElementById("foods");
    let content = `<div class="row my-lg-5 my-sm-3 justify-content-center">`;
    let count = 0;
    Obj.details.forEach(data =>{
        
        if(count!=3){
            content += `<div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${data.img}" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.par}</p>
                            <p>Rs.${data.price}</p>
                                
                                <p>Available : ${data.quantity}</p>
                        </div>
                    </div>
                </div>`
                count++;
        }else{
            count=0;
            content+=`</div><div class="row my-lg-5 my-sm-3 justify-content-center">
                        <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${data.img}" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.par}</p>
                            <p>Rs.${data.price}</p>
                                
                                <p>Available : ${data.quantity}</p>
                        </div>
                    </div>
                </div>`
                count++;
        }
        
    })

    content+=`</div>`;
    foods.innerHTML=content;
}

function updateMenuCart(Obj){
    let foods = document.getElementById("foods");
    let content = `<div class="row my-lg-5 my-sm-3 justify-content-center">`;
    let count = 0;
    Obj.details.forEach(data =>{
        
        if(count!=3){
            content += `<div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${data.img}" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.par}</p>
                            <p>Rs.${data.price}</p>
                                
                                <p>Available : ${data.quantity}</p>
                                <button id="addTocart" class="btn btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>`
                count++;
        }else{
            count=0;
            content+=`</div><div class="row my-lg-5 my-sm-3 justify-content-center">
                        <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${data.img}" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.par}</p>
                            <p>Rs.${data.price}</p>
                                
                                <p>Available : ${data.quantity}</p>
                                <button id="addTocart" class="btn btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>`
                count++;
        }
        
    })

    content+=`</div>`;
    foods.innerHTML=content;
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

function getCustomer(){
    let cusName = document.getElementById("name").value;
    let cusTelephone = document.getElementById("telephone").value;
    if(cusName=="" || cusTelephone==""){
        alert("All fields must be filled out");
        return false;
    }else{
        customerDetails.push({
            name:cusName,
            telephone:cusTelephone
        });

        let sectionMenu = document.getElementById("menu");
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
                    <div class="card" style="width: 18rem;">
                        <img src="img//burger/large burger.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Classic Burger (Large)</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <p id="price">Rs.850</p>
                                
                                <p id="quantity">Available : 10</p>
                                <button id="addTocart" class="btn btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="img/burger/classic burger.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Classic Burger (Regular)</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                                <p id="price">Rs.850</p>
                                    
                                    <p id="quantity">Available : 10</p>
                                    <button id="addTocart" class="btn btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="img/burger/turkey burger.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Turkey Burger</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                                <p id="price">Rs.850</p>
                                    
                                    <p id="quantity">Available : 10</p>
                                    <button id="addTocart" class="btn btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-lg-5 my-sm-3 justify-content-center">
                <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="img/burger/chicken burger large.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Chicken Burger (Large)</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <p id="price">Rs.850</p>
                                
                                <p id="quantity">Available : 10</p>
                                <button id="addTocart" class="btn btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="img/burger/chicken burger regular.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Chicken Burger (Regular)</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                                <p id="price">Rs.850</p>
                                    
                                    <p id="quantity">Available : 10</p>
                                    <button id="addTocart" class="btn btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="img/burger/cheese burger regular.jpg" class="card-img-top" height="170px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Cheese Burger (Large)</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                                <p id="price">Rs.850</p>
                                    
                                    <p id="quantity">Available : 10</p>
                                    <button id="addTocart" class="btn btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        sectionMenu.innerHTML=content;        
    }
}

function addToCart(){
    
}