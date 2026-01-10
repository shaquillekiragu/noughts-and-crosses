<template>
	<main class="w-screen min-h-screen flex flex-col items-center mt-20">
		<h1 class="text-center text-2xl sm:text-3xl font-bold mb-50">
			Noughts and Crosses
		</h1>

		<section
			v-if="landing_page_display === 0"
			class="w-full flex flex-col items-center"
		>
			<h2 class="text-center text-lg sm:text-xl font-bold mb-10">
				Which game mode do you want to play?
			</h2>

			<div
				class="flex flex-col items-center gap-8 *:w-60 *:h-15 *:flex *:justify-center *:items-center *:rounded-lg *:text-xl *:text-white *:hover:cursor-pointer"
			>
				<button
					class="bg-blue-800"
					@click="handleLandingPageDisplayChange(1)"
				>
					Player vs Player
				</button>

				<button
					class="bg-green-800"
					@click="handleLandingPageDisplayChange(2)"
				>
					Player vs Computer
				</button>
			</div>
		</section>

		<section
			v-else-if="landing_page_display === 1"
			class="w-full flex flex-col items-center"
		>
			<ChangeLandingPageDisplayComponent
				class="absolute left-[10vw] top-15"
				@click="handleLandingPageDisplayChange(0)"
			/>

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

		<section v-else class="w-full flex flex-col items-center">
			<ChangeLandingPageDisplayComponent
				class="absolute left-[10vw] top-15"
				@click="handleLandingPageDisplayChange(0)"
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

const { player_symbol_map } = useGameState();
const landing_page_display = ref<0 | 1 | 2>(0);

function handleLandingPageDisplayChange(index: 0 | 1 | 2) {
	landing_page_display.value = index;
}

function handleChooseSymbolClick(symbol_index: 1 | 2) {
	player_symbol_map.value.player_one = symbol_index;

	player_symbol_map.value.player_two =
		player_symbol_map.value.player_one === 1 ? 2 : 1;
}

onMounted(() => {
	landing_page_display.value = 0;
});
</script>
