<template>
	<section
		class="grid grid-cols-3 w-3/4 h-3/4 sm:w-2/3 sm:h-2/3 md:w-3/5 md:h-3/5 lg:w-1/2 lg:h-1/2 xl:w-2/5 xl:h-2/5 2xl:w-1/3 2xl:h-1/3"
	>
		<GridSquareComponent
			v-for="(grid_square, index) in grids"
			:key="index"
			:grid_square="grid_square"
			:index="index"
		/>
	</section>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type GridSquare from "~/types/grid.ts";

const { grids } = defineProps({
	grids: Array as PropType<GridSquare[]>,
});
</script>
