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
const blankElemState=tabAmountSection.innerHTML;
const btns = document.querySelector('.buttons');    
let amount=0; let purchases=[];

// const wings = document.querySelector('#wingsFood');
// wings.assign('wings', 6.00)
// console.log(wings);

//Functions

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








//------------------------------------
// function addTab(event) {
//     //make index for getting data
//     var i=-1; var elem=this;
//     food.forEach(function (a,c){if(elem.innerText==a.name){i=c}});
//     if(i==-1){return alert("There is nothing in the respective options array that links to the requested item.. if you are a client playing around, kindly cease it")}
//     purchases.push(food[i]); 
//     //if not returned by now, the item is valid and now I'm taking record
//     //all you have to do for drinks or merch is change which array you're
//     //  doing this function to(like food, drink, or merch)
//     //please note that document.querySelector ONLY selects ONE element, 
//     //for your purpose, please use document.querySelectAll
//     //you can easily just have it in one array for simplicity to add it to ALL 
//     // buttons, but since you're not doing that, change which variable is being forEach-ed for the 3 different sections
//     //btw i would console.warn when there's nothing in the array linked to the 
//     // requested item(as for what you gave us, a lot of the items have no instance in the array)
//     //finally, there was a logical error occuring when it first worked.. with each click, NEW
//     // elements of price and trashbuttons were created.. I understand the names adding up as one person can buy many things, 
//     // but I made it that the price and trashbuttons dont make new ones each time
    
//     //example of reference logic to see if an index of purchase is in an array
//     function purchaseIsInArray(indexOfPurchase, arrayInQuestion){
//       return arrayInQuestion.includes(purchases[indexOfPurchase])
//     }
    
//     //Name Div
//     const tabNames = document.createElement('div');
//     tabNames.classList.add('tabNameList');

//     //Amt Div
//     const tabAmt = document.createElement('div');
//     tabAmt.classList.add('tabAmtList');

//     //Create LI Tab Names
//     const tabNameList = document.createElement('li');
//     tabNameList.innerText = food[i].name;    
//     tabNameList.classList.add('tabScreenNames');
//     tabNames.appendChild(tabNameList);

//     //Create LI Tab Amounts
//     //amount+=food[i].price;
//     const tabAmountList = document.createElement('li');
//     tabAmountList.innerText = food[i].price;
//     tabAmountList.classList.add('tabScreenAmount');
//     tabAmt.appendChild(tabAmountList);

//     //Check trash button
//     function resetEverything(ev){
//       tabAmountSection.innerHTML=blankElemState;
//       tabNameSection.innerHTML=blankElemState;
//       amount=0; purchases=[];
//     } 
//     const trashButton = document.createElement("button")
//     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//     trashButton.classList.add("trash-btn");
//     trashButton.addEventListener('click', resetEverything);

//     //append to LIs
//     tabNameSection.appendChild(tabNames);
//     if(tabAmountSection.innerHTML!=blankElemState){
//       tabAmountSection.innerHTML=blankElemState;
//     }
//     tabAmountSection.appendChild(tabAmt);
//     tabAmountSection.appendChild(trashButton);
// };




//Events
//btns.forEach(a=>a.addEventListener('click', addTab));
//btns.addEventListener('click', addTab);