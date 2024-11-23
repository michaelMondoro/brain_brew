<script>
    import { onMount } from "svelte";
    import { pb, loading, fetchPosts, selectedCategory, page } from "../store";
    let categories = {}

    onMount(async () => {
        const records = await pb.collection('mainCategories').getFullList();
        for (const category of records) {
            categories[category.name] = category.papers;
        }
    })
    
    async function selectCategory(e, category) {
        await fetchPosts(1, `categories ~ '${category}'`)
        selectedCategory.set(category);
    }

</script>

<main class="main-container">
    {#if !$loading && Object.keys(categories).length > 6}
    <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat">
            <div class="stat-title text-primary">topic</div>
            <div class="stat-value text-sm"># papers
            </div>
            <div class="stat-desc">published over the past 7 days</div>
        </div>   
        {#each Object.keys(categories) as category}
        <div class="stat min-w-28">
            <div class="stat-title hover:cursor-pointer hover:text-primary {$selectedCategory === category ? 'text-primary' : ''}" on:click={(e)=>selectCategory(e, category)}>{category}</div>
            <div class="stat-value text-sm">{categories[category].toLocaleString()}</div>
            <div class="stat-desc"></div>
        </div>    
        {/each}
    </div>
    {/if}
</main>

<style>

</style>