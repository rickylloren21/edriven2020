function mainForm(){
    var subtotal, tax, total, amountPaid, change, percentToGet, pay, change;
    pay = document.getElementById("pay")
    percentToGet = 12;
    subtotal = document.getElementById("subtotal").value;
    tax = Number((percentToGet / 100) * subtotal);
    total =  Number(subtotal) + Number(tax);
    //change = Number(subtotal) - Number(total);

    amountPaid = Number(total);
    change = Number(amountPaid-total);

    if(subtotal > 99){
        document.getElementById("tax").value = tax
        document.getElementById("total").value = total
        document.getElementById("amountpaid").value = amountPaid
        document.getElementById("amountpaid").disabled = false;
        document.getElementById("amountpaid").min = total
        document.getElementById("change").value = change
        
        document.getElementById("pay").style.backgroundColor = "green";
    }
    else if(subtotal <= 99){
    document.getElementById("pay").style.backgroundColor = "red";
    }
    else{
        document.getElementById("pay").style.backgroundColor = "red";
    }
};