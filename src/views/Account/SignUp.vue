<template>
    <main>
        <form id="login__form">
            <h2 id="signup__text"><span class="s">S</span>ignUp</h2>
            <div class="form__group">
                <label for="name">Name</label>
                <input type="text" required>
            </div>
            <div class="form__group">
                <label for="email">E-mail</label>
                <input type="email" required>
            </div>
            <div class="form__group">
                <label for="pwd">Password</label>
                <input type="password" required>
            </div>
            <div class="form__group">
                <button type="submit">SignUp</button>
            </div>
            <span class="login__link">
                <router-link to="/login">Already have an account ?</router-link>
            </span>
        </form>
    </main>
</template>

<script>
export default {
    name: 'SignUp',
    metaInfo() {
        return {
            title: "SignUp | MyDrugs"
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

    #login__form h2:after {
        content: '|';
        margin-left: 5px;
        opacity: 1;
        animation: machine .7s infinite;
    }

    @keyframes machine {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    #login__form h2 .s {
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

    .login__link {
        margin-top: 1rem;
    }

    .login__link a {
        color: purple;
    }
</style>