const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
$('input[type="text"]').keypress(function(e){
    if(e.which === 13){
        const inputValue = $(this).val();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=c345f0c70aebc6014b8b23439d9d798c`)
        .then(fetchedData=>{
            return fetchedData.json();
        })
        .then(data=>{
            const temp = data.main.temp;
            const tempMin = data.main.temp_min;
            const tempMax = data.main.temp_max;
            const cityName = data.name;
            const countryName =data.sys.country;
            const description =  data.weather[0].description;
            const day = new Date().getDay();
            const date = new Date().getUTCDate()+1;
            const month = new Date().getMonth();
            const year = new Date().getUTCFullYear();

            $('#cityDetails').text(`${cityName}, ${countryName}`);
            $('#dayDetails').text(`${weekDays[day]} ${date} ${months[month]} ${year}`);
            $('#temp').html(`${temp}&#8451;`)
            $('#description').text(description);
            $('#min-max').html(`${tempMin}&#8451;/${tempMax}&#8451;`)
        })
        .catch(err=>{
            console.log(err);
        })
    }
});