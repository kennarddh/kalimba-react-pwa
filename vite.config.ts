import { defineConfig, loadEnv } from 'vite'

// Plugin
import { checker } from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'

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

	return {
		plugins: [
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
					theme_color: '#ffffff',
					display: 'standalone',
					orientation: 'landscape',
					description: 'Kalimba React PWA',
					icons: [
						{
							type: 'image/x-icon',
							src: '/favicon.ico',
							sizes: '64x64',
						},
					],
				},
			}),
		],
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
