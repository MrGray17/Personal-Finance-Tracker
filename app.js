let transactions = [];

const expenseInp = document.getElementById("bght-btn");
const amountInp = document.getElementById("cost-btn");
const submBtn = document.getElementById("submit");

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
}
submBtn.addEventListener("click" , getUserInfos);