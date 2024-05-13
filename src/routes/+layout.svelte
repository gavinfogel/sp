<script>
	import '../index.css';

	import { Gradient } from '$lib/gradient';
	import { onMount } from 'svelte';

	onMount(() => {
		const gradient = new Gradient();
		gradient.initGradient('#gradient-canvas');
	});
</script>

<div class="h-[100vh] w-[100vw] absolute -z-10 overflow-hidden">
	<canvas id="gradient-canvas" style="width: 100%; height: 100%;" />
</div>
<div class="h-[100vh] w-[100vw] overflow-auto text-white flex justify-center font-mona">
	<div class="w-full max-w-5xl">
		<nav class="w-full flex flex-row items-center space-x-12 text text-xl font-semibold py-12">
			<a class="hover:text-gray-400 cursor-pointer transition-all duration-200" href="/">Home</a>
			<a class="hover:text-gray-400 cursor-pointer transition-all duration-200" href="/narratives"
				>Narratives</a
			>
			<a class="hover:text-gray-400 cursor-pointer transition-all duration-200" href="/references"
				>References</a
			>
		</nav>
		<slot />
	</div>
</div>
