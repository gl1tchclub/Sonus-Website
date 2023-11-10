<script>
  import { onMount } from "svelte";
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
    setTimeout(async () => {
      document.querySelector(".load-welcome").remove();
    }, 9000);

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
            and I'm here to show the world my Sona! 🎶🕺💃`;

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

<div class="load-welcome">
  <div class="load-text">
    <h2>
      <span class="reveal"> Welcome to </span>
    </h2>
    <div class="load-h1 reveal">
      <h1>Sonus</h1>
    </div>
  </div>
</div>

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
    <div class="small-box sona-desc">
      <SonaDesc>
        <h3>
          {finalWords}
        </h3>
      </SonaDesc>
    </div>
    <div class="small-box follow change-color followers">
      <p>Followers:</p>
      <h1 class="details">
        <span class="reveal">
          {user.followers}
        </span>
      </h1>
    </div>
    <div
      class="small-box follow following"
      style="background-color: rgb(245,224,236)"
    >
      <p>Following:</p>
      <h1 class="details">
        <span class="reveal">
          {user.following}
        </span>
      </h1>
    </div>
    <div class="small-box social" style="background-color: rgb(184, 190, 221)">
      <p>Social:</p>
      <h2>
        <span class="reveal"> Montreal, QC </span>
      </h2>
      <div class="socials">
        <a href="https://www.instagram.com/{user.insta}" target="_blank">
          <span class="reveal">
            <Instagram />
          </span>
        </a>
        <a href="https://www.twitter.com/{user.twt}" target="_blank">
          <span class="reveal">
            <Twitter />
          </span>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .load-welcome > .load-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    bottom: 100px;
    font-size: 50px;
    color: #f0a6ca;
  }

  .load-h1 {
    margin-top: 50px;
    font-size: 100px;
    width: 800px;
  }

  .load-h1 > h1 {
    animation: mover 1s infinite alternate;
    text-shadow: 1px 1px 1px #efc3e6, 1px 2px 1px #efc3e6, 1px 3px 1px #efc3e6,
      1px 4px 1px #efc3e6, 1px 5px 1px #efc3e6, 1px 6px 1px #efc3e6,
      1px 7px 1px #efc3e6, 1px 8px 1px #efc3e6, 1px 9px 1px #efc3e6,
      1px 10px 1px #efc3e6, 1px 18px 6px #b8bedd44, 1px 22px 10px #b8bedd35,
      1px 20px 30px #b8bedd35;
  }

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

  .change-color {
    background-color: rgb(239, 195, 230);
  }

  .sona-desc {
    background-color: rgba(213, 158, 226, 0.801);
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
    animation: pulse 5s infinite linear;
  }

  .sona {
    animation: fadeIn 1s;
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
    .sona-desc {
      background-color: rgb(240, 166, 202);
    }
  }

  @media (max-width: 1330px) {
    .box-border {
      display: block;
      justify-content: center;
    }
    .user-bio p {
      width: 600px;
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
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 38% 30% 32%;
      grid-template-areas:
        "desc desc"
        "followers following"
        "socials socials";
      width: 95%;
      text-align: center;
    }

    .follow {
      width: 90%;
    }

    .followers {
      grid-area: followers;
    }

    .following {
      grid-area: following;
      position: relative;
      left: 15px;
    }

    .sona-desc {
      grid-area: desc;
    }

    .right-boxes > .small-box {
      margin-top: 0;
    }

    .social {
      margin: 0;
      grid-area: socials;
      /* padding-bottom: 10px; */
    }

    .wrapper {
      max-width: 91%;
    }
  }

  @media (max-width: 840px) {
    .sona-text {
      display: none;
    }

    .wrapper {
      position: relative;
      justify-content: left;
      align-items: center;
      padding-bottom: 40px;
    }

    .sona-wrapper {
      width: fit-content;
    }

    .sona .img {
      width: 150px;
      height: 150px;
    }

    .user-bio {
      font-size: 15px;
      max-width: 100%;
      text-align: left;
    }

    .welcome {
      height: fit-content;
    }

    .user-bio p {
      display: none;
    }

    .load-text h1 {
      padding-bottom: 20px;
      margin: 0;
      width: 50%;
    }

    .load-text {
      width: 100%;
    }

    .load-h1 {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .load-text h1, h2 {
      height: 100%;
      font-size: 100%;
    }
  }

  @media (max-width: 720px) {
    .box-border {
      position: relative;
    }

    .follow {
      width: 85%;
    }

    .wrapper {
      width: fit-content;
      justify-content: center;
    }

    .user-bio {
      text-align: center;
    }

    .load-text h1, h2 {
      font-size: 70%;
    }
  }
</style>
