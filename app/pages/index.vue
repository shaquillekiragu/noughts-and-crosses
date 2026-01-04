<template>
	<main class="w-screen min-h-screen flex flex-col items-center mt-20">
		<h1 class="text-center text-2xl sm:text-3xl font-bold mb-50">
			Noughts and Crosses
		</h1>

		<section class="w-full flex flex-col items-center">
			<h2 class="text-center text-lg sm:text-xl font-bold mb-10">
				Player 1: Choose your side:
			</h2>

			<div
				class="flex flex-col sm:flex-row items-center gap-8 *:w-45 *:h-14 *:flex *:justify-center *:items-center *:rounded-lg *:text-xl *:text-white *:hover:cursor-pointer"
			>
				<NuxtLink
					to="/player-vs-player"
					class="bg-green-800"
					@click="handleChooseSymbolClick(1)"
				>
					<!-- The symbol index for Noughts is 1 -->
					Noughts
				</NuxtLink>

				<NuxtLink
					to="/player-vs-player"
					class="bg-blue-800"
					@click="handleChooseSymbolClick(2)"
				>
					<!-- The symbol index for Noughts is 2 -->
					Crosses
				</NuxtLink>
			</div>
		</section>

		<FooterComponent />
	</main>
</template>

<script setup lang="ts">
import useGameState from "~/composables/useGameState";

const { player_symbol_map } = useGameState();

function handleChooseSymbolClick(symbol_index: 1 | 2) {
	player_symbol_map.value.player_one = symbol_index;

	player_symbol_map.value.player_two =
		player_symbol_map.value.player_one === 1 ? 2 : 1;
}
</script>
