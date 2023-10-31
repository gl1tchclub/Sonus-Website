<!-- <script>
  import Modal from "$lib/components/Modal.svelte";
  let showModal = false;
</script> -->

<header>
  <!-- <div class="header-container"> -->
    <h2 class="dashboard">Dashboard</h2>
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
  <!-- </div> -->
</header>
<!-- 
<Modal bind:showModal>

</Modal> -->

<style>
  header {
    background: rgba(255, 255, 255, 0.788);
    height: 80px;
    box-shadow: 1px 2px 11px 2px rgba(153, 151, 151, 0.75);
    display: flex;
    align-items: center;
  }
  
  .dashboard {
    float: left;
    position: relative;
    left: 13em;
    transition: all 0.5s ease;
    /* margin-left: 300px; */
  }

  /* .dashboard {
    display: inline-flex;
    justify-content: space-between;
  } */

  /* .dashboard > h2 {
    
    position: relative;
    top: -16px;
    left: 12em;
  } */

  /* .dashboard > h2:last-of-type {
    flex: 0;
  } */

  /* .header-container {

  } */

  /* #menu-open {
    border: none;
    background-color: transparent;
    display: none;
    padding: 0;

  }*/

  @media (max-width: 800px) {
    .dashboard {
      left: 5em;
    }
    /* #menu-open {
      display: block;
    } */
  } 
</style>
