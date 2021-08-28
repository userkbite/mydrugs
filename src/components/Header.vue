<template>
	<header>
		<a href="/"><img src="../assets/logo.png" alt="Logo" id="logo"></a>
		<nav>
			<ul>
				<li><a class="active" href="/">Shop</a></li>
				<li><a href="/">Faq</a></li>
				<li><a href="/">Safety</a></li>
			</ul>
			<label id="icon">
				<i class="fas fa-bars"></i>
			</label>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header'
}

$(document).ready(function(){
	$('#icon').click(function(){
		$('ul').toggleClass('active');
	})
})
</script>

<style scoped>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40px 60px;
		height: 60px;
		width: 100%;
	}

	#logo {
		width: 50px;
	}

	nav ul {
		display: flex;
		flex-wrap: wrap;
	}

	nav li {
		margin-left: 10px;
	}

	nav li a {
		color: #fff;
		padding: 5px 20px;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 1.3rem;
	}

	nav li a:hover {
		border-radius: 0.25rem;
		color: #000;
		background-color: #fff;
	}

	nav #icon {
		font-size: 1.6rem;
		color: #fff;
		cursor: pointer; 
		display: none;
	}

	@media (max-width: 909px) {
		nav #icon {
			display: block;
		}

		nav ul {
			position: fixed;
			width: 100%;
			height: 100vh;
			background-color: #111;
			top: 80px;
			left: -100%;
			text-align: center;
			display: block;
			transition: all .4s;
		}

		nav li {
			margin: 50px 0;
			line-height: 30px;
		}

		nav li a:hover {
			border: none;
			background-color: transparent;
			color: #4ec7f3;
		}

		nav ul.active {
			left: 0;
		}
	}
</style>