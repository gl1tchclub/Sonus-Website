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
    <div class="trademark">© 2023 Sonus NZ</div>
  </div>
</footer>

<style>
  .section-right {
    display: flex;
    align-items: center;
    width: 300px;
    animation: fadeIn 4s ease;
  }

  .social-div {
    border: 1px solid rgba(128, 128, 128, 0.2);
    border-radius: 30px;
    background-color: rgba(216, 215, 215, 0.411);
    margin: 10px;
    top: -20px;
    position: relative;
  }

  .footer {
    max-width: 83%;
    height: 25vh;
    position: relative;
    left: 280px;
    z-index: 0;
    margin-top: 40px;
    padding: 20px;
    transition: all 0.5s ease;
  }

  .footer-content ul,
  a {
    color: gray;
    list-style-type: none;
  }

  .footer-content {
    flex-wrap: wrap;
    /* border-bottom: 1px solid rgba(128, 128, 128, 0.425); */
    padding: 0 0 60px 0;
    width: 100%;
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 100px 100px;
    position: relative;
    margin: 0 10px 0 0;
  }

  .trademark {
    opacity: 0.5;
    padding: 20px 0 0 0;
    display: block;
    left: 280px;
    transition: all 3s ease;
  }

  /* @media (max-width: 1700px) {
    .footer {
      width: 81%;
    }
  }

  @media (max-width: 1400px) {
    .footer {
      width: 75%;
    }
  } */

  @media (max-width: 1100px) {
    
  }

  @media (max-width: 980px) {
    .footer {
      left: 100px;
      transition: all 0.8s ease;
    }
  }
</style>
