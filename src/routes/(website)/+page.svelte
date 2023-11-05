<script>
    import JoinButton from '$lib/components/Join.svelte';
    import { onMount } from 'svelte';

    const BASE_URL = "https://api.unsplash.com/";
    const photoKey = "FkjKMeG-arrW_qolpGUoya8HBCEBUCkjH3j9BB2dwms";
    let bg = []

    onMount(async () => {
        let res = await fetch(`${BASE_URL}photos/xWSUI7tpiTY?client_id=${photoKey}`)
        let json = await res.json();

        bg = json.urls.full;
    });

</script>

<div class="home-container">
    <div class="fixed-bg" style="background-image: url({bg})"></div>

</div>

<style>
    .fixed-bg {
        height: 100vh;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        /* animation:myanim 13s infinite ease; */
    }


    @keyframes myanim {
    0% {
        background-position:0 0;
    }
    25% {
        background-position:0 20%;
    }

    50% {
        background-position:0 50%;
    }

    75% {
        background-position:0 20%;
    }

    100% {
        background-position:0 0;
    }
}
</style>

<JoinButton />