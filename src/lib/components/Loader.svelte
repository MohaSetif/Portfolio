<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  export let onComplete: () => void;

  let progress = 0;
  let progressBar: HTMLElement;
  let loaderEl: HTMLElement;
  let counterEl: HTMLElement;
  let taglineEl: HTMLElement;
  let nameEl: HTMLElement;
  let lineEl: HTMLElement;

  onMount(() => {
    const tl = gsap.timeline();

    // 1. Fade in name + line + tagline
    tl.fromTo(nameEl,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    )
    .fromTo(lineEl,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.7, ease: "power3.out", transformOrigin: "left center" },
      "-=0.4"
    )
    .fromTo(taglineEl,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // 2. Animate progress counter + bar from 0 → 100
    const progressObj = { val: 0 };
    tl.to(progressObj, {
      val: 100,
      duration: 2.2,
      ease: "power1.inOut",
      onUpdate() {
        progress = Math.round(progressObj.val);
        if (progressBar) {
          progressBar.style.width = `${progress}%`;
        }
      }
    }, "+=0.2");

    // 3. Curtain slide-up exit
    tl.to(loaderEl, {
      yPercent: -100,
      duration: 1.0,
      ease: "power4.inOut",
      onComplete: onComplete,
    }, "+=0.3");
  });
</script>

<!-- Full-screen loader overlay -->
<div
  bind:this={loaderEl}
  class="loader fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-black"
>
  <!-- Ambient glow blobs -->
  <div class="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-700/15 blur-[160px] pointer-events-none"></div>
  <div class="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-700/15 blur-[160px] pointer-events-none"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white/3 blur-[100px] pointer-events-none"></div>

  <!-- Central content -->
  <div class="relative z-10 flex flex-col items-center gap-8 px-6 text-center w-full max-w-md">

    <!-- Name -->
    <div bind:this={nameEl} style="opacity: 0;">
      <p class="text-white/30 text-xs uppercase tracking-[0.5em] font-semibold mb-3">Portfolio</p>
      <h1 class="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
        Bourouba<br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Mohamed El Khalil
        </span>
      </h1>
    </div>

    <!-- Divider line -->
    <div bind:this={lineEl} class="w-32 h-px bg-gradient-to-r from-blue-400 to-purple-500 origin-left" style="transform: scaleX(0);"></div>

    <!-- Tagline -->
    <p bind:this={taglineEl} class="text-white/40 text-sm font-light tracking-wide" style="opacity: 0;">
      Developer · Designer · Cybersecurity
    </p>

    <!-- Progress section -->
    <div class="w-full mt-4">
      <!-- Counter -->
      <div class="flex items-center justify-between mb-3">
        <span class="text-white/20 text-xs uppercase tracking-widest font-semibold">Loading</span>
        <span bind:this={counterEl} class="text-white/60 text-sm font-semibold tabular-nums">{progress}%</span>
      </div>

      <!-- Progress bar track -->
      <div class="w-full h-px bg-white/10 rounded-full overflow-hidden relative">
        <!-- Glowing fill -->
        <div
          bind:this={progressBar}
          class="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative"
          style="width: 0%; box-shadow: 0 0 12px rgba(139, 92, 246, 0.8);"
        ></div>
      </div>
    </div>

  </div>

  <!-- Bottom signature -->
  <div class="absolute bottom-8 left-0 right-0 flex items-center justify-center">
    <p class="text-white/15 text-xs tracking-[0.3em] uppercase font-light">© 2026 All rights reserved</p>
  </div>
</div>

<style>
  .loader {
    will-change: transform;
  }
</style>
