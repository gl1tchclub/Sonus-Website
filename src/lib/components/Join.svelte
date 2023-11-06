<button class="join-button">
  <a href="/profile" class="link">
    <div class="btn-text">Discover Your Sona!</div>
  </a>
</button>

<style>
  .join-button {
    align-items: center;
    display: block;
    position: absolute;
    padding: 20px;
    background-color: transparent;
    border: none;
    width: fit-content;
  }
  
  .join-button > .link {
    justify-content: center;
    border-radius: 100vw;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 400;
    font-size: 25px;
    width: 100%;
    line-height: 1.4;
    text-decoration: none;
    display: flex;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 5px 5px #2d283638,
    0px 8px 10px #2d28364b;
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: #ac96cc;
    color: #ffff;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
  }

  .link:hover {
    transform: scale(1.1);
    border-color: #fff9;
  }

  .link:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .link::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(0, 29, 63, 0) 30%,
      rgba(255, 252, 237, 0.8),
      rgba(0, 29, 63, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }

    60% {
      left: 100%;
    }

    to {
      left: 100%;
    }
  }

</style>
