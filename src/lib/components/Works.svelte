<script lang="ts">
  import chababouna from "../img/chababouna.png";
  import spiral from "../img/spiral.png";
  import encu_quiz from "../img/Encu_quiz.png";
  import movieland from "../img/movieland.png";

  interface WebImage {
    src: string;
    name: string;
    description: string;
    link?: string;
  }

  let web_images: WebImage[] = [
    { src: chababouna, name: 'Chababouna', description: 'Official website of an association with plenty of activities.', link: 'https://chababouna.dz' },
    { src: spiral, name: 'Create Spiral Stack', description: 'Starter package for web projects with Laravel, React, Vue, Svelte.', link: 'https://create-spiral-app.vercel.app' },
    { src: encu_quiz, name: 'ENCU Club Quiz', description: "ENCU's quiz about entrepreneurship", link: 'https://encu-quiz.vercel.app/'},
    { src: movieland, name: 'Movieland', description: "Movie Gallery", link: 'https://movieland-liard.vercel.app/'}
  ];

  let currentIndex = 0;

  function nextImage() {
    currentIndex = (currentIndex + 1) % web_images.length;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + web_images.length) % web_images.length;
  }
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8 relative" id="works">
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="text-4xl sm:text-5xl font-bold text-white mb-12">My Works</h1>

    <!-- Main Display -->
    <div class="relative border border-white rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-4xl hover:scale-105 transition-transform duration-500">
      <img src={web_images[currentIndex].src} alt={web_images[currentIndex].name} class="w-full h-96 sm:h-[28rem] object-cover rounded-3xl shadow-lg" />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 flex flex-col justify-end p-8 rounded-3xl">
        <h3 class="text-3xl sm:text-4xl font-bold text-white mb-3">{web_images[currentIndex].name}</h3>
        <p class="text-white text-sm sm:text-base mb-5">{web_images[currentIndex].description}</p>
        {#if web_images[currentIndex].link}
          <a href={web_images[currentIndex].link} target="_blank" class="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-black hover:bg-gray-800 transition">
            <span>Visit Website</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline-block">
              <path fill="currentColor" d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2m6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03L9.28 7.78a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l3.75-3.75l-1.543-1.543A.25.25 0 0 1 10.604 1"/>
            </svg>
          </a>
        {/if}
      </div>

      <!-- Navigation Buttons -->
      <button on:click={prevImage} class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 p-3 rounded-full hover:bg-opacity-70 transition">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button on:click={nextImage} class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 p-3 rounded-full hover:bg-opacity-70 transition">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>

    <!-- Carousel -->
    <div class="mt-10 flex justify-center items-center gap-6 overflow-x-auto py-4 scrollbar-hide px-2">
      {#each web_images as img, i}
        <button
          type="button"
          class="flex-shrink-0 cursor-pointer transform transition-all duration-500 relative focus:outline-none"
          class:scale-110={i === currentIndex}
          class:mx-4={i === currentIndex}
          class:z-20={i === currentIndex}
          class:opacity-70={i !== currentIndex}
          on:click={() => currentIndex = i}
          aria-label={`Show work: ${img.name}`}
        >
          <img src={img.src} alt={img.name} class="rounded-2xl border-2 border-white object-cover w-32 sm:w-44 h-20 sm:h-28 shadow-lg hover:shadow-2xl transition-all duration-300" />
        </button>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    background: url('../img/bg.jpg') center/cover no-repeat;
    position: relative;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Make selected card scale larger */
  @media (min-width: 640px) {
    .flex-shrink-0.scale-110 {
      transform: scale(1.25);
    }
  }
</style>
