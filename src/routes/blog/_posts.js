// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		published: '29th Jan 2020',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},
	
	{
		title: 'Initial Draft',
		slug: 'initial-draft',
		published: '28th Jan 2020',
		html: `
			<p>This is the year I start to push on and make things happen for myself. This is the initial draft.</p>
			<p>I've set new goals this year to hopefully get me to a place I want to be by year end; goals about writing, coding, product building, reading and health. I'm not going to be able
			to complete them all, but let's give it a go. One of the main goals is to push my career further and that starts with having an up-to-date portfolio and home on the web.</p>
			<p>To this end I am following the trend of live iteration and going to design and build this in the wild: there will be mistakes. Stylesheets are going to go awry, designs aren't going to be
			pixel perfect but it's a start. Inspiration for this came from <a href="https://destroytoday.com/">Jonnie Hallman</a> and his recent blogging and building. I'm also going to use this
			as a massive learning curve for a whole host of things from design to privacy focus products (looking at you <a href="https://usefathom.com/">Fathom</a>) to writing.</p>
			<p>The theory I am following for the layout and focus is from this Dann Petty video:</p>
			<br />
			<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/K5jb2dxZSPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<br />
			<p>'Hey What About Me?' - let's see how this unfolds over the next few weeks. I'm planning one post a week this year (so I am already behind) but by the end 52 posts is the goal.</p>
		`
	}

];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
