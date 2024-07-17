<script lang="ts">
    import logo from "../img/khalil logo color (2).png"
    import "../css/navbar.css"
    import { afterUpdate, onMount } from "svelte";

    onMount(() => {
        let Y = 0;
        const navbar = document.querySelector(".nav");
        const btn = document.querySelector(".menu-btn");
        const navLinks = document.querySelector(".nav_links") as HTMLElement;

        if (btn && navLinks) {
            btn.addEventListener("click", () => {
                navLinks.style.display = navLinks.style.display === "none" || navLinks.style.display === "" ? "block" : "none";
            });
        }

        window.addEventListener('scroll', function(e) {
            Y = window.scrollY;
            if (Y > 50) {
              if(navbar !== null){
                navbar.classList.add('scrolled');
              }
            } else {
              if(navbar !== null){
                navbar.classList.remove('scrolled');
              }
            }
        }); 
    });

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function addBounceInAnimation(element: Element, delay: number) {
    const text = element.textContent;
    element.innerHTML = '';

    if(text !== null){
      for (let i = 0; i < text.length; i++){
        const span = document.createElement('span');
        span.textContent = text[i];
        span.classList.add('bounce-in-right');
        span.style.animationDelay = `${i * delay}ms`
        element.appendChild(span);
      }
    }
  }

  afterUpdate(() => {
    if (isMenuOpen) {
      const menuItems = document.querySelectorAll('.nav-links a');
      const delayBetweenLetters = 100;

      menuItems.forEach((menuItem) => {
        addBounceInAnimation(menuItem, delayBetweenLetters);
      });
    }
  });

  onMount(() => {
    const menuItems = document.querySelectorAll('.nav-links a');
    const delayBetweenLetters = 100; // Adjust the delay in milliseconds

    menuItems.forEach((menuItem) => {
      addBounceInAnimation(menuItem, delayBetweenLetters);
    });
  });

</script>

<!-- <header class="navbar">
    <div class="logo">
        <img src={logo} alt="logo" class="logo_img">
    </div>
    <div class="nav_elements">
        <button class="menu-btn">
            &#9776;
        </button>
        <ul class="nav_links">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#works">Works</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
</header> -->

<div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="logo">
        <img src={logo} alt="logo" class="logo_img">
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#works">Works</a>
    <a href="#contact">Contact</a>
  </div>
</div>