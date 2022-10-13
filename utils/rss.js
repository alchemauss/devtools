const chars = { '"': 'quot', "'": '#39', '&': 'amp', '<': 'lt', '>': 'gt' };

/** @param {string} html */
function clean(html) {
	if (!(html = html.trim())) return '';
	return html.replace(/["'&<>]/g, (c) => `&${chars[/** @type {keyof typeof chars} */ (c)]};`);
}

/**
 * @typedef {Record<'domain' | 'title' | 'description', string> & Partial<Record<'base' | 'image' | 'lang', string>>} Channel
 * @typedef {Array<Record<'title' | 'slug' | 'description' | 'date', string>>} Items
 */

/** @type {(channel: Channel, items: Items) => string} */
export default function (channel, items) {
	/** @param {typeof items[number]} item */
	const createItem = (item) => `
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
