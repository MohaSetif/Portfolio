<script lang="ts">
  import logo from "../img/khalil logo color (2).png";
  import "../css/navbar.css";
  import { onMount } from "svelte";

  onMount(() => {
    const navbar = document.querySelector(".nav");
    window.addEventListener("scroll", () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 50);
    });
  });
</script>

<div class="nav">
  <input type="checkbox" id="nav-check" />

  <div class="nav-header">
    <img src={logo} alt="logo" class="logo_img" />
  </div>

  <div class="nav-btn">
    <label for="nav-check" class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div class="nav-links">
    <!-- Close Button -->
    <label for="nav-check" class="close-btn group">
      <svg
        class="w-10 h-10 transition-transform duration-300 group-hover:rotate-90"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><g
          fill="none"
          stroke="currentColor"
          stroke-dasharray="16"
          stroke-dashoffset="16"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          ><path d="M7 7l10 10"
            ><animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.4s"
              values="16;0"
            /></path
          ><path d="M17 7l-10 10"
            ><animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.4s"
              dur="0.4s"
              values="16;0"
            /></path
          ></g
        ></svg
      >
    </label>

    <a href="#home" class="nav-link">
      <svg viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13m7 7v-5h4v5zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586z"
        /></svg
      >
      <span class="label_display">Home</span>
    </a>

    <a href="#about" class="nav-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
        /></svg
      >
      <span class="label_display">About Me</span>
    </a>

    <a href="#skills" class="nav-link">
      <svg viewBox="0 0 24 24"
        ><g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          ><path stroke-linejoin="round" d="m7 8l-4 4l4 4" /><path
            d="m10.5 18l3-12"
          /><path stroke-linejoin="round" d="m17 8l4 4l-4 4" /></g
        ></svg
      >
      <span class="label_display">Skills</span>
    </a>

    <a href="#works" class="nav-link">
      <svg viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M19 6.5h-3v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3m-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5.05h3v1.05a1 1 0 0 0 2 0v-1.05h6v1.05a1 1 0 0 0 2 0v-1.05h3Zm0-7H4v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
        /></svg
      >
      <span class="label_display">Projects</span>
    </a>

    <a href="#contact" class="nav-link">
      <svg viewBox="0 0 24 24"
        ><path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m7 9l3.75 3a2 2 0 0 0 2.5 0L17 9m4 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"
        /></svg
      >
      <span class="label_display">Contact</span>
    </a>
  </div>
</div>
