<script lang="ts">
  import "./lib/css/page.css";
  import "./lib/css/tailwind.css";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import Loader from "./lib/components/Loader.svelte";
  import Navbar from "./lib/components/Navbar.svelte";
  import Home from "./lib/components/Home.svelte";
  import About from "./lib/components/About.svelte";
  import Skills from "./lib/components/Skills.svelte";
  import Works from "./lib/components/Works.svelte";
  import Contact from "./lib/components/Contact.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import GitRepos from "./lib/components/Git_Repos.svelte";

  let loading = true;
  let pageEl: HTMLElement;

  function onLoaderComplete() {
    loading = false;
    // Unlock scroll
    document.body.style.overflow = "";
    // Fade in the main page
    gsap.fromTo(pageEl,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }

  onMount(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    const circleContainer = document.getElementById("circle-container") as HTMLElement;
    const circle = document.getElementById("circle") as HTMLElement;

    if (circleContainer && circle) {
      circleContainer.style.left = "-9999px";
      circleContainer.style.top = "-9999px";

      window.onpointermove = (event: PointerEvent) => {
        const x = event.clientX + window.scrollX;
        const y = event.clientY + window.scrollY;

        circleContainer.style.left = `${x}px`;
        circleContainer.style.top = `${y}px`;
        circle.style.display = "block";

        circle.animate(
          { left: `${x}px`, top: `${y}px` },
          { duration: 1000, fill: "forwards" },
        );
      };
    }
  });
</script>

<!-- Loader mounts on top of everything, unmounts itself after animation -->
{#if loading}
  <Loader onComplete={onLoaderComplete} />
{/if}

<!-- Main page content — stays mounted but hidden until loader is done -->
<div bind:this={pageEl} style="opacity: 0;">
  <Navbar />

  <div id="circle-container">
    <div id="circle"></div>
  </div>

  <Home />

  <div class="z-20 overflow-x-hidden">
    <About />
    <Skills />
    <Works />
    <!-- <GitRepos/> -->
    <Contact />
  </div>

  <Footer />
</div>
