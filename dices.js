var d1=Math.floor(Math.random()*6)+1;
var d2=Math.floor(Math.random()*6)+1;

var s1="./images/dice"+d1+".png";
var s2="./images/dice"+d2+".png";

var i1=document.querySelectorAll("img")[0];
var i2=document.querySelectorAll("img")[1];
i1.setAttribute("src",s1);
i2.setAttribute("src",s2);

if(d1>d2)
{
  document.querySelector("h1").innerHTML="Payer A Wins";
}
else if(d1<d2)
{
  document.querySelector("h1").innerHTML="Payer B Wins";
}
else
{
  document.querySelector("h1").innerHTML="Match Draw";
}
