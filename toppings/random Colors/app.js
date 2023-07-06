const button = document.getElementById('button')
const color = document.getElementById('color')



function colorHexRandom(){
    let digitos = "0123456789ABCDEF"
    let color = '#'

    for(let i=0; i<6 ; i++ ){
        let numberRandom = Math.floor(Math.random()*16)
        color += digitos[numberRandom]
    }
    // console.log(color);
    return color
}

button.addEventListener('click', ()=>{
    let randomColor = colorHexRandom()
    color.textContent = randomColor
    document.body.style.backgroundColor = randomColor
})