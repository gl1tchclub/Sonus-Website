<script>
  import JoinButton from "$lib/components/Button.svelte";
  import { onMount } from "svelte";
  let loading_arr = "LOADING...".split("");
  let textArr = ["DISCOVER", "CREATE", "LISTEN", "REPEAT"];
  const BASE_URL = "https://api.unsplash.com/";
  const photoKey = "FkjKMeG-arrW_qolpGUoya8HBCEBUCkjH3j9BB2dwms";
  let y;
  let middlePhoto = [];

  onMount(async () => {
    setTimeout(async () => {
      document.querySelector(".loading").remove();
    }, 3000);

    const res = await fetch(
      `${BASE_URL}photos/6-Y_Hxoh7VU?client_id=${photoKey}`
    );
    const json = await res.json();
    console.log(json);
    middlePhoto = json.urls.regular;
  });
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
  <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<div class="loading">
  {#each loading_arr as letter, i}
    <span style="--i:{i + 1}">{letter}</span>
  {/each}
</div>

<div id="dashboard"></div>
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
          <div class="slogan">
            <h1>A million songs - One Sona</h1>
          </div>
        </span>
      </div>
      <div class="header-arrow container">
        <div class="scroll reveal-delay">
          <span class="scroll-title reveal-delay"> Scroll down </span>
          <div class="arrow reveal-delay">
            <span class="scroll-down reveal-delay">
              <span class="arrow-down reveal-delay" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {#if y > 100}
    <div class="second-section reveal">
      <div class="middle-container">
        <div class="words">
          {#each textArr as word, x}
            <h2 style="--x:{x + 1}">• {word} •</h2>
          {/each}
        </div>
        <div class="about-section">
          <div class="about-card">
            <div class="about-inner">
              <div class="about-front">
                <img class="about-image" src={middlePhoto} alt="tapes" />
              </div>
              <div class="about-back">
                <h3>Sed ultricies</h3>
                <p>
                  Est risus sollicitudin tortor. In semper ipsum ligula at nunc.
                  Ut vitae tristique ligula.
                </p>
              </div>
            </div>
          </div>
            <div class="about-description">
              <h2>What is a Sona?</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vestibulum, neque at scelerisque pharetra, libero nisi condimentum
              massa, nec aliquet leo tellus at orci. Vestibulum varius sapien id
              ipsum scelerisque, eget efficitur lacus auctor. Vestibulum
              vulputate, justo vitae interdum cursus, lectus augue scelerisque
              lectus, vel consequat turpis magna sed nulla. Aliquam erat volutpat.
              Aenean dapibus velit est, a pulvinar enim gravida eu. Praesent
              sodales gravida sapien ac convallis. Praesent at neque orci.
          </div>
        </div>
      </div>
    </div>
  {/if}
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
    height: 200vh;
    transition: all 1s ease;
  }

  .second-section.reveal {
    animation-duration: 0.8s;
  }

  .middle-container {
    width: 100%;
    margin-top: 50px;
    height: 50%;
    align-items: center;
    justify-content: center;
  }

  .about-section {
    height: 80%;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 100%;
    grid-template-areas: "card description";
    margin: 50px 40px 0;
  }

  .words {
    justify-content: center;
    display: flex;
    margin-bottom: 40px;
  }

  .words h2 {
    animation: 3s infinite step-end textAnim;
    animation-delay: calc(0.75s * var(--x));
    color: #efc3e6;
    display: block;
    margin: 20px;
    padding: 10px;
    max-width: 500px;
    float: left;
  }

  .about-description {
    grid-area: description;
    font-size: 35px;
    margin: 0 20px;
    color: #1F1F1F;
  }

  .about-description h2 {
    text-align: center;
    color: #9c89b8;
  }

  .about-card {
    background-color: transparent;
    position: absolute;
    width: 400px;
    height: 520px;
    border-radius: 30px;
    transition: transform 0.8s;
    grid-area: card;
  }

  .about-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .about-image {
    transition: transform 0.8s;
  }

  .about-card:hover .about-back {
    z-index: 1;
  }

  .about-front,
  .about-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    justify-content: center;
    color: #1f1f1f;
    background-color: #9c89b8;
    transition: all 0.5s ease;
  }

  .about-image {
    width: 200%;
    height: 100%;
  }

  .about-card:hover .about-front {
    transform: rotateX(90deg);
    transform: scaleX(0);
  }

  .about-card:hover .about-back {
    transform: rotateX(0deg);
  }

  .about-front {
    border-radius: 30px;
  }

  .about-back {
    transform: rotateY(180deg);
    flex-direction: column;
    z-index: -1;
    display: flex;
    border-radius: 30px;
    color: #1f1f1f;
    background-color: #9c89b8;
  }

  .about-back p {
    font-size: 25px;
    margin-top: 20px;
  }

  .about-back h3 {
    margin-bottom: 40px;
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
    height: 90%;
    display: grid;
    grid-template-columns: 60%;
    grid-template-areas:
      "main"
      "lower"
      "button";
    grid-template-rows: 50% 10% 40%;
    row-gap: 30px;
    padding-top: 100px;
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

  .header-lower {
    display: flex;
    justify-content: center;
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
    font-size: 180px;
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
    animation: fadeIn 3.5s ease-in 3s;
  }

  .slogan {
    /* transition: all 1s ease-in; */
    font-size: 20px;
    color: #efc3e6;
    text-shadow: -8px 4px 2px rgba(16, 16, 16, 0.6);
    width: 100%;
    text-align: center;
    /* animation: pulse 2.4s infinite ease; */
  }

  .header-lower > .reveal-delay {
    width: 100%;
  }

  .header-arrow {
    align-items: center;
    justify-content: center;
    grid-area: button;
    flex-wrap: wrap;
  }
  .scroll-down {
    display: block;
    position: relative;
    padding: 79px 10px 0;
    margin-top: 15px;
    text-align: center;
    animation: mover 0.5s infinite alternate;
  }

  .arrow-down {
    display: block;
    margin: 0 auto;
    width: 10px;
    height: 20px;
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
    box-shadow: 4px -3px 6px rgba(16, 16, 16, 0.425);
  }

  .scroll-title {
    display: block;
    text-transform: uppercase;
    color: #f0a6ca;
    letter-spacing: 0.1em;
    font-size: 20px;
    text-shadow: -4px 3px 2px rgba(16, 16, 16, 0.6);
    margin: 0 10px;
  }

  .scroll-down::before {
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 90px;
    background: #f0a6ca;
    content: " ";
    box-shadow: -1px -3px 6px #efc3e68a, 1px -3px 4px #efc3e68a;
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
