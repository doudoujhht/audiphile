<script>
	import Footer from '../lib/components/footer.svelte';
	import ProductCategory from '../lib/components/product-category.svelte';
	import Product1 from '../lib/components/product1.svelte';
	import Product2 from '../lib/components/product2.svelte';
	import Product3 from '../lib/components/product3.svelte';
	import Separator from '../lib/components/separator.svelte';
	import Story from '../lib/components/story.svelte';
</script>

<div class="bg-hero-mobile h-[650px] w-screen bg-cover">
	<nav class="flex justify-center items-center text-5xl w-full text-white py-10 font-bold">
		<div class="flex w-[95vw] items-center justify-between">
			<ion-icon name="menu" />
			<p class="text-4xl">audiophile</p>
			<ion-icon name="cart-outline" />
		</div>
	</nav>

	<div class=" flex items-center flex-col text-center m-auto px-[10%] text-white pt-24">
		<p class="spaced opacity-50">new product</p>
		<h2 class="pt-5">XX99 mark II Headphones</h2>
		<p class="opacity-75 leading-[25px] tracking-normal font-thin mt-8">
			Experience natural, lifelike audio and exceptional build quality made for the passionate music
			enthusiast.
		</p>
		<button class="button1 px-10 py-5 text-lg mt-10">see product</button>
	</div>
</div>
<Separator size="12" />
<ProductCategory
	image="assets\product-xx99-mark-one-headphones\mobile\preview.png"
	text="headphones"
/>
<Separator size="12" />
<ProductCategory image="assets\product-zx7-speaker\mobile\preview.png" text="speaker" />
<Separator size="12" />
<ProductCategory image="assets\product-yx1-earphones\mobile\preview.png" text="earphones" />
<Separator size="8" />
<Product1 />
<Separator size="2" />
<Product2 />
<Separator size="2" />
<Product3 />
<Separator size="8" />
<Story />
<Separator size="8" />
<Footer />

<style>
</style>
