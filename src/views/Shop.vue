<template>
    <main>
        <section class="shop">
            <i class="fas fa-shopping-cart"></i>
            <h1>Shop</h1>
        </section>
        <section class="section__items">
            <div class="card break">
                <img src="../assets/donald-pill.png" id="donald-pill">
                <h3>Stable Genius</h3>
                <span class="text__green">In Stock</span>
                <div class="cart">
                    <div class="round">-</div>
                    <h2>1</h2>
                    <div class="round">+</div>
                </div>
                <a href="#" class="cart__button">Add to Cart</a>
                <a href="#" class="check__button">Check Out</a>
            </div>
            <div class="card">
                <img src="../assets/grenade-pill.png" id="grenade-pill">
                <h3>Big Boomer</h3>
                <span class="text__green">In Stock</span>
                <div class="cart">
                    <div class="round">-</div>
                    <h2>1</h2>
                    <div class="round">+</div>
                </div>
                <a href="#" class="cart__button">Add to Cart</a>
                <a href="#" class="check__button">Check Out</a>
            </div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card break"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </section>
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

    .section__items {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10rem 0 5rem;
        flex-wrap: wrap;
    }

    .section__items .card {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        flex-direction: column;
        border: 1px solid #fff;
        width: 330px;
        height: 570px;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 3rem;
        border-radius: 1rem;
    }

    .section__items .break {
        /* margin-left: 0; */
    }

    #donald-pill {
        margin-top: 30px;
        width: 120px;
        /* height: 120px; */
    }

    #grenade-pill {
        margin-top: 30px;
        width: 155px;
    }

    .section__items div h3 {
        color: #fff;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 600;
    }
    
    .text__green {
        color: #33c608;
        margin-top: 1.5rem;
        margin-right: 180px;
    }

    .cart {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cart .round {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        padding: 0.3rem 1.2rem;
        font-size: 2rem;
    }

    .cart h2 {
        color: #fff;
        font-size: 3rem;
        margin: 0 3rem;
    }

    .cart__button {
        margin-top: 2rem;
        border: 1px solid #fff;
        border-radius: 1rem;
        padding: 0.6rem 4rem;
        color: #fff;
    }

    .check__button {
        margin-top: 2rem;
        background-color: #00ADF0;
        border-radius: 1rem;
        padding: 0.7rem 4.5rem;
        color: #fff;
    }

    @media (max-width: 909px) {
        .card {
            margin: 0;
        }
    }

</style>