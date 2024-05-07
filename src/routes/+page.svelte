<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	// Import the image from migrant-shores.png
	import migrantShores from '../descriptions/migrant-shores.png';
	import download from '../descriptions/download.png';
	import bronzeDownfall from '../descriptions/bronze-downfall.png';
	import medinetHabu from '../medinet-habu.jpg';
	import battleRelief from '../battle-relief.jpg';

	const descriptions = [
		'Enigmatic marauders whose sudden raids and assaults played a decisive role in the collapse of Bronze Age civilizations across the Mediterranean.',
		'Desperate migrants driven by severe climatic changes who swarmed over the shores of the eastern Mediterranean, disrupting ancient societies in their quest for new lands to settle.',
		'A formidable coalition of maritime tribes, whose combined strength and tactical prowess brought about the downfall of several prominent Bronze Age empires.',
		'Emerging as the proto-pirates of the Bronze Age, the Sea Peoples exploited the weakness of existing states, preying on commerce and coastal cities through swift naval raids.',
		'In the face of economic collapse and social upheaval in their homelands, the Sea Peoples embarked on a mass migration that led to conflicts with ancient Mediterranean civilizations.',
		'The Sea Peoples were not merely invaders but catalysts for cultural and social transformation, challenging the stagnating powers and contributing to the cultural diffusion that defined the early Iron Age.',
		'Some theories suggest the Sea Peoples were groups of mercenaries turned rogue, using their military skills to forge new territories and identities in a region rife with instability.',
		'The Sea Peoples might be the forgotten founders of new dynasties and cultures in the Mediterranean, as they settled and merged with indigenous populations, laying the foundations for future civilizations.',
		'Often painted as the primary culprits for the Bronze Age collapse, the Sea Peoples may have been historically scapegoated, their role perhaps exaggerated in the face of wider systemic failures across ancient civilizations.'
	];

	let index = 0;
	let roller: number | undefined;

	onMount(() => {
		roller = setInterval(() => {
			if (index === descriptions.length - 1) index = 0;
			else index++;
		}, 3500);
	});

	onDestroy(() => {
		clearInterval(roller);
	});
</script>

