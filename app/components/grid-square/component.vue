<template>
	<article
		class="w-1/3 h-1/3"
		:class="{
			'border-x-2': index === 1 || index === 7,
			'border-y-2': index === 3 || index === 5,
			'border-2': index === 4,
		}"
	></article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type GridSquare from "~/types/grid.ts";

const { grid_square, index } = defineProps({
	grid_square: Object as PropType<GridSquare>,
	index: Number,
});
</script>
