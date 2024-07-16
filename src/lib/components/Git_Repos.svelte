<script lang="ts">
  import { onMount } from "svelte";
  
  interface Repo {
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
  }

  let repos: Repo[] = [];
  const username = 'MohaSetif';

  onMount(async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      repos = await response.json();
    } catch (error) {
      console.error('Error fetching repos:', error);
    }
  });
</script>

<section class="repos mt-[8rem]" id="repos">
    <div class="container m-12 mx-auto p-4 text-white">
        <h1 class="title">My Github Repositories</h1>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {#each repos as repo}
            <div class="bg-gray-900 border border-gray-600 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <h3 class="text-lg font-semibold mb-2 text-blue-400 truncate">{repo.name}</h3>
                <p class="text-gray-300 mb-4 text-sm h-16 overflow-hidden">{repo.description || 'No description available'}</p>
              </div>
              <div>
                <div class="flex justify-between items-center mb-2">
                  {#if repo.language}
                    <span class="text-xs text-gray-400">{repo.language}</span>
                  {/if}
                  <span class="text-xs text-yellow-400">⭐ {repo.stargazers_count}</span>
                </div>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" class="w-full text-center inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors duration-300">View on GitHub</a>
              </div>
            </div>
          {/each}
        </div>
    </div>
</section>