<script lang="ts">
  import Typescript from "../img/typescript.png";
  import Javascript from "../img/js.png";
  import Laravel from "../img/laravel.995x1024.png";
  import React from "../img/react.1024x911.png";
  import MySQL from "../img/mysql.png";
  import Svelte from "../img/svelte-icon.852x1024.png";
  import Tailwind from "../img/tailwind.png";
  import Bootstrap from "../img/bootstrap-5-logo-icon.png";
  import Java from "../img/java-logo-2.png"
  import pgsql from "../img/postgresql.png"
  import scene_builder from "../img/scene_builder.png"
  import Docker from "../img/docker-mark-blue.png"

  import outline_Typescript from "../img/typescript - outline.png";
  import outline_Javascript from "../img/javascript - outline.png";
  import outline_Laravel from "../img/laravel - outline.png";
  import outline_React from "../img/react - outline.png";
  import outline_MySQL from "../img/mySQL - outline.png";
  import outline_Svelte from "../img/svelte - outline.png";
  import outline_Tailwind from "../img/tailwind - outline.png";
  import outline_Bootstrap from "../img/bootstrap - outline.png";
  import outline_Java from "../img/java - outline.png"
  import outline_pgsql from "../img/postgresql - outline.png"
  import outline_scene_builder from "../img/sceneBuilder - outline.png"
  import outline_Docker from "../img/docker - outline.png"

  let isHovered = false;

  interface Logo {
      src: string;
      outlineSrc: string;
      alt: string;
  }

  let logos: Logo[] = [
      { src: Typescript, outlineSrc: outline_Typescript, alt: 'TypeScript' },
      { src: Javascript, outlineSrc: outline_Javascript, alt: 'JavaScript' },
      { src: Laravel, outlineSrc: outline_Laravel, alt: 'Laravel' },
      { src: React, outlineSrc: outline_React, alt: 'React' },
      { src: MySQL, outlineSrc: outline_MySQL, alt: 'MySQL' },
      { src: Svelte, outlineSrc: outline_Svelte, alt: 'Svelte/SvelteKit' },
      { src: Tailwind, outlineSrc: outline_Tailwind, alt: 'Tailwind' },
      { src: Bootstrap, outlineSrc: outline_Bootstrap, alt: 'Bootstrap' },
      { src: Java, outlineSrc: outline_Java, alt: 'Java' },
      { src: pgsql, outlineSrc: outline_pgsql, alt: 'PostgreSQL' },
      { src: scene_builder, outlineSrc: outline_scene_builder, alt: 'Scene Builder' },
      { src: Docker, outlineSrc: outline_Docker, alt: 'Docker' },
  ];
</script>

