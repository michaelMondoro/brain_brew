<script>
    let dialog;

    export function openAbout() {
      dialog.showModal();
    }
  </script>
  
  <main class="w-full">
    <dialog id="modal" class="modal" bind:this={dialog}>
      <div class="modal-box max-w-3xl h-3xl">
        <h2 class="text-xl font-bold text-center underline">What is this?</h2>
        <p class="py-4 text-lg">The world is constantly evolving as technology continues to transform nearly every aspect of our society.
          It's important to stay up to date on the research advancements that change the way we live our lives. 
        </p>
        <div class="py-4 text-lg"><span class="text-xl font-bold">BrainBrew</span> is a media platform entirely based on the latest academic research, 
          pulling from domains such as 
          <div class="badge badge-outline badge-primary badge-md">computer science</div> 
          <div class="badge badge-ghost badge-md">economics</div> 
          <div class="badge badge-secondary badge-md">mathematics</div> and more! Updated daily and designed to present cutting edge research in a way that can be easily understood by everyone.
        </div>
        <div class="modal-action">
          <p class="btn btn-ghost">Research Provided by </p>
          <a class="btn" href="https://info.arxiv.org" target="_blank">arXiv.org</a>
        </div>
        
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  
  </main>