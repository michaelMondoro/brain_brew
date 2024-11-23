<script>
  import { pb, selectedPost, selectedTag, posts, searchErr, theme, loading, totalPosts, fetchPosts, page } from "./store";
  import { fade } from "svelte/transition";

  import NavBar from "./nav/NavBar.svelte";
  import PostModal from "./post/PaperModal.svelte";
  import PostOptions from "./post/PostOptions.svelte";
  import Post from "./post/Post.svelte";
  import ErrorMsg from "./utils/ErrorMsg.svelte";
  import { onMount } from "svelte";

  let modal;
  onMount(() => fetchPosts(1))
</script>

<main data-theme={$theme} style="min-height: 100vh">
  <NavBar />
  <div class="main-container">
    {#if $searchErr}
      <ErrorMsg msg={"worry we couldn't find anything"}/>
    {:else}
      {#if $loading}
      <div class="main-container">
        <p class="py-4 btn btn-wide"><span class="loading loading-spinner loading-xs text-warning"></span> loading . . .</p>
      </div>
      {:else} 
        <div class="btn btn-sm"><span class="badge badge-neutral">{$totalPosts ? $totalPosts.toLocaleString() : ''}</span> results</div>
        <div class="grid grid-cols-3 gap-4 2xl:grid-cols-4" in:fade={{ duration: 1000 }}>
          {#each $posts as post (post.id)}
            <Post post={post} modal={modal}/>
          {/each}
        </div>
        <br>
        <PostModal bind:this={modal}/>
      {/if} 
    {/if}
    
  
    
  
</main>

<style>
</style>
