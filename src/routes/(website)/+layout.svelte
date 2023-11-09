<script>
  import Footer from "$lib/components/Footer.svelte";
  import Dash from "../../lib/components/Dashboard.svelte";
  import Button from "../../lib/components/Button.svelte";
  import { onMount } from "svelte";

  let y;

  const BASE_URL = "https://api.unsplash.com/";
  const photoKey = "FkjKMeG-arrW_qolpGUoya8HBCEBUCkjH3j9BB2dwms";
  let bg = [];

  onMount(async () => {
    let res = await fetch(
      `${BASE_URL}photos/xWSUI7tpiTY?client_id=${photoKey}`
    );
    let json = await res.json();

    bg = json.urls.full;
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="css/main.css" />
</svelte:head>
<svelte:window bind:scrollY={y} />

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Agbalumo"
/>


<div class="site-container" style="background-image: url({bg})">
  <div class="slot">
    <slot />
  </div>
</div>

<div class="shown-footer">
  <Footer>
    <Button>Back To Top</Button>
  </Footer>
</div>

<div class="hidden-footer">
  <Footer>
    <Button>▲</Button>
  </Footer>
</div>

<style>
  .site-container {
    display: block;
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100%;
    animation: bgUpDown 13s infinite ease;
    transition: all 1s ease-in;
  }

  @keyframes bgUpDown {
    0% {
      background-position: 0 0;
    }
    25% {
      background-position: 0 10%;
    }

    50% {
      background-position: 0 25%;
    }

    75% {
      background-position: 0 10%;
    }

    100% {
      background-position: 0 0;
    }
  }

  .hidden-footer {
    display: none;
  }

  @media (max-width: 1460px) {
    .site-container {
      background-size: 130%;
    }
  }

  @media (max-width: 1200px) {
    .site-container {
      background-size: 300%;
    }
  }

  @media (max-width: 680px) {
    .hidden-footer {
      display: block;
    }
    
    .shown-footer {
      display: none;
    }
  }

  @media (max-width: 460px) {
    .site-container {
      animation: none;
    }
  }
  
  @media (max-height: 880px) {
    .site-container {
      background-size: 200% 110%;
    }
  }
</style>
