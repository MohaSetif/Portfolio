<script lang="ts">
import { onMount } from "svelte";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import my_pic from "../img/profile_pic.png";
import "../css/about.css";

onMount(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Initial states
  gsap.set(".bio-img", { x: "-100%", opacity: 0, scale: 0.8, rotationY: -10 });
  gsap.set(".bio-text", { x: "100%", opacity: 0, y: 20 });
  gsap.set(".bio-title", { y: 60, opacity: 0, scale: 0.95 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "top 30%",
      once: true,
    }
  });

  // Title fades in
  tl.to(".bio-title", { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" });

  // Image slides & pops
  tl.to(".bio-img", {
    x: "0%",
    opacity: 1,
    scale: 1,
    rotationY: 0,
    duration: 2.0,
    ease: "back.out(1.3)",
    force3D: true
  }, "-=1.0");

  // Glow fades in
  tl.from(".img-glow", { opacity: 0, scale: 0.5, duration: 1.5, ease: "power2.out" }, "-=1.5");

  // Text slides in
  tl.to(".bio-text", { x: "0%", opacity: 1, y: 0, duration: 2.0, ease: "power3.out" }, "-=1.8");

  // Animate special spans
  gsap.from(".bio-text .dev, .bio-text .design, .bio-text .sparkle", {
    opacity: 0,
    y: 15,
    duration: 0.8,
    ease: "back.out(2)",
    stagger: 0.12,
    scrollTrigger: { trigger: ".bio-text", start: "top 80%", once: true }
  });

  // Gentle floating effect
  gsap.to(".bio-img", { y: -8, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2.0 });

  // Smooth parallax
  gsap.to(".bio-img-wrapper", {
    y: -40,
    ease: "none",
    scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: 0.9 }
  });
  gsap.to(".bio-text", {
    y: -20,
    ease: "none",
    scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: 0.9 }
  });
});
</script>


<section class="about h-screen w-screen" id="about">
  <h1 class="title bio-title">Who am I?</h1>
  <div class="bio-container flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-10 px-5 md:px-20">
    <div class="bio-img-wrapper">
      <img src={my_pic} alt="Bourouba Mohamed Khalil" class="bio-img" />
      <div class="img-glow"></div>
    </div>
    <p class="bio bio-text mx-4 md:ml-12">
      I'm <span class="bold">Bourouba Mohamed El Khalil</span>, a <span class="bold">cybersecurity</span> graduate and a
      <span class="bold">full-stack</span> developer,
      with a passion for <span class="bold">UI/UX design</span>. I explore conceptual design and innovation while navigating the ever-changing landscape of Computer Science.
      Let's create <span class="bold">awesome</span> and <span class="bold">amazing</span> experiences together!
    </p>
  </div>
</section>