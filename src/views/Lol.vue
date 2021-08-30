<template>
    <main>
        <section class="card">
            <img src="/assets/donald-pill.png" class="animate">
            <h3 class="text" id="title"></h3>
            <a href="/shop"><i class="fas fa-thumbs-up"></i> I understand</a>
        </section>
    </main>
</template>

<script>
export default {
    name: 'Lol',
    created() {
        var scripts = [
            "js/machineEffect.js"
        ]
        scripts.forEach(script => {
            let tag = document.createElement("script");
            tag.setAttribute("src", script);
            document.head.appendChild(tag);
        });
    }
}
</script>

<style scoped>
    main {
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .card {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        height: 550px;
        background-color: #000;
        border: solid purple;
        border-radius: 2rem;
    }

    .animate {
        width: 110px;
        animation: updown 6s infinite;
    }

    @keyframes updown {
        20% {
            transform: translateX(-20px);
        }
        40% {
            transform: translateX(20px);
        }
        60% {
            transform: translateX(-20px);
        }
        80% {
            transform: translateX(20px);
        }
    }

    .text {
        margin: 2rem 0;
        text-align: center;
        color: #fff;
        font-size: 1.3rem;
        white-space: pre-line;
    }

    .text:after {
        content: '|';
        margin-left: 5px;
        opacity: 1;
        animation: machine .7s infinite;
    }

    @keyframes machine {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    a {
        border: solid #ee00af;
        border-radius: 2rem;
        padding: 0.8rem 2rem;
        color: lightblue;
        font-size: 1.2rem;
    }
</style>