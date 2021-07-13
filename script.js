let deg = 6;
let hr = document.querySelector('#hr');
let sec = document.querySelector('#sec');
let min = document.querySelector('#min');

function clock() {
    setInterval(()=>{
let day = new Date();
        let hh =day.getHours()*30;
        let sc =day.getSeconds()*deg;
        let mn =day.getMinutes()*deg;

        hr.style.transform = `rotateZ(${(hh)+(mn/12)}deg)`;
        sec.style.transform = `rotateZ(${sc}deg)`;
        min.style.transform = `rotateZ(${mn}deg)`;

    });
}

clock();