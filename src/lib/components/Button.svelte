<div class="link"><slot /></div>

<style>
  .link {
    position: absolute;
    justify-content: center;
    border-radius: 100vw;
    font-weight: 400;
    font-size: 25px;
    width: fit-content;
    line-height: 1.4em;
    text-decoration: none;
    display: flex;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 5px 5px #2d283638,
    0px 8px 10px #2d28364b;
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: #ac96cc;
    color: #f0e6ef;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    /* height: fit-content; */
    white-space: nowrap;
  }

  .link:hover {
    transform: scale(1.1);
    border-color: #fff9;
  }
  
  .link::before {
    animation: shine 3s cubic-bezier(0.7, 0.54, 0.2, 0.3) infinite;
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
