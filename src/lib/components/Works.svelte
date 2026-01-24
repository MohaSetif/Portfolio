<script lang="ts">
  import chababouna from "../img/chababouna.png";
  import spiral from "../img/spiral.png";
  import encu_quiz from "../img/Encu_quiz.png";
  import tilawah from "../img/tilawah.png";

  import tilawah_mobile from "../img/tilawah_mobile.jpg";
  import aklee from "../img/aklee.jpg";

  interface Project {
    src: string;
    name: string;
    tagline: string;
    purpose: string;
    impact: string;
    link?: string;
  }

  interface MobileProject {
    src: string;
    name: string;
    tagline: string;
    purpose: string;
    impact: string;
    link?: string;
  }

  let projects: Project[] = [
    { 
      src: chababouna, 
      name: 'Chababouna', 
      tagline: 'Empowering Youth Through Digital Presence',
      purpose: 'Built to give the Chababouna association a modern digital platform to showcase their mission, activities, and connect with the community they serve.',
      impact: 'Enabled the organization to reach more youth, streamline event registrations, and establish credibility through professional online presence.',
      link: 'https://chababouna.dz' 
    },
    { 
      src: spiral, 
      name: 'Create Spiral Stack', 
      tagline: 'Accelerating Web Development Workflows',
      purpose: 'Created to eliminate repetitive setup work and help developers launch projects faster with a production-ready starter package combining Laravel with modern frontend frameworks.',
      impact: 'Reduced project initialization time from hours to minutes, allowing developers to focus on building features rather than configuring tooling.',
      link: 'https://create-spiral-app.vercel.app' 
    },
    { 
      src: encu_quiz, 
      name: 'ENCU Club Quiz', 
      tagline: 'Gamifying Entrepreneurship Education',
      purpose: 'Developed to make entrepreneurship learning interactive and engaging for university students, transforming theoretical concepts into an exciting quiz experience.',
      impact: 'Increased student participation in entrepreneurship programs and made business concepts more accessible through gamification.',
      link: 'https://encu-quiz.vercel.app/'
    },
    { 
      src: tilawah, 
      name: 'Tilawah', 
      tagline: 'Connecting Muslims to Spiritual Practice',
      purpose: 'Built to provide a beautiful, accessible platform for Quran recitation and prayer times, helping Muslims maintain their daily spiritual routines.',
      impact: 'Serves as a daily companion for users seeking to strengthen their connection with the Quran and stay consistent with prayer schedules.',
      link: 'https://tilawah-kappa.vercel.app/'
    }
  ];

  let mobileProjects: MobileProject[] = [
    { 
      src: aklee,
      name: 'Aklee', 
      tagline: 'AI-Powered Nutrition Scanner',
      purpose: 'Built to help users scan nutritional information of food items quickly using AI-powered image recognition and generate nutriscores.',
      impact: 'Helped health-conscious users make informed dietary choices by providing instant access to nutritional data while shopping.',
    },
    { 
      src: tilawah_mobile,
      name: 'Tilawah', 
      tagline: 'Quran & Prayer Companion',
      purpose: 'Developed to offer a seamless mobile experience for Quran recitation and prayer times, making spiritual practice convenient anywhere.',
      impact: 'Enabled users to maintain their religious routines on the go, fostering a deeper connection with their faith through mobile accessibility.',
    }
  ];

  let selectedProject = 0;
  let selectedMobileProject = 0;
</script>

