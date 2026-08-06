<script lang="ts">
  import { onMount } from "svelte";
  import { ArrowUpRight, ArrowDown } from "lucide-svelte";
  import Hls from "hls.js";

  import "../css/home.css";

  let width: number = 0;
  let lightSpread: number;

  onMount(() => {
    width = window.innerWidth;
    window.onresize = () => width = window.innerWidth;
  });

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

<section class="relative h-screen w-full py-32 px-6 md:px-16 lg:px-24 text-center overflow-hidden">
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
    style="height: 700px; background: linear-gradient(to bottom, black, transparent);"
  ></div>
  <!-- Bottom fade -->
  <div
    class="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
    style="height: 200px; background: linear-gradient(to top, black, transparent);"
  ></div>

  <!-- Content -->
  <div class="relative mt-20 z-10">
    <h2 class="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.85] max-w-3xl mx-auto mb-4">
      Your next project starts here.
    </h2>
    <p class="text-white/60 font-body font-light text-sm md:text-base max-w-xl mx-auto mb-8">
      Let's have a talk together. Creativity is the key. No commitment, no pressure. Just possibilities.
    </p>
    <div class="flex items-center justify-center gap-6">
      <a href="#contact" class="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body">
        Send a Mail
        <ArrowUpRight class="h-5 w-5" />
      </a>
      <a href="#about" class="bg-white text-black rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-white/90 transition-colors font-body">
        About me
        <ArrowDown class="h-4 w-4" />
      </a>
    </div>
  </div>
</section>

<!--
<script lang=ts>
  import LightRays from './LightRays.svelte';
  import "../css/home.css";
  import { onMount } from 'svelte';

  let width: number = 0;
  let lightSpread: number;

  onMount(() => {
    width = window.innerWidth;
    window.onresize = () => width = window.innerWidth;
  });

  $: lightSpread = width <= 768 ? 8 : 4;
  
</script>


<section class="relative h-screen w-full overflow-hidden">

  <div class="absolute inset-0 z-0">
    <LightRays
      raysOrigin="top-center"
      raysColor="#A287C9"
      raysSpeed={2}
      lightSpread={lightSpread}
      rayLength={1}
      followMouse={true}
      mouseInfluence={0.1}
      noiseAmount={0.1}
      distortion={0.05}
      className="custom-rays"
    />
  </div>


  <div class="relative z-10 flex items-center justify-center h-full px-4">
    <h1 class="text-white font-bold text-center 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
               leading-snug sm:leading-snug md:leading-tight lg:leading-tight 
               max-w-6xl">
      Cybersecurity Enthusiast, Innovative Developer, and Designer Creating Distinct Web Experiences
    </h1>
  </div>
</section> -->