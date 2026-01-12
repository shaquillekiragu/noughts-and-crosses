<template>
	<section
		class="w-screen h-[10vh] fixed top-0 flex justify-end items-center"
	>
		<p
			class="mr-[15vw] text-sm sm:text-base lg:text-lg text-amber-900 font-semibold drop-shadow-sm"
		>
			{{ current_player_message }}
		</p>
	</section>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const { current_player, game_mode } = defineProps({
	current_player: {
		type: Number as PropType<1 | 2>,
		required: true,
	},
	game_mode: {
		type: [Number, String] as PropType<0 | "player" | "computer">,
		required: true,
	},
});

let current_player_message = "";

if (game_mode === "player") {
	current_player_message = `Player ${current_player}'s turn`;
} else if (game_mode === "computer") {
	current_player_message =
		current_player === 1 ? "Player's turn" : "Computer's turn";
}
</script>
