<script>
    import JoinButton from '$lib/components/Join.svelte';
    import { onMount } from 'svelte';

    const BASE_URL = "https://api.unsplash.com/";
    const photoKey = "FkjKMeG-arrW_qolpGUoya8HBCEBUCkjH3j9BB2dwms";
    let bg = []

    onMount(async () => {
        let res = await fetch(`${BASE_URL}photos/xWSUI7tpiTY?client_id=${photoKey}`)
        let json = res.json();

        bg = json.urls.full;
    });
    
</script>

<JoinButton />