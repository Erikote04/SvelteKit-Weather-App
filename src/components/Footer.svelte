<script>
    export let humidity, windSpeed, windDirection, feelsLike;
</script>

<footer>
	<div>
		<span> {humidity}% </span>
		<strong> Humidity </strong>
	</div>
	<div>
		<span> {windSpeed}km/h, {windDirection} </span>
		<strong> Wind </strong>
	</div>
	<div>
		<span> {feelsLike}º </span>
		<strong> Feels-like </strong>
	</div>
</footer>

<style>
	footer {
		border: 2px solid black;
        padding: 12px 32px;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 32px;
	}

    span {
        display: block;
        font-size: 14px;
        font-weight: 600;
    }

    strong {
        color: #444;
        font-size: 14px;
        font-weight: 500;
    }
</style>
