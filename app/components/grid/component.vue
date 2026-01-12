<template>
	<section
		class="grid grid-cols-3 w-7/10 sm:w-3/5 md:w-9/20 lg:w-9/25 xl:w-3/10 2xl:w-1/5 aspect-square divide-x-5 divide-y-5 sm:divide-x-6 sm:divide-y-6 xl:divide-x-8 xl:divide-y-8 divide-amber-950 bg-amber-950 p-2 sm:p-3 xl:p-4 rounded-lg shadow-2xl"
	>
		<GridSquareComponent
			v-for="(grid_square, index) in grid"
			:key="index"
			:game_mode="game_mode"
			:grid_square="grid_square"
			:index="index"
			:current_player="current_player"
			:player_symbol_map="player_symbol_map"
			:is_playing="is_playing"
			@game-move-emit="gameMoveEmitTwo"
		/>
	</section>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type GridSquare from "~~/types/grid-square.ts";
import type PlayerSymbolMap from "~~/types/player-symbol-map.ts";

const { game_mode, grid, current_player, player_symbol_map, is_playing } =
	defineProps({
		game_mode: {
			type: [Number, String] as PropType<0 | "player" | "computer">,
			required: true,
		},
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
	"game-move-emit-two": [index: number, new_symbol: "nought" | "cross"];
}>();

function gameMoveEmitTwo(index: number, new_symbol: "nought" | "cross") {
	emits("game-move-emit-two", index, new_symbol);
}
</script>
