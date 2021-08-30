<template>
    <section class="section__present">
            <h1>Best</h1>
            <span class="text__span1">Quality</span>
            <h1>In MyDrugs 2.0</h1>
            <span class="text__span2">Prices as low as 0.0013 BTC.</span>
            <div>
                <img src="/assets/powder.png" alt="Pill" id="powder">
            </div>
        </section>
</template>

<script>
export default {
    name: 'Presentation'
}
</script>

<style scoped>
    .section__present {
        padding: 8rem 0 5rem;
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
        padding-top: 2rem;
        width: 400px;
    }
</style>