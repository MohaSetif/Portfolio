<script lang="ts">
  import { onMount } from 'svelte';
  import Ddos from "../img/DDOS.png";
  import emotet from "../img/emotet.png";
  import chababouna from "../img/chababouna.png";
  import dmc from "../img/dmc.png";
  import spiral from "../img/spiral.png";

  interface WebImage {
    src: string;
    name: string;
    description: string;
  }

  let web_images: WebImage[] = [
    { src: chababouna, name: 'Chababouna', description: 'It is the official website of an association named Chababouna where users can register in various courses.' },
    { src: dmc, name: 'Digital Med Care', description: 'This website is designed to facilitate scheduling home appointments with doctors and locating rare medications. Users can easily book visits with healthcare professionals and look for hard-to-find medicines, ensuring they receive the care and treatment they need.' },
    { src: emotet, name: 'Emotet', description: 'This website, developed with Reveal.js, delves into the topic of DDoS attacks, examining their effects on systems and servers. It also provides comprehensive strategies for protection and mitigation, helping users understand how to defend against such threats.' },
    { src: Ddos, name: 'Distributed Denial of Service', description: 'This website, developed with Reveal.js, delves into the topic of Emotet, examining its effects on systems and servers. It also provides comprehensive strategies for protection and mitigation, helping users understand how to defend against this malware.' },
    { src: spiral, name: 'create-spiral-stack', description: "It is a starter package to initialize your web projects, as backend you got Laravel, as frontend, you got React, Vue and Svelte. For DBMS, it's PostgreSQL by default." }
  ];

  let currentIndex = 0;

  function nextImage() {
    currentIndex = (currentIndex + 1) % web_images.length;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + web_images.length) % web_images.length;
  }

  onMount(() => {
    const interval = setInterval(nextImage, 10000);
    return () => clearInterval(interval);
  });
</script>

<section class="py-16 px-4 sm:px-6 lg:px-8" id="works">
  <div class="max-w-7xl mx-auto">
    <h1 class="title">
      My Works
    </h1>
    <div class="relative">
      <div class="overflow-hidden rounded-lg shadow-xl bg-gray-800 relative">
        <img 
          src={web_images[currentIndex].src} 
          alt={web_images[currentIndex].name} 
          class="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover object-center"
        />
        <div class="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div class="text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl">
            <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {web_images[currentIndex].name}
            </h3>
            <p class="text-xs sm:text-lg md:text-xl lg:text-2xl text-gray-300">
              {web_images[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
      <button on:click={prevImage} class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-60 hover:bg-opacity-80 rounded-r-md p-2 focus:outline-none">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button on:click={nextImage} class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-60 hover:bg-opacity-80 rounded-l-md p-2 focus:outline-none">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    <div class="mt-8 flex justify-center space-x-2">
      {#each web_images as _, i}
        <button
          class="w-3 h-3 rounded-full focus:outline-none transition-colors duration-200 ease-in-out"
          class:bg-white={i === currentIndex}
          class:bg-gray-600={i !== currentIndex}
          on:click={() => currentIndex = i}
        ></button>
      {/each}
    </div>
  </div>
</section>