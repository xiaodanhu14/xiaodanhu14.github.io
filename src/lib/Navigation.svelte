<script>
	import { page } from '$app/stores';
	
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/publications', label: 'Publications' },
		{ href: '/projects', label: 'Projects' }
	];
</script>

<nav class="nav">
	<div class="container">
		<ul class="nav-list">
			{#each navItems as item}
				<li>
					<a 
						href={item.href} 
						class="nav-link" 
						class:active={$page.url.pathname === item.href}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
