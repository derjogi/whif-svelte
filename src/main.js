import App from './App.svelte';
import './gradient.js';

const app = new App({
	target: document.body,
	props: {
		website: 'WHIF'
	}
});

export default app;