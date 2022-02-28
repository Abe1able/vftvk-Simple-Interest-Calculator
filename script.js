function updateRate()
{
     var rateval = document.getElementById("rate").value; 
     document.getElementById("rate_val").innerText = rateval +"%"; 
    } 
function compute() 
{ 
    var principal = document.getElementById("principal").value; // stores the principal entered by the user
    var rate = document.getElementById("rate").value; // stores user entered rate
    var years = document.getElementById("years").value; //stores user entered years
    var interest = principal * years * rate / 100; 
    var year = new Date().getFullYear() + parseInt(years); //obtains year by adding user entered years to current year 
    if (principal == "" || principal<=0) {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }
    else {
    document.getElementById("result").innerHTML="If you deposit "+"<span class='highlight'>" + principal + "</span>"+",\<br\>at an interest rate of "+ "<span class='highlight'>" + rate+ "</span>" + "%\<br\>You will receive an amount of " + "<span class='highlight'>"+ interest + "</span>" +",\<br\>in the year " + "<span class='highlight'>" + year + "</span>" +" \<br\>" 
    }
    //document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}

