<script lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import { ArrowUpRight } from "lucide-svelte";
  import chababouna from "../img/chababouna.png";
  import spiral from "../img/spiral.png";
  import encu_quiz from "../img/Encu_quiz.png";
  import tilawah from "../img/tilawah.png";
  import tilawah_mobile from "../img/tilawah_mobile.jpg";
  import aklee from "../img/aklee.jpg";
  import campus from "../img/campus.png";
  import DMC from "../img/DMC.png";

  interface Project {
    src: string;
    name: string;
    tagline: string;
    purpose: string;
    impact: string;
    link?: string;
    accentColor: string;
  }

  interface MobileProject {
    src: string;
    name: string;
    tagline: string;
    purpose: string;
    impact: string;
    link?: string;
    accentColor: string;
  }

  let projects: Project[] = [
    {
      src: chababouna,
      name: "Chababouna",
      tagline: "Empowering Youth Through Digital Presence",
      purpose: "Built to give the Chababouna association a modern digital platform to showcase their mission, activities, and connect with the community they serve.",
      impact: "Enabled the organization to reach more youth, streamline event registrations, and establish credibility through professional online presence.",
      link: "",
      accentColor: "from-emerald-500/40 to-teal-600/40",
    },
    {
      src: DMC,
      name: "Digital Med Care",
      tagline: "Revolutionizing Healthcare Access",
      purpose: "Developed to provide patients with a seamless digital experience for booking appointments, accessing medical records, and communicating with healthcare providers. Also, having the ability to look for rare medications and order them online.",
      impact: "Improved patient engagement and satisfaction by reducing wait times and enhancing the accessibility of healthcare services.",
      link: "",
      accentColor: "from-cyan-500/40 to-blue-600/40",
    },
    {
      src: spiral,
      name: "Create Spiral Stack",
      tagline: "Accelerating Web Development Workflows",
      purpose: "Created to eliminate repetitive setup work and help developers launch projects faster with a production-ready starter package combining Laravel with modern frontend frameworks.",
      impact: "Reduced project initialization time from hours to minutes, allowing developers to focus on building features rather than configuring tooling.",
      link: "https://create-spiral-app.vercel.app",
      accentColor: "from-purple-500/40 to-blue-600/40",
    },
    {
      src: encu_quiz,
      name: "ENCU Club Quiz",
      tagline: "Gamifying Entrepreneurship Education",
      purpose: "Developed to make entrepreneurship learning interactive and engaging for university students, transforming theoretical concepts into an exciting quiz experience.",
      impact: "Increased student participation in entrepreneurship programs and made business concepts more accessible through gamification.",
      link: "https://encu-quiz.vercel.app/",
      accentColor: "from-violet-500/40 to-amber-600/40",
    },
    {
      src: tilawah,
      name: "Tilawah",
      tagline: "Connecting Muslims to Spiritual Practice",
      purpose: "Built to provide a beautiful, accessible platform for Quran recitation and prayer times, helping Muslims maintain their daily spiritual routines.",
      impact: "Serves as a daily companion for users seeking to strengthen their connection with the Quran and stay consistent with prayer schedules.",
      link: "https://tilawah-kappa.vercel.app/",
      accentColor: "from-red-500/40 to-amber-600/40",
    },
    {
      src: campus,
      name: "CampusMS",
      tagline: "A School Management System for Headmasters and Teachers",
      purpose: "Built to provide a beautiful, accessible platform for managing school operations, helping headmasters and teachers streamline their workflows.",
      impact: "Simplifies administrative tasks and improves communication between staff, students, and employees.",
      link: "https://campus.sevalla.app/",
      accentColor: "from-violet-500/40 to-cyan-600/40",
    },
  ];

  let mobileProjects: MobileProject[] = [
    {
      src: aklee,
      name: "Aklee",
      tagline: "AI-Powered Nutrition Scanner",
      purpose: "Built to help users scan nutritional information of food items quickly using AI-powered image recognition and generate nutriscores.",
      impact: "Helped health-conscious users make informed dietary choices by providing instant access to nutritional data while shopping.",
      accentColor: "from-green-500/30 to-lime-600/30",
    },
    {
      src: tilawah_mobile,
      name: "Tilawah",
      tagline: "Quran & Prayer Companion",
      purpose: "Developed to offer a seamless mobile experience for Quran recitation and prayer times, making spiritual practice convenient anywhere.",
      impact: "Enabled users to maintain their religious routines on the go, fostering a deeper connection with their faith through mobile accessibility.",
      accentColor: "from-orange-500/30 to-yellow-600/30",
    },
  ];

  let selectedProject = 0;
  let selectedMobileProject = 0;

  // Crossfade image on selection change
  function selectProject(i: number) {
    if (i === selectedProject) return;
    gsap.to(".hero-img", { opacity: 0, scale: 1.02, duration: 0.3, ease: "power2.in", onComplete: () => {
      selectedProject = i;
      gsap.fromTo(".hero-img", { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
    }});
    gsap.to(".hero-info", { y: 10, opacity: 0, duration: 0.25, ease: "power2.in", onComplete: () => {
      gsap.to(".hero-info", { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    }});
  }

  function selectMobileProject(i: number) {
    if (i === selectedMobileProject) return;
    selectedMobileProject = i;
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      // Section header
      gsap.from(".works-header > *", {
        scrollTrigger: { trigger: "#works", start: "top 80%", once: true },
        y: 30, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power2.out"
      });

      // Hero card
      gsap.from(".hero-card", {
        scrollTrigger: { trigger: ".hero-card", start: "top 80%", once: true },
        y: 60, opacity: 0, duration: 1.1, ease: "power3.out"
      });

      // Thumbnail strip
      gsap.from(".thumb-wrapper", {
        scrollTrigger: { trigger: ".thumb-strip", start: "top 85%", once: true },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.5)"
      });

      // Mobile section
      gsap.from(".mobile-card-wrapper", {
        scrollTrigger: { trigger: ".mobile-section", start: "top 85%", once: true },
        y: 50, opacity: 0, duration: 0.9, stagger: 0.2, ease: "power3.out"
      });

      ScrollTrigger.refresh();
    }, 100);
  });
