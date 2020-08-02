<script>
	export let repo, path;
	import { Link, Icon } from '@ignatiusmb/elements/essentials';
	const link = `https://github.com/${repo}/edit/master`;
</script>

<span>
	<Link href="{link}/{path}">
		<Icon name="edit" />
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
