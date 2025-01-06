'use strict';

let save = document.querySelector('#save-button')
save.addEventListener('click' , function(){

  let description = document.querySelector('#Description').value
  let selected = document.querySelector('#select').value
  let amount = +document.querySelector('#amount').value

 console.log(description);

  if(description == '' || selected == '' || amount == '' || isNaN(amount)){
    document.querySelector('#save-error').style = 'display:block'
  }
  else{
    document.querySelector('#save-error').style = 'display:none'
    insert_table(description,selected,amount)
  }
  
})
function insert_table(description,selected,amount){

  let table_body = document.querySelector('#mytable tbody')

  let newRow = table_body.insertRow()

  let cell_0 = newRow.insertCell(0)
  let cell_1 = newRow.insertCell(1)
  let cell_2 = newRow.insertCell(2)
  var cell_3 = newRow.insertCell(3)

  cell_0.textContent = description
  cell_1.textContent = amount
  cell_2.textContent =selected.toUpperCase()
  

  balances_remaining(amount , selected)

function balances_remaining(amount , selected){
     let incomes = +document.querySelector('#incomes').textContent
    let expenses = +document.querySelector('#expenses').textContent
    let balance = +document.querySelector('#balance').textContent
    console.log(incomes + amount);
   if(selected == 'income'){
     incomes += amount
    }
     else{
       expenses += amount
    
    }
    balance = incomes - expenses
   document.querySelector('#incomes').textContent = incomes
   document.querySelector('#expenses').textContent = expenses
    document.querySelector('#balance').textContent = balance

    cell_3.textContent = balance
}
}

