import { Workbox } from 'workbox-window'

if ('serviceWorker' in navigator) {
	const wb = new Workbox(
		import.meta.env.DEV ? '/ServiceWorker.ts' : '/ServiceWorker.js',
		{ type: 'module', scope: '/' }
	)

	wb.register()
}
