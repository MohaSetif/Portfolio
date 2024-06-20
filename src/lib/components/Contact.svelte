<script lang="ts">
  import "../css/contact.css"
    import emailjs from 'emailjs-com';
    import White_logo from "../img/khalil logo white (2).png";
    import { onMount } from 'svelte';

    const sendMail = (event: Event) => {
        event.preventDefault();
        emailjs.init("nwgs7MHKu2gcb9_nS");

        const params = {
        sendername: (document.querySelector("#sendername") as HTMLInputElement).value,
        subject: (document.querySelector("#subject") as HTMLInputElement).value,
        message: (document.querySelector("#message") as HTMLInputElement).value,
        replyto: ""
        };

        const serviceID = "service_xo4l9xq";
        const templateID = "template_437s6mz";

        emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Email sent successfully!");
        })
        .catch(err => {
            alert("Something wrong happened!");
        });
    }; 


    let left: HTMLElement | null;

    onMount(() => {
    left = document.getElementById("left-side") as HTMLElement;

    const handleOnMove = (event: MouseEvent | TouchEvent) => {
        const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        const p = (clientX / window.innerWidth) * 100;
        if (left) {
        left.style.width = `${p}%`;
        }
    };

    document.onmousemove = handleOnMove;
    document.ontouchmove = handleOnMove;

    const subtitle = document.getElementsByClassName("card-subtitle")[0] as HTMLElement;

    const createWord = (text: string, index: number): HTMLElement => {
        const word = document.createElement("span");
        word.innerHTML = `${text} `;
        word.classList.add("card-subtitle-word");
        word.style.transitionDelay = `${index * 40}ms`;
        return word;
    };

    const addWord = (text: string, index: number) => subtitle.appendChild(createWord(text, index));

    const createSubtitle = (text: string) => text.split(" ").map(addWord);

    createSubtitle("to build your next project!");
    })

</script>

<section class="contact mb-20" id="contact">
    <h1 class="title">
      Let's get in touch!
    </h1>
    <div class="email_container flex justify-center align-center text-center">
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">Email me!</h3>
          <h4 class="card-subtitle"> </h4>
          <form action="#" class="email_form space-y-8">
            <div>
              <br>
              <input type="email" id="sendername" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your_email@gmail.com" required>
            </div>
            <div class="sm:col-span-2">
              <input type="text" id="subject" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="subject" required>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="tell me what you want here..."></textarea>
            </div>
            <button on:click={sendMail} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Send
            </button>          
        </form>
        </div>
        <i class="card-icon">
          <img src={White_logo} alt="Logo">
        </i>
      </div>
    </div>
</section>