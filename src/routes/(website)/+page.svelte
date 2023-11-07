<script>
  import JoinButton from "$lib/components/Button.svelte";
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

<!-- <div class="loading">
    {#each loading_arr as letter, i}
        <span style="--i:{i+1}">{letter}</span>
    {/each}
</div> -->

<div class="home-container">
  <div class="top-section">
    <div class="header-section">
      <div class="header-top container">
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
      <div class="header-lower container">
        <span class="reveal-delay">
          <div class="slogan upDown">
            <h1>A million songs - One Sona</h1>
          </div>
        </span>
      </div>
      <div class="header-arrow container">
        <div class="scroll-down">
          <span class="arrow-down reveal" />
          <span class="scroll-title reveal"> Scroll down </span>
        </div>
      </div>
    </div>
  </div>
  <div class="second-section reveal-delay">
    <div class="middle-container">
      <span class="reveal-delay">
        {#each textArr as word, x}
          <h1 style="--x:{x + 1}">{word}</h1>
        {/each}
      </span>
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

  .container {
    justify-content: center;
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  .header-top {
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

  .brand-name > .reveal-delay {
    height: 100%;
  }

  .brand-logo {
    animation: fadeIn 4s ease-in 3s;
  }

  .header-arrow {
    align-items: center;
    justify-content: center;
    grid-area: button;
  }

  .btn {
    position: relative;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 60px;
    padding: 20px;
  }

  .slogan {
    transition: all 1s ease-in;
  }

  .scroll-down {
    display: block;
    position: relative;
    padding-top: 79px;
    text-align: center;
  }

  .arrow-down {
    display: block;
    margin: 0 auto;
    width: 10px;
    height: 38px;
  }
  .arrow-down:after {
    content: "";
    display: block;
    margin: 0;
    padding: 0;
    width: 8px;
    height: 8px;
    border-top: 2px solid #f0a6ca;
    border-right: 2px solid #f0a6ca;
    transform: rotate(135deg);
  }

  .scroll-title {
    display: block;
    text-transform: uppercase;
    color: #f0a6ca;
    letter-spacing: 0.1em;
  }

  .scroll-down::before {
    animation: arrowShaft 2s cubic-bezier(1, 0, 0, 1) infinite;
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 90px;
    background: #f0a6ca;
    content: " ";
  }

  @keyframes arrowShaft {
    0% {
      transform-origin: 0% 0%;
      transform: scale(1, 0);
    }
    50% {
      transform-origin: 0% 0%;
      transform: scale(1, 1);
    }
    58% {
      transform-origin: 0% 100%;
      transform: scale(1, 1);
    }
    100% {
      transform-origin: 0% 100%;
      transform: scale(1, 0);
    }
  }

  @media (max-width: 1120px) {
    .header-section {
      grid-template-columns: 100%;
    }
  }
</style>
