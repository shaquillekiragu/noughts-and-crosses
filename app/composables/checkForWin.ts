import type { Ref } from "vue";
import type GridSquare from "~~/types/grid-square";

export default function checkForWin(
	grid: Ref<GridSquare[]>,
	player_has_won: Ref<boolean>,
	game_is_a_draw: Ref<boolean>,
	game_turn: Ref<number>
): void {
	const possible_wins: [number, number, number][] = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (const condition of possible_wins) {
		const [index_zero, index_one, index_two] = condition;

		const square_zero = grid.value[index_zero];
		const square_one = grid.value[index_one];
		const square_two = grid.value[index_two];

		if (!square_zero || !square_one || !square_two) {
			continue;
		}

		const meets_win_condition =
			square_zero.symbol_index === square_one.symbol_index &&
			square_one.symbol_index === square_two.symbol_index &&
			square_zero.symbol_index !== 0;

		if (meets_win_condition) {
			player_has_won.value = true;
			return;
		}
	}

	if (game_turn.value === 9) {
		game_is_a_draw.value = true;
	}
}
