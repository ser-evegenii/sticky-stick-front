let sliders = document.querySelectorAll('.slider__item');

sliders.forEach(function(slider) {
    let button = slider.querySelector('.slider-button_open');

    if (button) {
        button.addEventListener('click', function(){
            let info = slider.querySelector('.info-container');
            info.style.display = (info.style.display === 'block') ? 'none' : 'block';

            let imgButton = slider.querySelector('.img-button');
            imgButton.style.transform = (imgButton.style.transform === 'rotate(0deg)') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }
});

// header-burger

let burgerButton = document.getElementById('header-button');
let menu = document.getElementById('header-menu');

burgerButton.addEventListener('click', function(){
    menu.style.display = (menu.style.display == 'block') ? 'none' : 'block';
})