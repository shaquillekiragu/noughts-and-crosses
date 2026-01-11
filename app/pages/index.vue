<template>
	<main class="w-screen min-h-screen flex flex-col items-center mt-20">
		<h1 class="text-center text-2xl sm:text-3xl font-bold mb-35 sm:mb-45">
			Noughts and Crosses
		</h1>

		<section
			v-if="game_mode === 0"
			class="w-full flex flex-col items-center"
		>
			<h2 class="text-center text-lg sm:text-xl font-bold mb-10">
				Which game mode do you want to play?
			</h2>

			<div class="flex flex-col items-center gap-8">
				<button
					class="w-55 sm:w-60 h-13 sm:h-15 flex justify-center items-center rounded-lg text-lg sm:text-xl text-white bg-blue-800 hover:cursor-pointer"
					@click="handleModeStateChange('player')"
				>
					Player vs Player
				</button>

				<button
					class="w-55 sm:w-60 h-13 sm:h-15 flex justify-center items-center rounded-lg text-lg sm:text-xl text-white bg-green-800 hover:cursor-pointer"
					@click="handleModeStateChange('computer')"
				>
					Player vs Computer
				</button>
			</div>
		</section>

		<section
			v-else-if="game_mode === 'player'"
			class="w-full flex flex-col items-center"
		>
			<ChangeLandingPageDisplayComponent
				class="absolute left-[10vw] top-7 sm:top-18.5"
				@click="handleModeStateChange(0)"
			/>

			<h2 class="text-center text-lg sm:text-xl font-bold mb-10">
				Player 1: Choose your side:
			</h2>

			<div class="flex flex-col sm:flex-row items-center gap-8">
				<NuxtLink
					to="/player-vs-player"
					class="w-45 h-14 flex justify-center items-center rounded-lg text-xl text-white bg-green-800 hover:cursor-pointer"
					@click="handleChooseSymbolClick('nought')"
				>
					Noughts
				</NuxtLink>

				<NuxtLink
					to="/player-vs-player"
					class="w-45 h-14 flex justify-center items-center rounded-lg text-xl text-white bg-blue-800 hover:cursor-pointer"
					@click="handleChooseSymbolClick('cross')"
				>
					Crosses
				</NuxtLink>
			</div>
		</section>

		<section v-else class="w-full flex flex-col items-center">
			<ChangeLandingPageDisplayComponent
				class="absolute left-[10vw] top-7 sm:top-18.5"
				@click="handleModeStateChange(0)"
			/>

			<h2 class="text-center text-lg sm:text-xl font-bold mb-10">
				Player, choose your side:
			</h2>
		</section>

		<FooterComponent />
	</main>
</template>

<script setup lang="ts">
import useGameState from "~/composables/useGameState";
import useModeState from "~/composables/useModeState";

const { player_symbol_map } = useGameState();
const game_mode = useModeState();

function handleModeStateChange(mode: 0 | "player" | "computer") {
	game_mode.value = mode;
}

function handleChooseSymbolClick(symbol: "nought" | "cross") {
	player_symbol_map.value.player_one = symbol;

	player_symbol_map.value.player_two =
		player_symbol_map.value.player_one === "nought" ? "cross" : "nought";
}

onMounted(() => {
	game_mode.value = 0;
});
</script>
