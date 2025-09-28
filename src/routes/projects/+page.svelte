<script>
	import { projects } from '$lib/data/research.js';
</script>

<svelte:head>
	<title>Projects - Xiaodan Hu</title>
</svelte:head>

<h2 class="section-header">Research Projects</h2>

<div class="project-grid">
	{#each projects as project}
		<div class="project-card">
			<a href={project.links.project} class="project-thumbnail-link">
				<div class="project-thumbnail">
					<img src={project.project?.thumbnail} alt={project.project?.shortTitle}>
				</div>
			</a>
			<div class="project-content">
				<a href={project.links.project} class="project-title-link">
					<h3 class="project-title">{project.project?.shortTitle}</h3>
				</a>
				<div class="project-stack">
					{#each project.project?.tags || [] as tag}
						<span class="stack-tag">{tag}</span>
					{/each}
				</div>
				<div class="project-links">
					{#each Object.entries(project.links) as [type, url]}
						{#if type === 'project'}
							<!-- 不再显示View Details按钮 -->
						{:else if type === 'preprint'}
							<a href={url} class="project-link" target="_blank" rel="noopener noreferrer">
								<i class="fas fa-file-pdf"></i> Preprint
							</a>
						{:else if type === 'slides'}
							<a href={url} class="project-link" target="_blank" rel="noopener noreferrer">
								<i class="fas fa-file-powerpoint"></i> Slides
							</a>
						{:else if type === 'video'}
							<a href={url} class="project-link" target="_blank" rel="noopener noreferrer">
								<i class="fas fa-play"></i> Video
							</a>
						{:else if type === 'journal'}
							<a href={url} class="project-link" target="_blank" rel="noopener noreferrer">
								<i class="fas fa-book"></i> Journal
							</a>
						{:else if type === 'conference'}
							<a href={url} class="project-link" target="_blank" rel="noopener noreferrer">
								<i class="fas fa-external-link-alt"></i> Conference
							</a>
						{:else if type === 'ieee'}
							<a href={url} class="project-link" target="_blank" rel="noopener noreferrer">
								<i class="fas fa-external-link-alt"></i> IEEE Xplore
							</a>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.project-card {
		background: white;
		border-radius: 10px;
		overflow: hidden;
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.project-card:hover {
		box-shadow: 0 8px 16px rgba(0,0,0,0.1);
		transform: translateY(-2px);
	}

	.project-thumbnail {
		width: 100%;
		height: 0;
		padding-bottom: 75%; /* 4:3比例 (3/4 = 0.75) */
		background: linear-gradient(135deg, var(--light-mint) 0%, var(--mint) 100%);
		position: relative;
		overflow: hidden;
	}

	:global(.project-placeholder) {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		color: var(--primary-blue);
		background: rgba(240, 243, 189, 0.9);
	}

	.project-content {
		padding: 0.8rem; /* 从1rem减少到0.8rem */
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.project-title {
		font-family: 'Libre Baskerville', serif;
		font-size: 1.1rem;
		color: var(--primary-blue);
		margin-bottom: 0.3rem; /* 从0.5rem减少到0.3rem */
		font-weight: 700;
	}

	:global(.project-description) {
		color: var(--text-color);
		font-size: 0.85rem;
		line-height: 1.3;
		margin-bottom: 0.8rem;
	}

	.project-stack {
		margin-top: 0.5rem; /* 从0.8rem减少到0.5rem */
		margin-bottom: 0.8rem; /* 从1rem减少到0.8rem */
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		align-items: flex-start;
	}

	.stack-tag {
		background: var(--light-mint);
		color: var(--primary-blue);
		padding: 0.2rem 0.5rem;
		border-radius: 10px;
		font-size: 0.7rem;
		font-weight: 600;
	}

	.project-links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: auto;
		align-items: flex-end;
	}

	.project-link {
		color: var(--dark-blue);
		text-decoration: none;
		font-size: 0.8rem;
		transition: all 0.3s ease;
		display: inline-flex;
		align-items: center;
		/* justify-content: center; */
		gap: 0.3rem;
		padding: 0.2rem 0.5rem;
		border-radius: 15px;
		border: 1px solid var(--mint);
		white-space: nowrap;
	}

	.project-link:hover {
		background: var(--light-mint);
		color: var(--primary-blue);
	}

	.project-link i {
		font-size: 0.8rem;
	}

	/* 可点击的标题和图片链接样式 */
	.project-thumbnail-link {
		display: block;
		text-decoration: none;
		transition: all 0.3s ease;
	}
	.project-thumbnail img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain; /* 保持比例，不会被压缩 */
	}
	.project-thumbnail-link:hover {
		opacity: 0.9;
	}

	.project-title-link {
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.project-title-link:hover .project-title {
		color: var(--teal);
	}
	.section-header {
		font-family: 'Libre Baskerville', serif;
		color: var(--primary-blue);
		margin-bottom: 2rem;
		font-size: 1.6rem;
		border-bottom: 2px solid var(--mint);
		padding-bottom: 0.5rem;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.project-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>
