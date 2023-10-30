<svelte:head>
    <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<script>
    import Header from '$lib/components/Header.svelte';
    import SideNav from '../lib/components/SideNav.svelte';
</script>

<Header />
<SideNav />
<slot />

<style>
    :global(body) {
        background-color: #edede9;
    }
</style>