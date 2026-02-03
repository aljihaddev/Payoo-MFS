// <<<<< ========== All Variables Start ========== >>>>>
let logout = document.getElementById("logout")
let ltstPay = document.getElementById("ltstPay")

// Add Money Variables Start ==========>>
let addMoney = document.getElementById("addMoney")
let addMoneyOptn = document.getElementById("addMoneyOptn")
let addMoneyInOne = document.getElementById("addMoneyInOne")
let addMoneyInTwo = document.getElementById("addMoneyInTwo")
let addMoneyInThree = document.getElementById("addMoneyInThree")
let addMoneyInFour = document.getElementById("addMoneyInFour")
let addMoneyErrorOne = document.getElementById("addMoneyErrorOne")
let addMoneyNextBtn = document.getElementById("addMoneyNextBtn")
let addMoneyErrorTwo = document.getElementById("addMoneyErrorTwo")
let addMoneyFormOne = document.getElementById("addMoneyFormOne")
let addMoneyFormTwo = document.getElementById("addMoneyFormTwo")
let addMoneyBtn = document.getElementById("addMoneyBtn")
// Add Money Variables End ==========>>

// Cashout Variables Start ==========>>
let cashout = document.getElementById("cashout")
let cashoutOptn = document.getElementById("cashoutOptn")
let cashoutInOne = document.getElementById("cashoutInOne")
let cashoutInTwo = document.getElementById("cashoutInTwo")
let cashoutInThree = document.getElementById("cashoutInThree")
let cashoutErrorOne = document.getElementById("cashoutErrorOne")
let cashoutNextBtn = document.getElementById("cashoutNextBtn")
let cashoutErrorTwo = document.getElementById("cashoutErrorTwo")
let cashoutFormOne = document.getElementById("cashoutFormOne")
let cashoutFormTwo = document.getElementById("cashoutFormTwo")
let cashoutBtn = document.getElementById("cashoutBtn")
// Cashout Variables End ==========>>

// Transfer Variables Start ==========>>
let transfer = document.getElementById("transfer")
let transferOptn = document.getElementById("transferOptn")
let transferInOne = document.getElementById("transferInOne")
let transferInTwo = document.getElementById("transferInTwo")
let transferInThree = document.getElementById("transferInThree")
let transferErrorOne = document.getElementById("transferErrorOne")
let transferNextBtn = document.getElementById("transferNextBtn")
let transferErrorTwo = document.getElementById("transferErrorTwo")
let transferFormOne = document.getElementById("transferFormOne")
let transferFormTwo = document.getElementById("transferFormTwo")
let transferBtn = document.getElementById("transferBtn")
// Transfer Variables End ==========>>

// Transfer Variables Start ==========>>
let bonus = document.getElementById("bonus")
let bonusOptn = document.getElementById("bonusOptn")
let bonusForm = document.getElementById("bonusForm")
let bonusIn = document.getElementById("bonusIn")
let bonusBtn = document.getElementById("bonusBtn")
let bonusError = document.getElementById("bonusError")
// Transfer Variables End ==========>>

// Pay Bill Variables Start ==========>>
let bill = document.getElementById("bill")
let billOptn = document.getElementById("billOptn")
let billInOne = document.getElementById("billInOne")
let billInTwo = document.getElementById("billInTwo")
let billInThree = document.getElementById("billInThree")
let billInFour = document.getElementById("billInFour")
let billErrorOne = document.getElementById("billErrorOne")
let billNextBtn = document.getElementById("billNextBtn")
let billErrorTwo = document.getElementById("billErrorTwo")
let billFormOne = document.getElementById("billFormOne")
let billFormTwo = document.getElementById("billFormTwo")
let billBtn = document.getElementById("billBtn")
// Pay Bill Variables End ==========>>
// <<<<< ========== All Variables End ========== >>>>>

// <<<<<<< ================================================== >>>>>>>

// <<<<< ========== All Logic Start ========== >>>>>

// Login Page Logic Start ==========>>
logout.addEventListener("click", () => {
    window.location.href = "index.html"
})
// Login Page Logic End ==========>>

// Add Money Logic Start ==========>>
addMoney.addEventListener("click", () => {
    ltstPay.style.display = "none"
    addMoneyOptn.style.display = "block"
    cashoutOptn.style.display = "none"
    transferOptn.style.display = "none"
    bonusOptn.style.display = "none"
    billOptn.style.display = "none"
})

addMoneyNextBtn.addEventListener("click", ()=>{
    if (addMoneyInOne.value == "" || addMoneyInTwo.value == ""){
        addMoneyErrorOne.style.display = "block"
        addMoneyErrorTwo.style.display = "none"
    }
    else if (addMoneyInOne.value !== "American Express" && addMoneyInTwo.value !== "123456789012"){
        addMoneyErrorOne.style.display = "none"
        addMoneyErrorTwo.style.display = "block"
    }
    else{
        addMoneyFormOne.style.display = "none"
        addMoneyFormTwo.style.display = "block"
        addMoneyErrorTwo.style.display = "none"
    }
})

