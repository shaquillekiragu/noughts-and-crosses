<template>
	<article
		class="w-full aspect-square flex justify-center items-center hover:cursor-pointer hover:bg-slate-200"
		:class="{
			'border-x-5': index === 1 || index === 7,
			'border-y-5': index === 3 || index === 5,
			'border-5': index === 4,
		}"
	>
		<div
			class="w-2/3 h-2/3 bg-black"
			:class="{
				hidden: grid_square.content_index === 0,
				'flex justify-center items-center rounded-full':
					grid_square.content_index === 1,
				'': grid_square.content_index === 2,
			}"
		>
			<div
				class=""
				:class="
					grid_square.content_index === 1
						? 'w-3/4 h-3/4 rounded-full !bg-slate-100 z-1'
						: ''
				"
			></div>
		</div>
	</article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type GridSquare from "~/types/grid.ts";

const { grid_square, index } = defineProps({
	grid_square: Object as PropType<GridSquare>,
	index: Number,
});
</script>