<section class="skills" id="skills">
    <div class="lang_logos m-12">
    <h1 class="title">My skills</h1>
    <div class="my_skills grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-white/30 justify-center items-center">
        {#each logos as logo}
        <div class="p-4 sm:p-6 md:p-8 lg:p-12 h-36 sm:h-40 md:h-44 lg:h-48 border border-white/30 flex justify-center items-center logo-container group relative">
            <img src={logo.outlineSrc} class="sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-80 lg:w-80 rounded-lg outline_img transition-all duration-300" alt={logo.alt} />
            <img src={logo.src} class="sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-80 lg:w-80 rounded-lg normal absolute transition-all duration-300 opacity-0" alt={logo.alt} />
            <div class="label absolute mt-[4rem] sm:mt-[5rem] md:mt-[6rem] lg:mt-[7rem] p-2 bg-gray-800 text-white text-xs sm:text-sm rounded-md shadow-md opacity-0 transition-all duration-300">
              {logo.alt}
            </div>
        </div>
        {/each}
    </div>
    </div>
</section>



<!-- <a class="group relative -ml-px -mt-px flex w-1/2 flex-none items-center justify-center border bg-gray-950 py-8 transition-[border-color,z-index] delay-150 hover:delay-0 hover:duration-300 focus:!z-[--focus-z] focus:transition-none sm:w-1/3 border-gray-700" style="--focus-z: 68; z-index: 67;" href="https://clerk.com/docs/quickstarts/nextjs">
  <div class="absolute inset-0.5" style="opacity: 1;">
    <canvas class="absolute inset-0 h-full w-full" aria-hidden="true" width="187" height="134"></canvas>
  </div>
  <div class="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]"></div>
  <div class="absolute inset-0" style="background: radial-gradient(42.89% 50%, rgba(19, 19, 22, 0.8) 8.57%, rgba(19, 19, 22, 0) 100%);"></div>
  <div class="relative flex w-full flex-col items-center"><div class="relative aspect-[104/42] w-[calc(104/16*1rem)] max-w-full translate-y-4 transition-transform duration-300 group-hover:translate-y-0 group-focus:translate-y-0 no-hover:translate-y-0">
    <img alt="" loading="lazy" decoding="async" data-nimg="1" class="absolute inset-0 h-full w-full transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0" style="color: transparent;" src="/_next/static/media/nextjs-outline.d911687a.svg" width="104" height="42">
    <img alt="" loading="lazy" decoding="async" data-nimg="1" class="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100" style="color: transparent;" src="/_next/static/media/nextjs.f9ef73e7.svg" width="104" height="42"></div>
    <div class="mt-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-75 group-focus:opacity-100 group-focus:delay-75 no-hover:opacity-100">Next.js</div>
  </div>
</a>

<a class="group relative -ml-px -mt-px flex w-1/2 flex-none items-center justify-center border bg-gray-950 py-8 transition-[border-color,z-index] delay-150 hover:delay-0 hover:duration-300 focus:!z-[--focus-z] focus:transition-none sm:w-1/3 border-gray-800" style="--focus-z: 6; z-index: 0;" href="https://clerk.com/docs/quickstarts/nextjs">
  <div class="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]"></div>
  <div class="absolute inset-0" style="background: radial-gradient(42.89% 50%, rgba(19, 19, 22, 0.8) 8.57%, rgba(19, 19, 22, 0) 100%);"></div>
  <div class="relative flex w-full flex-col items-center">
    <div class="relative aspect-[104/42] w-[calc(104/16*1rem)] max-w-full translate-y-4 transition-transform duration-300 group-hover:translate-y-0 group-focus:translate-y-0 no-hover:translate-y-0">
      <img alt="" loading="lazy" decoding="async" data-nimg="1" class="absolute inset-0 h-full w-full transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0" style="color: transparent;" src="/_next/static/media/nextjs-outline.d911687a.svg" width="104" height="42">
      <img alt="" loading="lazy" decoding="async" data-nimg="1" class="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100" style="color: transparent;" src="/_next/static/media/nextjs.f9ef73e7.svg" width="104" height="42"></div>
      <div class="mt-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-75 group-focus:opacity-100 group-focus:delay-75 no-hover:opacity-100">Next.js</div>
    </div>
</a> -->


<!-- 
<a 
href="https://clerk.com/docs/quickstarts/nextjs"
class="group relative -ml-px -mt-px flex w-1/2 flex-none items-center justify-center border bg-gray-950 py-8 transition-[border-color,z-index] delay-150 hover:delay-0 hover:duration-300 focus:!z-[--focus-z] focus:transition-none sm:w-1/3 border-gray-800"
style="--focus-z: 6; z-index: 0;"
on:mouseenter={() => (isHovered = true)}
on:mouseleave={() => (isHovered = false)}
>
<div class="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
{#if isHovered}
  <div
    class="absolute inset-0 bg-radial-gradient opacity-100 transition-opacity duration-500"
  />
{/if}
<div class="relative flex w-full flex-col items-center">
  <div
    class="relative aspect-[104/42] w-[calc(104/16*1rem)] max-w-full translate-y-4 transition-transform duration-300 group-hover:translate-y-0 group-focus:translate-y-0 no-hover:translate-y-0"
  >
    <img
      alt=""
      loading="lazy"
      decoding="async"
      data-nimg="1"
      class="absolute inset-0 h-full w-full transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0"
      style="color: transparent;"
      src="/_next/static/media/nextjs-outline.d911687a.svg"
      width="104"
      height="42"
    />
    <img
      alt=""
      loading="lazy"
      decoding="async"
      data-nimg="1"
      class="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100"
      style="color: transparent;"
      src="/_next/static/media/nextjs.f9ef73e7.svg"
      width="104"
      height="42"
    />
  </div>
  <div
    class="mt-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-75 group-focus:opacity-100 group-focus:delay-75 no-hover:opacity-100"
  >
    Next.js
  </div>
</div>
</a> -->