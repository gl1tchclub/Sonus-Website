<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  const BASE_URL = "https://api.unsplash.com/";
  const WORD_URL = "https://api.api-ninjas.com/v1/thesaurus?";
  const photoKey = "FkjKMeG-arrW_qolpGUoya8HBCEBUCkjH3j9BB2dwms";
  const wordKey = "Ae1hKMbFv0SCDY3vQCEjmw==o7A0rHaDqNpzntyL";
  let sona = "";
  let user = [];
  const firstWords = ["elegant", "spiky", "chaotic"];
  let finalWords = "";

  function getRandomNumber(max) {
    return Math.round(Math.random() * max);
  }

  onMount(async () => {
    let res = await fetch(
      `${BASE_URL}photos/hNrd99q5peI?client_id=${photoKey}`
    );
    let json = await res.json();
    sona = json.urls.regular;
    let tempWords = [];

    res = await fetch(`${BASE_URL}users/danesduet?client_id=${photoKey}`);
    json = await res.json();

    let temp = {
      username: json.username,
      name: json.name,
      followers: json.followers_count,
      following: json.following_count,
      insta: json.instagram_username,
      twt: json.twitter_username,
    };

    user = temp;

    for (let i = 0; i < firstWords.length; i++) {
      res = await fetch(`${WORD_URL}word=${firstWords[i]}`, {
        headers: {
          "X-API-KEY": wordKey,
        },
      });

      json = await res.json();

      let max;
      if (getRandomNumber(2.1) % 2 === 1) {
        max = json.antonyms.length - 1;
        tempWords.push(json.antonyms[getRandomNumber(max)]);
      } else {
        max = json.synonyms.length - 1;
        tempWords.push(json.synonyms[getRandomNumber(max)]);
      }
    }

    finalWords = tempWords.join(" || ");
  });
</script>

<div class="box-border">
  <div class="left-boxes">
    <div class="small-box" style="background-color: rgb(240, 166, 202)">
      <p>Name:</p>
      <h1 class="details">
        <span class="reveal">
          {user.name}
        </span>
      </h1>
    </div>
    <div class="small-box" style="background-color: rgb(239, 195, 230)">
      <p>Username:</p>
      <h1 class="details">
        <span class="reveal">
          @{user.username}
        </span>
      </h1>
    </div>
    <div class="small-box" style="background-color: rgb(245,224,236)">
      <p>Bio:</p>
      <h2>
        <span class="reveal"> 🎵 Music Lover | Playlist Guru 🎧 </span>
      </h2>
      <p>
        <span class="reveal">
          I'm {user.name}, a music aficionado on a quest to find the perfect
          track for every moment. I create unique playlists for all occasions,
          and I'm here to show the world my Sona! 🎶🕺💃
        </span>
      </p>
    </div>
  </div>
  <div class="wrapper">
    <div class="sona-wrapper">
      <span class="sona">
        <div class="img" style="background-image: url({sona})" />
      </span>
    </div>
    <div class="welcome">
      <div class="title">
        <h1>
          <span class="reveal"> Discover your Sona! </span>
        </h1>
      </div>
      <p class="responsive-text">
        <span class="reveal">
          Here, you will find your unique musical persona, your very own 'Sona',
          shaped by your distinctive and defined taste in music!
        </span>
      </p>
    </div>
  </div>
  <div class="right-boxes">
    <div class="small-box right" style="background-color: rgb(184, 190, 221)">
      <p>Followers:</p>
      <h1 class="details">
        <span class="reveal">
          {user.followers}
        </span>
      </h1>
    </div>
    <div class="small-box right" style="background-color: rgb(232,217,231)">
      <p>Following:</p>
      <h1 class="details">
        <span class="reveal">
          {user.following}
        </span>
      </h1>
    </div>
    <div class="small-box right" style="background-color: rgb(245,224,236)">
      <p>Social:</p>
      <h2>
        <span class="reveal"> Montreal, QC </span>
      </h2>
      <div class="socials links">
        <a href="https://www.instagram.com/{user.insta}" target="_blank">
          <span class="reveal">
            <i class="fa-brands fa-instagram" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 448 512"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 
                        114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 
                        189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 
                        33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 
                        26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 
                        26.8 12 26.8 26.8zm76.1 
                        27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 
                        0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 
                        147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 
                        2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 
                        34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 
                        34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 
                        2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
                        9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 
                        132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 
                        22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </span>
        </a>
        <a href="https://www.twitter.com/{user.twt}" target="_blank">
          <span class="reveal">
            <i class="fa-brands fa-twitter" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 512 512"
            >
              <path
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0
                        138.72-105.583 298.558-298.558 298.558-59.452 
                        0-114.68-17.219-161.137-47.106 8.447.974 16.568 
                        1.299 25.34 1.299 49.055 0 
                        94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 
                        6.498.974 12.995 1.624 19.818 1.624 9.421 0 
                        18.843-1.3 
                        27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 
                        7.797 30.214 12.67 47.431 
                        13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 
                        14.294-52.954 51.655 63.675 129.3 105.258 216.365 
                        109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 
                        46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 
                        33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 
                        44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 
                        20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div
      class="small-box right"
      style="background-color: rgb(156,137,184, 0.5)"
    >
      <p>Your Sona is...</p>
      <h2 class="reveal">
        {finalWords}
      </h2>
    </div>
  </div>
</div>

<style>
  .box-border {
    border-radius: 20px;
    display: grid;
    grid-template-columns: auto auto auto;
    flex-direction: column;
  }

  .right .links {
    display: inline-flex;
  }

  .right svg {
    padding: 10px 15px 0 0px;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    text-align: center;
    font-size: 20px;
    width: 700px;
    padding: 40px 20px 80px 20px;
    transition: all 3s ease;
    background-color: whitesmoke;
    margin: 10px;
    border-radius: 20px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  .left-boxes,
  .right-boxes {
    display: block;
    flex-wrap: wrap;
    padding: 10px;
    z-index: 1;
    width: 230px;
    height: fit-content;
  }

  .details {
    z-index: 2;
  }

  .small-box {
    padding: 20px 10px;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    border-radius: 20px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
  }

  .right {
    display: block;
  }

  .welcome {
    z-index: 2;
  }

  .sona-wrapper {
    text-align: center;
    height: fit-content;
  }

  .sona .img {
    z-index: 2;
    height: 300px;
    width: 300px;
    background-size: cover;
    background-color: transparent;
    border-radius: 50%;
    border: rgba(128, 128, 128, 0.336);
    display: inline-block;
    margin: 20px;
    box-shadow: 0px 0px 12px 8px rgb(240, 166, 202, 0.5);
  }

  .sona {
    animation: fadeIn 1s;
  }

  .img {
    animation: rotation 5s infinite linear;
  }

  @keyframes rotation {
    0% {
      transform: scale(1.05);
    }

    50% {
      transform: scale(0.95);
    }

    100% {
      transform: scale(1.05);
    }
  }

  @media (max-width: 1000px) {
    .wrapper {
      display: flex;
    }

    .welcome {
      display: flex;
      justify-content: center;
    }

    .title {
      transition: all 0.5s ease;
      display: flex;
      position: static;
      width: fit-content;
      display: inline-block;
      margin: 20px;
    }

    .responsive-text {
      display: none;
    }
  }
</style>
