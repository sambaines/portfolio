<script>
	export let segment;
</script>

<style>
	nav {
		width: 50%;
		max-width: 1220px;
		margin: 0 auto;
	}

	ul {
		display: block;
		margin: 0 auto;
		padding: 1rem;
		text-align: center;
	}

	li {
		display: inline-block;
		margin: 0 auto;
	}

	a {
		font-family: var(--heading-text);
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
	}

	a.selected {
		font-weight: 700;
	}
</style>

<nav>
	<ul>
		<li><a class:selected='{segment === undefined}' href='.'>home</a></li>

		<!--
		<li><a class:selected='{segment === "about"}' href='about'>about</a></li>
		 for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li>
		-->
	</ul>
</nav>
