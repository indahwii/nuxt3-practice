<template>
  <div>
     <div class="bg-white">
        <header class="relative">
          <nav aria-label="Top">
            <!-- Top navigation -->
            <div class="bg-gray-900">
              <div class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <!-- Currency selector -->
                <form class="hidden lg:block lg:flex-1">
                  <div class="flex">
                    <label for="desktop-currency" class="sr-only">Currency</label>
                    <div class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                      <select id="desktop-currency" name="currency" class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100">
                        <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                        <ChevronDownIcon class="h-5 w-5 text-gray-300" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </form>

                <p class="flex-1 text-center text-sm font-medium text-white lg:flex-none">Get free delivery on orders over $100</p>

                <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Create an account</a>
                  <span class="h-6 w-px bg-gray-600" aria-hidden="true" />
                  <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
                </div>
              </div>
            </div>

            <!-- Secondary navigation -->
            <div class="bg-white">
              <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="border-b border-gray-200">
                  <div class="flex h-16 items-center justify-between">
                    <!-- Logo (lg+) -->
                    <div class="hidden lg:flex lg:items-center">
                      <a href="/">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                      </a>
                    </div>

                    <div class="hidden h-full lg:flex">
                      <!-- Mega menus -->
                      <PopoverGroup class="ml-8">
                        <div class="flex h-full justify-center space-x-8">
                          <Popover class="flex" v-slot="{ open }">
                            <div class="relative flex">
                              <PopoverButton :class="[open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out']">Categories</PopoverButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                              <PopoverPanel class="absolute inset-x-0 top-full z-10 text-gray-500 sm:text-sm">
                                <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                                <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                <div class="relative bg-white">
                                  <div class="mx-auto max-w-7xl px-8">
                                    <div class="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                      <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                        <div>
                                          <p id="desktop-categories-heading" class="font-medium text-gray-900">Categories</p>
                                          <ul role="list" aria-labelledby="desktop-categories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                            <li v-for="item in categories" :key="item" class="flex">
                                              <a :href="`/category?item=${item}`" class="hover:text-gray-800">{{ item }}</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </PopoverPanel>
                            </transition>
                          </Popover>

                          <a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
                           <Menu as="div" class="relative inline-block text-left items-center text-sm font-medium text-gray-700 hover:text-gray-800 mt-[22px]">
                            <div>
                              <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                Sort
                                <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                              </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                              <MenuItems class="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div class="py-1">
                                  <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                                    <a :href="`/product?sort=${option.href}`" :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">{{ option.name }}</a>
                                  </MenuItem>
                                </div>
                              </MenuItems>
                            </transition>
                          </Menu>
                        </div>
                      </PopoverGroup>
                    </div>

                    <!-- Mobile menu and search (lg-) -->
                    <div class="flex flex-1 items-center lg:hidden">
                      <button type="button" class="-ml-2 rounded-md bg-white p-2 text-gray-400" @click="open = true">
                        <span class="sr-only">Open menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                      </button>

                      <!-- Search -->
                      <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Search</span>
                        <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                      </a>
                    </div>

                    <!-- Logo (lg-) -->
                    <a href="#" class="lg:hidden">
                      <span class="sr-only">Your Company</span>
                      <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto" />
                    </a>

                    <div class="flex flex-1 items-center justify-end">
                      <div class="flex items-center lg:ml-8">
                        <div class="flex space-x-8">
                          <div class="hidden lg:flex">
                            <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                              <span class="sr-only">Search</span>
                              <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                            </a>
                          </div>

                          <div class="flex">
                            <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                              <span class="sr-only">Account</span>
                              <UserIcon class="h-6 w-6" aria-hidden="true" />
                            </a>
                          </div>
                        </div>

                        <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                        <div class="flow-root">
                          <a href="#" class="group -m-2 flex items-center p-2">
                            <ShoppingCartIcon class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                            <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                            <span class="sr-only">items in cart, view bag</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, StarIcon } from '@heroicons/vue/20/solid'

const config = useRuntimeConfig()
const { pending, data: categories } = useFetch(`${config.public.apiBase}/products/categories`)

const sortOptions = [
  { name: 'Lowest', href: 'asc', current: false },
  { name: 'Desc', href: 'desc', current: false },
  { name: 'Default', href: '', current: false },
]

const navigation = {
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Product', href: '/product' },
  ],
}
const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}


const open = ref(false)
const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[2])
</script>