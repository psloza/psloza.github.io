function compute()
{
     var p = document.getElementById("principal").value;
     var i = document.getElementById("IntRate").value;
     var y = document.getElementById("numyear").value;
     var result_1 = p * i *y;
     var result_2 = result_1 * 0.01;
     var result_final = Number(result_2) + Number(p);
     var current_year = 2021;
     var future_year = Number(current_year) + Number(y);

     if (p>0) {
         alert('If you deposit ' + p + ','+ ' at an interest rate of ' + i + '. ' + 'You will receive an amount of ' + result_final + ', in the year ' + future_year);
     }
     else alert ('Enter a positive number')

    }
        