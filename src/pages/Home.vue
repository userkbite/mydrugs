<template>
    <main>
        <section>
            <h1>Best</h1>
            <span>Quality</span>
            <h1>In MyDrugs 2.0</h1>
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
        padding-top: 10rem;
        justify-content: center;
    }
    main section h1 {
        color: #fff;
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: 900;
    }

    main section span {
        text-transform: uppercase;
        font-size: 2.2rem;
        padding: 5px;
        background-color: #4ec7f3;
    }
</style>