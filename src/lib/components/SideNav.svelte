<!-- Side navigation bar -->
<div class="sidenav">
    <a href="/" class="branding">
        <img src="./img/Sonus-logos_transparent.png" alt="logo" height="100px"/>
    </a>
    <div class="top-side-nav">
      <a href="/dashboard"> 
        Dashboard
      </a>
      <a href="/library">
        Library
      </a>
      <a href="/discover">
        Discover
      </a>
    </div>
    <div class="middle-side-nav">
      <!-- insert status of the spacetraders server-->
    </div>
    <div class="bottom-side-nav">
      <a href="/login">
        <i class="fa-solid-icons" style="color: #ffffff;"></i>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
        <style>svg{fill:#ffffff}</style><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5
        -32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 
        73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 
        32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3
        -32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
        </svg>
        Log Out
      </a>
    </div>
  </div>
  
  <style>
  .sidenav {
      height: 100%;
      width: 250px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      padding-top: 20px;
      background-color: #9C89B8;
      padding: 10px;
      box-shadow: 0 2px 2px rgba(0,0,0,0.11), 
                0 10px 10px rgba(0,0,0,0.11),
                0 11px 11px rgba(0,0,0,0.11), 
                0 12px 12px rgba(0,0,0,0.11);
  }
  
  .sidenav a:not(.branding) {
      padding: 15px 25px;
      text-decoration: none;
      font-size: 18px;
      color: white;
      display: block;
      margin-top: 5px;
    }

    .branding {
        position: relative;
        top: 20px;
        left: 26%;

    }

    .top-side-nav{
      border-bottom: solid 1px gray;
    }
    
    .bottom-side-nav {
      position: absolute;
      bottom: 32px;
      width: 90%;
      border-top: solid 1px whitesmoke;
  }
  
  .sidenav a:hover:not(.branding) {
      background-color: gray;
  }
  </style>