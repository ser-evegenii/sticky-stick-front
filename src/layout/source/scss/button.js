let button = document.getElementById('button');
let info = document.getElementById('info');

button.addEventListener('click', function(){
    info.style.display = (info.style.display == 'block') ? 'none' : 'block';
});

