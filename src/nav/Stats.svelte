<script>
    import { onMount } from "svelte";
    import { pb, loading } from "../store";
    let categories = {}
    const CATEGORIES = ["stat","econ","q-bio", "q-fin","physics","math","cs"]

    onMount(async () => {
        const records = await pb.collection('categories').getList(1,5,{sort:'-papers'});
        for (const category of CATEGORIES) {
            const records = await pb.collection('categories').getFullList({filter: `name ~ '${category}'`})
            const sum = records.map(obj => obj.papers).reduce((acc, curr) => acc + curr, 0);
            categories[category] = sum;
        }
    })
    

</script>

<main class="main-container">
    {#if !$loading && Object.keys(categories).length > 6}
    <div class="indicator">
        <div class="tooltip tooltip-left" style="z-index:10" data-tip="# papers published over the last week">
            <span class="indicator-item badge badge-secondary">topics</span>
        </div>
        <div class="stats stats-vertical lg:stats-horizontal shadow">
            {#each Object.keys(categories) as category}
            <div class="stat">
                <div class="stat-title">{category}</div>
                <div class="stat-value text-sm">{categories[category].toLocaleString()}</div>
                <div class="stat-desc"></div>
            </div>    
            {/each}
        </div>
    </div>
    {/if}
</main>

<style>

</style>