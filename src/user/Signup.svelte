<script>
  import { authenticated, pb } from "../store";
  import ErrorMsg from "../utils/ErrorMsg.svelte";
  

  let dialog;
  let username;
  let password;
  let email;
  let loggingIn = false;
  let loginErr = false;

  export function openSignup() {
    dialog.showModal();
  }

  async function signIn(e) {
    e.preventDefault();
    username.value == "" ? username.parentNode.classList.add('input-error') : username.parentNode.classList.remove('input-error')
    password.value == "" ? password.parentNode.classList.add('input-error') : password.parentNode.classList.remove('input-error')
    email.value == "" ? email.parentNode.classList.add('input-error') : email.parentNode.classList.remove('input-error')
    
    if (username.value != "" && password.value != "") {
      loggingIn = true;
      try {
          const data = {
              "username": username.value,
              "email": email.value,
              "emailVisibility": false,
              "password": password.value,
              "passwordConfirm": password.value,
              "likes": []
          };  
          const record = await pb.collection('users').create(data);
          console.log('created user')
          const authData = await pb.collection('users').authWithPassword(username.value,password.value);
          authenticated.set(true);
          dialog.close();
          username.value = null;
          password.value = null;
          email.value = null;
      } catch (e) {
        const errorData = e.data.data;
        if (errorData.username) loginErr = errorData.username.message;
        if (errorData.email) loginErr = errorData.email.message;
        if (errorData.password) loginErr = errorData.password.message;
      }
      loggingIn = false;
    }
  }
</script>

<main>
  <dialog id="modal" class="modal" bind:this={dialog}>
      <form class="modal-box max-w-3xl" on:submit={signIn}>
        <h1 class="text-xl m-4">Create Account</h1>
        <label class="input input-bordered flex items-center m-4">
          <input bind:this={email} type="email" class="grow" placeholder="email" />
        </label>
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
            <ErrorMsg msg={loginErr}/>
          {/if}
          
          <input class="btn" type="submit" value="Sign Up">
        </div>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
      
  </dialog>
</main>

<style></style>
