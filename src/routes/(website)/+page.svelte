<script>
  import JoinButton from "$lib/components/Join.svelte";
  import { onMount } from "svelte";
  let loading_arr = "LOADING...".split("");
  let textArr = ["DISCOVER", "CREATE", "LISTEN", "REPEAT"];

  onMount(() => {
    setTimeout(async () => {
      document.querySelector(".loading").remove();
    }, 3000);
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<div class="loading">
    {#each loading_arr as letter, i}
        <span style="--i:{i+1}">{letter}</span>
    {/each}
</div>

<div class="home-container">
  <div class="top-section">
    <div class="header-section">
      <div class="header-top-container">
        <div class="brand">
          <h1 class="brand-name">
            <span class="reveal-delay"> Sonus </span>
          </h1>
          <img
            src="./img/just-icon.png"
            class="brand-logo"
            alt="sona small"
            height="90%"
          />
        </div>
      </div>
      <div class="lower-section">
        <span class="reveal-delay">
          <div class="btn">
            <JoinButton>Discover your Sona!</JoinButton>
          </div>
        </span>
      </div>
      <div class="arrow-section" />
    </div>
  </div>
  <div class="second-section">
    <div class="middle-container">
        {#each textArr as word, x}
            <h1 style="--i:{x+1}">{word}</h1>
        {/each}
      <!-- <h1>DISCOVER</h1>
      <h1>CREATE</h1>
      <h1>LISTEN</h1>
      <h1>REPEAT</h1> -->
    </div>
  </div>
</div>

<style>
  .top-section {
    position: relative;
    display: block;
    height: 100vh;
    padding: 0 40px;
  }

  .second-section {
    background-color: #edede9;
    width: 100%;
    text-align: center;
    font-size: 40px;
    height: 150vh;
    align-items: center;
  }





  .home-container {
    width: 100%;
    height: 100%;
    display: block;
  }

  .header-section {
    z-index: 2;
    align-items: center;
    width: 100%;
    height: 70%;
    display: grid;
    grid-template-columns: 50%;
    grid-template-areas:
      "main"
      "lower"
      "button";
    grid-template-rows: 60% 20% 20%;
    padding-top: 200px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .header-top-container {
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: transparent;
    grid-area: main;
  }

  .brand {
    width: 100%;
    height: 100%;
    justify-content: center;
    text-align: center;
    animation: pulse 2s infinite linear;
    position: relative;
    grid-area: main;
  }

  .brand-name {
    position: absolute;
    z-index: 1;
    font-size: 150px;
    height: 100%;
    width: 100%;
    color: #f0a6ca;
    overflow: hidden;
    text-shadow: 1px 1px 1px #efc3e6, 1px 2px 1px #efc3e6, 1px 3px 1px #efc3e6,
      1px 4px 1px #efc3e6, 1px 5px 1px #efc3e6, 1px 6px 1px #efc3e6,
      1px 7px 1px #efc3e6, 1px 8px 1px #efc3e6, 1px 9px 1px #efc3e6,
      1px 10px 1px #efc3e6, 1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
  }

  .brand-logo {
    animation: fadeIn 4s ease-in 3s;
  }

  .lower-section {
    justify-content: center;
    grid-area: button;
  }

  .btn {
    position: relative;
    justify-content: center;
    /* left: 35%; */
    align-items: center;
    width: 280px;
    height: 60px;
    padding: 20px;
  }

  .lower-section > .reveal-delay {
    width: fit-content;
    padding: 0 33%;
  }
</style>
