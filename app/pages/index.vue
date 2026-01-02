<template>
	<main class="w-screen min-h-screen flex flex-col items-center my-10 mt-20">
		<h1 class="text-center text-3xl font-bold mb-50">
			Noughts and Crosses
		</h1>
		<section class="w-full flex flex-col items-center">
			<h2 class="text-center text-xl font-bold mb-10">
				Player 1: Choose your side
			</h2>

			<div
				class="flex items-center gap-8 *:w-45 *:h-14 *:flex *:justify-center *:items-center *:rounded-lg *:text-xl *:text-white *:hover:cursor-pointer"
			>
				<NuxtLink
					to="/player-vs-player"
					class="bg-green-800"
					@click="handleButtonClick(1)"
				>
					Noughts
				</NuxtLink>
				<NuxtLink
					to="/player-vs-player"
					class="bg-blue-800"
					@click="handleButtonClick(2)"
				>
					Crosses
				</NuxtLink>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
function handleButtonClick(content_index: number) {}
</script>
