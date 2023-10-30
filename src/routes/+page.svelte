<script>
    import { onMount } from "svelte";
    const BASE_URL = "https://api.unsplash.com/photos/?client_id=";
    const key = "FkjKMeG-arrW_qolpGUoya8HBCEBUCkjH3j9BB2dwms";
    let hero = [];

    onMount(async() => {
        const res = await fetch(`${BASE_URL}${key}&id=k1bO_VTiZSs`);
        const json = await res.json();
        console.log(json);
    })
</script>