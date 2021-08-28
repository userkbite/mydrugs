<template>
    <main>
        <section class="section__present">
            <h1>Best</h1>
            <span class="text__span1">Quality</span>
            <h1>In MyDrugs 2.0</h1>
            <span class="text__span2">Prices as low as 0.0013 BTC.</span>
        </section>

        <section class="section__explosive">
            <h1>Our Explosive new lineup.</h1>
            <span class="text__span3">For the best MDMA experience Ever.</span>
        </section>
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
        padding: 10rem 0;
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

    .section__explosive {
        width: 100%;
        height: 500px;
        background-color: #fff;
    }

    .section__explosive h1 {
        margin-top: 2rem;
        font-size: 2.3rem;
    }

    .section__explosive .text__span3 {
        font-size: 1.2rem;
    }
</style>