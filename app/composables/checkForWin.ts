import type GridSquare from "~~/types/grid-square";
import type CheckForWinReturnObject from "~~/types/check-for-win-return-object";

export default function checkForWin(
	grid_array: GridSquare[]
): CheckForWinReturnObject {
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

		const square_zero = grid_array[index_zero];
		const square_one = grid_array[index_one];
		const square_two = grid_array[index_two];

		if (!square_zero || !square_one || !square_two) {
			continue;
		}

		const meets_win_condition: boolean =
			square_zero.content_index === square_one.content_index &&
			square_one.content_index === square_two.content_index &&
			square_zero.content_index !== 0;

		if (meets_win_condition === true) {
			return {
				meets_win_condition: true,
				content_index: square_zero.content_index,
			};
		}
	}

	return {
		meets_win_condition: false,
		content_index: 0,
	};
}
