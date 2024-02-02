// add	107
// subtract	109
// decimal point	110
// divide	111
// 0	48
// 1	49
// 2	50
// 3	51
// 4	52
// 5	53
// 6	54
// 7	55
// 8	56
// 9	57
var values=document.getElementsByClassName("value");
var opp=document.getElementsByClassName("operator");
console.log(opp[0]);
console.log(values[0].textContent);
console.log(values[0].textContent);
document.onkeydown=writeit;
function writeit(e){
    var num;
    var ex;
    let key=e.keyCode;
    if(values[0].textContent=="0"){
    
        if(key==49){
            values[0].textContent="1";
        }
        if(key==50){
            values[0].textContent="2";
        }
        if(key==51){
            values[0].textContent="3";
        }
        if(key==52){
            values[0].textContent="4";
        }
        if(key==53){
            values[0].textContent="5";
        }
        if(key==54){
            values[0].textContent="6";
        }
        if(key==55){
            values[0].textContent="7";
        }
        if(key==56){
            values[0].textContent="8";
        }
        if(key==57){
            values[0].textContent="9";
        }
    }else{
        
        
        if(key==191){
            opp[0].classList.add("highlight");
            num=values[0].textContent;
            values[0].textContent=" ";
            var o = "div";
            

        }
        if(key==16 && key==56){
            opp[1].classList.add("highlight");
            num=values[0].textContent;
            values[0].textContent=" ";
            var o= "mul";
            
        }
        if(key==189){
            opp[2].classList.add("highlight");
            num=values[0].textContent;
            values[0].textContent=" ";
            
            var o="sub";
        }
            
        if(key==16 && key==187){
            opp[3].classList.add("highlight");
            num=values[0].textContent;
            values[0].textContent=" ";
            var o ="add";
            
        }
        if(key==48){
            values[0].textContent=values[0].textContent+"0"
        }
        if(key==49){
            values[0].textContent=values[0].textContent+"1";
        }
        if(key==50){
            values[0].textContent=values[0].textContent+"2";
        }
        if(key==51){
            values[0].textContent=values[0].textContent+"3";
        }
        if(key==52){
            values[0].textContent=values[0].textContent+ "4";
        }
        if(key==53){
            values[0].textContent=values[0].textContent+ "5";
        }
        if(key==54){
            values[0].textContent=values[0].textContent+ "6";
        }
        if(key==55){
            values[0].textContent=values[0].textContent+ "7";
        }
        if(key==56){
            values[0].textContent=values[0].textContent+"8";
            ex=num+"/"+values[0].textContent;
        }
        if(key==57){
            values[0].textContent=values[0].textContent+"9";
            ex=num+"/"+values[0].textContent;
        }
        if(key==190){
            values[0].textContent=values[0].textContent+".";
        }
        
        if(key==187){
            opp[4].classList.add("highlight");
            
            var result=eval(num);
           
        }
        }
        console.log(num);
        console.log(values[0].textContent);
        console.log(ex);
        console.log(result);
        
 }


opp[0].onkeyup= kup;
opp[1].onkeyup= kup;
opp[2].onkeyup= kup;
opp[3].onkeyup= kup;
   function kup(e){
    let k=e.keyCode;
    if(k==191){
        opp[0].classList.remove("highlight");
    }
    if(k==189){
        opp[2].classList.remove("highlight");
    }
    let num=values[0].textContent;
    values[0].textContent=" "
   }

