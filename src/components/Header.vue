<template>
	<header>
		<a href="/"><img src="../assets/logo.png" alt="Logo" id="logo"></a>
		<nav>
			<ul :class="{active:menuActive}">
				<li><a class="active" href="/shop">Shop</a></li>
				<li><a href="/faq">Faq</a></li>
				<li><a href="/safety">Safety</a></li>
				<li><a href="/forum">Forum</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/login"><i class="fas fa-user-circle"></i></a></li>
			</ul>
			<label id="icon" @click="openMenu" v-if="btnOpen">
				<i class="fas fa-bars"></i>
			</label>
			<label id="icon-close" @click="closeMenu" v-if="btnClose">
				<i class="fas fa-times"></i>
			</label>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			menuActive: false,
			btnOpen: true,
			btnClose: false
		}
	},
	methods: {
		openMenu: function(){
			this.menuActive = true,
			this.btnOpen = false,
			this.btnClose = true
		},
		closeMenu: function(){
			this.menuActive = false,
			this.btnOpen = true,
			this.btnClose = false
		},
	}
}

// const icon = document.getElementById('icon')
// const list = docuemnt.

// $(document).ready(function(){
// 	$('#icon').click(function(){
// 		$('ul').toggleClass('active');
// 	})
// })
</script>

<style scoped>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 50px 60px;
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
		font-weight: 600;
		font-size: 1.2rem;
	}

	nav li a:hover {
		border-radius: 0.25rem;
		color: #000;
		background-color: #fff;
	}

	nav #icon {
		font-size: 1.3rem;
		color: #fff;
		cursor: pointer; 
		display: none;
	}

	nav #icon-close {
		font-size: 1.3rem;
		color: #fff;
		cursor: pointer; 
		display: none;
	}

	@media (max-width: 909px) {
		header {
			padding: 40px 30px;
		}

		#logo {
			width: 40px;
		}

		nav #icon {
			display: block;
		}

		nav #icon-close {
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
			margin: 30px 0;
			line-height: 30px;
		}

		nav li a {
			font-size: 1.2rem;
			display: block;
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