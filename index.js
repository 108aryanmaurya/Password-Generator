const pw2=document.getElementById('pw')
const copy=document.getElementById('copy')
const length=document.getElementById('len')
const up=document.getElementById('up')
const low=document.getElementById('low')
const num=document.getElementById('nums')
const symb =document.getElementById('symb')
const generator=document.getElementById('generate')

const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbs="1234567890"
const lower="abcdefghijklmnopqrstuvwxyz"
const sym=["!","@",'#',"$","&","%",'~',"-","+","/"]


function password(leng,a,b,c,d){
   console.log(typeof(u))
    x=(leng+(4-leng%4))/4
    // console.log(x)
    let arr=[]
    let ar
    for(i=0;i<i+1;i++)
    {
        if(arr.length>=leng)
        {
            break
        }
    let u=Math.floor((Math.random())*26)
    let l=Math.floor((Math.random())*26)
    let n=Math.floor((Math.random())*10)
    let s=Math.floor((Math.random())*10)
    let ns=sym[s]
    let nu=upper[u]
    let nn=numbs[n]
    let nl=lower[l]
if(a==true){arr.push(nu)  
    console.log("nu")}    
if(b==true){arr.push(nl) 
    console.log("nl")}
if(c==true){arr.push(nn) 
    console.log("nn")}
if(d==true){arr.push(ns) 
    console.log("ns")}
}
ar=arr.toString().replaceAll(",","").trim().slice(arr.length-leng)
return ar
// console.log(ar.length)
// console.log(ar)
}
// password();
generator.addEventListener('click',()=>{

 
    let s=parseInt(length.value)
    console.log(typeof(s))
console.log(typeof(up.checked))
     pw=password(s,up.checked,low.checked,num.checked,symb.checked)

    console.log(pw)
    pw2.innerHTML=pw
   



})
