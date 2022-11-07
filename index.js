 let num=" ";
function number (num){
    var result =document.getElementById("input")
    if( num === '.' && result.value.includes('.')) return
    if( num === '+' && result.value.includes('+')) return
    if( num === '-' && result.value.includes('-')) return
    if( num === '*' && result.value.includes('*')) return
   if( num === '/' && result.value.includes('/')) return
   result.value += num;
    }
function result (){
    var result = document.getElementById("input")
    result.value =eval(result.value)
}
 function clearResult(){
    var result = document.getElementById("input")
    result.value =" "
 }
 function deleteChar(){
    var number=document.getElementById("input")
    var remove= number.value;
    remove=remove.slice(0,-1)
    number.value=remove
 } 
