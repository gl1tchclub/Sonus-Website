<script>
  import Footer from "$lib/components/Footer.svelte";

</script>

<svelte:head>
  <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Agbalumo"
/>

<div class="container">
  <div class="slot">
    <slot />
  </div>
</div>
<Footer />

<style>
  .container {
    width: 100%;
    height: 100vh;
  }
</style>
