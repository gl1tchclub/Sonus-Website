<script>
  import Header from "$lib/components/Header.svelte";
  import SideNav from "../../lib/components/SideNav.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Agbalumo"
/>

<Header />
<SideNav />
<div class="grid-container">
  <div class="content">
    <slot />
  </div>
  <div class="footer" />
</div>
<Footer />

<style>
  .content {
    grid-area: main;
    width: fit-content;
  }

  .footer {
    grid-area: footer;
  }

  .grid-container {
    display: flex;
    top: 10px;
    padding: 20px 10px 10px 280px;
    height: 100vh;
    justify-content: center;
  }

  :global(body) {
    background-color: #edede9;
  }
  @media (max-width: 800px) {
    .grid-container {
      padding: 20px 10px 10px 20px;
    }

    .content {
      animation: 2s fadeIn;
    }
  }
</style>
