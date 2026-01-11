<template>
	<main
		class="w-screen min-h-screen relative flex flex-col items-center mt-20 sm:mt-15"
	>
		<HeaderComponent
			:current_player="current_player"
			:game_mode="game_mode"
		/>

		<BackButtonComponent
			link_url="/"
			class="absolute left-[10vw] -top-13 sm:-top-1.5"
		/>

		<h1 class="text-center text-2xl sm:text-3xl font-bold mb-15">
			Noughts and Crosses
		</h1>

		<GridComponent
			:game_mode="game_mode"
			:grid="grid"
			:current_player="current_player"
			:player_symbol_map="player_symbol_map"
			:is_playing="is_playing"
			:game_turn="game_turn"
			@game-move-emit-two="handleGameMove"
			class=""
		/>

		<FooterComponent />
	</main>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import useGameState from "~/composables/useGameState";
import useWinChecker from "~/composables/useWinChecker";

const {
	game_mode,
	grid,
	current_player,
	is_playing,
	game_turn,
	player_has_won,
	game_is_a_draw,
	player_symbol_map,
	resetGame,
} = useGameState();

async function handleGameMove(
	index: number,
	new_symbol: 0 | "nought" | "cross"
) {
	if (!is_playing.value) {
		return;
	}

	const square = grid.value[index];

	if (!square || index < 0 || index >= grid.value.length) {
		return;
	}

	if (square.symbol !== 0) {
		return;
	}

	square.symbol = new_symbol;
	game_turn.value++;

	await nextTick();
	useWinChecker(grid, player_has_won, game_is_a_draw, game_turn);

	const winner = current_player.value;

	if (player_has_won.value === true) {
		is_playing.value = false;

		setTimeout(() => {
			alert(`Player ${winner} wins! Click 'Ok' to play a new game.`);
			resetGame();
		}, 300);
		return;
	}

	if (game_is_a_draw.value === true) {
		is_playing.value = false;

		setTimeout(() => {
			alert("It's a draw! Nice try, click 'Ok' to play a new game.");
			resetGame();
		}, 300);
		return;
	}

	current_player.value = current_player.value === 1 ? 2 : 1;
}
</script>
