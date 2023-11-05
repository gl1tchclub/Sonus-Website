<script>
  export let showModal; // boolean

  let dialog; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <!-- svelte-ignore a11y-autofocus -->
    <button class="button" autofocus on:click={() => dialog.close()}>
      <span class="X"></span>
      <span class="Y"></span>
      <div class="close">Close</div>
    </button>
    <hr />
    <nav class="modal-nav">
      <div class="links">
        <a href="/profile" class="link">
          <div class="link-text">Profile</div>
        </a>
        <a href="/library" class="link">
          <div class="link-text">Library</div>
        </a>
        <a href="/discover" class="link">
          <div class="link-text">Discover</div>
        </a>
        <a href="/" class="link">
          <div class="link-text">About</div>
        </a>
      </div>
    </nav>
    <slot />
    <hr />
  </div>
</dialog>

<style>
  dialog {
    max-width: 32em;
    width: 100%;
    border-radius: 0.2em;
    border: none;
    padding: 0;
    background-color: #9c89b8;
    /* background-color: rgba(255, 251, 251, 0.432); */
    position: sticky;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog > div {
    padding: 1em;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal-nav {
    display: flex;
    position: sticky;
    padding: 20px;
  }

  .link {
    font-size: 70px;
    letter-spacing: 0.1em;
    text-decoration: none;
    color: rgb(32, 20, 30);
  }

  .button {
    display: block;
    border: none;
    background-color: transparent;
    position: relative;
    width: 6em;
    height: 4em;
    color: black;
  }

  .X {
    content: '';
    position: absolute;
    top: 50%;
    left: 33%;
    width: 2em;
    height: 1.5px;
    transform: rotate(45deg);
    background-color: black;
  }

  .Y {
    content: '';
    position: absolute;
    top: 50%;
    left: 33%;
    width: 2em;
    height: 1.5px;
    transform: rotate(-45deg);
    background-color: black;
  }

  .close {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -40%;
    left: 70%;
    width: 3em;
    height: 1.7em;
    font-size: 16px;
    background-color: inherit;
    color: #000;
    border: 1px solid #000;
    cursor: pointer;
    opacity: 0;
  }

  .button:hover > .close {
    animation: close 0.2s forwards 1.25s;
  }

  @keyframes close {
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 720px) {
    dialog {
      display: none;
    }
  }
</style>
