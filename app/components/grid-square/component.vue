<template>
	<article
		class="w-full aspect-square flex justify-center items-center hover:cursor-pointer hover:bg-slate-100"
		:class="{
			'border-x-5': index === 1 || index === 7,
			'border-y-5': index === 3 || index === 5,
			'border-5': index === 4,
		}"
		@click="onClick"
	>
		<div
			v-if="grid_square.content_index === 1"
			class="w-2/3 h-2/3 bg-black flex justify-center items-center rounded-full"
		>
			<div class="w-2/3 h-2/3 rounded-full bg-slate-100 z-1"></div>
		</div>

		<Icon
			v-if="grid_square.content_index === 2"
			name="fluent-emoji-high-contrast:cross-mark"
			class="!w-2/3 !h-2/3"
		/>
	</article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type GridSquare from "~~/types/grid-square.ts";

const { grid_square, index } = defineProps({
	grid_square: Object as PropType<GridSquare>,
	index: Number,
});

const emits = defineEmits<{
	click: [index: number, new_content_index: 1 | 2];
}>();

function onClick() {
	emits("gridSquareClick", index, 1);
}
</script>
