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
      // { src: Postman, outlineSrc: Postman, alt: 'Postman' },
      // { src: Fastapi, outlineSrc: Fastapi, alt: 'FastAPI' },
  ];
</script>

<section class="skills" id="skills">
    <div class="lang_logos m-12">
    <h1 class="title">My skills</h1>
    <div class="my_skills mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-center items-center">
        {#each logos as logo}
        <div class="p-4 bg-indigo-950/20 rounded-2xl border border-indigo-400/50 sm:p-6 md:p-8 lg:p-12 h-36 sm:h-40 md:h-44 lg:h-48 flex justify-center items-center logo-container group relative">
            <img src={logo.outlineSrc} class="sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-80 lg:w-80 rounded-lg outline_img transition-all duration-300" alt={logo.alt} />
            <img src={logo.src} class="sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-80 lg:w-80 rounded-lg normal absolute transition-all duration-300 opacity-0" alt={logo.alt} />
            <div class="label absolute mt-[6rem] sm:mt-[7rem] md:mt-[8rem] lg:mt-[9rem] p-2 bg-gray-800 text-white text-xs sm:text-sm rounded-md shadow-md opacity-0 transition-all duration-300">
              {logo.alt}
            </div>
        </div>
        {/each}
    </div>
    </div>
</section>