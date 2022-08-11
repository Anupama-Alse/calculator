function clearfield(){
  document.getElementById("field").value='';
}
function calc(dig){
document.getElementById("field").value+=dig;
}
function solve(){
  let a=document.getElementById("field").value;
  let b=eval(a);
  document.getElementById("field").value=b;
}
