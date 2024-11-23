<script>
  import { pb, selectedPost, selectedTag, posts, searchErr, theme, loading, totalPosts, fetchPosts, page, currentFilter } from "./store";
  import { fade } from "svelte/transition";

  import NavBar from "./nav/NavBar.svelte";
  import PostModal from "./post/PaperModal.svelte";
  import PostOptions from "./post/PostOptions.svelte";
  import Post from "./post/Post.svelte";
  import ErrorMsg from "./utils/ErrorMsg.svelte";
  import { onMount } from "svelte";

  let modal;
  let loadingMore = false;
  let showJumpButton = false;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      showJumpButton = true;
    } else {
      showJumpButton = false;
    }
  })

  onMount(() => fetchPosts())

  async function loadMore() {
    loadingMore = true;
    page.set($page + 1);
    console.log('loading')
    const postItems = await pb.collection('posts').getList($page, 50, {sort: '-updated', filter: $currentFilter ? $currentFilter : ""});
    
    posts.set($posts.concat(postItems.items));
    loadingMore = false;
  }
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
        <div class="posts grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" in:fade={{ duration: 1000 }}>
          {#each $posts as post (post.id)}
            <Post post={post} modal={modal}/>
          {/each}
        </div>
        <br>
        <button class="btn" on:click={loadMore}>load more 
          {#if loadingMore}<span class="loading loading-spinner loading-md"></span>{/if}
        </button>
        {#if showJumpButton}
        <div class="fixed bottom-8 right-8 btn shadow-lg" on:click={()=>window.scrollTo(0,0)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </div>
        {/if}
        <PostModal bind:this={modal}/>
      {/if} 
    {/if}
    
  
    
  
</main>

<style>
</style>
