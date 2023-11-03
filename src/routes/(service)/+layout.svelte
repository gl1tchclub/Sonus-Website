<script>
  import Dash from "$lib/components/Dashboard.svelte";
  import SideNav from "$lib/components/SideNav.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Agbalumo"
/>

<Dash />
<SideNav />
<div class="grid-container">
  <div class="content">
    <slot />
  </div>
</div>
<Footer />

<style>
  .content {
    grid-area: main;
    width: fit-content;
  }

  .grid-container {
    display: flex;
    top: 10px;
    padding: 20px 10px 10px 280px;
    height: fit-content;
    justify-content: center;
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
