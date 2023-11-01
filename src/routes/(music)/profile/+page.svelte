<script>
    import { onMount } from "svelte";
    const BASE_URL = "https://api.unsplash.com/";
    const key = "FkjKMeG-arrW_qolpGUoya8HBCEBUCkjH3j9BB2dwms";
    let sona;
    let user;

    onMount(async () => {
        let res = await fetch(`${BASE_URL}photos/WjnF1Tp-p3I?client_id=${key}`);
        let json = await res.json();

        let temp = {
            small: image.urls.small,
            regular: image.urls.regular,
            alt: image.alt_description,
        }

        sona = temp;
    });
    
</script>

<div class="wrapper">

    <div class="sona-wrapper">
        <span class="sona"></span>
    </div>
    <div class="welcome">
        <div class="test">
            <h1>
                <span class="reveal">
                    Grow your Sona!
                </span>
            </h1>
        </div>
        <p>
            <span class="reveal">
                Here, you will find your unique musical persona, your very own 'Sona', shaped by 
                your distinctive and defined taste in music!
            </span>
        </p>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;
        text-align: center;
        font-size: 20px;
        width: 700px;
        transition: all 3s ease;
    }

    .sona-wrapper {
        text-align: center;
    }

    .sona {
        height: 300px;
        width: 300px;
        background-color: transparent;
        border-radius: 50%;
        border: 1px solid rgba(128, 128, 128, 0.336);
        display: inline-block;
        margin: 20px;
        animation: fadeIn 1s;
    }

    @media (max-width: 1000px) {

    .wrapper {
        display: block;
    }

    .welcome {
        display: flex;
        justify-content: center;
    }

    .test {
        transition: all 0.5s ease;
        display: flex;
        position: static;
        width: fit-content;
        transition: all 3s ease;
        display: inline-block;
        margin: 20px;
    }
}

</style>
