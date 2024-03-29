import { json } from '@sveltejs/kit'
import { services } from '@misiki/litekart-utils'
import { DOMAIN } from '$lib/config'

export async function GET({ cookies, request, locals, setHeaders }) {
	let menu, popularSearches, megamenu, store

	const host = locals.origin
	const origin = locals.origin
	try {
		const storeRes = await services.StoreService.getStoreData({
			url: request.url,
			host: DOMAIN || host,
			origin: origin,
			cookies
		})
		store = storeRes.storeOne

		// setHeaders({ 'Cache-Control': 'max-age=60' })
	} catch (e) {}
	return json({ store })
}
