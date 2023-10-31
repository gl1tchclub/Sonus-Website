<svelte:head>
    <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<script>
    import Header from '$lib/components/Header.svelte';
    import SideNav from '../../lib/components/SideNav.svelte';

</script>

<link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Agbalumo">

<div class="grid-container">
    <SideNav />
    <Header />
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .content {
        display: flex;
        top: 0;
        left: 17em;
        height: 150vh;
        max-width: 82.7%;
        position: relative;
        margin: 0 250px 0 0;
    }

    :global(body) {
        background-color: #edede9;
    }

    @media (max-width: 800px) {
        .layout-grid {

        }
    }
</style>