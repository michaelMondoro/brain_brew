<script>
    import { onMount } from "svelte";
    import { pb, loading } from "../store";
    let categories = {}
    const CATEGORIES = ["stat","econ","q-bio", "q-fin","physics","math","cs"]

    onMount(async () => {
        for (const category of CATEGORIES) {
            const records = await pb.collection('categories').getFullList({filter: `name ~ '${category}'`})
            const sum = records.map(obj => obj.papers).reduce((acc, curr) => acc + curr, 0);
            categories[category] = sum;
        }
    })
    

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
            <div class="stat-title">{category}</div>
            <div class="stat-value text-sm">{categories[category].toLocaleString()}</div>
            <div class="stat-desc"></div>
        </div>    
        {/each}
    </div>
    {/if}
</main>

<style>

</style>