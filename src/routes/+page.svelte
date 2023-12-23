<script>
    import { getWeatherFrom } from '../services/weather';
    import Footer from '../components/Footer.svelte';

    const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
    <section>
        <h1>{weather.name}</h1>
        <h2>{weather.temperature}º</h2>
        <h3>{weather.conditionText}</h3>
        <p><img src={weather.icon} alt='icon'></p>
    </section>

    <Footer 
        humidity={weather.humidity}
        windSpeed={weather.windSpeed}
        windDirection={weather.windDir}
        feelsLike={weather.feelsLike}
    />
{/await}

<style>
    section {
        padding: 16px;
    }
    h1 {
        padding: 16px 0 0 0;
        color: #333;
        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
    }

    h2 {
        padding: 0;
        color: #333;
        font-size: 100px;
        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
    }

    h3 {
        padding: 0;
        color: #333;
        font-weight: 300;
        text-align: center;
    }

    p {
        margin: 0;
        text-align: center;
    }
</style>
