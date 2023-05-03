import { Workbox } from 'workbox-window'

if ('serviceWorker' in navigator) {
	const wb = new Workbox(
		import.meta.env.DEV
			? '__PUBLIC_URL__/ServiceWorker.ts'
			: '__PUBLIC_URL__/ServiceWorker.js',
		{ type: 'module', scope: '__PUBLIC_URL__/' }
	)

	wb.register()
}
