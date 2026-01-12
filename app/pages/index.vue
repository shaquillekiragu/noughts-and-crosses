<template>
	<main class="w-screen min-h-screen flex flex-col items-center mt-20">
		<div
			class="w-full flex flex-col justify-center items-center gap-4 mb-15 sm:mb-25"
		>
			<h1
				class="text-center text-2xl sm:text-3xl font-bold text-amber-900 drop-shadow-md"
			>
				Noughts and Crosses
			</h1>

			<p
				class="text-center text-base sm:text-lg font-medium text-amber-900 drop-shadow-md"
			>
				(a.k.a Tic Tac Toe)
			</p>
		</div>

		<section
			v-if="game_mode === 0"
			class="w-full flex flex-col items-center"
		>
			<h2
				class="text-center text-lg sm:text-xl font-bold mb-10 text-amber-900"
			>
				Which mode do you want to play?
			</h2>

			<div class="flex flex-col items-center gap-8">
				<button
					class="w-55 sm:w-60 h-13 sm:h-15 flex justify-center items-center rounded-lg text-lg sm:text-xl text-white bg-yellow-900 hover:bg-yellow-950 hover:cursor-pointer transition-colors duration-200 shadow-lg hover:shadow-xl"
					@click="handleModeStateChange('player')"
				>
					Player vs Player
				</button>

				<button
					class="w-55 sm:w-60 h-13 sm:h-15 flex justify-center items-center rounded-lg text-lg sm:text-xl text-yellow-900 bg-amber-100 border-4 border-yellow-800 hover:brightness-85 hover:border-yellow-900 hover:cursor-pointer transition-colors duration-200 shadow-lg hover:shadow-xl"
					@click="handleModeStateChange('computer')"
				>
					Player vs Computer
				</button>
			</div>
		</section>

		<section v-else class="w-full flex flex-col items-center">
			<ChangeLandingPageDisplayComponent
				class="absolute left-[10vw] top-7 sm:top-18.5"
				@click="handleModeStateChange(0)"
			/>

			<h2
				class="text-center text-lg sm:text-xl font-bold mb-10 text-amber-900"
			>
				Player<span v-if="game_mode === 'player'"> 1</span>, choose your
				side:
			</h2>

			<div class="flex flex-col sm:flex-row items-center gap-8">
				<NuxtLink
					:to="
						game_mode === 'player'
							? '/player-vs-player'
							: game_mode === 'computer'
							? '/player-vs-computer'
							: ''
					"
					class="w-45 h-14 flex justify-center items-center rounded-lg text-xl text-white bg-yellow-900 hover:bg-yellow-950 cursor-pointer transition-colors duration-200 shadow-lg hover:shadow-xl"
					@click="handleChooseSymbolClick('nought')"
				>
					Noughts
				</NuxtLink>

				<NuxtLink
					:to="
						game_mode === 'player'
							? '/player-vs-player'
							: game_mode === 'computer'
							? '/player-vs-computer'
							: ''
					"
					class="w-45 h-14 flex justify-center items-center rounded-lg text-xl text-yellow-900 bg-amber-100 border-4 border-yellow-800 hover:brightness-85 hover:border-yellow-900 hover:cursor-pointer transition-colors duration-200 shadow-lg hover:shadow-xl"
					@click="handleChooseSymbolClick('cross')"
				>
					Crosses
				</NuxtLink>
			</div>
		</section>

		<FooterComponent />
	</main>
</template>

<script setup lang="ts">
import useGameState from "~/composables/useGameState";

const { game_mode, player_symbol_map } = useGameState();

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
