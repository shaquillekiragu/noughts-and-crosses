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
			v-if="grid_square.symbol === 'nought'"
			class="w-2/3 h-2/3 bg-black flex justify-center items-center rounded-full"
		>
			<div class="w-2/3 h-2/3 rounded-full bg-slate-100 z-1"></div>
		</div>

		<Icon
			v-if="grid_square.symbol === 'cross'"
			name="fluent-emoji-high-contrast:cross-mark"
			class="!w-2/3 !h-2/3"
		/>
	</article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type GridSquare from "~~/types/grid-square.ts";
import type PlayerSymbolMap from "~~/types/player-symbol-map.ts";

const { grid_square, index, current_player, player_symbol_map } = defineProps({
	grid_square: {
		type: Object as PropType<GridSquare>,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
	current_player: {
		type: Number as PropType<1 | 2>,
		required: true,
	},
	player_symbol_map: {
		type: Object as PropType<PlayerSymbolMap>,
		required: true,
	},
});

const emits = defineEmits<{
	"on-click-emit": [index: number, new_symbol: 0 | "nought" | "cross"];
}>();

function onClick() {
	if (grid_square.symbol === 0 && current_player === 1) {
		//
		grid_square.symbol = player_symbol_map.player_one;

		emits("on-click-emit", index, player_symbol_map.player_one);
		//
	} else if (grid_square.symbol === 0 && current_player === 2) {
		//
		grid_square.symbol = player_symbol_map.player_two;

		emits("on-click-emit", index, player_symbol_map.player_two);
	}
}
</script>
