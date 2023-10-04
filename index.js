const addition=document.querySelector(".addition");
num=document.querySelector(".num");
subtraction=document.querySelector(".subtraction");

let a=1;

addition.addEventListener("click" , ()=>{
    a++;
    a=(a<10) ? "0" +a:a;
    num.innerText=a;
    console.log(a);
});
subtraction.addEventListener("click" , ()=>{
    if(a>1){
        a--;
        a=(a<10) ? "0" +a:a;
        num.innerText=a;
    }
   
});
