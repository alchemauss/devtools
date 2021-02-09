export interface RSSChannel {
	domain: string;
	image?: string;
	title: string;
	slug: string;
	description: string;
	language?: string;
}
export interface RSSItem {
	title: string;
	slug: string;
	description: string;
	date: string;
}
export default function RSS(channel: RSSChannel, items: RSSItem[]): string;
