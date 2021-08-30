<template>
    <main>
        <Header />
        <section class="shop">
            <i class="fas fa-shopping-cart"></i>
            <h1>Shop</h1>
        </section>
        <Items />
    </main>
</template>

<script>

import Header from '../Header/Header.vue'
import Items from './Items/Items.vue'

export default {
    name: 'Shop',
    components: {
        Header,
        Items
    },
    metaInfo() {
        return {
            title: "Shop | MyDrugs"
        }
    }
}
</script>

<style scoped>
    main {
        text-align: center;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .shop {
        width: 400px;
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

</style>