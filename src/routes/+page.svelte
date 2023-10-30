<svelte:head>
    <link rel="stylesheet" href="css/main.css" />
</svelte:head>
<script>
    import { onMount } from "svelte";
    const BASE_URL = "https://api.unsplash.com/photos/";
    const key = "FkjKMeG-arrW_qolpGUoya8HBCEBUCkjH3j9BB2dwms";
    let y;
    let imgs = [];

    onMount(async() => {
        const res = await fetch(`${BASE_URL}k1bO_VTiZSs?client_id=${key}`);
        const json = await res.json();
        imgs = json.urls.full;
    });
</script>

<div class="fit-page">

</div>


<style>

</style>