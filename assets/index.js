const myDiv = document.getElementById('myDiv');


const foot = document.querySelector('.footer-div');

foot.style.marginTop = '30%';
foot.style.height = 'auto';
foot.style.width = '100%';
foot.style.display = 'flex';
foot.style.flexDirection = 'column';

for(let i = 24;i > 0;--i){
    const div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = `${i}px`;
    div.style.backgroundColor = 'black';
    div.style.marginBottom = `${25-i}px`;

    foot.appendChild(div);
}