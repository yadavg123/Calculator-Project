var ans = 0;
var op1 = 0;
var op2 = 0;
var operator = "";
var expression = "";
var prev;
var x = document.getElementById("out");

function fun(value) {
    document.getElementById('abc').play();
    if (typeof value == "number") {
        x.innerHTML += value;
    } else {
        if (value == "AC") {
            x.innerHTML = "";
            ans = 0;
            op1 = 0;
            op2 = 0;
        }
        else if(value=="DEL"){
            var s=x.innerHTML;
            s=s.substring(0, s.length-1);
			x.innerHTML=s;
        } 
        else if (value == "+" || value == "-" || value == "*" || value == "/" || value == "%") {
            op1 = Number(x.innerHTML);
            if (op1 == 0 || op1 !== op1) {
                document.getElementById('xyz').play();
                window.alert("First Enter a valid Operand");
            } else {
                operator += value;
                x.innerHTML = "";
            }
        }
        else if (value == "sign") {
            if (x.innerHTML = "") {
                x.innerHTML += "-";
            } else {
                var i = x.innerHTML;
                x.innerHTML = "-" + i;
            }
        }
        else if (value == ".") {
            x.innerHTML += value;
        }
        else {
            op2 = Number(x.innerHTML);
            if (op2 !== op2) {
                document.getElementById('xyz').play();
                window.alert("First Enter a valid Operand");
            } 
            else if(op1==0 && op2==0){
                x.innerHTML=0;
            }
            else {
                ans = eval(op1 + " " + operator + " " + op2);
                operator = "";
                x.innerHTML = ans;
                op1 = ans;
                op2 = 0;
            }
        }
    }
}