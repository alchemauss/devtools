<script>
	export let repo, path;
	import { Feather, Link } from '@ignatiusmb/elements';
	const link = `https://github.com/${repo}/edit/master`;
</script>

<span>
	<Link href="{link}/{path}">
		<Feather.Edit />
	</Link>
</span>

<style>
	span {
		display: flex;
		align-items: center;
		color: var(--aqua-primary);
	}
	span :global(a) {
		display: flex;
	}
</style>
