<script>
	/** @type {string} */
	export let repo;
	/** @type {string} */
	export let path;

	import { Link } from 'syv';
	import { Edit } from 'syv/icons/feather';
</script>

<span>
	<Link href="https://github.com/{repo}/edit/master/{path}">
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
