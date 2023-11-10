<script>
  // Svelte script to manage a modal dialog
  export let showModal;

  let dialog; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- Binds the dialog reference, handles close event, and stops propagation on inner div click. -->
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
      <span class="X close-icon" />
      <span class="Y close-icon" />
      <div class="close">Close</div>
    </button>
    <hr />
    <nav class="modal-nav">
      <div class="links">
        <a href="/" class="link">
          <div class="link-text">Home</div>
        </a>
        <a href="/profile" class="link">
          <div class="link-text">Profile</div>
        </a>
        <div class="link">
          <div class="link-text">Library</div>
        </div>
        <div class="link">
          <div class="link-text">Discover</div>
        </div>
      </div>
    </nav>
    <hr />
  </div>
</dialog>

<style>
  .link {
    text-decoration: none;
    font-size: 60px;
    color: #1f1f1f;
    transition: all 0.5s ease;
  }

  .link:hover {
    color: #efc3e6;
  }

  dialog {
    max-width: 32em;
    width: 50%;
    border-radius: 0.2em;
    border: none;
    padding: 0;
    background-color: #9c89b8;
    position: sticky;
    bottom: 30%;
    left: 25%;
    padding-bottom: 20px;
    text-align: center;
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
    padding: 20px;
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

  .close-icon {
    content: "";
    position: absolute;
    top: 50%;
    left: 33%;
    width: 2em;
    height: 1.5px;
    background-color: black;

  }

  .X {
    transform: rotate(45deg);
  }

  .Y {
    transform: rotate(-45deg);
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
    cursor: text;
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

  @media (max-width: 640px) {
    dialog {
      left: 10%;
      width: 80%;
    }
  }
</style>
