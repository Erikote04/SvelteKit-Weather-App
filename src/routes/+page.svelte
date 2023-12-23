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
        <h4>{weather.windSpeed}km/h</h4>
    </section>

    <Footer />
{/await}

<style>
    section {
        padding: 16px;
    }
    h1 {
        font-weight: 300;
        color: #333;
        text-transform: uppercase;
        padding: 16px 0 0 0;
    }

    h2 {
        font-weight: 300;
        font-size: 100px;
        color: #333;
        text-transform: uppercase;
        padding: 0;
    }

    h3 {
        font-weight: 700;
        transform: rotate(-90deg);
        position: absolute;
        top: 56px;
        right: 12px;
    }
</style>
