<script lang="ts">
	import Footer from '../../../lib/components/footer.svelte';
	import ProductCategory from '../../../lib/components/product-category.svelte';
	import ProductPresentation from '../../../lib/components/productPresentation.svelte';
	import Separator from '../../../lib/components/separator.svelte';
	import Story from '../../../lib/components/story.svelte';

	export let data;
	type dataType = {
		result: {
			id: 1;
			slug: string;
			name: string;
			image: {
				mobile: string;
				tablet: string;
				desktop: string;
			};
			category: string;
			categoryImage: {
				mobile: string;
				tablet: string;
				desktop: string;
			};
			new: boolean;
			price: number;
			description: string;
			features: string;
			includes: {
				quantity: number;
				item: string;
			}[];
			gallery: {
				[key: string]: {
					mobile: string;
					tablet: string;
					desktop: string;
				};
			}[];
			others: {
				slug: string;
				name: string;
				image: {
					mobile: string;
					tablet: string;
					desktop: string;
				};
			}[];
		}[];
	};
	let usableData = data as dataType;
	console.log(usableData);
</script>

<div class="">
	<p class="text-white text-center uppercase text-3xl py-10 bg-black">{data.result[0].category}</p>

	<div class="w-screen bg-white mt-16 flex flex-col gap-5">
		{#each usableData.result as item}
			<ProductPresentation {...item} isNew={item.new} />
			<Separator />
		{/each}
	</div>
	<ProductCategory
		image="..\assets\product-xx99-mark-one-headphones\mobile\preview.png"
		text="headphones"
	/>
	<Separator size="12" />
	<ProductCategory image="..\assets\product-zx7-speaker\mobile\preview.png" text="speaker" />
	<Separator size="12" />
	<ProductCategory image="..\assets\product-yx1-earphones\mobile\preview.png" text="earphones" />
	<Separator/>

	<Story image="..\assets\shared\mobile\image-best-gear.jpg" />
</div>
<Separator />

<Footer />
