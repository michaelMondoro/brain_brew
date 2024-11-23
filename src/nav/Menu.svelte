<script>
  import { theme, searchErr, selectedTag, fetchPosts, selectedCategory } from "../store";
  import AboutModal from "../utils/AboutModal.svelte";
  import Login from "../user/Login.svelte";
  import SignUp from "../user/Signup.svelte";

  let aboutModal;
  let loginModal;
  let signupModal;

  export async function reset() {
    searchErr.set(false);
    selectedTag.set("");
    selectedCategory.set("");
    await fetchPosts();
  }

</script>


<main>
  <AboutModal bind:this={aboutModal}/>
  <Login bind:this={loginModal}/>
  <SignUp bind:this={signupModal}/>
  <ul class="menu menu-horizontal bg-base-200 rounded-box ">
    <!-- <div class="dropdown">
      <span class="indicator">
        {#if $authenticated}<span class="indicator-item badge badge-secondary">{JSON.parse(localStorage.getItem('pocketbase_auth')).model.username}</span>{/if}
        <li>
          <a tabindex="0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:stroke-sky-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </a>
        </li>
      </span>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        
        {#if $authenticated}
          <li><a on:click={()=>{pb.authStore.clear();authenticated.set(undefined)}}>Logout</a></li>
          <li><a on:click={async() => {console.log('yup')}}>Profile</a></li>
        {:else}
          <li><a on:click={()=>loginModal.openLogin()}>Login</a></li>
          <li><a on:click={()=>signupModal.openSignup()}>Sign Up</a></li>
        {/if}
      </ul>
    </div> -->
    
    <div class="tooltip tooltip-bottom" data-tip="feed">
      <li>
        <a on:click={reset}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:stroke-sky-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          
        </a>
      </li>
    </div>
    <div class="tooltip tooltip-bottom" data-tip="about">
      <li>
        <a on:click={()=>aboutModal.openAbout()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:stroke-sky-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>        
        </a>
      </li>
    </div>
    <li>
      <a on:click={()=>theme.set($theme==='dark' ? 'light' : 'dark')}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:stroke-sky-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      </a>
    </li>
  </ul>

</main>

<style>
</style>