<script>
    import PostOptions from "./PostOptions.svelte";
    import { selectedTag, fetchPosts, selectedCategory, page} from "../store";
    import { fade } from "svelte/transition";

    export let post;
    export let modal;

    async function getTag(e) {
      const category = e.target.parentNode.dataset.tip;
      await fetchPosts(`categories ~ '${category}'`);
      selectedTag.set(category);
      selectedCategory.set("");
    }
</script>


<div class="card sm:card-side bg-base-100 shadow-xl" in:fade={{ duration: 1000 }}>
    <div class="card-body">
      <h2 class="card-title"></h2>
      <p class="overflow-hidden">{post.content}</p>      
      <div class="grid grid-cols-3 w-full py-0 gap-2">
        {#each post.categories.slice(0,4) as category}
        <div class="tooltip" data-tip="{category.desc}">
          <span on:click={getTag} class="badge badge-accent cursor-pointer text-xs hover:bg-sky-400">#{category.name}</span>
        </div>
        {/each}
      </div>
      <div class="card-actions justify-end">
        <PostOptions post={post} modal={modal}/>
    </div>
    </div>
</div>

<style>

</style>
