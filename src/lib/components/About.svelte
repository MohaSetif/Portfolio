<script lang="ts">
import { onMount } from "svelte";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import my_pic from "../img/profile_pic.png";

onMount(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-section",
      start: "top 85%",
      once: true,
    }
  });

  // Background blobs fade in
  tl.fromTo(".bg-blob", { opacity: 0, scale: 0.5 }, { opacity: 0.6, scale: 1, duration: 2, ease: "power3.out", stagger: 0.3 });

  // Glass card slide up
  tl.fromTo(".about-card", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=1.5");

  // Image float and fade
  tl.fromTo(".bio-pic", { x: 50, opacity: 0, rotationY: 15 }, { x: 0, opacity: 1, rotationY: 0, duration: 1.5, ease: "power2.out" }, "-=0.8");

  // Text stagger
  tl.fromTo(".stagger-text", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power2.out" }, "-=1.2");

  // Continuous floating for the image container
  gsap.to(".bio-pic-wrapper", {
    y: -15,
    rotationX: 2,
    rotationY: -2,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  // Parallax on blobs
  gsap.to(".bg-blob-1", {
    y: 100,
    ease: "none",
    scrollTrigger: { trigger: "#about-section", start: "top bottom", end: "bottom top", scrub: true }
  });
  gsap.to(".bg-blob-2", {
    y: -100,
    ease: "none",
    scrollTrigger: { trigger: "#about-section", start: "top bottom", end: "bottom top", scrub: true }
  });
});
</script>

<section id="about-section" class="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 bg-black">
  <!-- Decorative background blur blobs -->
  <div class="bg-blob bg-blob-1 absolute top-0 left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none"></div>
  <div class="bg-blob bg-blob-2 absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none"></div>

  <!-- Main Content Card -->
  <div class="about-card liquid-glass-strong relative z-10 w-[90%] max-w-7xl rounded-[2.5rem] p-8 md:p-16 lg:p-20 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
    
    <!-- Text Content -->
    <div class="flex-1 text-center lg:text-left z-10">
      <h2 class="stagger-text text-xs md:text-sm uppercase tracking-[0.4em] text-white/50 mb-6 font-semibold">
        Who am I?
      </h2>
      <h1 class="stagger-text text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
        Crafting <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">digital experiences</span> that inspire.
      </h1>
      
      <p class="stagger-text text-base md:text-lg lg:text-xl text-white/70 leading-relaxed mb-6 font-light max-w-2xl mx-auto lg:mx-0">
        I'm <span class="text-white font-medium">Bourouba Mohamed El Khalil</span>, a cybersecurity graduate turned full-stack developer with a deep passion for <span class="text-white font-medium">UI/UX design</span>. 
      </p>
      
      <p class="stagger-text text-base md:text-lg lg:text-xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
        I explore the intersection of conceptual design and cutting-edge technology, constantly navigating the ever-changing landscape of Computer Science. Let's create something <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium">truly amazing</span> together.
      </p>
    </div>

    <!-- Image Content -->
    <div class="flex-1 relative w-full max-w-sm lg:max-w-md mx-auto perspective-[1000px]">
      <div class="bio-pic-wrapper relative">
        <!-- Inner glow for the image container -->
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-purple-500/40 rounded-3xl blur-2xl transform scale-[0.85] -z-10"></div>
        
        <!-- The image -->
        <div class="bio-pic relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black/50 aspect-[4/5]">
          <img src={my_pic} alt="Bourouba Mohamed Khalil" class="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700 ease-out" />
        </div>
      </div>
    </div>
  </div>
</section>