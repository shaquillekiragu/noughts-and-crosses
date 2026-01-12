<template>
	<NuxtLink
		:to="
			game_mode === 'player'
				? '/player-vs-player'
				: game_mode === 'computer'
				? '/player-vs-computer'
				: ''
		"
		class="w-45 h-14 flex justify-center items-center rounded-lg text-xl transition-colors duration-200 shadow-lg hover:shadow-xl hover:cursor-pointer"
		:class="button_colour_theme"
	>
		{{ text }}
	</NuxtLink>
</template>

<script setup lang="ts">
const { game_mode, text, is_dark_button } = defineProps({
	game_mode: {
		type: [Number, String] as PropType<0 | "player" | "computer">,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	is_dark_button: {
		type: Boolean,
		required: true,
	},
});

const button_colour_theme = is_dark_button
	? "text-white bg-yellow-900 hover:bg-yellow-950"
	: "text-yellow-900 bg-amber-100 border-4 border-yellow-800 hover:brightness-85 hover:border-yellow-900";
</script>
