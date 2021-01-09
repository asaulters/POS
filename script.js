//Vars

const food = [
    {
        name: "Pulled Pork Nachos",
        price: 10.00
    },
    {
        name: "6 Wings",
        price: 5.00
    },
    {
        name: "Pork Rinds",
        price: 4.00
    }
];
const drinks = [
    {
        name: "Well Vodka",
        price: 5.00
    },
    {
        name: "Well Whiskey",
        price: 5.00
    }
];
const merch = [
    {
        name: "Well Vodka",
        price: 5.00
    },
    {
        name: "T Shirt",
        price: 20.00
    }
];

const tabNameSection = document.querySelector('.tabNameList');
const tabAmountSection = document.querySelector('.tabAmountList');
const btns = document.querySelector('.foodButtons');


// const wings = document.querySelector('#wingsFood');
// wings.assign('wings', 6.00)
// console.log(wings);

//Functions
function addTab(event) {
    
    //Name Div
    const tabNames = document.createElement('div');
    tabNames.classList.add('tabNameList');

    //Amt Div
    const tabAmt = document.createElement('div');
    tabAmt.classList.add('tabAmtList');

    //Create LI Tab Names
    const tabNameList = document.createElement('li');
    tabNameList.innerText = food[0].name;    
    tabNameList.classList.add('tabScreenNames');
    tabNames.appendChild(tabNameList);

    //Create LI Tab Amounts
    const tabAmountList = document.createElement('li');
    tabAmountList.innerText = food[0].price;
    tabAmountList.classList.add('tabScreenAmount');
    tabAmt.appendChild(tabAmountList);

     //Check trash button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");

    //append to LIs
    tabNameSection.appendChild(tabNames);
    tabAmountSection.appendChild(tabAmt);
    tabAmountSection.appendChild(trashButton);
};








//Events
btns.addEventListener('click', addTab);