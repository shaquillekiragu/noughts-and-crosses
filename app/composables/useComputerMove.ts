import type { Ref } from "vue";
import type GridSquare from "~~/types/grid-square";

export default function computerMove(grid: GridSquare[]): number {
	const available_grid_squares: number[] = [];

	grid.forEach((square, index) => {
		if (square.symbol === 0) {
			available_grid_squares.push(index);
		}
	});

	const random_square_index = Math.floor(
		Math.random() * available_grid_squares.length
	);

	if (!available_grid_squares.length) {
		return 0;
		//
	} else if (available_grid_squares.length === 1) {
		return available_grid_squares[0]!;
		//
	}
	return available_grid_squares[random_square_index]!;
}
