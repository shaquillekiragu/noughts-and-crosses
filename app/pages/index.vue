<template>
	<main class="w-screen min-h-screen flex flex-col items-center my-10">
		<h1 class="text-center text-3xl font-bold mb-15">Hello World!</h1>
		<GridComponent :grids="grids" class="" />
	</main>
</template>

<script setup lang="ts">
import type GridSquare from "~/types/grid.ts";

const grids: GridSquare[] = [
	{
		content_index: 0,
	},
	{
		content_index: 0,
	},
	{
		content_index: 0,
	},
	{
		content_index: 0,
	},
	{
		content_index: 1,
	},
	{
		content_index: 0,
	},
	{
		content_index: 0,
	},
	{
		content_index: 0,
	},
	{
		content_index: 0,
	},
];

// for (let i = 0; i < 9; i++) {
// 	const grid_square: GridSquare = {
// 		content_index: 0,
// 	};

// 	grids.push(grid_square);
// }
</script>
