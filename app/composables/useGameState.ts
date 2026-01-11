import type GridSquare from "~~/types/grid-square";
import type PlayerSymbolMap from "~~/types/player-symbol-map.ts";

export default function useGameState() {
	const grid = ref<GridSquare[]>([]);
	const current_player = ref<1 | 2>(1);
	const is_playing = ref<boolean>(true);
	const game_turn = ref<number>(0);
	const game_is_a_win = ref<boolean>(false);
	const game_is_a_draw = ref<boolean>(false);

	const game_mode = useState<0 | "player" | "computer">("game_mode", () => 0);

	const player_symbol_map = useState<PlayerSymbolMap>(
		"player_symbol_map",
		() => ({
			player_one: "nought",
			player_two: "cross",
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
		game_is_a_win.value = false;
		game_is_a_draw.value = false;

		player_symbol_map.value = {
			player_one: "nought",
			player_two: "cross",
		};
	}

	initializeGrid();

	return {
		game_mode,
		grid,
		current_player,
		is_playing,
		game_turn,
		game_is_a_win,
		game_is_a_draw,
		player_symbol_map,
		resetGame,
		initializeGrid,
	};
}
