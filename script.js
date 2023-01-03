//Day 7
const xhr=new XMLHttpRequest();
xhr.open('GET',"https://restcountries.com/v3.1/all")
xhr.onload=function(){
//1a
  var jsonobj=JSON.parse(this.response)
var asiaregion=jsonobj.filter((element)=>
element.region=='Asia')
console.log(asiaregion);

//1b
var pop2l=jsonobj.filter((element)=>element.pop<200000)
console.log(pop2l)

//1c
jsonobj.forEach(element=>{
  console.log(element.name)
  console.log(element.capital + ""+element.flag)
});

//1d
var tot=jsonobj.reduce((acc,element)=>acc+element.pop,0)
console.log(tot);

var countriesUSDollars=jsonobj.filter((element)=>Object.keys(element.currencies || {}).includes('USD'))
console.log(countriesUSDollars)
}
xhr.send();

//Output
