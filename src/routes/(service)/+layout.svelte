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
<div class="main-container">
  <div class="content">
    <slot />
  </div>
</div>
<div class="footer-container">
  <Footer />
</div>

<style>
  .content {
    width: fit-content;
  }

  .main-container {
    display: flex;
    top: 10px;
    padding: 20px 10px 10px 280px;
    height: fit-content;
    justify-content: center;
  }

  .footer-container {
    width: fit-content;
    display: flex;
    position: relative;
    left: 280px;
  }

  @media (max-width: 980px) {
    .main-container {
      padding: 20px 10px 10px 100px;
      justify-content: left;
    }

    .content {
      animation: 2s fadeIn;
      position: relative;
      left: 0;
    }

    .footer-container {
      left: 100px;
      transition: all 0.8s ease;
    }
  }

  @media (max-width: 840px) {
    .main-container {
      padding: 20px 10px 20px 20px;
      justify-content: center;
    }

    .footer-container {
      left: 10px;
    }
  }

  @media (max-width: 720px) {
    .main-container {
      justify-content: center;
    }
  }

</style>