addMoneyBtn.addEventListener("click", ()=>{
    if (addMoneyInThree.value == "" || addMoneyInFour.value == ""){
        addMoneyErrorOne.style.display = "block"
        addMoneyErrorTwo.style.display = "none"
    }
    else if (
        addMoneyInFour.value !== "1234"){
        addMoneyErrorOne.style.display = "none"
        addMoneyErrorTwo.style.display = "block"
    }
    else{
        addMoneyOptn.style.display = "none"
        addMoneyErrorTwo.style.display = "none"
        window.location.href = "index3.html"
    }
})
// Add Money Logic End ==========>>

// Cashout Logic Start ==========>>
cashout.addEventListener("click", () => {
    ltstPay.style.display = "none"
    addMoneyOptn.style.display = "none"
    cashoutOptn.style.display = "block"
    transferOptn.style.display = "none"
    bonusOptn.style.display = "none"
    billOptn.style.display = "none"
})

cashoutNextBtn.addEventListener("click", ()=>{
    if (cashoutInOne.value == "" || cashoutInTwo.value == ""){
        cashoutErrorOne.style.display = "block"
        cashoutErrorTwo.style.display = "none"
    }
    else{
        cashoutFormOne.style.display = "none"
        cashoutFormTwo.style.display = "block"
        cashoutErrorOne.style.display = "none"
    }
})

cashoutBtn.addEventListener("click", ()=>{
    if (cashoutInThree.value == ""){
        cashoutErrorOne.style.display = "block"
        cashoutErrorTwo.style.display = "none"
    }
    else if (
        cashoutInThree.value !== "1234"){
        cashoutErrorOne.style.display = "none"
        cashoutErrorTwo.style.display = "block"
    }
    else{
        cashoutOptn.style.display = "none"
        cashoutErrorTwo.style.display = "none"
        window.location.href = "index3.html"
    }
})
// Cashout Logic End ==========>>

// Transfer Money Logic Start ==========>>
transfer.addEventListener("click", () => {
    ltstPay.style.display = "none"
    addMoneyOptn.style.display = "none"
    cashoutOptn.style.display = "none"
    transferOptn.style.display = "block"
    bonusOptn.style.display = "none"
    billOptn.style.display = "none"
})

transferNextBtn.addEventListener("click", ()=>{
    if (transferInOne.value == "" || cashoutInTwo.value == ""){
        transferErrorOne.style.display = "block"
        transferErrorTwo.style.display = "none"
    }
    else{
        transferFormOne.style.display = "none"
        transferFormTwo.style.display = "block"
        transferErrorOne.style.display = "none"
    }
})

transferBtn.addEventListener("click", ()=>{
    if (transferInThree.value == ""){
        transferErrorOne.style.display = "block"
        transferErrorTwo.style.display = "none"
    }
    else if (
        transferInThree.value !== "1234"){
        transferErrorOne.style.display = "none"
        transferErrorTwo.style.display = "block"
    }
    else{
        transferOptn.style.display = "none"
        transferErrorTwo.style.display = "none"
        window.location.href = "index3.html"
    }
})
// Transfer Money Logic End ==========>>

// Get Bonus Logic Start ==========>>
bonus.addEventListener("click", () => {
    ltstPay.style.display = "none"
    addMoneyOptn.style.display = "none"
    cashoutOptn.style.display = "none"
    transferOptn.style.display = "none"
    bonusOptn.style.display = "block"
    billOptn.style.display = "none"
})

bonusBtn.addEventListener("click", ()=>{
    if (bonusIn.value == ""){
        bonusError.style.display = "block"
    }
    else{
        window.location.href = "index3.html"
    }
})
// Get Bonus Logic End ==========>>

// Bill Logic Start ==========>>
bill.addEventListener("click", () => {
    ltstPay.style.display = "none"
    addMoneyOptn.style.display = "none"
    cashoutOptn.style.display = "none"
    transferOptn.style.display = "none"
    bonusOptn.style.display = "none"
    billOptn.style.display = "block"
})

billNextBtn.addEventListener("click", ()=>{
    if (billInOne.value == "" || billInTwo.value == ""){
        billErrorOne.style.display = "block"
        billErrorTwo.style.display = "none"
    }
    else{
        billFormOne.style.display = "none"
        billFormTwo.style.display = "block"
    }
})

billBtn.addEventListener("click", ()=>{
    if (billInThree.value == "" || billInFour.value == ""){
        billErrorOne.style.display = "block"
        billErrorTwo.style.display = "none"
    }
    else if (
        billInFour.value !== "1234"){
        billErrorOne.style.display = "none"
        billErrorTwo.style.display = "block"
    }
    else{
        billOptn.style.display = "none"
        billErrorTwo.style.display = "none"
        window.location.href = "index3.html"
    }
})
// Bill Logic End ==========>>

// Transactions Logic Start ==========>>
transactions.addEventListener("click", () => {
    ltstPay.style.display = "block"
    addMoneyOptn.style.display = "none"
    cashoutOptn.style.display = "none"
    transferOptn.style.display = "none"
    bonusOptn.style.display = "none"
    billOptn.style.display = "none"
})
// Transactions Logic End ==========>>

// <<<<< ========== All Logic End ========== >>>>>