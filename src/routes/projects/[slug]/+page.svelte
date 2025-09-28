<script lang="ts">
	import { page } from '$app/stores';
	import { projects } from '$lib/data/research.js';
	
	// 获取当前项目的slug
	const slug = $page.params.slug;
	
	// 根据slug找到对应的项目
	const project = projects.find(p => p.id === slug);
	
	// 如果项目不存在，显示404
	if (!project) {
		throw new Error(`Project not found: ${slug}`);
	}
	
	// 复制BibTeX到剪贴板
	function copyBibtex() {
		navigator.clipboard.writeText(project?.bibtex || '').then(() => {
			alert('BibTeX copied to clipboard!');
		}).catch(err => {
			console.error('Failed to copy BibTeX:', err);
		});
	}
	
	// 获取链接图标
	function getLinkIcon(type: string) {
		switch (type) {
			case 'conference': return 'fas fa-external-link-alt';
			case 'journal': return 'fas fa-book';
			case 'ieee': return 'fas fa-external-link-alt';
			case 'preprint': return 'fas fa-file-pdf';
			case 'project': return 'fas fa-project-diagram';
			case 'slides': return 'fas fa-file-powerpoint';
			case 'video': return 'fas fa-play';
			default: return 'fas fa-external-link-alt';
		}
	}
</script>

<svelte:head>
	<title>{project.title} - Xiaodan Hu</title>
	<meta name="description" content={project.project?.details?.overview || project.title}>
</svelte:head>

