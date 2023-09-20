const aranan_sehir = document.getElementById('movie-search-box')
const resultGrid = document.getElementById('result-grid');

async function load(soru){
    

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${soru}&units=metric&APPID=8d5a87e2f979feb3b4c059876c5d71c7`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    console.log(data)
    display(data)
}



function find(){
    
    let soru = (aranan_sehir.value).trim();
    if(soru.length > 0){
    
        load(soru);
    } 
}

function display(soru){
    resultGrid.innerHTML = `
    
    <div class = "movie-info">
        <h3 class = "movie-title">${soru.name}</h3>
        <ul class = "movie-misc-info">
            <li class = "year">Sıcaklık: ${soru.main.temp}</li>
            <li class = "rated">Hissedilen: ${soru.main.feels_like}</li>
            <li class = "released">Nem: ${soru.main.humidity}</li>
    </div>
    `;
}

