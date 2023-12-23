<script>
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			'X-RapidAPI-Key': '7dfffb57bemsh98d7b5cf2e805c4p1be991jsnac7676a44fdc'
		}
	};

	const weatherPromise = fetch(
		'https://weatherapi-com.p.rapidapi.com/current.json?q=Buenos%20Aires',
		options
	)
		.then((response) => response.json())
		.then((data) => {
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
		});
</script>

{#await weatherPromise then weather}
	<h1>{weather.conditionText}</h1>
{/await}

<style>
    h1 {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>
