<!-- <script>
  import Modal from "$lib/components/Modal.svelte";
  let showModal = false;
</script> -->

<header>
  <div class="header-container">
    <div class="dashboard">
      <h2>Dashboard</h2>
    </div>
    <!-- <button id="menu-open" on:click={() => (showModal = true)}>
      <i class="fa-solid fa-bars"></i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 448 512"
      >
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 
                32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 
                32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 
                32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </button> -->
  </div>
</header>
<!-- 
<Modal bind:showModal>

</Modal> -->

<style>
  header {
    margin: 10px;
  }

  .dashboard > h2 {
    margin: 0;
    position: relative;
    top: -10px;
    left: 12em;
  }

  .header-container {
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 1em 1em 0em; /* change to 1em to add padding */
    display: flex;
    transition: all 0.3s ease;
  }

  /* #menu-open {
    border: none;
    background-color: transparent;
    display: none;
    padding: 0;

  }

  @media (max-width: 800px) {
    #menu-open {
      display: block;
    }
  } */
</style>
