<template>
	<main
		class="w-screen min-h-screen relative flex flex-col items-center my-15"
	>
		<BackButtonComponent link_url="/" class="absolute -top-1 left-35" />

		<h1 class="text-center text-3xl font-bold mb-15">
			Noughts and Crosses
		</h1>

		<GridComponent
			:grid="grid"
			@on-click-emit-two="handlePlayerMove"
			class=""
		/>
	</main>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import checkForWin from "~/composables/checkForWin";
import type GridSquare from "~~/types/grid-square.ts";
import type CheckForWinReturnObject from "~~/types/check-for-win-return-object";

const grid = ref<GridSquare[]>([]);

for (let i = 0; i < 9; i++) {
	grid.value.push({
		content_index: 0,
	});
}

console.log(grid.value, " < initial grid");

async function handlePlayerMove(index: number, new_content_index: 1 | 2) {
	grid.value[index].content_index = new_content_index;

	await nextTick();

	const win_info: CheckForWinReturnObject = checkForWin(grid.value);

	if (win_info.meets_win_condition === true) {
		setTimeout(() => {
			console.log("win");
			for (const square of grid.value) {
				square.content_index = 0;
			}
			alert("You win! Click 'Ok' to play again.");
		}, 300);
	}
}
</script>
