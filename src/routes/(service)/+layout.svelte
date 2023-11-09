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

<div class="header-div">
  <div id="dashboard">
    <Dash>
      <h2 id="header-text">
        <span class="reveal"> Dashboard </span>
      </h2>
    </Dash>
  </div>
</div>
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
  .header-div {
    background: rgba(255, 255, 255, 0.788);
    box-shadow: 1px 0 5px 2px rgba(153, 151, 151, 0.75);
  }
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

  #dashboard {
    float: left;
    position: relative;
    left: 18em;
    transition: all 0.5s ease;
    display: block;
    z-index: 2;
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

    #dashboard {
      left: 7em;
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

    #dashboard h2 {
      display: none;
    }

    #dashboard {
      float: none;
      transition: all 0.5s ease;
      display: block;
      left: 40px;
      z-index: 2;
    }
  }

  @media (max-width: 720px) {
    .main-container {
      justify-content: center;
      padding-left: 5px;
    }
  }
</style>
