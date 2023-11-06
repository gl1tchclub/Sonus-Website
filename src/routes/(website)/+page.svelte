<script>
  import JoinButton from "$lib/components/Join.svelte";
</script>

<div class="home-container">
  <div class="top-section">
    <div class="header-section">
      <div class="header-section-container">
        <JoinButton />
        <h1>hello!!!!</h1>
      </div>
      <div class="">lower content</div>
    </div>
  </div>
</div>

<style>
  .home-container {
    width: 100%;
    height: 100%;
    display: block;
  }
  .top-section {
    position: relative;
    display: block;
    height: 100vh;
  }

  .header-section {
    z-index: 2;
    width: 100%;
    height: 80%;
  }

  .header-section-container {
    display: block;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
</style>
