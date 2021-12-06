import Mod from '../build_src/mod.mjs';

export default new Mod(
	'Ok Zoomer',
	'EnnuiL',
	'Adds a highly-configurable zoom key for Fabric. The zoom is yours!',
)
.add_version(14, 15, 16, 17, 18)
.add_category('Zoom')
.add_link(
	{ host: 'curseforge', params: { namespace: 'ok-zoomer' } },
	{ host: 'modrinth', params: { namespace: 'ok-zoomer' } },
	{ host: 'github' }
);
