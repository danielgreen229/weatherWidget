const color = '0123456789abcdef'
let newColor = ''

const newRandomColor = () => {
    const index = Math.floor(Math.random() * (15 - 0) + 1)
    newColor = newColor + color[index]
    return newColor.length < 6 ? newRandomColor() : newColor
}
             
const api = 'a1a3042f31561ce96bd0c769383b4e12'; 

window.addEventListener('load', () => {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      lang = "ru"
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&lang=${lang}&units=metric`;
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            document.getElementById('weather__name').textContent = data.name
            document.getElementById('weather__tempreture').textContent = Math.round(data.main.temp) + "°"
            document.getElementById('weather__rubrica').textContent = data.weather[0].description
            if(data.weather[0].icon == '01d' || data.weather[0].icon == '01n') {
                document.getElementById('weather__svg_1').style.display = '1'
                document.getElementById('weather__svg_2').style.display = 'none'
                document.getElementById('weather__svg_3').style.display = 'none'
                document.getElementById('weather__svg_4').style.display = 'none'
                document.getElementById('weather__svg_5').style.display = 'none'
                document.getElementById('weather__svg_6').style.display = 'none'
                document.getElementById('weather__svg_7').style.display = 'none'
            }
            if(data.weather[0].icon == '02d' || data.weather[0].icon == '02n') {
                document.getElementById('weather__svg_1').style.display = 'none'
                document.getElementById('weather__svg_2').style.display = '1'
                document.getElementById('weather__svg_3').style.display = 'none'
                document.getElementById('weather__svg_4').style.display = 'none'
                document.getElementById('weather__svg_5').style.display = 'none'
                document.getElementById('weather__svg_6').style.display = 'none'
                document.getElementById('weather__svg_7').style.display = 'none'
            }
            if(data.weather[0].icon == '03d' || data.weather[0].icon == '03n') {
                document.getElementById('weather__svg_1').style.display = 'none'
                document.getElementById('weather__svg_2').style.display = 'none'
                document.getElementById('weather__svg_3').style.display = '1'
                document.getElementById('weather__svg_4').style.display = 'none'
                document.getElementById('weather__svg_5').style.display = 'none'
                document.getElementById('weather__svg_6').style.display = 'none'
                document.getElementById('weather__svg_7').style.display = 'none'
            }
            if(data.weather[0].icon == '04d' || data.weather[0].icon == '04n') {
                document.getElementById('weather__svg_1').style.display = 'none'
                document.getElementById('weather__svg_2').style.display = 'none'
                document.getElementById('weather__svg_3').style.display = 'none'
                document.getElementById('weather__svg_4').style.display = '1'
                document.getElementById('weather__svg_5').style.display = 'none'
                document.getElementById('weather__svg_6').style.display = 'none'
                document.getElementById('weather__svg_7').style.display = 'none'
            }
            if(data.weather[0].icon == '09d' || data.weather[0].icon == '09n' || data.weather[0].icon == '10d' || data.weather[0].icon == '10n') {
                document.getElementById('weather__svg_1').style.display = 'none'
                document.getElementById('weather__svg_2').style.display = 'none'
                document.getElementById('weather__svg_3').style.display = 'none'
                document.getElementById('weather__svg_4').style.display = 'none'
                document.getElementById('weather__svg_5').style.display = '1'
                document.getElementById('weather__svg_6').style.display = 'none'
                document.getElementById('weather__svg_7').style.display = 'none'
            }
            if(data.weather[0].icon == '11d' || data.weather[0].icon == '11d') {
                document.getElementById('weather__svg_1').style.display = 'none'
                document.getElementById('weather__svg_2').style.display = 'none'
                document.getElementById('weather__svg_3').style.display = 'none'
                document.getElementById('weather__svg_4').style.display = 'none'
                document.getElementById('weather__svg_5').style.display = 'none'
                document.getElementById('weather__svg_6').style.display = '1'
                document.getElementById('weather__svg_7').style.display = 'none'
            }
            if(data.weather[0].icon == '13d' || data.weather[0].icon == '13n' || data.weather[0].icon == '50d' || data.weather[0].icon == '50n') {
                document.getElementById('weather__svg_1').style.display = 'none'
                document.getElementById('weather__svg_2').style.display = 'none'
                document.getElementById('weather__svg_3').style.display = 'none'
                document.getElementById('weather__svg_4').style.display = 'none'
                document.getElementById('weather__svg_5').style.display = 'none'
                document.getElementById('weather__svg_6').style.display = 'none'
                document.getElementById('weather__svg_7').style.display = '1'
            }
        });
    });
  }
});



window.onload = () => {
    let dvd = document.getElementById('dvd')
    let toBottom = true
    let toRight = true

    let i = 0 

    setInterval(() => {
        let height = window.innerHeight - document.getElementById('dvd').getBoundingClientRect().height
        let width = window.innerWidth - document.getElementById('dvd').getBoundingClientRect().width
        let top = dvd.offsetTop
        let left = dvd.offsetLeft

        if(top >= height - 5 && i != 1) {
            newColor = ''
            newRandomColor()
            i = 1
        }
        else if (top <= 5 && i != 2) {
            newColor = ''
            newRandomColor()
            i = 2
        }
        else if (left >= width - 5 && i !=3) {
            newColor = ''
            newRandomColor()
            i = 3
        }
        else if (left <= 5 && i != 4) {
            newColor = ''
            newRandomColor()
            i = 4
        }
        document.getElementById('dvd').style.backgroundColor = `#${newColor}`
    }, 5)
}


function Resize_weather_block() {
    var html = document.getElementById('dvd');
    let a;
    if(document.body.clientWidth > 1280) {
        document.getElementById('dvd').style.transform = `scale(${document.body.clientWidth/1920})`
        a = document.getElementById('dvd').getBoundingClientRect().width * document.body.clientWidth/1920
    }
    else if(document.body.clientWidth <= 1280 && document.body.clientWidth > 1000) {
         document.getElementById('dvd').style.transform = `scale(${document.body.clientWidth/1410})`
         a = document.getElementById('dvd').getBoundingClientRect().width * document.body.clientWidth/1410
    }
    else{
         document.getElementById('dvd').style.transform = `scale(${document.body.clientWidth/1020})`
         a = document.getElementById('dvd').getBoundingClientRect().width * document.body.clientWidth/1020
    }
    html.style.setProperty("--weather_block_size", `${document.getElementById('dvd').getBoundingClientRect().width}px`);
}
Resize_weather_block();

window.addEventListener('resize',(e)=> { 
    Resize_weather_block();
});