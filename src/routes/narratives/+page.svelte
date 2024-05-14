<script lang="ts">
	import Card from '$lib/Card.svelte';

	import medinetHabu from '../../medinet-habu.jpg';
	import dna from '../../descriptions/dna.png';
	import military from '../../descriptions/download.png';
</script>

<h1 class="text-5xl mt-12 font-semibold font-mona">Narratives</h1>
<p class="mt-12 text-2xl font-hubot max-w-4xl">
	The narrative of the Sea Peoples is complex with many different interpretations. Below we
	highlight some of the agreed upon and disagreed upon aspects of the Sea Peoples, as well as their
	impact on both the ancient world and modern understanding, highlighting <span
		class="text-purple-200">what we can actually conclude, given the evidence available.</span
	>
</p>

<div class="mt-24 space-y-12 pb-24">
	<Card
		title="Medinet Habu & 'Sea Peoples'"
		description="Where did this all come from? Who exactly were the sea peoples,
		and what did they do? At a high level, what are the narratives and events that
		historians actually agree on? Where is there room for interpretation? And what
		are the implications of these interpretations?"
		imgSrc={medinetHabu}
		imgAlt="The Image"
		url="medinet-habu"
	/>
	<Card
		title="Philistines and Land Claims"
		description="Generally, historians identify the Philstines as originating
		from the Aegean Sea, and related to the Peleset, one of groups forming the
		Sea Peoples. Modern DNA studies show us evidence of how the Philistines
		quickly assimilated into local communities in the Levant. So what does this
		mean? For politicians, it might mean a lot."
		imgSrc={dna}
		imgAlt="The Image"
		url="philistines"
	/>
	<Card
		title="Militarization and Organization"
		description="In older academic narratives, the Sea Peoples were often portrayed as
		a military coalition that went about raiding and pillaging, and brought about
		the collapse of the Bronze Age. Though they are less often scapegoated by historians today,
		how much of this is true? What other reasons could there be for their migration,
		and the subsequent collapse of the Bronze Age?"
		imgSrc={military}
		imgAlt="Organized Military Sea Peoples"
		url="military-and-organization"
	/>
</div>
