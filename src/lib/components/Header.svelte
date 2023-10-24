<script>
  import Modal from "$lib/components/Modal.svelte";
  import Nav from "$lib/components/Nav.svelte";
  let showModal = false;
</script>

<header>
  <div class="container">
    <div class="logo" />
    <div class="website-name" />
    <Nav />
  </div>
</header>

<!-- Menu - font icon -->
<button id="menu-open" on:click={() => (showModal = true)}>
  <i class="fa-solid fa-bars" />
  <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
    <path
      d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 
                  32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 
                  32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 
                  32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
    />
  </svg>
</button>

<Modal bind:showModal>
  <Nav />
</Modal>


<style>

</style>