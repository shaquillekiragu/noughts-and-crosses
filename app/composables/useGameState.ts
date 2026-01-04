import type GridSquare from "~~/types/grid-square";
import type PlayerSymbolMap from "~~/types/player-symbol-map.ts";

export default function useGameState() {
	const grid = ref<GridSquare[]>([]);
	const current_player = ref<1 | 2>(1);
	const is_playing = ref<boolean>(true);
	const player_has_won = ref<boolean>(false);
	const game_is_a_draw = ref<boolean>(false);
	const player_symbol_map = ref<PlayerSymbolMap>({
		player_one: 1,
		player_two: 1,
	});

	function initializeGrid() {
		grid.value = [];
		for (let i = 0; i < 9; i++) {
			grid.value.push({
				symbol_index: 0,
			});
		}
	}

	function resetGame() {
		initializeGrid();
		current_player.value = 1;
		is_playing.value = true;
		player_has_won.value = false;
		game_is_a_draw.value = false;
		player_symbol_map.value = {
			player_one: 1,
			player_two: 1,
		};
	}

	initializeGrid();

	return {
		grid,
		current_player,
		is_playing,
		player_has_won,
		game_is_a_draw,
		player_symbol_map,
		resetGame,
		initializeGrid,
	};
}
