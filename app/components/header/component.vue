<template>
	<section
		class="w-screen h-[10vh] fixed top-0 flex justify-end items-center"
	>
		<p class="mr-[15vw] text-sm sm:text-base lg:text-lg text-blue-600">
			Player {{ current_player }}'s turn
		</p>
	</section>
</template>

<script setup lang="ts">
import useGameState from "~/composables/useGameState";

const { current_player } = useGameState();
</script>
