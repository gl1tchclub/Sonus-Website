<script>
  import Instagram from "./Instagram.svelte";
  import Twitter from "./Twitter.svelte";
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-list">
      <h2 class="footer-title">
        <span class="reveal">Company</span>
      </h2>
      <ul>
        <span class="reveal">
          <li>
            <span class="reveal">
              <a href="/" style="text-decoration: none">About</a>
            </span>
          </li>
          <li>
            <span class="reveal"> Jobs </span>
          </li>
        </span>
      </ul>
    </div>
    <div class="footer-list">
      <h2 class="footer-title">
        <span class="reveal">Contact</span>
      </h2>
      <ul>
        <span class="reveal">
          <li>
            <span class="reveal"> Support </span>
          </li>
          <li>
            <span class="reveal"> App </span>
          </li>
        </span>
      </ul>
    </div>
    <div class="section-right">
      <div class="social-div">
        <Instagram />
      </div>
      <div class="social-div">
        <Twitter />
      </div>
    </div>
    <div class="button-height">
      <a href="#dashboard" class="button-anchor">
        <slot />
      </a>
    </div>
      <div class="trademark">© 2023 Sonus NZ</div>
  </div>
</footer>

<style>
  .footer {
    height: 25vh;
    z-index: 0;
    margin-top: 40px;
    padding: 20px;
    transition: all 0.5s ease;
  }

  .footer-content {
    width: 100%;
    display: grid;
    grid-template-columns: 300px 300px 225px 300px;
    grid-template-rows: 100px 100px;
    grid-template-areas:
      "company contact socials button"
      "trademark trademark trademark trademark";
    position: relative;
    margin: 0 10px 0 0;
  }
  .footer-content > div:nth-of-type(1) {
    grid-area: company;
  }

  .footer-content > div:nth-of-type(2) {
    grid-area: contact;
  }

  .button-anchor {
    grid-area: button;
    animation: fadeIn 4s ease;
  }

  .button-height {
    height: 60px;
    width: 60%;
    padding: 5px 0 0 20px;
  }

  .footer-content ul,
  a {
    color: gray;
    list-style-type: none;
  }

  .section-right {
    display: flex;
    align-items: center;
    width: 200px;
    animation: fadeIn 4s ease;
    grid-area: socials;
  }

  .social-div {
    border: 1px solid rgba(128, 128, 128, 0.2);
    border-radius: 30px;
    background-color: rgba(216, 215, 215, 0.411);
    margin: 10px;
    top: -20px;
    position: relative;
  }

  .trademark {
    opacity: 0.5;
    padding-top: 20px;
    display: flex;
    left: 280px;
    transition: all 3s ease;
    grid-area: trademark;
  }

  @media (max-width: 1100px) {
    .footer-content {
      grid-template-columns: 300px 300px 300px;
      grid-template-rows: 100px 100px;
      grid-template-areas:
        "company contact button"
        "socials trademark trademark";
      row-gap: 40px;
      column-gap: 10px;
    }

    .button-anchor {
      padding-left: 10px;
    }
  }

  @media (max-width: 980px) {
    .footer-content {
      grid-template-columns: 200px 200px;
      column-gap: normal;
    }
  }
</style>
