<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import SonaDesc from "../../../lib/components/SonaDescription.svelte";
  import Instagram from "../../../lib/components/Instagram.svelte";
  import Twitter from "../../../lib/components/Twitter.svelte";

  const BASE_URL = "https://api.unsplash.com/";
  const WORD_URL = "https://api.api-ninjas.com/v1/thesaurus?";
  const photoKey = "FkjKMeG-arrW_qolpGUoya8HBCEBUCkjH3j9BB2dwms";
  const wordKey = "Ae1hKMbFv0SCDY3vQCEjmw==o7A0rHaDqNpzntyL";
  let bio = "";
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
    bio = `I'm ${user.name}, a music aficionado on a quest to find the perfect
            track for every moment. I create unique playlists for all occasions,
            and I'm here to show the world my Sona! 🎶🕺💃`

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
    <div
      class="small-box username"
      style="background-color: rgb(239, 195, 230)"
    >
      <p>Username:</p>
      <h1 class="details">
        <span class="reveal">
          @{user.username}
        </span>
      </h1>
    </div>
    <div class="small-box bio" style="background-color: rgb(245,224,236)">
      <p>Bio:</p>
      <h2>
        <span class="reveal"> 🎵 Music Lover | Playlist Guru 🎧 </span>
      </h2>
      <p>
        <span class="reveal">
          {bio}
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
      <div class="sona-text title">
        <h1>
          <span class="reveal"> Discover your Sona! </span>
        </h1>
      </div>
      <p class="sona-text">
        <span class="reveal">
          Here, you will find your unique musical persona, your very own 'Sona',
          shaped by your distinctive and defined taste in music!
        </span>
      </p>
      <div class="user-bio">
        <h1>
          <span class="reveal">
            Welcome, {user.name}
          </span>
        </h1>
        <h2>
          <span class="reveal"> 🎵 Music Lover | Playlist Guru 🎧 </span>
        </h2>
        <p>
          <span class="reveal">
            {bio}
          </span>
        </p>
      </div>
    </div>
  </div>
  <div class="right-boxes">
    <SonaDesc>
      <h3>
        {finalWords}
      </h3>
    </SonaDesc>
    <div class="small-box follow" style="background-color: rgb(232,217,231)">
      <p>Followers:</p>
      <h1 class="details">
        <span class="reveal">
          {user.followers}
        </span>
      </h1>
    </div>
    <div class="small-box follow" style="background-color: rgb(245,224,236)">
      <p>Following:</p>
      <h1 class="details">
        <span class="reveal">
          {user.following}
        </span>
      </h1>
    </div>
    <div class="small-box" style="background-color: rgb(184, 190, 221)">
      <p>Social:</p>
      <h2>
        <span class="reveal"> Montreal, QC </span>
      </h2>
      <div class="socials">
        <a href="https://www.instagram.com/{user.insta}" target="_blank">
          <span class="reveal">
            <Instagram/>
          </span>
        </a>
        <a href="https://www.twitter.com/{user.twt}" target="_blank">
          <span class="reveal">
            <Twitter/>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .box-border {
    border-radius: 20px;
    display: grid;
    grid-template-columns: auto auto auto;
    flex-direction: column;
    z-index: 1;
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
    transition: all 1s ease;
    background-color: whitesmoke;
    margin: 10px;
    border-radius: 20px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  .user-bio {
    display: none;
  }

  .user-bio h1 {
    padding-bottom: 10px;
  }

  .left-boxes,
  .right-boxes {
    display: block;
    flex-wrap: wrap;
    padding: 10px;
    z-index: 1;
    width: 230px;
    height: fit-content;
    position: relative;
  }

  .details {
    z-index: 2;
  }

  .small-box {
    padding: 20px 10px;
    display: block;
    margin: 20px 0;
    border-radius: 20px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
  }

  .socials {
    display: inline-flex;
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
    animation: pulse 5s infinite linear;
  }

  @keyframes pulse {
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

  @media (max-width: 1560px) {
    .left-boxes {
      display: none;
    }

    .sona-text {
      display: none;
    }

    .user-bio {
      display: block;
    }
  }

  @media (max-width: 1330px) {

    .user-bio p {
      width: 600px;
    }

    .box-border {
      display: grid;
      grid-template-areas:
        "sona sona"
        "left right";
      text-align: center;
    }

    .right-boxes {
      grid-area: right;
      width: 300px;
      margin-left: 100px;
    }

    .left-boxes {
      display: block;
      grid-area: left;
      width: 300px;
      left: 10px;
      float: right;
    }

    .wrapper {
      grid-area: sona;
      display: flex;
      max-width: 92%;
      padding-bottom: 20px;
    }
  }

  @media (max-width: 1060px) {

    .box-border {
      display: block;
    }

    .left-boxes {
      display: none;
    }

    .welcome {
      justify-content: center;
    }

    .right-boxes {
      margin: 0;
      padding-top: 0; 
      display: inline-block;
      width: 90%;
    }
    
    .right-boxes > .small-box.follow {
      width: 40%;
    }
    
    .right-boxes > .small-box {
      margin-top: 0;
    }

    .wrapper {
      max-width: 91%;
    }
  }

  @media (max-width: 980px) {
    .box-border {
      grid-template-areas: "sona left right";
      text-align: center;
    }

    .right-boxes,
    .left-boxes {
      width: fit-content;
    }
    .wrapper {
      width: 100%;
      height: 30%;
      font-size: 12px;
    }

    .sona .img {
      width: 160px;
      height: 160px;
    }

    .small-box {
      width: 50%;
    }

    /* .small-box.username {
      display: none;
    } */

    .small-box.bio {
      width: 100%;
    }
  }
</style>
