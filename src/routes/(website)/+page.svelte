<script>
  import JoinButton from "$lib/components/Join.svelte";
  import { onMount } from "svelte";
  let loading_arr = "LOADING...".split("")

  onMount(() => {
    setTimeout(async() => {
        document.querySelector(".loading").remove();
    }, 3000);
})
</script>

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
            height="60%"
          />
        </div>
        <div class="btn"><JoinButton /></div>
      </div>
      <div class="">lower content</div>
    </div>
  </div>
</div>

<style>
  .home-container {
    width: 100%;
    height: 100%;
    display: block;
  }

  .top-section {
    position: relative;
    display: block;
    height: 100vh;
  }

  .header-section {
    z-index: 2;
    width: 100%;
    height: 60%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 80% 20%;
    padding-top: 200px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .header-top-container {
    justify-content: center;
    display: flex;
    width: fit-content;
    max-width: 100%;
    height: 100%;
    background-color: transparent;
    flex-wrap: wrap;
  }

  .brand {
    width: 100%;
    height: 100%;
    justify-content: center;
    text-align: center;
    position: relative;
  }

  .brand-name {
    position: absolute;
    z-index: 1;
    top: -10px;
    font-size: 100px;
    height: 30%;
    opacity: 0.9;
  }

  .brand-logo {
    opacity: 0.6;
  }

  .btn {
    width: 300px;
    display: block;
  }
</style>
