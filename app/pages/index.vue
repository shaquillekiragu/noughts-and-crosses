<template>
	<main class="w-screen min-h-screen flex flex-col items-center my-10">
		<h1 class="text-center text-3xl font-bold mb-15">Hello World!</h1>
		<GridComponent
			:grids="grids"
			@on-click-emit-two="handleSquareClick"
			class=""
		/>
	</main>
</template>

<script setup lang="ts">
import type GridSquare from "~~/types/grid-square.ts";

const grids = ref<GridSquare[]>([
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
		content_index: 2,
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
]);

function handleSquareClick(index: number, new_content_index: 1 | 2) {
	grids.value[index].content_index = new_content_index;
}
</script>
