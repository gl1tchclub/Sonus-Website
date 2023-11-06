<script>
  import JoinButton from "$lib/components/Join.svelte";
</script>

<div class="home-container">
  <div class="top-section">
    <div class="header-section">
      <div class="header-top-container">
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
    height: 60%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 75% 25%;
    padding-top: 200px;
    flex-wrap: wrap;
}

.header-top-container {
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
</style>
