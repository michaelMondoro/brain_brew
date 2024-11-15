<script>
    import { authenticated, selectedPost } from "../store";

    export let post;
    export let modal;

    async function selectPost() {
        selectedPost.set(post);
        modal.open();
    }
    function formatDate() {
      let date = new Date(post.updated.replace(" ", "T"))
      const dateOpts = { month: 'short', day: 'numeric', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', dateOpts);
      return formattedDate;
    }
</script>

<main class="w-full">
    <ul class="w-full flex justify-between menu menu-horizontal bg-base-100 rounded-box">
      <div class="btn btn-ghost btn-sm">{formatDate()}</div>
      <li>
        <a on:click={()=>selectPost()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
          </svg>
          
        </a>
      </li>
    </ul>
</main>