<script>
	export let repo, path;
	import { Link } from 'svelement';
	import { Edit } from 'svelement/icons/feather';
	const link = `https://github.com/${repo}/edit/master`;
</script>

<span>
	<Link href="{link}/{path}">
		<Edit />
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
