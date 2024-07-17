<script lang="ts">
  import "../css/works.css"
  import Ddos from "../img/DDOS.png";
  import emotet from "../img/emotet.png";
  import chababouna from "../img/Chababouna.png";
  import dmc from "../img/DMC.png";

  interface WebImage {
    src: string;
    name: string;
  }

  let web_images: WebImage[] = [
    { src: chababouna, name: 'Chababouna' },
    { src: dmc, name: 'Digital Med Care' },
    { src: emotet, name: 'Emotet' },
    { src: Ddos, name: 'Distributed Denial of Service' }
  ];
</script>

<section class="works" id="works">
    <h1 class="title">My works</h1>
    <div class="images_container px-4">
      {#each web_images as image}
        <img src={image.src} alt={image.name} width="768px" height="432px">
        <!-- <span>{image.name}</span> -->
      {/each}
    </div>
    <!-- <button class="square">
      <img src={Chababouna_img} alt="chababouna_img" class="project_img">
      <div class="centered-paragraph">
        <div class="logo-container">
          <img src={chababouna} alt="chababouna_logo" class="web_logo">
        </div>
        It's Chababouna Association's official website, a cultural and scientific association in Setif, Algeria.
        <a href="https://chababouna.dz" target="_blank" class="img_link underline">Check the website!</a>
      </div>
    </button>
    <button class="square2">
      <img src={DMC_img} alt="dmc_img" class="project_img">
      <div class="centered-paragraph">
        <div class="logo-container">
          <img src={DMC} alt="DMC_logo" class="web_logo">
        </div>
        It's the official website of Digital Med Care (DMC), where you can schedule home appointments and find rare medications.
        <a href="https://digitalmedcare.com/Home" target="_blank" class="img_link underline">Check the website!</a>
      </div>
    </button> -->
</section>