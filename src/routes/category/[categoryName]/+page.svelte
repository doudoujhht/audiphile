<script lang="ts">
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

<div class="bg-black py-8">
	<p class="text-white text-center uppercase text-3xl">{data.result[0].category}</p>
</div>