<!-- Main Content -->
<main class="main">
	<div class="container">
		<!-- Project Header -->
		<header class="project-header">
			<h1>{project.title}</h1>
			
			<div class="project-author-list">
				{#each project.authors as author}
					<div class="author">
						<div class="author-portrait">
							{#if author.photo}
								<img src={author.photo} alt={author.name} class="author-photo">
							{:else}
								{author.initials}
							{/if}
						</div>
						<div>
							<div class="author-name">{author.name}</div>
							<div class="author-affiliation">{author.affiliation}</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="publication-info">
				<h3>{project.venue}</h3>
				<p><strong>{project.year}</strong> | {@html project.status}</p>
				
				<div class="publication-links">
					{#each Object.entries(project.links) as [type, url]}
						{#if type !== 'project'}
							<a href={url} class="pub-link" target="_blank" rel="noopener noreferrer">
								<i class={getLinkIcon(type)}></i> 
								{#if type === 'preprint'}
									Preprint
								{:else if type === 'ieee'}
									IEEE Xplore
								{:else if type === 'conference'}
									Conference
								{:else if type === 'journal'}
									Journal
								{:else if type === 'slides'}
									Slides
								{:else if type === 'video'}
									Video
								{:else}
									{type.charAt(0).toUpperCase() + type.slice(1)}
								{/if}
							</a>
						{/if}
					{/each}
				</div>
			</div>
		</header>

		<!-- Project Content -->
		{#if project.project && project.project.details}
			<div class="project-content">
				<!-- Images -->
				{#if project.project.details.images && project.project.details.images.length > 0}
					<div class="project-images">
						{#each project.project.details.images as image}
							<div class="image-container">
								<img src={image.src} alt={image.alt}>
								<p class="image-caption">{image.caption}</p>
							</div>
						{/each}
					</div>
				{/if}
            
            
            

				<!-- Abstract -->
				<div class="abstract">
					<h2>Abstract</h2>
					<p>{project.project.details.abstract}</p>
				</div>

				<!-- Key Features -->
				{#if project.project.details.keyFeatures && project.project.details.keyFeatures.length > 0}
					<div class="abstract">
						<h2>Main Contributions</h2>
						<ul>
							{#each project.project.details.keyFeatures as feature}
								<li>{feature}</li>
							{/each}
						</ul>
					</div>
				{/if}

				<!-- Methodology -->
				{#if project.project.details?.methodology}
					<div class="abstract">
						<h2>Methodology</h2>
						<p>{project.project.details.methodology}</p>
					</div>
				{/if}

				<!-- Results -->
				{#if project.project.details?.results}
					<div class="abstract">
						<h2>Results</h2>
						<p>{project.project.details.results}</p>
					</div>
				{/if}
			</div>
		{/if}

		<!-- BibTeX Section -->
		<div class="bibtex-section">
			<h3>BibTeX</h3>
			<button class="copy-button" on:click={copyBibtex}>
				<i class="fas fa-copy"></i> Copy BibTeX
			</button>
			<div class="bibtex-code">{project.bibtex}</div>
		</div>

		<!-- Footer links -->
		<div class="footer-links">
			<a href="/projects" class="back-to-projects">
				<i class="fas fa-arrow-left"></i> Back to Projects
			</a>
		</div>
	</div>
</main>

<style>
	.main {
		background: var(--light-bg);
		min-height: 100vh;
		padding-top: 2rem;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 20px;
	}

	/* Project Header */
	.project-header {
		margin-bottom: 3rem;
	}

	.project-header h1 {
		font-family: 'Libre Baskerville', serif;
		font-size: 1.8rem;
		color: var(--primary-blue);
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	.project-author-list {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		margin: 1.5rem 0;
		align-items: center;
	}

	.author {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.author-portrait {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: var(--mint);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-weight: bold;
		font-size: 0.8rem;
		overflow: hidden;
		flex-shrink: 0;
	}

	.author-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}

	.author-name {
		font-weight: 600;
		color: var(--dark-blue);
	}

	.author-affiliation {
		font-size: 0.9rem;
		color: var(--teal);
		margin-top: 0.2rem;
	}

	.publication-info {
		background: var(--light-mint);
		padding: 1rem 1.5rem;
		border-radius: 8px;
		margin: 1rem 0;
		border-left: 4px solid var(--teal);
	}

	.publication-info h3 {
		color: var(--primary-blue);
		margin-bottom: 0.5rem;
		font-family: 'Libre Baskerville', serif;
	}

	.publication-links {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.pub-link {
		background: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		text-decoration: none;
		color: var(--primary-blue);
		border: 2px solid var(--mint);
		font-weight: 600;
		transition: all 0.3s ease;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.pub-link:hover {
		background: var(--mint);
		color: white;
	}

	/* Project Content */
	.project-images {
		margin: 2rem 0;
	}

	.image-container {
		margin-bottom: 3rem;
	}

	.project-content img {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0,0,0,0.1);
		margin-bottom: 1.5rem;
		display: block;
	}

	.image-caption {
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 1rem;
		line-height: 1.7;
		color: var(--text-color);
		margin: 0;
		padding: 0;
		text-align: left;
		max-width: 100%;
	}

	.abstract {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		border-left: 4px solid var(--teal);
		margin: 2rem 0;
	}

	.abstract h2 {
		color: var(--primary-blue);
		margin-bottom: 1rem;
		font-family: 'Libre Baskerville', serif;
	}

	.abstract p {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.abstract ul {
		margin-left: 1.5rem;
	}

	.abstract li {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 0.5rem;
	}

	.bibtex-section {
		margin: 2rem 0;
		background: #f8f9fa;
		padding: 1.5rem;
		border-radius: 8px;
		position: relative;
	}

	.bibtex-section h3 {
		color: var(--primary-blue);
		margin-bottom: 1rem;
		font-family: 'Libre Baskerville', serif;
	}

	.copy-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: var(--primary-blue);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.copy-button:hover {
		background: var(--dark-blue);
	}

	.bibtex-code {
		background: #2d3748;
		color: #e2e8f0;
		padding: 1rem;
		border-radius: 5px;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
		overflow-x: auto;
		white-space: pre-wrap;
		margin-top: 1rem;
	}

	/* Footer links */
	.footer-links {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border-color);
	}

	.back-to-projects {
		color: var(--dark-blue);
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border: 2px solid var(--mint);
		border-radius: 20px;
		transition: all 0.3s ease;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.back-to-projects:hover {
		background: var(--mint);
		color: white;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.container {
			padding: 0 15px;
		}

		.project-header h1 {
			font-size: 1.5rem;
		}

		.author {
			flex-direction: column;
			align-items: flex-start;
			text-align: center;
		}

		.project-author-list {
			flex-direction: column;
			align-items: flex-start;
		}

		.publication-links {
			flex-direction: column;
			align-items: flex-start;
		}

		.footer-links {
			flex-direction: column;
			gap: 1rem;
			align-items: flex-start;
		}

		.image-caption {
			font-size: 0.95rem;
			line-height: 1.6;
		}

		.image-container {
			margin-bottom: 2.5rem;
		}
	}
</style>