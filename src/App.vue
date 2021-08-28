<template>
    <div id="app">
        <Header />
        <Home />
    </div>
</template>

<script>
import './styles/global.css';

import Header from './components/Header';
import Home from './pages/Home';

export default {
    name: 'App',
    components: {
        Header,
        Home
    }
}

</script>