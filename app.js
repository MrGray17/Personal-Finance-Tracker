let transactions = JSON.parse(localStorage.getItem("myExpanses")) || [];

const expenseInp = document.getElementById("bght-btn");
const amountInp = document.getElementById("cost-btn");
const submBtn = document.getElementById("submit");
const list = document.getElementById("expense-list");
const clr = document.getElementById("clear");

const getUserInfos = async () => {
    let userBght = expenseInp.value ;
    let userInp = amountInp.value ;
    console.log(userBght, userInp);
    let currentTrans = {
        name : userBght ,
        amount: userInp 
    };
    transactions.push(currentTrans);
    stringTrans = JSON.stringify(transactions);
    localStorage.setItem("myExpanses" , stringTrans);
    console.log(userBght, userInp);
    
    let li = document.createElement("li");
    li.textContent = `${userBght} - $${userInp}` ;
    list.appendChild(li);
}

const ClearBtn = () => {
    list.textContent = "";
}
submBtn.addEventListener("click" , getUserInfos);
clr.addEventListener("click" , ClearBtn);