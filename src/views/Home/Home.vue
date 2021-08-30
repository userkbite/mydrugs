<template>
    <main>
        <Header />
        <Presentation />
        <Explosive />
        <Footer />
    </main>
</template>

<script>

import Header from '../Header/Header.vue'
import Presentation from './Presentation/Presentation.vue'
import Explosive from './Explosive/Explosive.vue'
import Footer from './Footer/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Presentation,
        Explosive,
        Footer
    },
    metaInfo() {
        return {
            title: "Home | MyDrugs"
        }
    }
}
</script>

<style scoped>
    main {
        text-align: center;
        justify-content: center;
        flex-direction: column;
    }
</style>