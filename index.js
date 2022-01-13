let outputscreen=document.getElementById('output-screen');
function display(num){
    outputscreen.value+=num;
}
function Calculate(){
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch(err) {
        alert("Invalid Syntax");
    } 
}
function Clear(){
    outputscreen.value="";
}