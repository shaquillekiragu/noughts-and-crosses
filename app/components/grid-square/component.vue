<template>
	<article
		class="w-full aspect-square flex justify-center items-center hover:cursor-pointer hover:bg-slate-100"
		:class="{
			'border-r-0 pr-[5px] sm:pr-[6px] xl:pr-[8px]':
				index === 2 || index === 5,
			'border-b-0 pb-[5px] sm:pb-[6px] xl:pb-[8px]':
				index === 6 || index === 7,
		}"
		@click="onClick"
	>
		<div
			v-if="grid_square.symbol_index === 1"
			class="w-2/3 h-2/3 bg-black flex justify-center items-center rounded-full"
		>
			<div class="w-2/3 h-2/3 rounded-full bg-slate-100 z-1"></div>
		</div>

		<Icon
			v-if="grid_square.symbol_index === 2"
			name="fluent-emoji-high-contrast:cross-mark"
			class="!w-2/3 !h-2/3"
		/>
	</article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type GridSquare from "~~/types/grid-square.ts";
import useGameState from "~/composables/useGameState";

const { current_player, player_symbol_map } = useGameState();

const { grid_square, index } = defineProps({
	grid_square: {
		type: Object as PropType<GridSquare>,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
});

const emits = defineEmits<{
	"on-click-emit": [index: number, new_symbol_index: 1 | 2];
}>();

function onClick() {
	if (grid_square.symbol_index === 0 && current_player.value === 1) {
		const new_symbol_index: 1 | 2 = player_symbol_map.value.player_one;

		grid_square.symbol_index = new_symbol_index;
		emits("on-click-emit", index, new_symbol_index);
		//
	} else if (grid_square.symbol_index === 0 && current_player.value === 2) {
		const new_symbol_index: 1 | 2 = player_symbol_map.value.player_two;

		grid_square.symbol_index = new_symbol_index;
		emits("on-click-emit", index, new_symbol_index);
	}
}
</script>
