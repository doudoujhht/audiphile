<script lang="ts">
	export let image: string;
	export let text: string;
	export let textButton = 'shop';
</script>

<div
	class="text-center bg-secondary-light flex flex-col items-center w-[90vw] h-[230px] m-auto rounded-lg"
>
	<div id="product" class="flex flex-col items-center -m-10">
		<img src={image} alt="" class="w-1/3" />
		<div id="blur" />
	</div>
	<h3 class=" text-black">{text}</h3>
	<button class="flex gap-2 my-7">
		<span>{textButton}</span>
		<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2" />
		</svg>
	</button>
</div>

<style>
	button {
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 18px;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: #000000;
		mix-blend-mode: normal;
		opacity: 0.5;
	}
	#product {
		transform: translateY(-35%);
	}
	#blur {
		width: 95px;
		height: 14px;
		background: #000000;
		filter: blur(21.7463px);
	}
</style>
