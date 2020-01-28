<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin-top: 2rem;
	}
	
	li {
		margin: 0.75rem 0;
	}

	li a {
		font-family: var(--heading-text);
		font-size: 3rem;
	}

	p {
		margin-top: -0.25rem;
		color: darkorange;
	}
</style>

<svelte:head>
	<title>Sam Baines</title>
</svelte:head>

<h1>Web Designer</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li>
			<a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
			<p>{post.published}</p>
		</li>
	{/each}
</ul>

