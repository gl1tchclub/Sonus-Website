<script>
  import Modal from "$lib/components/Modal.svelte";
  let showModal = false;
</script>

<header>
    <h2 id="dashboard">
      <span class="reveal">
        <slot />
      </span>
    </h2>

    <button id="menu-open" on:click={() => (showModal = true)}>
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
    </button>
</header>

<Modal bind:showModal>

</Modal>

<style>
  header {
    height: 80px;
    display: flex;
    align-items: center;
    z-index: 1;
    position: inherit;
  }
  
  #dashboard {
    float: left;
    position: relative;
    left: 13em;
    transition: all 0.5s ease;
    display: block;
    z-index: 2;
  }

  #menu-open {
    border: none;
    background-color: transparent;
    display: none;
    padding: 0;
    position: relative;
    left: 30px;
  }

  @media (max-width: 980px) {
    #dashboard {
      left: 5em;
    }
  }

  @media (max-width: 840px) {
    #dashboard {
      display: none;
    }
    #menu-open {
      display: block;
    }
  } 
</style>
