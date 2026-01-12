<template>
	<button
		class="w-55 sm:w-60 h-13 sm:h-15 flex justify-center items-center rounded-lg text-lg sm:text-xl shadow-lg transition-colors duration-200 hover:shadow-xl hover:cursor-pointer"
		:class="button_colour_theme"
	>
		{{ text }}
	</button>
</template>

<script setup lang="ts">
const { text, is_dark_button } = defineProps({
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
