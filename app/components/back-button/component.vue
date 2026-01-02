<template>
	<NuxtLink
		:to="link_url"
		class="w-10 sm:w-12 aspect-square flex justify-center items-center rounded-full bg-slate-300"
	>
		<Icon
			name="material-symbols:chevron-left-rounded"
			class="!w-2/3 !h-2/3"
		/>
	</NuxtLink>
</template>

<script setup lang="">
const { link_url } = defineProps({
	link_url: String,
});
</script>
