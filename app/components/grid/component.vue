<template>
	<section
		class="grid grid-cols-3 w-2/3 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 aspect-square divide-x-5 divide-y-5 sm:divide-x-6 sm:divide-y-6 xl:divide-x-8 xl:divide-y-8"
	>
		<GridSquareComponent
			v-for="(grid_square, index) in grid"
			:key="index"
			:grid_square="grid_square"
			:index="index"
			:current_player="current_player"
			:player_symbol_map="player_symbol_map"
			:is_playing="is_playing"
			@on-click-emit="onClickEmitTwo"
		/>
	</section>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type GridSquare from "~~/types/grid-square.ts";
import type PlayerSymbolMap from "~~/types/player-symbol-map.ts";

const { grid, current_player, player_symbol_map, is_playing } = defineProps({
	grid: {
		type: Array as PropType<GridSquare[]>,
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
	is_playing: {
		type: Boolean,
		required: true,
	},
});

const emits = defineEmits<{
	"on-click-emit-two": [index: number, new_symbol: 0 | "nought" | "cross"];
}>();

function onClickEmitTwo(index: number, new_symbol: 0 | "nought" | "cross") {
	emits("on-click-emit-two", index, new_symbol);
}
</script>
