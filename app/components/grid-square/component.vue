<template>
	<article
		class="w-full aspect-square flex justify-center items-center transition-all duration-200"
		:class="{
			'border-r-0 pr-[5px] sm:pr-[6px] xl:pr-[8px]':
				index === 2 || index === 5,
			//
			'border-b-0 pb-[5px] sm:pb-[6px] xl:pb-[8px]':
				index === 6 || index === 7,
			//
			'hover:cursor-pointer hover:brightness-90 hover:shadow-inner':
				grid_square.symbol === 0 && is_playing,
			//
			'cursor-not-allowed':
				grid_square.symbol !== 0 ||
				!is_playing ||
				(game_mode === 'computer' && current_player === 2),
			//
			'bg-yellow-700': ((index % 3) + Math.floor(index / 3)) % 2 === 0,
			'bg-yellow-900': ((index % 3) + Math.floor(index / 3)) % 2 === 1,
		}"
		@click="onClick"
	>
		<div
			v-if="grid_square.symbol === 'nought'"
			class="w-2/3 h-2/3 flex justify-center items-center rounded-full bg-black shadow-lg"
		>
			<div
				class="w-2/3 h-2/3 rounded-full z-1"
				:class="{
					'bg-yellow-700':
						((index % 3) + Math.floor(index / 3)) % 2 === 0,
					'bg-yellow-900':
						((index % 3) + Math.floor(index / 3)) % 2 === 1,
				}"
			></div>
		</div>

		<Icon
			v-if="grid_square.symbol === 'cross'"
			name="fluent-emoji-high-contrast:cross-mark"
			class="!w-2/3 !h-2/3 drop-shadow-lg"
			style="filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))"
		/>
	</article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type GridSquare from "~~/types/grid-square.ts";
import type PlayerSymbolMap from "~~/types/player-symbol-map.ts";

const {
	game_mode,
	grid_square,
	index,
	current_player,
	player_symbol_map,
	is_playing,
} = defineProps({
	game_mode: {
		type: [Number, String] as PropType<0 | "player" | "computer">,
		required: true,
	},
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
	is_playing: {
		type: Boolean,
		required: true,
	},
});

const emits = defineEmits<{
	"game-move-emit": [index: number, new_symbol: "nought" | "cross"];
}>();

function onClick(): void {
	if (!is_playing) {
		return;
	}

	if (grid_square.symbol !== 0) {
		return;
	}

	if (current_player === 1) {
		emits("game-move-emit", index, player_symbol_map.player_one);
		//
	} else if (current_player === 2 && game_mode === "player") {
		emits("game-move-emit", index, player_symbol_map.player_two);
		//
	}
}
</script>
