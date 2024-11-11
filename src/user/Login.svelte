<script>
  import { authenticated, pb } from "../store";
  import ErrorMsg from "../utils/ErrorMsg.svelte";
  

  let dialog;
  let username;
  let password;
  let loggingIn = false;
  let loginErr = false;

  export function openLogin() {
    dialog.showModal();
  }

  async function login(e) {
    e.preventDefault();

    username.value == "" ? username.parentNode.classList.add('input-error') : username.parentNode.classList.remove('input-error')
    password.value == "" ? password.parentNode.classList.add('input-error') : password.parentNode.classList.remove('input-error')
    
    if (username.value != "" && password.value != "") {
      loggingIn = true;
      try {
          const authData = await pb.collection('users').authWithPassword(username.value,password.value);
          authenticated.set(true);
          console.log('success')
          dialog.close()
      } catch (e) {
        loginErr = true;
      }
      loggingIn = false;
      username.value = null;
      password.value = null;
    }
  }
</script>

<main>
  <dialog id="modal" class="modal" bind:this={dialog}>
      <form class="modal-box max-w-3xl" on:submit={login}>
        <h1 class="text-xl m-4">Sign In</h1>
        <label class="input input-bordered flex items-center m-4">
          <input bind:this={username} type="text" class="grow" placeholder="username" />
        </label>
        <label class="input input-bordered flex items-center m-4">
          <input bind:this={password} type="password" class="grow" placeholder="password" />
        </label>
        <div class="modal-action flex flex-start">
          {#if loggingIn}
            <span class="loading loading-spinner loading-md"></span>
          {:else if loginErr}
            <ErrorMsg msg={'failed to authenticate'} />
          {/if}
          
          <input class="btn" type="submit" value="Sign In">
        </div>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
      
  </dialog>
</main>

<style></style>
