const apiKey = '023f436055ba9902e9b75475c0609668';
const lat = '-34.90809556342869';
const lon = '-56.20471091841375';

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appId=${apiKey}&units=imperial&lang=en`;
const urlImage = 'https://openweathermap.org/img/wn/';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    let counter = 0;
    let lastDay = 0;
    data.list.forEach(day => {
        let dt = new Date(day.dt * 1000);
        if (counter < 4 && lastDay != dt.getDate()) {
            lastDay = dt.getDate();
            let temp = Math.round(day.main.temp);
            let tempMin = Math.round(day.main.temp_min);
            let tempMax = Math.round(day.main.temp_max);
            let icon = day.weather[0].icon;
            let description = day.weather[0].description;
            document.querySelector(`#mcw-${counter} .icon img`).setAttribute('src', `${urlImage}${icon}.png`);
            document.querySelector(`#mcw-${counter} .day`).textContent = `${dt.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' })}`;
            document.querySelector(`#mcw-${counter} .temp b`).innerHTML = `${temp}&deg`;
            document.querySelector(`#mcw-${counter} .description`).textContent = description;
            document.querySelector(`#mcw-${counter} .high`).innerHTML = `High: ${tempMax}&deg`;
            document.querySelector(`#mcw-${counter} .low`).innerHTML = `Low: ${tempMin}&deg`;
            counter++;
        }
    });
}

apiFetch();