<template>
    <main>
        <form id="login__form">
            <h2><span class="l">L</span>ogin</h2>
            <div class="form__group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
            </div>
            <div class="form__group">
                <label for="pwd">Password</label>
                <input type="password" name="pwd" id="pwd">
            </div>
            <div class="form__group">
                <button type="submit" @click="login">Login</button>
            </div>
            <span class="signup__link">
                <router-link to="/signup">No account yet ?</router-link>
            </span>
        </form>
    </main>
</template>

<script>
export default {
    name: 'Login',
    metaInfo() {
        return {
            title: "Login | MyDrugs"
        }
    },
    methods: {
        login: function() {
            this.$router.replace("/")
        }
    }
}
</script>

<style scoped>
    main {
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    #login__form {
        width: 350px;
        height: 480px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        flex-direction: column;
        background-color: #000;
        color: #fff;
        border: solid purple;
        border-radius: 2rem;
        padding: 3rem;
        margin: 2rem;
    }

    #login__form h2 {
        margin-bottom: 1rem;
        font-size: 2rem;
        font-weight: 500;
    }

    #login__form h2 .l {
        color: #ee00af;
    }

    .form__group {
        width: 100%;
    }

    .form__group label {
        display: block;
    }

    .form__group input {
        width: 100%;
        margin: 0.5rem 0;
        padding: 0.5rem 1rem;
        background-color: rgba(0, 0, 0, 0.2);
        border: 2px solid purple;
        border-radius: 0.5rem;
        outline: none;
        color: #fff;
    }

    .form__group button {
        margin-top: 1rem;
        width: 100%;
        padding: 0.5rem 1rem;
        background-color: purple;
        border: none;
        border-radius: 0.5rem;
        color: #fff;
        font-size: 1.2rem;
    }

    .signup__link {
        margin-top: 2rem;
    }

    .signup__link a {
        color: purple;
    }
</style>