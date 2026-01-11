import type GridSquare from "~~/types/grid-square";
import type PlayerSymbolMap from "~~/types/player-symbol-map.ts";

export default function useGameState() {
	const game_mode = ref<0 | "player" | "computer">(0);
	const grid = ref<GridSquare[]>([]);
	const current_player = ref<1 | 2>(1);
	const is_playing = ref<boolean>(true);
	const game_turn = ref<number>(0);
	const player_has_won = ref<boolean>(false);
	const game_is_a_draw = ref<boolean>(false);

	const player_symbol_map = useState<PlayerSymbolMap>(
		"player_symbol_map",
		() => ({
			player_one: 0,
			player_two: 0,
		})
	);

	function initializeGrid() {
		grid.value = [];

		for (let i = 0; i < 9; i++) {
			grid.value.push({
				symbol: 0,
			});
		}
	}

	function resetGame() {
		navigateTo("/");
		initializeGrid();

		game_mode.value = 0;
		current_player.value = 1;
		is_playing.value = true;
		game_turn.value = 0;
		player_has_won.value = false;
		game_is_a_draw.value = false;

		player_symbol_map.value = {
			player_one: 0,
			player_two: 0,
		};
	}

	initializeGrid();

	return {
		game_mode,
		grid,
		current_player,
		is_playing,
		game_turn,
		player_has_won,
		game_is_a_draw,
		player_symbol_map,
		resetGame,
		initializeGrid,
	};
}
