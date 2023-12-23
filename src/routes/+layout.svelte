<div>
    <slot />
</div>

<style>
    :global(*, *::before, *::after) {
        box-sizing: border-box;
    }

    :global(body) {
        display: grid;
        place-content: center;
        min-height: 100vh;
        margin: 0;
        background: #fdfdfd;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    :global(h1, h2, h3, h4, h5) {
        margin: 0;
    }

    div {
        aspect-ratio: 9 / 16;
        width: 400px;
        max-width: 100%;
        position: relative;
        display: block;
        border-radius: 8px;
        box-shadow: 0 0 100px rgba(0, 0, 0, .1);
    }
</style>