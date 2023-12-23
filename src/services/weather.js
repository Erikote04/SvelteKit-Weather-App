const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': '7dfffb57bemsh98d7b5cf2e805c4p1be991jsnac7676a44fdc'
	}
};

export async function getWeatherFrom(query = 'Buenos Aires') {
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		FETCH_OPTIONS
	);
	const data = await response.json();
	const { location, current } = data;
	const { country, localtime, name } = location;
	const { condition, humidity, is_day, feelslike_c, temp_c, wind_kph, wind_dir } = current;
	const { code, text } = condition;

	return {
		conditionCode: code,
		conditionText: text,
		country,
		localtime,
		name,
		humidity,
		isDay: is_day,
		feelsLike: feelslike_c,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDir: wind_dir
	};
}
