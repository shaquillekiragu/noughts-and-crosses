<template>
	<section
		class="grid grid-cols-3 w-3/4 sm:w-2/3 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3 aspect-square divide-x-5 divide-y-5 sm:divide-x-6 sm:divide-y-6 xl:divide-x-8 xl:divide-y-8"
	>
		<GridSquareComponent
			v-for="(grid_square, index) in grid"
			:key="index"
			:grid_square="grid_square"
			:index="index"
			@on-click-emit="onClickEmitTwo"
		/>
	</section>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type GridSquare from "~~/types/grid-square.ts";

const { grid } = defineProps({
	grid: {
		type: Array as PropType<GridSquare[]>,
		required: true,
	},
});

const emits = defineEmits<{
	"on-click-emit-two": [index: number, new_symbol_index: 1 | 2];
}>();

function onClickEmitTwo(index: number, new_symbol_index: 1 | 2) {
	emits("on-click-emit-two", index, new_symbol_index);
}
</script>