<div class="font-mona">
	<div class="w-full flex items-center justify-center">
		<div class="flex flex-col items-center justify-center text-center max-w-3xl text-white">
			<h1 class="text-6xl font-hubot text-white mt-36">The Sea Peoples</h1>
			<h2 class="text-2xl mt-12 max-w-xl font-mona">
				A coalition of migrants often blamed for the collapse of the Bronze Age, their narrative is
				widely disputed.
			</h2>
		</div>
	</div>
	<div class="flex flex-col items-center justify-center mt-24">
		<div class="max-w-3xl space-y-12">
			<h2 class="text-gray-700 text-lg mt-12 text-center w-full">
				Who were they? There are many ideas...
			</h2>
			<div
				class="flex flex-row space-x-12 bg-[#171717] rounded hover:scale-105 hover:-translate-y-4 transition-all"
			>
				<div class="text-white text-2xl p-12">
					Desperate migrants driven by severe climatic changes who swarmed over the shores of the
					eastern Mediterranean, disrupting ancient societies in their quest for new lands to
					settle.
				</div>
				<img src={migrantShores} class="w-72 rounded-r" alt="migrant shores" />
			</div>
			<div
				class="flex flex-row space-x-12 max-w-3xl bg-[#171717] rounded hover:scale-105 hover:-translate-y-4 transition-all"
			>
				<img src={download} class="w-72 rounded-l" alt="Enigmatic marauders" />
				<div class="text-white text-2xl p-12">
					Enigmatic marauders whose sudden raids and assaults played a decisive role in the collapse
					of Bronze Age civilizations across the Mediterranean.
				</div>
			</div>
			<div
				class="flex flex-row space-x-12 bg-[#171717] rounded hover:scale-105 hover:-translate-y-4 transition-all"
			>
				<div class="text-white text-2xl p-12">
					Often painted as the primary culprits for the Bronze Age collapse, the Sea Peoples may
					have been historically scapegoated, their role perhaps exaggerated in the face of wider
					systemic failures across ancient civilizations.
				</div>
				<img src={bronzeDownfall} class="w-72 rounded-r" alt="migrant shores" />
			</div>
		</div>
	</div>
	<div class="flex flex-col items-center justify-center mt-24">
		<div class="space-y-12">
			<h2 class="text-gray-300 text-xl mt-12 text-center w-full">
				So who were the Sea Peoples, <span class="italic">really</span>? In some instances, not 'Sea
				Peoples' at all...
			</h2>
			<div class="text-2xl text-center text-gray-700 bg-[#171717] p-16 m-24 rounded max-w-5xl">
				<div>
					The name, like so many labels associated with ancient events of great complexity, is (as
					all serious archaeologists readily acknowledge) a misnomer. The label merely acts as a
					“tag” or “shorthand” to identify <span class="text-orange-500"
						>a series of people and cultural events involving those who attacked Egypt at the time
						of Ramesses III</span
					>. The events that were associated with the Sea Peoples are
					<span class="text-orange-500"
						>more easily identified by their effects than by their causes</span
					>.
				</div>
				<div class="mt-12">-Philip Betancourt</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col mt-24 w-full px-36 pb-36 pt-12">
		<div class="max-w-5xl">
			<div class="text-white text-lg">
				What do we <span class="italic">actually</span> know about the Sea Peoples?
			</div>
			<img src={medinetHabu} alt="Medinet Habu" class="rounded mt-8 h-96" />
			<div class="mt-12 text-2xl text-gray-200 max-w-4xl">
				The root of our understanding of the Sea Peoples comes from the inscriptions of Ramesses III
				at Medinet Habu, where they are depicted in battle scenes after being repelled by the
				pharaoh. These inscriptions provide a detailed account of the Sea Peoples' invasion of Egypt
				and their subsequent defeat, but the identity and origins of the Sea Peoples remain
				uncertain.
			</div>
		</div>
		<img src={battleRelief} alt="Medinet Habu Battle Relief" class="rounded mt-32 h-[450px]" />
		<div class="w-full flex flex-row items-right justify-end text-white mt-12 text-lg">
			<div class="flex flex-col max-w-4xl space-y-8 items-end">
				<div class="text-right text-gray-500 max-w-xl">
					This relief, from Medinet Habu depicts Ramesses III defeating the Sea Peoples in battle at
					the "Battle of the Delta".
				</div>
				<div class="text-right">
					From their combat attire, we can piece together some of the potential subgroups that made
					up the Sea Peoples, as well as speculate about the potential geographical origins of these
					groups.
				</div>
			</div>
		</div>
		<div class="text-white text-2xl mt-24">
			The inscriptions at Medinet Habu are not just artistic expressions but serve as a historical
			record of the tumultuous period during the reign of Ramses III. They depict detailed accounts
			of the battles between Egyptian forces and the mysterious invaders known as the Sea Peoples.
			Medinet Habu provides a visual report of the events through elaborate reliefs that show the
			Sea Peoples in their distinctive attire, engaging in combat with the Egyptians. The
			information from these reliefs is crucial because it provides direct evidence of the existence
			and military practices of the Sea Peoples. It also illustrates the Egyptians' response to
			these threats, highlighting their strategic and military abilities. By studying these
			inscriptions, archaeologists can infer the scale of the conflict and its impact on ancient
			Egyptian society.
		</div>
		<div class="text-white text-2xl mt-12">
			Archeologists can also perform more thorough analysis by considering the rhetorical situation
			of the inscriptions, the context in which they were created, and the intended audience. By
			understanding the reliefs from the persective of the ancient Egyptians, we can better
			understand the signifiance of the Sea Peoples and their impact on the ancient world.
			Specifically, the Sea Peoples are depicted as 'defeated enemies', reinforcing the pharaoh's
			divine authority and underscoring the importance of military victory in maintaining order and
			stability. However, the inscriptions also make references to the 'great ones' when referring
			to the Sea Peoples, suggesting that the Sea Peoples were not merely a monolithic group but a
			diverse coalition of tribes and peoples, while still maintaining a distinct level of military
			organization. This potential narrative contrasts with their portrayal as a chaotic and
			destructive force. Although the inscriptions at Medinet Habu may be interpreted as showing the
			Sea Peoples as a unified threat, they also provide evidence of a more complex and nuanced
			picture of the Sea Peoples and their role in the ancient world.
		</div>
	</div>
</div>

<!-- <div class="w-full max-w-5xl text-5xl my-24 p-12 rounded bg-[#171717]">
	
	<div class="relative">
		{#key index}
			<p transition:fade class="absolute top-0 left-0 mt-24 text-white text-2xl active"></p>
		{/key}
	</div>
</div> -->
