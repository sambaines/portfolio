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
	.hey {
		padding-right: 2rem;
	}

	h1 {
		font-size: 3.2rem;
		line-height: 2.5rem;
	}

	span {
		color: darkorange;
		margin-left: 2px;
	}

	ul {
		margin-top: 2rem;
	}
	
	li {
		margin: 0.75rem 0;
	}

	li a {
		font-family: var(--heading-text);
		font-size: 2.5rem;
	}

	p {
		margin-top: -0.25rem;
		color: darkorange;
	}

	@media screen and (min-width: 874px) {
		h1 {
			padding-right: 4rem;
		}
	}
</style>

<svelte:head>
	<title>Sam Baines</title>
</svelte:head>

<div class="hey">
	<h1>Web Designer<span>.</span> Code Wrangler<span>.</span> Story Teller<span>.</span> World Builder<span>.</span></h1>
</div>

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

