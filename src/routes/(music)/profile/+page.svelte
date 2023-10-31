<script>
    import { onMount } from "svelte";
    const BASE_URL = "https://api.unsplash.com/";
    const key = "FkjKMeG-arrW_qolpGUoya8HBCEBUCkjH3j9BB2dwms";
    let sona;

    onMount(async () => {
        const res = await fetch(`${BASE_URL}photos/WjnF1Tp-p3I?client_id=${key}`);
        const image = await res.json();

        let temp = {
            small: image.urls.small,
            regular: image.urls.regular,
            alt: image.alt_description,
        }

        sona = temp;
    });
</script>

<div class="welcome">
    <h1>Grow your Sona!</h1>
    <p>
        <span class="reveal">
            Here, you will find your unique musical persona, your very own 'Sona', shaped by 
            your distinctive and defined taste in music!
        </span>
    </p>
</div>

<style>
    .welcome {
        position: relative;

        text-align: center;
        
    }
</style>
