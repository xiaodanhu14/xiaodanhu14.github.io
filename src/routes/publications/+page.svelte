<script lang="ts">
	import { publications } from '$lib/data/research.js';
	
	// Group publications by year
	const publicationsByYear = publications.reduce((acc, pub) => {
		if (!acc[pub.year]) {
			acc[pub.year] = [];
		}
		acc[pub.year].push(pub);
		return acc;
	}, {} as Record<number, typeof publications>);
	
	const sortedYears = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));
</script>

<svelte:head>
	<title>Publications - Xiaodan Hu</title>
</svelte:head>

<div class="google-scholar-note">
	<p>For a complete list of publications, please refer to my <a href="https://scholar.google.com/citations?user=wxlZ_j8AAAAJ" target="_blank" rel="noopener noreferrer" class="scholar-link">Google Scholar</a> profile.</p>
</div>

<div class="publication-list">
		{#each sortedYears as year}
			<h3 class="year-header">{year}</h3>
			
			{#each publicationsByYear[Number(year)] as pub}
			<div class="pub-item">
				<div class="pub-authors">{@html pub.authors.map(author => author.name).join(', ').replace(/Xiaodan Hu/g, '<strong>Xiaodan Hu</strong>')}</div>
				<div class="pub-title">{pub.title}</div>
				<div class="pub-venue">
					<span class="venue-name">{@html pub.venueFull}
						 {#if pub.status.includes('To appear')}
						 {@html pub.status}
						 {/if}
						</span>
					<div class="pub-links-inline">
						{#each Object.entries(pub.links) as [type, url]}
							{#if type === 'conference'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Conference <i class="fas fa-external-link-alt"></i>
								</a>
							{:else if type === 'journal'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Journal <i class="fas fa-book"></i>
								</a>
							{:else if type === 'ieee'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									IEEE Xplore <i class="fas fa-external-link-alt"></i>
								</a>
							{:else if type === 'preprint'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Preprint <i class="fas fa-file-pdf"></i>
								</a>
							{:else if type === 'slides'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Slides <i class="fas fa-file-powerpoint"></i>
								</a>
							{:else if type === 'video'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Video <i class="fas fa-play"></i>
								</a>
							{:else if type === 'project'}
								<a href={url} class="pub-link-inline" target="_blank" rel="noopener noreferrer">
									Project <i class="fas fa-project-diagram"></i>
								</a>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/each}
	{/each}
</div>

<style>
	.publication-list {
		margin: 0;
	}

	.google-scholar-note {
		background: var(--light-mint);
		padding: 1rem 1.5rem;
		border-radius: 8px;
		margin-bottom: 2rem;
		border-left: 4px solid var(--teal);
	}

	.google-scholar-note p {
		margin: 0;
		font-size: 1rem;
		color: var(--text-color);
		line-height: 1.5;
	}

	.scholar-link {
		color: var(--primary-blue);
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.scholar-link:hover {
		color: var(--teal);
		text-decoration: underline;
	}

	.pub-item {
		margin: 0.3rem 0;
		padding: 0.4rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.pub-item:last-child {
		border-bottom: none;
	}

	.pub-authors {
		color: var(--dark-blue);
		margin-bottom: 0.3rem;
		font-size: 0.95rem;
	}

	.pub-authors :global(strong) {
		color: var(--primary-blue);
		font-weight: 700;
	}

	.pub-title {
		color: var(--text-color);
		font-weight: 600;
		margin-bottom: 0.3rem;
		font-size: 1rem;
	}

	:global(.pub-title a) {
		color: var(--text-color);
		text-decoration: none;
	}

	:global(.pub-title a:hover) {
		color: var(--dark-blue);
	}

	.pub-venue {
		color: var(--teal);
		margin-bottom: 0.3rem;
		font-size: 0.9rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.venue-name {
		flex: 1;
	}

	.pub-links-inline {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.pub-link-inline {
		color: var(--dark-blue);
		text-decoration: none;
		font-size: 0.85rem;
		transition: all 0.3s ease;
		margin-left: 0.5rem;
	}

	.pub-link-inline:hover {
		color: var(--primary-blue);
	}

	.pub-link-inline i {
		margin-right: 0.3rem;
	}

	.pub-venue :global(strong) {
		color: var(--primary-blue);
		font-weight: 700;
		font-style: normal;
	}
	
	/* 让venue名称加粗，但不包括"Proceedings of the" */
	.venue-name {
		font-weight: 500;
		font-style: italic;
	}


	/* 内容区域链接样式 - 只针对链接本身 */
	:global(.section a) {
		color: var(--dark-blue) !important;
		text-decoration: none !important;
		/* text-decoration-color: var(--mint) !important; */
		transition: all 0.3s ease;
	}

	:global(.section a:hover) {
		color: var(--teal) !important;
		text-decoration-color: var(--teal) !important;
	}

	.year-header {
		font-family: 'Libre Baskerville', serif;
		color: var(--primary-blue);
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		padding: 0.5rem 0;
		border-bottom: 2px solid var(--mint);
		font-weight: 700;
	}
</style>
