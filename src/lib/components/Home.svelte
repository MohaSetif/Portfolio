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
  <!-- Background layer -->
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

  <!-- Centered Content -->
  <div class="relative z-10 flex items-center justify-center h-full px-4">
    <h1 class="text-white font-bold text-center 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
               leading-snug sm:leading-snug md:leading-tight lg:leading-tight 
               max-w-6xl">
      Cybersecurity Enthusiast, Innovative Developer, and Designer Creating Distinct Web Experiences
    </h1>
  </div>
</section>
