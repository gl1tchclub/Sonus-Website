<nav class="header-nav">
  <a href="/profile" class="link">
    <div class="btn-text">Join</div>
  </a>
</nav>

<style>
  .header-nav {
    /* column-gap: 0.5em; */
    align-items: center;
    display: flex;
    position: static;
    float: right;
    padding: 10px;
  }

  .header-nav > .link {
    border-radius: 100vw;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 400;
    line-height: 1.4;
    text-decoration: none;
    display: flex;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(107, 74, 2, 0.2);
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: rgba(224, 193, 17, 0.8);
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
