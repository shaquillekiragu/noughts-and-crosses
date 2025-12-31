<template>
	<section class="w-2/3 h-2/3">
		<GridSquareComponent v-for="(grid_square, index) in grids" class="" />
	</section>
</template>

<script setup lang="ts">
import type GridSquare from "~/types/grid.ts";

const { grids } = defineProps({
	grids: Array as PropType<GridSquare[]>,
});
</script>