<section class="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="works">
  <div class="absolute inset-0 bg-gradient-to-b from-neutral-950 via-purple-900/20 to-slate-900"></div>
  
  <div class="max-w-7xl mx-auto relative z-10">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-5xl sm:text-6xl font-bold text-white mb-4">
        Projects That Matter
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Every project tells a story of solving real problems for real people
      </p>
    </div>

    <!-- Main Project Display -->
    <div class="grid lg:grid-cols-2 gap-8 mb-12 items-start">
      <!-- Image Side -->
      <div class="relative group h-[300px] sm:h-[400px] lg:h-[500px]">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full">
          <img 
            src={projects[selectedProject].src} 
            alt={projects[selectedProject].name} 
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Content Side -->
      <div class="flex flex-col justify-start space-y-6 min-h-[400px] lg:h-[500px]">
        <div>
          <h3 class="text-4xl font-bold text-white mb-2">
            {projects[selectedProject].name}
          </h3>
          <p class="text-purple-300 text-lg font-medium">
            {projects[selectedProject].tagline}
          </p>
        </div>

        <div class="space-y-4 flex-1">
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 class="text-purple-400 font-semibold mb-2 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              The Purpose
            </h4>
            <p class="text-gray-300 leading-relaxed">
              {projects[selectedProject].purpose}
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 class="text-pink-400 font-semibold mb-2 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              The Impact
            </h4>
            <p class="text-gray-300 leading-relaxed">
              {projects[selectedProject].impact}
            </p>
          </div>
        </div>

        {#if projects[selectedProject].link}
          <a 
            href={projects[selectedProject].link} 
            target="_blank"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 z-20"
          >
            <span>Explore Project</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        {/if}
      </div>
    </div>

    <!-- Project Grid Navigation -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {#each projects as project, i}
        <button
          on:click={() => selectedProject = i}
          class="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
          class:ring-4={i === selectedProject}
          class:ring-purple-500={i === selectedProject}
          class:opacity-50={i !== selectedProject}
        >
          <img 
            src={project.src} 
            alt={project.name} 
            class="w-full h-32 object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
            <div class="text-left">
              <h5 class="text-white font-bold text-sm">{project.name}</h5>
              <p class="text-gray-300 text-xs mt-1 line-clamp-1">{project.tagline}</p>
            </div>
          </div>
          {#if i === selectedProject}
            <div class="absolute top-2 right-2 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          {/if}
        </button>
      {/each}
    </div>

    <!-- Divider -->
    <div class="my-20 flex items-center">
      <div class="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div class="px-6">
        <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      </div>
      <div class="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </div>

    <!-- Mobile Apps Header -->
    <div class="text-center mb-16">
      <h2 class="text-5xl sm:text-6xl font-bold text-white mb-4">
        Mobile Applications
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Building experiences that fit in your pocket
      </p>
    </div>

    <!-- Main Mobile App Display -->
    <div class="grid lg:grid-cols-2 gap-8 mb-12 items-start">
      <!-- Image Side -->
      <div class="relative group h-[400px] sm:h-[500px] lg:h-[600px]">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
          <img 
            src={mobileProjects[selectedMobileProject].src} 
            alt={mobileProjects[selectedMobileProject].name} 
            class="max-h-full max-w-full object-contain p-4"
          />
        </div>
      </div>

      <!-- Content Side -->
      <div class="flex flex-col justify-start space-y-6 min-h-[400px] lg:h-[500px]">
        <div>
          <h3 class="text-4xl font-bold text-white mb-2">
            {mobileProjects[selectedMobileProject].name}
          </h3>
          <p class="text-cyan-300 text-lg font-medium">
            {mobileProjects[selectedMobileProject].tagline}
          </p>
        </div>

        <div class="space-y-4 flex-1">
          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 class="text-blue-400 font-semibold mb-2 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              The Purpose
            </h4>
            <p class="text-gray-300 leading-relaxed">
              {mobileProjects[selectedMobileProject].purpose}
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 class="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              The Impact
            </h4>
            <p class="text-gray-300 leading-relaxed">
              {mobileProjects[selectedMobileProject].impact}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Apps Grid Navigation -->
    <div class="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
      {#each mobileProjects as mobileApp, i}
        <button
          on:click={() => selectedMobileProject = i}
          class="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
          class:ring-4={i === selectedMobileProject}
          class:ring-blue-500={i === selectedMobileProject}
          class:opacity-50={i !== selectedMobileProject}
        >
          <div class="w-full h-32 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <img 
              src={mobileApp.src} 
              alt={mobileApp.name} 
              class="max-h-full max-w-full object-contain p-4"
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
            <div class="text-left">
              <h5 class="text-white font-bold text-sm">{mobileApp.name}</h5>
              <p class="text-gray-300 text-xs mt-1 line-clamp-1">{mobileApp.tagline}</p>
            </div>
          </div>
          {#if i === selectedMobileProject}
            <div class="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    background: url('../img/bg.jpg') center/cover no-repeat;
    position: relative;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>