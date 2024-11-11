<script>
  import { selectedPost } from "../store";

  let dialog;
  export function open() {
    dialog.showModal();
  }

  function formatDate() {
    let date = new Date($selectedPost.updated.replace(" ", "T"))
    const dateOpts = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', dateOpts);
    return formattedDate;
  }
</script>

<main>
  <dialog id="modal" class="modal" bind:this={dialog}>
    {#if $selectedPost}
    <div class="modal-box max-w-3xl">
      <h3 class="text-lg font-bold">{$selectedPost.paper_title}</h3>
      <div class="divider">paper</div>
      <p class="py-4"><u>purpose</u>: {$selectedPost.purpose}</p>
      <p class="py-4"><u>impact</u>: {$selectedPost.impact}</p>
      <p class="py-3"><u>authors</u>: {$selectedPost.paper_authors}</p>
      <div class="badge badge-info badge-md">{formatDate()}</div>
      <div class="modal-action">
        <div class="badge badge-secondary badge-md">
            <a href="{$selectedPost.paper_link}" target="_blank" class="link">referenced paper</a>
        </div>
      </div>
    </div>
    {/if}
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

</main>