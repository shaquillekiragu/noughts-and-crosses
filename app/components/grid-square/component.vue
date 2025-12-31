<template>
	<article
		class="w-full aspect-square hover:cursor-pointer hover:bg-slate-100"
		:class="{
			'border-x-5': index === 1 || index === 7,
			'border-y-5': index === 3 || index === 5,
			'border-5': index === 4,
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
