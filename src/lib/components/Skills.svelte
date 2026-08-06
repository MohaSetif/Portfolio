<script lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import Typescript from "../img/typescript.png";
  import Javascript from "../img/js.png";
  import Laravel from "../img/laravel.995x1024.png";
  import React from "../img/react.1024x911.png";
  import MySQL from "../img/mysql.png";
  import Svelte from "../img/svelte-icon.852x1024.png";
  import Tailwind from "../img/tailwind.png";
  import Bootstrap from "../img/bootstrap-5-logo-icon.png";
  import Java from "../img/java-logo-2.png";
  import pgsql from "../img/postgresql.png";
  import scene_builder from "../img/scene_builder.png";
  import Docker from "../img/docker-mark-blue.png";
  import Postman from "../img/postman.png";
  import Fastapi from "../img/fastapi.png";

  import outline_Typescript from "../img/typescript - outline.png";
  import outline_Javascript from "../img/javascript - outline.png";
  import outline_Laravel from "../img/laravel - outline.png";
  import outline_React from "../img/react - outline.png";
  import outline_MySQL from "../img/mySQL - outline.png";
  import outline_Svelte from "../img/svelte - outline.png";
  import outline_Tailwind from "../img/tailwind - outline.png";
  import outline_Bootstrap from "../img/bootstrap - outline.png";
  import outline_Java from "../img/java - outline.png";
  import outline_pgsql from "../img/postgresql - outline.png";
  import outline_scene_builder from "../img/sceneBuilder - outline.png";
  import outline_Docker from "../img/docker - outline.png";
  import outline_Postman from "../img/postman - outline.png";
  import outline_Fastapi from "../img/fastapi - outline.png";
  import PixelCard from "./PixelCard.svelte";

  let isHovered = false;

  interface Logo {
    src: string;
    outlineSrc: string;
    color: any;
    alt: string;
  }

  let logos: Logo[] = [
    {
      src: Typescript,
      color: "ts",
      outlineSrc: outline_Typescript,
      alt: "TypeScript",
    },
    {
      src: Javascript,
      color: "js",
      outlineSrc: outline_Javascript,
      alt: "JavaScript",
    },
    {
      src: Laravel,
      color: "laravel",
      outlineSrc: outline_Laravel,
      alt: "Laravel",
    },
    { src: React, color: "react", outlineSrc: outline_React, alt: "React" },
    { src: MySQL, color: "mysql", outlineSrc: outline_MySQL, alt: "MySQL" },
    {
      src: Svelte,
      color: "svelte",
      outlineSrc: outline_Svelte,
      alt: "Svelte/SvelteKit",
    },
    {
      src: Tailwind,
      color: "tailwind",
      outlineSrc: outline_Tailwind,
      alt: "Tailwind",
    },
    {
      src: Bootstrap,
      color: "bootstrap",
      outlineSrc: outline_Bootstrap,
      alt: "Bootstrap",
    },
    { src: Java, color: "java", outlineSrc: outline_Java, alt: "Java" },
    {
      src: pgsql,
      color: "pgsql",
      outlineSrc: outline_pgsql,
      alt: "PostgreSQL",
    },
    {
      src: scene_builder,
      color: "sceneBuilder",
      outlineSrc: outline_scene_builder,
      alt: "Scene Builder",
    },
    { src: Docker, color: "docker", outlineSrc: outline_Docker, alt: "Docker" },
    {
      src: Postman,
      color: "postman",
      outlineSrc: outline_Postman,
      alt: "Postman",
    },
    {
      src: Fastapi,
      color: "fastapi",
      outlineSrc: outline_Fastapi,
      alt: "FastAPI",
    },
  ];

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top 50%",
        once: true
      }
    });

    tl.from(".title", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" })
      .from(".logo-container", { y: 40, opacity: 0, duration: 0.6, stagger: 0.05, ease: "back.out(1.5)" }, "-=0.4");
  });
</script>

<section class="skills bg-black" id="skills">
  <div class="lang_logos">
    <h1 class="title text-center">My skills</h1>
    <div
      class="my_skills mt-16 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-center items-center"
    >
      {#each logos as logo}
        <div
          class="logo-container group relative h-40 sm:h-44 md:h-48 rounded-[2rem] p-[1px] overflow-hidden cursor-pointer"
        >
          <!-- Premium Animated Border Gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
          
          <div class="relative w-full h-full rounded-[2rem] bg-black/40 backdrop-blur-md flex justify-center items-center overflow-hidden z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-[0.98]">
            <PixelCard variant={logo.color}>
              <div
                class="relative w-full h-full flex flex-col items-center justify-center p-6 z-20"
              >
                <!-- Subtle background glow on hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                
                <div class="relative flex-1 w-full flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-2">
                  <!-- Outline -->
                  <img
                    src={logo.outlineSrc}
                    alt={logo.alt}
                    class="absolute w-14 h-14 md:w-16 md:h-16 object-contain transition-all duration-500 ease-out opacity-60 group-hover:scale-110 group-hover:opacity-0 group-hover:blur-sm"
                  />

                  <!-- Color -->
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    class="absolute w-14 h-14 md:w-16 md:h-16 object-contain transition-all duration-500 ease-out opacity-0 scale-90 group-hover:scale-110 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  />
                </div>

                <!-- Premium Pill Label -->
                <div
                  class="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                >
                  <div class="px-4 py-1.5 rounded-full liquid-glass-strong border border-white/10 text-white text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap shadow-xl">
                    {logo.alt}
                  </div>
                </div>
              </div>
            </PixelCard>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
