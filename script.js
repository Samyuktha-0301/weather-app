const getWeather =(city)=>{
	

const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c3e122603msh3c8e00a0f2139c3p11bd9ajsne0961cfe534a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}

};

async function Fetch() {


		 await fetch(url, options)
		   .then(response =>response.json())
		   .then((response)=> {
		   cityName.innerHTML=city
		       
			//	cloud_pct.innerHTML= response.cloud_pct
				temp.innerHTML= response.temp
				temp2.innerHTML= response.temp
				feels_like.innerHTML= response.feels_like
				humidity.innerHTML= response.humidity
				humidity2.innerHTML= response.humidity
				min_temp.innerHTML= response.min_temp
				max_temp.innerHTML= response.max_temp
				wind_speed.innerHTML= response.wind_speed
				wind_speed2.innerHTML= response.wind_speed
				wind_degrees.innerHTML= response.wind_degrees
				sunrise.innerHTML= response.sunrise
				sunset.innerHTML= response.sunset
				
	}) .catch(err=>console.error(err));
	}
	Fetch();
};
var city;

function fillcity(e){
	city=e.target.value;
}
submit.addEventListener("click", (e)=>{
	e.preventDefault();
	
	getWeather(city);

})
