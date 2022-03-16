const countriesElem = document.querySelector(".countries");
const dropDown=document.querySelector(".dropDown");
const dropElem=document.querySelector(".drop");
const region=document.querySelectorAll(".region");


async function getCountry(){
    const url= await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element);
    });
}
getCountry();
function showCountry(data){
    const country =document.createElement("div");
    country.classList.add("country");
    country.innerHTML=` <div class="country-img">
    <img src="${data.flags.svg}" alt="">
</div>
<div class="country-info">
    <h5>${data.name.common}</h5>
    <p><strong>Population:</strong>${data.population}</p>
    <p class="regionName" ><strong>Region:</strong>${data.region}</p>
    <p><strong>Capital:</strong>${data.capital}</p>
</div>`
countriesElem.appendChild(country);
}
dropDown.addEventListener("click",()=>{
    dropElem.classList.toggle("showDropDown");
})
const regionName=document.getElementsByClassName("regionName");
region.forEach(element => {
    element.addEventListener("click",()=>{
        console.log(element);
     Array.from(regionName).forEach(elem => {
         console.log(elem.innerText);
       if(elem.innerText.includes(element.innerText) || elem.nnerText=="ALL"){
       elem.parentElement.parentElement.style.diaplay=="grid"
       }
       else{
        elem.parentElement.parentElement.style.diaplay=="none" 
       }
     });
    })
});

var btn = document.querySelector('button');
 mode = 'white';
function toggle(){
   if(mode == 'white')
        {
        console.log('pressed');
        mode = 'black';
        }
    else{
        console.log('aleready');
        mode = 'white';
    }
    }



btn.onclick = toggle();


