<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".square", {
        x: "0%",
        duration: 3,
        opacity: 1,
        scrollTrigger: {
            trigger: '.square',
            start: 'top 80%',
            end: 'top 30%',
            scrub: true
        }
        });

        gsap.to(".square2", {
        x: "0%",
        duration: 3,
        opacity: 1,
        scrollTrigger: {
            trigger: '.square2',
            start: 'top 80%',
            end: 'top 30%',
            scrub: true
        }
        });

        gsap.from(".square", {
        x: "-100%",
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: '.square',
            start: 'top 100%',
            end: 'top 50%',
        }
        });

        gsap.from(".square2", {
        x: "100%",
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: '.square2',
            start: 'top 100%',
            end: 'top 50%',
        }
        });

        gsap.from(".bio", {
        y: "100%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top 30%',
            end: 'top 10%',
            once: true
        }
        });
    });
</script>

<section class="about" id="about">
    <h1 class="title">Who am I?</h1>
    <p class="bio">
      I'm Bourouba Mohamed El Khalil, a dynamic force in the fields of <span class="dev">front-end</span> and <span class="dev">back-end development</span>, infused with a strong sense of captivating <span class="design">UI/UX design</span>. I'm very interested in exciting areas of conceptual design and innovation, and I'm always trying to navigate the ever-changing landscape of Computer Science (CS) and design. Let's start this exciting odyssey together and create a way to do truly <span class="sparkle">awesome</span> and <span class="sparkle">amazing things</span>!
    </p>
</section>