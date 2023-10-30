<svelte:head>
    <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<script>
    import Header from '$lib/components/Header.svelte';
    import SideNav from '../lib/components/SideNav.svelte';

    let screenSize;
    let width = screenSize - 250;
</script>

<Header />
<SideNav />
<div class="layout-grid" style="width: {width}">
    <slot />
</div>

<svelte:window bind:innerWidth={screenSize} />

<style>
    .layout-grid {
        display: flex;
        flex-direction: column;
        /* top: 0; */
        left: 17em;
        height: 150vh;
        position: absolute;
        margin: 0 -250px 0 0;
    }

    :global(body) {
        background-color: #edede9;
    }

    @media (max-width: 800px) {
        .layout-grid {

        }
    }
</style>