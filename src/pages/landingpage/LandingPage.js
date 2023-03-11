import {
	Hero,
	ProductCard,
	SearchBar,
	SectionLabel,
	FashionBest,
	DealOfTheDay,
	ReviewCard,
	TabNav,
	CollectionCard
} from '../../components';
import { pngs } from '../../assets';
//Dummy data
const products = [
	{
		header: 'on sale',
		component: <ProductCard productInfo='on sale' />
	},
	{
		header: 'trending',
		component: <ProductCard productInfo='trending products' />
	},
	{
		header: 'hot ',
		component: 'hot products'
	},
	{
		header: 'new',
		component: 'men new'
	}
];

const collections = [
	{
		id: 1,
		image: `${pngs.attire}`
	},
	{
		id: 2,
		image: `${pngs.attire}`
	},
	{
		id: 3,
		image: `${pngs.attire}`
	},
	{
		id: 4,
		image: `${pngs.attire}`
	},
	{
		id: 5,
		image: `${pngs.attire}`
	},
	{
		id: 6,
		image: `${pngs.attire}`
	},
	{
		id: 7,
		image: `${pngs.attire}`
	},
	{
		id: 8,
		image: `${pngs.attire}`
	}
];

const productsByGender = [
	{
		header: 'men',
		component: <ProductCard />
	},
	{
		header: 'women',
		component: <ProductCard productInfo="women's product" />
	}
];

const reviews = [
	{
		displayPhoto: `${pngs.attire}`,
		review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum animi, culpa aliquam quis cum iste quos earum at, nam deleniti molestias eum veritatis saepe enim ut repellat a? Enim',
		username: 'Alison Bergson',
		ratingScore: 4.2
	},
	{
		displayPhoto: `${pngs.attire}`,
		review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum animi, culpa aliquam quis cum iste quos earum at, nam deleniti molestias eum veritatis saepe enim ut repellat a? Enim',
		username: 'Alison Bergson',
		ratingScore: 4.2
	},
	{
		displayPhoto: `${pngs.attire}`,
		review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum animi, culpa aliquam quis cum iste quos earum at, nam deleniti molestias eum veritatis saepe enim ut repellat a? Enim',
		username: 'Alison Bergson',
		ratingScore: 4.2
	},
	{
		displayPhoto: `${pngs.attire}`,
		review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum animi, culpa aliquam quis cum iste quos earum at, nam deleniti molestias eum veritatis saepe enim ut repellat a? Enim',
		username: 'Alison Bergson',
		ratingScore: 4.2
	},
	{
		displayPhoto: `${pngs.attire}`,
		review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum animi, culpa aliquam quis cum iste quos earum at, nam deleniti molestias eum veritatis saepe enim ut repellat a? Enim',
		username: 'Alison Bergson',
		ratingScore: 2.2
	},
	{
		displayPhoto: `${pngs.attire}`,
		review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum animi, culpa aliquam quis cum iste quos earum at, nam deleniti molestias eum veritatis saepe enim ut repellat a? Enim',
		username: 'Alison Bergson',
		ratingScore: 3.2
	},
	{
		displayPhoto: `${pngs.attire}`,
		review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum animi, culpa aliquam quis cum iste quos earum at, nam deleniti molestias eum veritatis saepe enim ut repellat a? Enim',
		username: 'Alison Bergson',
		ratingScore: 3.2
	}
];

function LandingPage() {
	return (
		<div className='w-screen'>
			<div className='w-full md:mb-52'>
				<Hero />
			</div>

			<div className='w-full max-w-5xl mx-auto flex flex-col space-y-4 mb-52 items-center'>
				<SectionLabel title='New collection' />
				<div className='w-full grid grid-cols-4 gap-4'>
					{collections.map((item) => (
						<CollectionCard key={item.id} image={item.image} />
					))}
				</div>
			</div>

			<div className=''>
				<SectionLabel title='Our products' />
				<TabNav tabs={products} />
			</div>

			<div className='row-span-1 w-full mb-52'>
				<SectionLabel title='Our category' />
				<div className='flex gap-2 '>
					<TabNav tabs={productsByGender} />
				</div>
			</div>

			<FashionBest />

			<DealOfTheDay />

			<div className='row-span-1  flex flex-col gap-6'>
				<SectionLabel title='What people say about us' description='lorem lorem go market no bring change' />

				<div className='w-full max-w-6xl mx-auto p-4 flex items-center space-x-4 border overflow-x-scroll hidden-scrollbar'>
					{reviews.map((item, index) => (
						<ReviewCard review={item} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
