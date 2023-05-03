import { defineConfig, loadEnv } from 'vite'

// Plugin
import { checker } from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'
import replace from '@rollup/plugin-replace'

import { resolve } from 'path'

export const relativeAlias: Record<string, string> = {
	Components: './src/Components',
	Contexts: './src/Contexts',
	Utils: './src/Utils',
	Hooks: './src/Hooks',
	Constants: './src/Constants',
	Api: './src/Api',
	Types: './src/Types',
}

export const resolveAlias = Object.entries(relativeAlias).reduce(
	(prev: Record<string, string>, [key, path]) => {
		// eslint-disable-next-line security/detect-object-injection
		prev[key] = resolve(__dirname, path)

		return prev
	},
	{}
)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const envPrefix: string[] = ['APP_']

	const { PORT = 3000, OPEN_BROWSER = 'true' } = {
		...loadEnv(mode, process.cwd(), ''),
	}

	const base = mode === 'development' ? '' : '/kalimba-react-pwa'

	return {
		plugins: [
			replace({
				__PUBLIC_URL__: base,
				preventAssignment: true,
			}),
			mkcert(),
			react(),
			svgr(),
			checker({
				typescript: true,
				eslint: {
					lintCommand: 'lint:check"',
				},
			}),
			VitePWA({
				devOptions: {
					enabled: mode === 'development',
					type: 'module',
					navigateFallback: 'index.html',
				},
				registerType: 'autoUpdate',
				strategies: 'injectManifest',
				srcDir: '',
				filename: 'ServiceWorker.ts',
				injectRegister: null,
				manifest: {
					start_url: '',
					name: 'Kalimba React PWA',
					short_name: 'Kalimba',
					theme_color: '#70baff',
					display: 'standalone',
					orientation: 'landscape',
					description: 'Kalimba React PWA',
					icons: [
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-196x196.png`,
							sizes: '196x196',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-96x96.png`,
							sizes: '96x96',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-32x32.png`,
							sizes: '32x32',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-16x16.png`,
							sizes: '16x16',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/favicon-128.png`,
							sizes: '128x128',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x48.png`,
							sizes: '48x48',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x72.png`,
							sizes: '72x72',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x96.png`,
							sizes: '96x96',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x128.png`,
							sizes: '128x128',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x192.png`,
							sizes: '192x192',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x384.png`,
							sizes: '384x384',
							purpose: 'maskable',
						},
						{
							type: 'image/png',
							src: `${base}/Icons/Maskable/maskable_icon_x512.png`,
							sizes: '512x512',
							purpose: 'maskable',
						},
					],
				},
			}),
		],
		base,
		resolve: {
			alias: resolveAlias,
		},
		server: {
			port: PORT || 3000,
			open: OPEN_BROWSER === 'true' ? true : false,
		},
		envPrefix,
		build: {
			outDir: 'build',
		},
	}
})
