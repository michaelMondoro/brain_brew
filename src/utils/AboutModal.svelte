<script>
    let dialog;

    export function openAbout() {
      dialog.showModal();
    }
  </script>
  
  <main class="w-full">
    <dialog id="modal" class="modal" bind:this={dialog}>
      <div class="modal-box max-w-3xl h-3xl">
        <h2 class="text-xl font-bold text-center underline">About</h2>
        <p class="py-4 text-lg">The world is constantly evolving as technology continues to transform nearly every aspect of our society.
          It's important to stay up to date on the research advancements that change the way we live our lives. 
        </p>
        
        <div class="py-4 text-lg"><span class="text-xl font-bold">BrainBrew</span> is a media platform based entirely on the latest academic research, 
          pulling from domains such as 
          <div class="badge badge-outline badge-primary badge-md">computer science</div> 
          <div class="badge badge-ghost badge-md">economics</div> 
          <div class="badge badge-secondary badge-md">mathematics</div> and more! Updated daily and designed to present cutting edge research in a way that can be easily understood by everyone.
        </div>
        <h2 class="text-xl font-bold text-center underline">How Does It Work</h2>
        <div class="py-4 flex flex-col items-center">
          <div class="stats stats-vertical shadow ">
            <div class="stat">
              <div class="stat-title text-primary">Pull</div>
              <div class="stat-value">1</div>
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>                               
              </div>
              <div class="stat-desc">pull the latest academic research from <a class="link" href="https://info.arxiv.org" target="_blank">arxiv.org</a></div>
            </div>  

            <div class="stat">
              <div class="stat-title text-primary">Process</div>
              <div class="stat-value">2</div>
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                </svg>                                                         
              </div>
              <div class="stat-desc">generate posts/content using <a class="link" href="https://huggingface.co/spaces/mikeymon/mistral2" target="_blank">AI</a></div>
            </div>  

            <div class="stat">
              <div class="stat-title text-primary">Publish</div>
              <div class="stat-value">3</div>
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>                               
              </div>
              <div class="stat-desc">update BrainBrew DB with content</div>
            </div>  
          </div>

        </div>

        <div class="flex flex-row-reverse items-center">
          <a href="https://github.com/michaelMondoro/brain_brew" target="_blank" class="tooltip hover:drop-shadow-md" data-tip="source">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" class="stroke-none fill-current size-8">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
        </div>
        
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  
  </main>