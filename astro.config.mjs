// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Reparacita',
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: 'Guía',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Documentación', slug: 'guides/doc' },
						{ label: 'Roles del Sistema', slug: 'guides/roles' },
						{ label: 'Paneles de Gestión', slug: 'guides/paneles' },
						{ label: 'Gestión de Citas', slug: 'guides/citas' },
						{ label: 'Configuración del Taller', slug: 'guides/configuracion' },
					],
				},
				{
					label: 'Referencias',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
