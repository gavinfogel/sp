<script lang="ts">
	let title: string;
	let description: string;
	let imgSrc: string;
	let imgAlt: string;
</script>

<div class="rounded w-full flex flex-row space-x-4">
	<img src={imgSrc} alt={imgAlt} />
	<div class="flex flex-col space-y-2">
		<h1>{title}</h1>
		<h2>{description}</h2>
	</div>
</div>
