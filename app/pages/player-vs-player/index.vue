<template>
	<main
		class="w-screen min-h-screen relative flex flex-col items-center mt-20 sm:mt-15"
	>
		<HeaderComponent :current_player="current_player" />

		<BackButtonComponent
			link_url="/"
			class="absolute left-[10vw] -top-13 sm:-top-2"
		/>

		<h1 class="text-center text-2xl sm:text-3xl font-bold mb-15">
			Noughts and Crosses
		</h1>

		<GridComponent
			:grid="grid"
			:current_player="current_player"
			:player_symbol_map="player_symbol_map"
			@on-click-emit-two="handlePlayerMove"
			class=""
		/>

		<FooterComponent />
	</main>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import useGameState from "~/composables/useGameState";
import checkForWin from "~/composables/checkForWin";

const {
	grid,
	current_player,
	is_playing,
	game_turn,
	player_has_won,
	game_is_a_draw,
	player_symbol_map,
	resetGame,
} = useGameState();

async function handlePlayerMove(
	index: number,
	new_symbol: 0 | "nought" | "cross"
) {
	if (!is_playing.value) {
		return;
	}
	game_turn.value++;

	const square = grid.value[index];

	if (!square || index < 0 || index >= grid.value.length) {
		return;
	}
	square.symbol = new_symbol;

	await nextTick();
	checkForWin(grid, player_has_won, game_is_a_draw, game_turn);

	if (player_has_won.value === true) {
		is_playing.value = false;

		setTimeout(() => {
			alert("You win! Click 'Ok' to play again.");
			resetGame();
		}, 300);
		//
	} else if (game_is_a_draw.value === true) {
		is_playing.value = false;

		setTimeout(() => {
			alert("It's a draw! Nice try, click 'Ok' to play again.");
			resetGame();
		}, 300);
		//
	} else {
		current_player.value = current_player.value === 1 ? 2 : 1;
	}
}
</script>
