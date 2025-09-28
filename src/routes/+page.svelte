<script>
	import { profile } from '$lib/data/profile.js';
	import { news } from '$lib/data/news.js';
</script>

<svelte:head>
	<title>Xiaodan Hu - Academic Homepage</title>
</svelte:head>

<!-- Compact Profile Section -->
<section class="profile-compact">
	<img src={profile.photo} alt={profile.name} class="profile-photo">
	<div class="profile-info-section">
		<div class="profile-text">
			<h1>{profile.name}</h1>
			<p class="subtitle">中：{profile.nameChinese} | 日：{profile.nameJapanese}</p>
			<p class="position">{profile.position}</p>
		</div>
	</div>
	<div class="contact-compact">
		<div class="contact-item">
			<i class="fas fa-map-marker-alt"></i>
			<span>{profile.location}</span>
		</div>
		<div class="contact-item">
			<i class="fas fa-envelope"></i>
			<a href="mailto:xiaodan.hu[at]tugraz.at" class="contact-link">Email</a>
		</div>
		<div class="contact-item">
			<i class="ai ai-google-scholar"></i>
			<a href={profile.scholar} target="_blank" class="contact-link">Google Scholar</a>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="section">
	<p>{@html profile.introduction.english}</p>
    <p>{@html profile.introduction.research}</p>
	<div style="margin-top: 1.5rem; padding: 1rem; background: #f8fffe; border-radius: 8px; border-left: 3px solid var(--mint);">
		<!-- <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">日本語</h4> -->
		<p>{@html profile.introduction.japanese}</p>
	</div>

	<div style="margin-top: 1rem; padding: 1rem; background: var(--light-mint); border-radius: 8px; border-left: 3px solid var(--teal);">
		<!-- <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;">中文</h4> -->
		<p>{@html profile.introduction.chinese}</p>
	</div>
</section>

<!-- Latest News Section -->
<section class="section">
	<h2>Latest News</h2>
	<div class="news-scroll-container">
		{#each news as item}
			<div class="news-item">
				<span class="news-date">{item.date}</span>
				<div class="news-content">
					{@html item.content}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Teaching Section -->
<section class="section">
	<h2>Teaching</h2>
	<div style="padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0;">
		<strong>Augmented Reality</strong>, TU Graz, 2024, Lecturer
	</div>
</section>

<!-- Awards & Honors Section -->
<section class="section">
	<h2>Awards & Honors</h2>
	<div class="award-item">
		<span class="award-date">2021.10</span>
		<div class="award-content">
			Selected by <strong><a href='https://www.jst.go.jp/jisedai/spring/en/index.html'>JST Support for Pioneering Research Initiated by the Next Generation program</a></strong> (<strong><a href='https://www.jst.go.jp/jisedai/spring/index.html'>次世代研究者挑戦的研究プログラム</a></strong>) (one student per grade was selected).
		</div>
	</div>
	<div class="award-item">
		<span class="award-date">2021.01</span>
		<div class="award-content">
			<strong><a href='https://www.otsukafoundation.org/english/'>Otsuka Toshimi Scholarship</a></strong> (<strong><a href='https://www.otsukafoundation.org/index.html'>大塚敏美育英奨学金</a></strong>).
		</div>
	</div>
</section>

<style>
	/* Compact Profile */
	.profile-compact {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin: 2rem 0;
		padding: 1rem;
	}

	.profile-photo {
		width: 210px;
		height: 210px;
		border-radius: 50%;
		object-fit: contain;
		object-position: center center;
		background: white;
		flex-shrink: 0;
	}

	.profile-info-section {
		flex: 1;
	}

	.profile-text h1 {
		font-family: 'Libre Baskerville', serif;
		font-size: 1.5rem;
		color: var(--primary-blue);
		margin-bottom: 0.3rem;
	}

	.subtitle {
		font-size: 0.9rem;
		color: var(--dark-blue);
		margin-bottom: 0.2rem;
	}

	.position {
		font-size: 0.95rem;
		color: var(--teal);
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.contact-compact {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.contact-compact .contact-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: var(--dark-blue);
		background: none;
		border: none;
		padding: 0;
	}

	.contact-compact .contact-item i {
		width: 16px;
		text-align: center;
		font-size: 0.9rem;
	}

	.contact-link {
		color: var(--dark-blue);
		text-decoration: none;
		font-size: 0.85rem;
	}

	.contact-link:hover {
		color: var(--primary-blue);
        text-decoration: underline;
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

	.news-scroll-container {
		max-height: 300px;
		overflow-y: auto;
		border: 1px solid var(--border-color);
		border-radius: 8px;
		padding: 1rem;
		background: white;
	}

	/* 自定义滚动条样式 */
	.news-scroll-container::-webkit-scrollbar {
		width: 8px;
	}

	.news-scroll-container::-webkit-scrollbar-track {
		background: var(--light-mint);
		border-radius: 4px;
	}

	.news-scroll-container::-webkit-scrollbar-thumb {
		background: var(--mint);
		border-radius: 4px;
	}

	.news-scroll-container::-webkit-scrollbar-thumb:hover {
		background: var(--teal);
	}

	.news-item {
		display: flex;
		gap: 1rem;
		margin: 0.8rem 0;
		padding: 0.5rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.news-date {
		font-weight: 600;
		color: var(--dark-blue);
		min-width: 80px;
		font-size: 0.9rem;
	}

	.news-content {
		flex: 1;
		font-size: 0.95rem;
	}

	.news-content :global(strong) {
		font-weight: 600;
		color: var(--teal);
	}

	.award-item {
		display: flex;
		gap: 1rem;
		margin: 0.8rem 0;
		padding: 0.8rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.award-date {
		font-weight: 600;
		color: var(--dark-blue);
		min-width: 100px;
		font-size: 0.9rem;
	}

	.award-content :global(strong) {
		color: var(--teal);
		font-weight: 600;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.profile-compact {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
		}

		.profile-photo {
			width: 100px;
			height: 100px;
			object-fit: contain;
		}

		.profile-text h1 {
			font-size: 1.3rem;
		}

		.contact-compact {
			margin-top: 0.5rem;
		}

		.news-scroll-container {
			max-height: 250px;
		}
	}
</style>
