document.getElementById('calculate_btn').addEventListener('click',function(){
    // income 
  const incomeAmount=getInputFieldById('income-value');
//   console.log(incomeAmount)

// expenses
  const foodAmount=getElementValueById('food');
//   console.log(foodAmount)
  const rentAmount=getElementValueById('rent');
//   console.log(rentAmount)
  const clothesAmount=getElementValueById('clothes');
//   console.log(clothesAmount)
  

  const expenses=foodAmount+rentAmount+clothesAmount;
  const totalExpenses=document.getElementById('total-expenses')
  const totalExpensesString=parseFloat(expenses);
  totalExpenses.innerText=totalExpensesString;
//   console.log(expenses);
//   console.log(typeof totalExpensesString)

  const balance=incomeAmount-expenses;
  const totalBalance=document.getElementById('total-balance')
  totalBalance.innerText=balance;
 
})

document.getElementById('save-btn').addEventListener('click',function(){
    const incomeAmount=getInputFieldById('income-value');
    const saveAmount=getElementValueById('save-value');

    const savingAmountSet=document.getElementById('saving-amount');
const savingAmount=incomeAmount/100*saveAmount;
const savingAmountString=parseFloat(savingAmount);
savingAmountSet.innerText=savingAmountString;

const totalExpenses=document.getElementById('total-expenses').innerText;
const totalexpenseNumber= parseFloat(totalExpenses) ;
const totalFinalExpenses=totalexpenseNumber +savingAmountString;
const remainingBalance=document.getElementById('remaining-balance');
const remaining=incomeAmount-totalFinalExpenses;
remainingBalance.innerText=remaining;
// console.log(remaining)


// console.log(typeof totalexpenseNumber)
// console.log(totalFinalExpenses)




//   //   const savings=incomeAmount/100*
})













// document.getElementById('calculate_btn').addEventListener('click',function(){
//     const incomeField= document.getElementById('income-value');
//     const incomeFieldString=incomeField.value ;

//     console.log(incomeFieldString)
    

// })