</script>

<section
  id="works"
  class="relative py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-black"
>
  <!-- Ambient background blobs -->
  <div class="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-700/15 blur-[140px] pointer-events-none"></div>

  <div class="max-w-7xl mx-auto relative z-10">

    <!-- ═══ HEADER ═══ -->
    <div class="works-header text-center mb-16">
      <p class="text-xs uppercase tracking-[0.4em] text-white/40 font-semibold mb-4">Selected Work</p>
      <h2 class="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight">Projects That Matter</h2>
      <p class="text-lg text-white/50 max-w-xl mx-auto font-light">Every project tells a story of solving real problems for real people.</p>
    </div>

    <!-- ═══ HERO SPOTLIGHT CARD ═══ -->
    <div class="hero-card relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl mb-6"
         style="min-height: 560px;">
      <!-- Full-bleed background image -->
      <img
        src={projects[selectedProject].src}
        alt={projects[selectedProject].name}
        class="hero-img absolute inset-0 w-full h-full object-cover"
      />

      <!-- Gradient overlays -->
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent"></div>

      <!-- Accent color glow at top -->
      <div class="absolute inset-0 bg-gradient-to-br {projects[selectedProject].accentColor} mix-blend-soft-light"></div>

      <!-- Index counter -->
      <div class="absolute top-6 right-8 text-white/20 font-bold text-7xl select-none leading-none">
        {String(selectedProject + 1).padStart(2, '0')}
      </div>

      <!-- Floating glass info panel -->
      <div class="hero-info absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <!-- Label -->
        <p class="text-xs uppercase tracking-[0.4em] text-white/50 font-semibold mb-3">
          Web Application
        </p>

        <!-- Title + Tagline -->
        <h3 class="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          {projects[selectedProject].name}
        </h3>
        <p class="text-white/60 text-base md:text-lg mb-6 max-w-xl font-light">
          {projects[selectedProject].tagline}
        </p>

        <!-- Info pills row -->
        <div class="flex flex-wrap gap-3 mb-8">
          <div class="liquid-glass-strong rounded-2xl px-5 py-3 border border-white/10 max-w-sm">
            <p class="text-white/40 text-xs uppercase tracking-wider font-semibold mb-1">Purpose</p>
            <p class="text-white/80 text-sm leading-relaxed">{projects[selectedProject].purpose}</p>
          </div>
          <div class="liquid-glass-strong rounded-2xl px-5 py-3 border border-white/10 max-w-sm">
            <p class="text-white/40 text-xs uppercase tracking-wider font-semibold mb-1">Impact</p>
            <p class="text-white/80 text-sm leading-relaxed">{projects[selectedProject].impact}</p>
          </div>
        </div>

        <!-- CTA button -->
        {#if projects[selectedProject].link}
          <a
            href={projects[selectedProject].link}
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full liquid-glass-strong border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 group"
          >
            Explore Project
            <ArrowUpRight class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        {/if}
      </div>
    </div>

    <!-- ═══ THUMBNAIL STRIP ═══ -->
    <div class="thumb-strip flex gap-4 overflow-x-auto pb-2 mb-24 scrollbar-hide">
      {#each projects as project, i}
        <div class="thumb-wrapper flex-shrink-0">
          <button
            on:click={() => selectProject(i)}
            class={`thumb-btn relative w-48 h-28 rounded-2xl overflow-hidden border transition-all duration-500 group ${
              i === selectedProject
                ? 'border-white opacity-100'
                : 'border-white/10 opacity-40 hover:opacity-70'
            }`}
          >
            <img src={project.src} alt={project.name} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
              <span class="text-white text-xs font-semibold tracking-wide">{project.name}</span>
            </div>
            <!-- Active indicator line -->
            {#if i === selectedProject}
              <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
            {/if}
          </button>
        </div>
      {/each}
    </div>

    <!-- ═══ DIVIDER ═══ -->
    <div class="flex items-center gap-6 mb-20">
      <div class="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <p class="text-white/20 text-xs uppercase tracking-[0.4em] font-semibold whitespace-nowrap">Mobile Applications</p>
      <div class="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>

    <!-- ═══ MOBILE APPS ═══ -->
    <div class="mobile-section">
      <div class="text-center mb-12">
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">In Your Pocket</h2>
        <p class="text-white/50 text-lg font-light">Building experiences that go wherever you go.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        {#each mobileProjects as app, i}
          <div class="mobile-card-wrapper">
            <div
              class="mobile-card group relative rounded-[2rem] overflow-hidden border border-white/10 cursor-pointer transition-all duration-500 hover:border-white/25 hover:shadow-2xl"
              style="min-height: 480px;"
            >
              <!-- Image fills the card -->
              <img
                src={app.src}
                alt={app.name}
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              <div class="absolute inset-0 bg-gradient-to-br {app.accentColor} mix-blend-soft-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <!-- Index -->
              <div class="absolute top-5 right-6 text-white/15 font-bold text-6xl select-none leading-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <!-- Info at bottom -->
              <div class="absolute bottom-0 left-0 right-0 p-7">
                <p class="text-xs uppercase tracking-[0.35em] text-white/40 font-semibold mb-2">Mobile</p>
                <h3 class="text-3xl font-bold text-white mb-1 tracking-tight">{app.name}</h3>
                <p class="text-white/60 text-sm mb-5 font-light">{app.tagline}</p>

                <!-- Expanding info on hover -->
                <div class="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-500 ease-in-out">
                  <div class="liquid-glass-strong rounded-xl p-4 border border-white/10 mb-4">
                    <p class="text-white/40 text-xs uppercase tracking-wider font-semibold mb-1">Impact</p>
                    <p class="text-white/80 text-sm leading-relaxed">{app.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>

<style>
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>