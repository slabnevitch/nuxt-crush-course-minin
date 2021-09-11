<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Nuxt SSR</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<nuxt-link no-prefetch exact class="nav-link" active-class="active" aria-current="page" to="/">Home</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" active-class="active" to="/about">About</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" active-class="active" to="/users">Users</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" active-class="active" to="/login">Login</nuxt-link>
					</li>

				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {

  name: 'Navbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>