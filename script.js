const hamb = document.querySelector('#hamb'),
    popup = document.querySelector('#popup'),
    menu = document.querySelector('#menu').cloneNode(1),
    hambField = document.querySelector('#hambField'),
    body = document.body;

hamb.addEventListener('click', hambHandler);

function hambHandler(e){ // Event
    e.preventDefault;
    popup.classList.toggle('open');
    hamb.classList.toggle('active');
    body.classList.add('noscroll');

    renderPopup();
}

function renderPopup (){
    popup.appendChild(menu);
}