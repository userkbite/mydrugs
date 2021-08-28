<template>
    <main>
        <section class="section__present">
            <h1>Best</h1>
            <span class="text__span1">Quality</span>
            <h1>In MyDrugs 2.0</h1>
            <span class="text__span2">Prices as low as 0.0013 BTC.</span>
            <div>
                <img src="../assets/powder.png" alt="Pill" id="powder">
            </div>
        </section>

        <section class="section__explosive">
            <h1>Our Explosive new lineup.</h1>
            <span class="text__span3">For the best MDMA experience Ever.</span>
            <div class="images">
                <img src="../assets/donald-pill.png" alt="Donald-Pill" id="donald-pill">
                <img src="../assets/grenade-pill.png" alt="Grenade-Pill" id="grenade-pill">
            </div>
            <span>Save 20% off your first order.</span>
        </section>

        <footer>
            <h2>The Red Heart</h2>
            <span>Because we love you.</span>
        </footer>
    </main>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    main {
        text-align: center;
        justify-content: center;
        flex-direction: column;
    }

    .section__present {
        padding: 10rem 0 5rem;
    }

    .section__present h1 {
        color: #fff;
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: 900;
    }

    .section__present .text__span1 {
        text-transform: uppercase;
        font-size: 2.2rem;
        padding: 0 8px;
        background-color: #4ec7f3;
    }

    .section__present .text__span2 {
        color: #fff;
    }

    #powder {
        width: 400px;
    }

    .section__explosive {
        width: 100%;
        padding: 2rem;
        background-color: #fff;
        background-image: url(../assets/line.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 600px;
    }

    .section__explosive h1 {
        margin-top: 2rem;
        font-size: 2.3rem;
    }

    .section__explosive .text__span3 {
        font-size: 1.2rem;
    }

    .images {
        margin: 5rem 0;
    }

    #donald-pill {
        width: 150px;
    } 

    .section__explosive span {
        font-size: 1.5rem;
        font-weight: 600;
    }

    footer {
        padding: 2rem 1rem;
        color: #fff;
    }

    footer h2 {
        font-size: 2.3rem;
    }

    footer span {
        font-size: 1.2rem;
    }
</style>