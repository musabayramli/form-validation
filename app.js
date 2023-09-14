const inps = document.querySelectorAll('input');
const p = document.querySelectorAll('p');
const resultFalse = document.querySelector('#resultFalse');
const resultTrue = document.querySelector('#resultTrue');
const form = document.querySelector('form')
const divs = document.querySelector('.divs')
const icon = document.querySelector('.icn i')

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

for (let i = 0; i < p.length; i++) {
    p[i].classList.add('d-none');
    p[i].style.color = 'red'
}

function showMessage(isSuccess, message) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('alert', isSuccess ? 'alert-success' : 'alert-danger', 'mt-3');
    newDiv.textContent = message;
    divs.appendChild(newDiv);
}

function yoxla() {
    let pattern = /^.{8,16}$/;
    let isPassword = pattern.test(inps[1].value);
    let isEmail = inps[2].value.includes('@gmail.');

    resultTrue.style.display = 'none';
    resultFalse.style.display = 'none';

    if (isPassword) {
        showMessage(true, 'Password dogrudur...');
    } else {
        showMessage(false, 'Password yanlisdir...');
    }

    if (isEmail) {
        resultTrue.style.display = 'block';
        resultTrue.textContent += 'Gmail dogrudur...';
    } else {
        resultFalse.style.display = 'block';
        resultFalse.textContent += 'Gmail yanlisdir...';
    }

    if (inps[0].value && inps[1].value && inps[2].value) {
        resultTrue.style.display = 'block';
        resultTrue.textContent = 'Bütün inputlar dolduruldu';
        p.forEach(item => item.classList.add('d-none'));
    } else {
        for (let i = 0; i < inps.length; i++) {
            if (inps[i].value === '') {
                p[i].classList.remove('d-none');
            } else {
                p[i].classList.add('d-none');
            }
        }
    }
}

function gizle() {
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
    inps[1].type = (icon.classList.contains('fa-eye')) ? 'password' : 'text';
}