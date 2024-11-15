<script>
    import Menu from "./Menu.svelte";
    import { loading, pb, posts, searchErr, selectedTag } from "../store";
    import Stats from "./Stats.svelte";

    let input; 
    let menu;

    async function search(e) {
        e.preventDefault();
        loading.set(true);
        selectedTag.set("");
        const query = input.value;
        const results = await pb.collection('posts').getList(1, 50, {
            filter: `content ~ '${query}' || paper_abstract ~ '${query}' || impact ~ '${query}' || purpose ~ '${query}'`,
        });

        results.items.length == 0 ? searchErr.set(true) : searchErr.set(false)
        posts.set(results.items)
        loading.set(false);
    }

    document.addEventListener('keydown', function(event) {
        if ((event.key === 'k' || event.key === 'K') && 
            (event.metaKey || event.ctrlKey)) {
        event.preventDefault();  
        input.focus();
        }
    });
</script>

<main class="w-full">
    <div class="main-container">
        <div class="indicator-item indicator-bottom btn btn-sm mt-4"><span class="badge">BrainBrew ☕</span> | keeping research simple</div>
      </div>
    <div class="horizontal-container pad-side">
        <Menu bind:this={menu}/>
        <form class="w-1/3" on:submit={search}>
            <label class="input input-bordered flex items-center gap-2">
                <input bind:this={input} type="text" class="grow" placeholder="Search" />
                <kbd class="kbd kbd-sm">ctl</kbd> + <kbd class="kbd kbd-sm">k</kbd>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70">
                    <path
                    fill-rule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clip-rule="evenodd" />
                </svg>
            </label>
            <input type="submit" hidden>
        </form>
    </div>
    <Stats />
    {#if $selectedTag !== ""}
    <div class="main-container px-5">
        <div class="badge badge-primary badge-lg bg-sky-400">
            <svg on:click={() => menu.reset()}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-4 w-4 stroke-current cursor-pointer">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            {$selectedTag}
        </div>
    </div>
    {/if}
</main>

<style>
.pad-side {
    padding-right: 5em!important;
    padding-left: 5em!important;
}

</style>