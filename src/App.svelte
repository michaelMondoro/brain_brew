<script>
  import { pb, selectedPost, posts, searchErr, theme, loading } from "./store";
  import { fade } from "svelte/transition";

  import NavBar from "./nav/NavBar.svelte";
  import PostModal from "./post/PaperModal.svelte";
  import PostOptions from "./post/PostOptions.svelte";
  import Post from "./post/Post.svelte";
  import ErrorMsg from "./utils/ErrorMsg.svelte";
    import { onMount } from "svelte";

  let modal;
  let page = 1;

  async function getem() {
    loading.set(true);
    const postItems = await pb.collection('posts').getList(page, 50, {sort: '-updated'});
    posts.set(postItems.items)
    loading.set(false);
  }
  onMount(() => getem())
</script>

<main data-theme={$theme} style="min-height: 100vh">
  <NavBar />
  <div class="main-container">
    {#if $searchErr}
      <ErrorMsg msg={"worry we couldn't find anything"}/>
    {/if}
    {#if $loading}
      <div class="main-container">
        <p class="py-4 btn btn-wide"><span class="loading loading-spinner loading-xs text-warning"></span> loading . . .</p>
        
      </div>
    {:else} 
      <div class="grid grid-cols-3 gap-4 2xl:grid-cols-4" in:fade={{ duration: 1000 }}>
        {#each $posts as post (post.id)}
          <Post post={post} modal={modal}/>
        {/each}
      </div>
      <br>
      <PostModal bind:this={modal}/>
    {/if} 
  
    
  
</main>

<style>
</style>
