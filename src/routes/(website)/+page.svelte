<script>
  import JoinButton from "$lib/components/Join.svelte";
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

<div class="home-container">
  <div class="top-section">
    <div class="header-section">
      <JoinButton />
    </div>
    <div class="background">
      <div class="fixed-bg" style="background-image: url({bg})" />
    </div>
  </div>
</div>

<style>
  .home-container {
    height: 100%;
    width: 100%;
    display: block;
  }

  .top-section {
    position: relative;
    display: block;
    height: 100vh;
  }

  .background {
    position: static;
    z-index: -1;
    height: 100%;
  }

  .header-section {
    z-index: 2;
  }

  .fixed-bg {
    height: 100vh;
    width: 110%;
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100%;
    animation: updown 13s infinite ease;
    transition: all 0.5s ease-in;
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
    .fixed-bg {
        background-size: 130%;
    }
  }

  @media (max-width: 1200px) {
    .fixed-bg {
        background-size: 300%;
    }
  }
</style>
