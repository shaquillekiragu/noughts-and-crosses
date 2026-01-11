<template>
	<NuxtLink
		:to="link_url"
		class="w-9 sm:w-12 aspect-square flex justify-center items-center rounded-full bg-slate-300"
	>
		<Icon
			name="material-symbols:chevron-left-rounded"
			class="!w-2/3 !h-2/3"
		/>
	</NuxtLink>
</template>

<script setup lang="ts">
const { link_url } = defineProps({
	link_url: {
		type: String,
		required: true,
	},
});
</script>
