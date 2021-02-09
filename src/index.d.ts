import { SvelteComponentTyped } from 'svelte';
export class Docs extends SvelteComponentTyped<{
	sections: Record<'slug' | 'title' | 'content' | 'path', string>;
	repo: string;
}> {}
