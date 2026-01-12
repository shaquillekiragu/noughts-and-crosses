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
				<ChooseModeButtonComponent
					text="Player vs Player"
					:is_dark_button="true"
					@click="handleModeStateChange('player')"
				/>

				<ChooseModeButtonComponent
					text="Player vs Computer"
					:is_dark_button="false"
					@click="handleModeStateChange('computer')"
				/>
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
				<ChooseSymbolButtonComponent
					:game_mode="game_mode"
					text="Noughts"
					:is_dark_button="true"
					@click="handleChooseSymbolClick('nought')"
				/>

				<ChooseSymbolButtonComponent
					:game_mode="game_mode"
					text="Crosses"
					:is_dark_button="false"
					@click="handleChooseSymbolClick('cross')"
				/>
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
