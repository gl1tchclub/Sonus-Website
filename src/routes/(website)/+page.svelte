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

<!-- <div class="loading">
    {#each loading_arr as letter, i}
        <span style="--i:{i+1}">{letter}</span>
    {/each}
</div> -->

<div class="home-container">
  <div class="top-section">
    <div class="header-section">
      <div class="header-top-container">
        <div class="brand">
          <h1 class="brand-name">
            <span class="reveal-delay"> Sonus </span>
          </h1>
          <!-- <h1 class="brand-name outer-text">
            <span class="reveal-delay"> Sonus </span>
          </h1> -->
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
  <div class="second-section">
    <div class="middle-container">
        <h1>DISCOVER</h1>
        <h1>CREATE</h1>
        <h1>LISTEN</h1>
        <h1>REPEAT</h1>
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
    font-size: 150px;
    height: 60%;
    width: 100%;
    opacity: 0.95;
    color: #f0a6ca;
    overflow: hidden;
    text-shadow: 1px 1px 1px #efc3e6,
        1px 2px 1px #efc3e6,
        1px 3px 1px #efc3e6,
        1px 4px 1px #efc3e6,
        1px 5px 1px #efc3e6,
        1px 6px 1px #efc3e6,
        1px 7px 1px #efc3e6,
        1px 8px 1px #efc3e6,
        1px 9px 1px #efc3e6,
        1px 10px 1px #efc3e6,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
  }

  /* .brand-name.outer-text {
    font-size: 155px;
    color: #efc3e6;
    height: 50%;
  } */

  .brand-logo {
    opacity: 0.6;
  }

  .btn {
    width: 300px;
    display: block;
    z-index: 1;
  }
</style>
