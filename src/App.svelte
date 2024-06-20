<script lang="ts">
  import "./lib/css/page.css";
  import "./lib/css/tailwind.css";
  import Navbar from "./lib/components/Navbar.svelte";
  import Home from "./lib/components/Home.svelte";
  import About from "./lib/components/About.svelte";
  import Skills from "./lib/components/Skills.svelte";
  import Works from "./lib/components/Works.svelte";
  import Contact from "./lib/components/Contact.svelte";
  import Footer from "./lib/components/Footer.svelte";

  window.addEventListener("load", () => {
    const circleContainer = document.getElementById("circle-container") as HTMLElement;
    const circle = document.getElementById("circle") as HTMLElement;

    circleContainer.style.left = "-9999px";
    circleContainer.style.top = "-9999px";

    window.onpointermove = (event: PointerEvent) => {
      const x = event.clientX + window.scrollX;
      const y = event.clientY + window.scrollY;

      circleContainer.style.left = `${x}px`;
      circleContainer.style.top = `${y}px`;
      circle.style.display = "block";

      circle.animate(
        {
          left: `${x}px`,
          top: `${y}px`
        },
        { duration: 1000, fill: "forwards" }
      );
    };
  });

</script>


<Navbar/>

<div id="circle-container">
  <div id="circle"></div>
</div>
  
<Home/>

<div class="body block justify-center items-center min-h-screen bg-center bg-gray-100 dark:bg-gray-900 selection:bg-red-500 selection:text-white">
  <About/>
  <Skills/>
  <Works/>
  <Contact/>
</div>

<Footer/>
