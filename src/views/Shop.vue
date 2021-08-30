<template>
    <main>
        <section class="shop">
            <i class="fas fa-shopping-cart"></i>
            <h1>Shop</h1>
        </section>
        <!-- <section class="section__items">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section> -->
    </main>
</template>

<script>
export default {
    name: 'Shop'
}
</script>

<style scoped>
    main {
        text-align: center;
        justify-content: center;
    }

    .shop {
        width: 30%;
        margin: 3rem 0;
        padding-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
		color: #fff;
        border-bottom: 5px solid cornflowerblue;
    }

    .shop i {
        margin-right: 1rem;
        font-size: 2rem;
		cursor: pointer; 
    }

    .shop h1 {
        text-transform: uppercase;
        font-size: 2.2rem;
        font-weight: 500;
    }

    .section__items {
        display: flex;
        /* justify-content: space-around; */
        margin: 10rem 0 5rem;
    }

    .section__items div {
        border: 1px solid #fff;
        width: 320px;
        height: 550px;
        margin-left: 2.5rem;
        border-radius: 1rem;
    }

    .section__items div:first-child {
        margin-left: 0;
    }

    .section__items h2 {
        color: #fff;
    }
</style>