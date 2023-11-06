<script>
  import Footer from "$lib/components/Footer.svelte";
  import { onMount } from "svelte";

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

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Agbalumo"
/>

<div class="site-container" style="background-image: url({bg})">
  <div class="slot">
    <slot />
  </div>
</div>
<Footer />

<style>
  .site-container {
    display: block;
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100%;
    animation: updown 13s infinite ease;
    transition: all 1s ease-in;
  }

  @keyframes updown {
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

  @media (max-height: 880px) {
    .site-container {
      background-size: 200% 110%;
    }
  }
</style>
