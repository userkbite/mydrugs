<template>
    <section class="section__explosive">
            <h1>Our Explosive new lineup.</h1>
            <span class="text__span3">For the best MDMA experience Ever.</span>
            <div class="images">
                <img src="/assets/donald-pill.png" alt="Donald-Pill" id="donald-pill">
                <img src="/assets/grenade-pill.png" alt="Grenade-Pill" id="grenade-pill">
            </div>
            <span class="text__span4">Save 20% off your first order.</span>
    </section>
</template>

<script>
export default {
    name: 'Explosive'
}
</script>

<style scoped>
    .section__explosive {
        width: 100%;
        padding: 2rem 0;
        background-color: #fff;
        background-image: url(/assets/line.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 600px;
    }

    .section__explosive h1 {
        /* margin-top: 2rem; */
        font-size: 2.3rem;
    }

    .section__explosive .text__span3 {
        font-size: 1.2rem;
    }

    .images {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 10rem 0 16rem;
    }

    #donald-pill {
        width: 120px;
    } 

    #grenade-pill {
        width: 150px;
    }

    .section__explosive span {
        font-size: 1.5rem;
        /* font-weight: 600; */
    }

    .section__explosive .text__span4 {
        font-weight: 600;
    }
</style>