<script lang="ts">
  import emailjs from "emailjs-com";
  import White_logo from "../img/khalil logo white (2).png";
  import { onMount } from "svelte";

  let sendername = "";
  let subject = "";
  let message = "";
  let loading = false;

  const sendMail = (event: Event) => {
    event.preventDefault();
    emailjs.init("nwgs7MHKu2gcb9_nS");
    loading = true;

    const params = { sendername, subject, message, replyto: "" };

    const serviceID = "service_1s1m92q";
    const templateID = "template_437s6mz";

    emailjs
      .send(serviceID, templateID, params)
      .then(() => {
        loading = false;
        alert("Email sent successfully!");
      })
      .catch(() => alert("Something went wrong!"));
  };

  onMount(() => {
    const subtitle = document.querySelector(".card-subtitle") as HTMLElement;
    const text = "to build your next project!";

    text.split(" ").forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.transitionDelay = `${index * 40}ms`;
      span.classList.add("card-subtitle-word");
      subtitle.appendChild(span);
    });
  });
</script>

<section id="contact" class="pb-20">
  <div class="container mx-auto px-4">
    <h1 class="title text-center m-16">Let's Get in Touch</h1>

    <div
      class="max-w-6xl mt-10 mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden"
    >
      <div class="md:flex">
        <div
          class="md:flex-shrink-0 bg-blue-950 md:w-1/3 p-8 flex items-center justify-center"
        >
          <img src={White_logo} alt="Logo" class="w-32" />
        </div>

        <div class="p-8 md:w-2/3">
          <h3 class="text-2xl font-semibold text-gray-400 mb-2">Email Me</h3>
          <p class="card-subtitle text-gray-600 mb-6"></p>

          <form on:submit|preventDefault={sendMail} class="space-y-6">
            <div>
              <input
                bind:value={sendername}
                type="email"
                placeholder="your_email@gmail.com"
                class="w-full bg-gray-800 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                bind:value={subject}
                type="text"
                placeholder="Subject"
                class="w-full bg-gray-800 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                bind:value={message}
                rows="4"
                placeholder="Tell me what you want here..."
                class="w-full bg-gray-800 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              class={`w-full text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-900 border border-blue-900 transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "bg-blue-950"}`}
            >
              {#if loading}
                Sending...
              {:else}
                Send Message
              {/if}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  #contact {
    border-top: 1px solid #29294b;
    --s: 226px;
    --c1: #0c0c14;
    --c2: #29294b;

    --_s: calc(2 * var(--s)) calc(2 * var(--s));
    --_g: 35.36% 35.36% at;
    --_c: #0000 70%, var(--c2) 68% 70%, #0000 72%;
    background:
      radial-gradient(var(--_g) 100% 25%, var(--_c)) var(--s) var(--s) /
        var(--_s),
      radial-gradient(var(--_g) 0 75%, var(--_c)) var(--s) var(--s) / var(--_s),
      radial-gradient(var(--_g) 100% 25%, var(--_c)) 0 0 / var(--_s),
      radial-gradient(var(--_g) 0 75%, var(--_c)) 0 0 / var(--_s),
      repeating-conic-gradient(var(--c1) 0 25%, #0000 0 50%) 0 0 / var(--_s),
      radial-gradient(var(--_c)) 0 calc(var(--s) / 2) / var(--s) var(--s)
        var(--c1);
  }
</style>
