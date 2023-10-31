<svelte:head>
    <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<script>
    import Header from '$lib/components/Header.svelte';
    import SideNav from '../../lib/components/SideNav.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Agbalumo">

<div class="grid-container">
    <div class="header">
        <Header />
    </div>
    <div class="nav">
        <SideNav />
    </div>
    <div class="content">
        <slot />
    </div>
    <div class="footer">
        <Footer />
    </div>
</div>

<style>
    .header {
        grid-area: header;
    }

    .nav {
        grid-area: sidenav;
    }

    .content {
        grid-area: main;
    }

    .footer {
        grid-area: footer;
    }

    .grid-container {
        display: grid;
        grid-template-areas:
            'header header header header header header'
            'sidenav main main main main main'
            'sidenav main main main main main'
            'sidenav footer footer footer footer footer'
    }

    :global(body) {
        background-color: #edede9;
    }

    @media (max-width: 800px) {
        .content {
            left: 5.2em;
            width: 100%;
        }
    }
</style>