<script lang="ts">
  import { onMount } from "svelte";
  import { ArrowUpRight } from "lucide-svelte";
  import Hls from "hls.js";

  let videoElement: HTMLVideoElement;

  onMount(() => {
    if (!videoElement) return;

    const src = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoElement);
      
      return () => hls.destroy();
    } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
      videoElement.src = src;
    }
  });
</script>

<section class="relative py-32 px-6 md:px-16 lg:px-24 text-center overflow-hidden">
  <!-- Background HLS Video -->
  <video
    bind:this={videoElement}
    autoplay
    loop
    muted
    playsinline
    class="absolute inset-0 w-full h-full object-cover z-0"
  ></video>

  <!-- Top fade -->
  <div
    class="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
    style="height: 200px; background: linear-gradient(to bottom, black, transparent);"
  ></div>
  <!-- Bottom fade -->
  <div
    class="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
    style="height: 200px; background: linear-gradient(to top, black, transparent);"
  ></div>

  <!-- Content -->
  <div class="relative z-10">
    <h2 class="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] max-w-3xl mx-auto mb-4">
      Your next website starts here.
    </h2>
    <p class="text-white/60 font-body font-light text-sm md:text-base max-w-xl mx-auto mb-8">
      Book a free strategy call. See what AI&#8209;powered design can do. No commitment, no pressure. Just possibilities.
    </p>
    <div class="flex items-center justify-center gap-6">
      <button class="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body">
        Book a Call
        <ArrowUpRight class="h-5 w-5" />
      </button>
      <button class="bg-white text-black rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors font-body">
        View Pricing
        <ArrowUpRight class="h-4 w-4" />
      </button>
    </div>

    <!-- Footer -->
    <div class="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-white/40 font-body font-light text-xs">
        &copy; 2026 Studio. All rights reserved.
      </p>
      <div class="flex items-center gap-6">
        {#each ["Privacy", "Terms", "Contact"] as link}
          <a href="#" class="text-white/40 hover:text-white/70 font-body font-light text-xs transition-colors">
            {link}
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
