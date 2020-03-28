var p = Math.floor(100*Math.random())
console.log(p)
var a= 0
var b=100
var t =0
var x = document.getElementById("myAudio");
function reload(){
    location.reload()
}
var bt=document.getElementById("bt")

function checkNum(){
     t =t+1
    var n1= document.getElementById("num").value
    var n=parseInt(n1)
    var info= document.getElementById("info")
    var times=document.getElementById("times")
    times.innerHTML="You spent "+t+" times."
    if (n==p) {
        info.innerHTML="You guessed it."
        el.hidden=true
        bt.hidden= false
        bt.addEventListener("click",reload)
        x.play()
    } else if(n!=p) {
        if (n>a&&n<b) {
            if (n<p) {
           a=n
            info.innerHTML="Numbers are between "+a+"and"+b+"."
        } else if (n>p) {
            b=n
            info.innerHTML="Numbers are between "+a+"and"+b+"."
        } 
        } 
        else {
            info.innerHTML="Please enter a number between "+ a + " and " + b + "."
        }
    }
}
var el = document.getElementById("button")

el.addEventListener("click",checkNum)




