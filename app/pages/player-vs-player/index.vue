<template>
	<main
		class="w-screen min-h-screen relative flex flex-col items-center my-10 mt-20 sm:my-15"
	>
		<BackButtonComponent
			link_url="/"
			class="absolute left-[10vw] -top-13 sm:-top-2"
		/>

		<h1 class="text-center text-2xl sm:text-3xl font-bold mb-15">
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
import useGameState from "~/composables/useGameState";

const {
	grid,
	current_player,
	is_playing,
	player_has_won,
	game_is_a_draw,
	resetGame,
} = useGameState();

console.log(grid.value, " < initial grid");

async function handlePlayerMove(index: number, new_content_index: 1 | 2) {
	if (!is_playing.value) {
		return;
	}

	const square = grid.value[index];

	if (!square || index < 0 || index >= grid.value.length) {
		return;
	}
	square.content_index = new_content_index;

	await nextTick();

	checkForWin(grid, player_has_won);

	if (player_has_won.value === true) {
		is_playing.value = false;

		setTimeout(() => {
			console.log("win");
			alert("You win! Click 'Ok' to play again.");
			resetGame();
		}, 300);
	} else {
		current_player.value = current_player.value === 1 ? 2 : 1;
	}
}
</script>
