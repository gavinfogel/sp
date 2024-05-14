<script lang="ts">
	export let title: string;
	export let description: string;
	export let imgSrc: string;
	export let imgAlt: string;
	export let url: string;
</script>

<a
	class="rounded-lg w-full flex flex-row space-x-4 h-72 bg-neutral-700
	bg-opacity-25 backdrop-blur-xl hover:scale-[102%] hover:-translate-y-2 transition-all"
	href={`/narratives/${url}`}
>
	<img src={imgSrc} alt={imgAlt} class="rounded-l-lg" />
	<div class="flex flex-col p-8 space-y-4">
		<h1 class="text-3xl font-mona">{title}</h1>
		<h2 class="text-xl">
			{description}<span class="text-neutral-500 ml-2">Click to learn more</span>
		</h2>
	</div>
</a>
