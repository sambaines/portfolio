// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [	
	{
		title: 'The To-Do List',
		slug: 'the-to-do-list',
		published: '30th Jan 2020',
		html: `
			<p>I am a big believer in making a list of everything you need for a project - so for a new portfolio site it makes sense to do the same. My go to tool currently for this
			is <a href="https://www.notion.so">Notion</a>. It powers my life right now. For each project I make a list of taskls with a status. Pretty standard stuff. Then I use Notion to
			turn that list into a Kanban Board and update the task status between the following values; not started, in progress, completed. Those are the three main values but more recently I have
			been adding more - issues and fixed (hopefully self-explanatory), blocked (for those waiting on other aspects) and next (for future version features).</p>
			<p>I've got a fair few lined up for this personal site already but the board needs tweaking still.</p>
			<h3>The List</h3>
			<ul>
				<li>Overall Design V1</li>
				<li>Color Palette Choice and Contrast Check</li>
				<li>Footer Design and Build</li>
				<li>Logomark and Header Build</li>
				<li>CMS Backend Hook-up</li>
				<li>About Section Build</li>
				<li>Work Section Build</li>
				<li>Project Case Study Write-ups and Designs</li>
				<li>And so on...</li>
			</ul>
			<p>There's plenty for me to work on and hopefully share the theory around the changes/designs along the way. I'll probably even discuss the 'To-Do' method I use inside Notion
			in more detail also. Stay tuned.</p>
		`
	},
	{
		title: 'A Short Introduction',
		slug: 'short-introduction',
		published: '29th Jan 2020',
		html: `
			<p>Today I've only jumped in for a short period - adding a little intro statement to the homepage so people can find out what I enjoy working on/the work they can expect to see from me.
			I tend to tackle web design and wrangle a bit of code (mainly vanilla JS, html and my jam CSS!) but also like to tell stories and write worlds (but that's a story for another day).</p>
			<p>I find it hard to write or summarise myself and what I am within a little title section. For now this feels fine, but expect this to be chopped and changed in the coming weeks. Especially
			when the full design work starts to happen. I need to narrow down the purpose of this section, make it succinct and powerful. For there will be a full 'about' section further down the track.</p>
			<h3>Design Tweaks</h3>
			<p>I've also added some more styling. Realy basic stuff, padding, max-width, etc. just to try and improve legibility. I'm finding my feet with a color palette route but this will take some time, got to make sure it's
			all <a href="https://www.getstark.co/">Stark</a> Approved. Accessibility is something that I want to dig into further this year and so color contrast seems like a good starting point.</p>
			<p>Tomorrow more tweaks - maybe try adjusting the 'CH' unit for perfect sentence length.</p>
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
