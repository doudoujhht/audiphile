<script lang="ts">
	export let image: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
	export let name: string;
	export let description: string;
	export let isNew: boolean;
</script>

<div class="w-[90vw] m-auto text-center text-black felx flex-col">
	<div>
		<img
			src={`.${image.mobile}`}
			alt=""
			srcset={`.${image.mobile} 624w, .${image.tablet} 768w, .${image.desktop} 1440w`}
			sizes="(max-width: 500px) 90vw,(max-width: 1443px) 45vw, 700px"
			class="w-full"
		/>
	</div>
	{#if isNew}
		<p class="spaced text-primary mt-8">new product</p>
	{/if}
	<h3 class="mt-8">{name}</h3>
	<p class="opacity-50 mt-8">{description}</p>
	<button class="button1 px-8 py-4 mt-8">see product</button>
</div>

<style>
	img {
		clip-path: inset(0px 0px);
	}
</style>
