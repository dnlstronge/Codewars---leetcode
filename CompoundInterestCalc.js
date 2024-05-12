// compound interest cal - should take current balance, spec months, interest rate monthly deposit

const compoundInterest = (balance, deposit, rate, duration ) => {
  let monthlyBalance = balance
  function applyMonthlyInt(x) {
    let percent = x / 100 * rate
    //console.log("the montly rate is: ", (percent / 12))
    return percent / 12
  }
  
  for(let i = 0; i < duration; i ++) {
    let tempBalance = applyMonthlyInt(monthlyBalance) + monthlyBalance
    monthlyBalance = tempBalance + deposit
    //console.log("new balnce established")
  }
  
  console.log(monthlyBalance)
  return monthlyBalance
}

compoundInterest(1235, 200, 5.63, 12)
