let init = (context) => {
let p = document.createElement('p');
let a = document.createElement('a');

a.href = '#';
a.id = 'boton'
a.innerHTML = context;
p.appendChild(a);

document.body.appendChild(p);

};

init('click me');

setTimeout(() => {
    let boton = document.querySelector('#boton');
    boton.addEventListener('click', (e) =>{
        e.preventDefault();
        let x = prompt("enter something...")
        console.log(x);
    });
}, 1000);