<svelte:head>
    <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Agbalumo">
          


<div class="container">
    <div class="slot">
        <slot/>
    </div>     
</div>
        

<style>
    .container {
        width: 100%;
        height: 500px;
        background-position: center;
        background-size: cover;
        background-image: url();
    }

    :global(body) {
        height: 300vh;
    }
</style>