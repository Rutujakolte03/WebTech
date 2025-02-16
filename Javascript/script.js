let bill = 300
if(bill >= 500 && bill<1000) {
    let dis = 2/100*bill;
    console.log(`Dear user your payable amount is ${bill-dis} with the discount of ${dis}`)
}

else if(bill>=1000 && bill < 5000) {
    let dis = 5/100*bill;
    console.log(`Dear user your payable amount is ${bill-dis} with the discount of ${dis}`)
}

else if(bill>= 5000) {
    let dis = 10/100*bill;
    console.log(`Dear user your payable amount is ${bill-dis} with the discount of ${dis}`)

}
else{
    console.log(`Discount not applied so u have to pay entire amount ${bill}`)
    
}