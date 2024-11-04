let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator =document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');
let description = document.querySelector('.description');
let carInfo = document.querySelector('.car-information');
let h2 = document.querySelector('h2');


let active = 0;
let firstPosition = 0;
let lastPosition =  items.length -1
prevButton.onclick = () => {
    // alert("Botão Prev")
    // let itemOld = container.querySelector('.list .item.active');
    // itemOld.classList.remove('active');
    // list.style.setProperty('--calculation',-1);
    list.style.setProperty('--calculation', active === 0 ? '-1' : '-1');
    active = active - 1 < firstPosition ? lastPosition: active - 1;
    setSlider();
    // if (active - 1 < firstPosition) {
    //     active = lastPosition;
    // } else {
    //     active = active - 1;
    // }
    items[active].classList.add('active')

}

nextButton.onclick = () => {
    // console("Botão Next")
    // alert("Botão Prev")
    // list.style.setProperty('--calculation', '1');
    list.style.setProperty('--calculation', active === lastPosition ? '1' : '1');
    active = active + 1 > lastPosition ? 0: active + 1;
    setSlider();
    

    // active + 1 > lastPosition é maior que o lastPosition
    // ? se ele for maior que o eu volto ele pro Zero
    // se nao for maior que Zero eu coloco nele active + 1 
    // basicamente é um if e else resumido
    // if (active + 1 > lastPosition) {
    //     active = 0;
    // } else {
    //     active = active + 1;
    // }
    items[active].classList.add('active');
}

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerHTML = '0' + (active + 1);

    let cor1 = '#00FF00'; // Verde
    let cor2 = '#FFD700'; // Dourado
    let cor3 = '#FFFFFF'; // Branco

    // Seleciona o item ativo e seus elementos
    let activeItem = items[active];
    let activeDescription = activeItem.querySelector('.description');
    let activeCarInfo = activeItem.querySelector('.car-information');
    let activeH2 = activeItem.querySelector('h2');
    
    // Seleciona o li correspondente ao item ativo
    let activeLi = indicator.querySelectorAll('ul li')[active];

    // Reseta a cor de fundo dos itens da lista
    indicator.querySelectorAll('ul li').forEach((li) => {
        li.style.backgroundColor = ''; // Reseta para o padrão
    });

    if (active === 0) {
        container.style.backgroundImage = 'radial-gradient(circle, #ff0000, #ffff00) ';
        activeDescription.style.color = cor1;
        activeCarInfo.style.color = cor1;
        activeH2.style.color = cor1;
        activeLi.style.backgroundColor = cor1; // Muda a cor de fundo do li ativo
    } else if (active === 1) {
        container.style.backgroundImage = 'radial-gradient(circle, #ff6347, #8b0000)';
        activeDescription.style.color = cor2;
        activeCarInfo.style.color = cor2;
        activeH2.style.color = cor2;
        activeLi.style.backgroundColor = cor2; // Muda a cor de fundo do li ativo
    } else if (active === 2) {
        container.style.backgroundImage = 'radial-gradient(circle, #cccccc, #000000)';
        activeDescription.style.color = cor3;
        activeCarInfo.style.color = cor3;
        activeH2.style.color = cor3;
        activeLi.style.backgroundColor = cor3; // Muda a cor de fundo do li ativo
    }

    items[active].classList.add('active');
}

// Inicializa o primeiro item como ativo
setSlider();