// const container = document.getElementById('container')
// const toppings = document.getElementsByClassName('toppings')
// const classLi = document.getElementsByTagName('li')
// const classFondoM = document.getElementsByClassName('fondo-marron')
// const classs = document.querySelector('ul li:not(.fondo-marron)')
// // console.log(container.innerText);
// // console.log(toppings);
// // console.log(classLi);
// // console.log(classFondoM);
// console.log( classs);
// toppingsColor.style.backgroundColor = '#0003'
// const toppingsColor = document.querySelector('.fondo-marron')
// console.log(toppingsColor);

//  const toppings = document.querySelector('.toppings')
// toppings.classList.contains('toppings')
//  console.log(toppings.classList.contains('topping'));
// const toppings = document.getElementById('list-toppings')

// console.log(toppings.nextSibling); 
const toppings = document.getElementsByClassName('toppings')


for (const getTopping of toppings) {

    getTopping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    })
}