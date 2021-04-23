const chars: Record<string, string> = { '"': 'quot', "'": '#39', '&': 'amp', '<': 'lt', '>': 'gt' };
const clean = (html: string) => (!html ? '' : html.replace(/["'&<>]/g, (c) => `&${chars[c]};`));

export default function (
	channel: Record<'domain' | 'title' | 'description', string> &
		Partial<Record<'base' | 'image' | 'lang', string>>,
	items: Array<Record<'title' | 'slug' | 'description' | 'date', string>>
): string {
	const createItem = (item: typeof items[0]) => `
		<item>
			<title>${clean(item.title)}</title>
			<link>https://${channel.domain}/${clean(item.slug)}</link>
			<description>${clean(item.description)}</description>
			<pubDate>${new Date(item.date).toUTCString()}</pubDate>
		</item>`;

	const xml = `
	<?xml version="1.0" encoding="UTF-8" ?>
	<rss version="2.0">
	<channel>
		<title>${clean(channel.title)}</title>
		<link>https://${channel.domain}/${clean(channel.base || '')}</link>
		<description>${clean(channel.description)}</description>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		<language>${channel.lang || 'en'}</language>
		<image>
			<url>https://${channel.domain}/${channel.image || 'assets/favicon.ico'}</url>
			<title>${channel.title}</title>
			<link>https://${channel.domain}/${clean(channel.base || '')}</link>
		</image>
		${items.map(createItem).join('')}
	</channel>
	</rss>`;

	return xml.replace(/>[^\S]+/gm, '>').trim();
}
