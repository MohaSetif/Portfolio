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
  import Postman from "../img/postman.png"
  import Fastapi from "../img/fastapi.png"

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
  import outline_Postman from "../img/postman - outline.png"
  import outline_Fastapi from "../img/fastapi - outline.png"
  import PixelCard from "./PixelCard.svelte";

  let isHovered = false;

  interface Logo {
      src: string;
      outlineSrc: string;
      color: any;
      alt: string;
  }

  let logos: Logo[] = [
      { src: Typescript, color: 'ts',outlineSrc: outline_Typescript, alt: 'TypeScript' },
      { src: Javascript, color: 'js',outlineSrc: outline_Javascript, alt: 'JavaScript' },
      { src: Laravel, color: 'laravel',outlineSrc: outline_Laravel, alt: 'Laravel' },
      { src: React, color: 'react',outlineSrc: outline_React, alt: 'React' },
      { src: MySQL, color: 'mysql',outlineSrc: outline_MySQL, alt: 'MySQL' },
      { src: Svelte, color: 'svelte',outlineSrc: outline_Svelte, alt: 'Svelte/SvelteKit' },
      { src: Tailwind, color: 'tailwind',outlineSrc: outline_Tailwind, alt: 'Tailwind' },
      { src: Bootstrap, color: 'bootstrap',outlineSrc: outline_Bootstrap, alt: 'Bootstrap' },
      { src: Java, color: 'java',outlineSrc: outline_Java, alt: 'Java' },
      { src: pgsql, color: 'pgsql',outlineSrc: outline_pgsql, alt: 'PostgreSQL' },
      { src: scene_builder, color: 'sceneBuilder',outlineSrc: outline_scene_builder, alt: 'Scene Builder' },
      { src: Docker, color: 'docker',outlineSrc: outline_Docker, alt: 'Docker' },
      { src: Postman, color: 'postman',outlineSrc: outline_Postman, alt: 'Postman' },
      { src: Fastapi, color: 'fastapi',outlineSrc: outline_Fastapi, alt: 'FastAPI' },
  ];
</script>

<section class="skills" id="skills">
  <div class="lang_logos m-12">
    <h1 class="title">My skills</h1>
    <div class="my_skills mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-center items-center">
      {#each logos as logo}
        <div class="rounded-2xl border border-indigo-400/30 h-36 sm:h-40 md:h-44 lg:h-48 flex justify-center items-center logo-container group relative">
          <PixelCard variant={logo.color}>            
            <div class="relative w-full h-full flex items-center justify-center">
              
            <!-- Outline -->
            <img
            src={logo.outlineSrc}
            alt={logo.alt}
            class="w-2/5 h-2/5 object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-0"
            />

            <!-- Color -->
            <img
            src={logo.src}
            alt={logo.alt}
            class="absolute w-2/5 h-2/5 object-contain transition-all duration-300 ease-in-out transform opacity-0 group-hover:scale-110 group-hover:opacity-100"
            />

              <!-- Label -->
              <div
                class="absolute bottom-2 bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                {logo.alt}
              </div>

            </div>
          </PixelCard>
        </div>
      {/each}
    </div>
  </div>
</section>
