<script setup lang="ts">



</script>

<template>
  <div class="bg-white">
   <main>
      <!-- Category section -->
      <section aria-labelledby="category-heading" class="bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="sm:flex sm:items-baseline sm:justify-between">
            <h2 id="category-heading" class="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
            <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg" alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee." class="object-cover object-center group-hover:opacity-75" />
              <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div class="flex items-end p-6">
                <div>
                  <h3 class="font-semibold text-white">
                    <a href="#">
                      <span class="absolute inset-0" />
                      New Arrivals
                    </a>
                  </h3>
                  <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
                </div>
              </div>
            </div>
            <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters." class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
              <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
              <div class="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 class="font-semibold text-white">
                    <a href="#">
                      <span class="absolute inset-0" />
                      Accessories
                    </a>
                  </h3>
                  <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
                </div>
              </div>
            </div>
            <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk." class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
              <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
              <div class="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 class="font-semibold text-white">
                    <a href="#">
                      <span class="absolute inset-0" />
                      Workspace
                    </a>
                  </h3>
                  <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 sm:hidden">
            <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Featured section -->
      <section aria-labelledby="cause-heading">
        <div class="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          <div class="absolute inset-0 overflow-hidden">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg" alt="" class="h-full w-full object-cover object-center" />
          </div>
          <div aria-hidden="true" class="absolute inset-0 bg-gray-900 bg-opacity-50" />
          <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 id="cause-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Long-term thinking</h2>
            <p class="mt-3 text-xl text-white">We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the universe.</p>
            <a href="#" class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Read our story</a>
          </div>
        </div>
      </section>

      <!-- Favorites section -->
      <section aria-labelledby="favorites-heading">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="sm:flex sm:items-baseline sm:justify-between">
            <h2 id="favorites-heading" class="text-2xl font-bold tracking-tight text-gray-900">Our Favorites</h2>
            <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
            <div v-for="favorite in favorites" :key="favorite.id" class="group relative">
              <div class="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                <img :src="favorite.imageSrc" :alt="favorite.imageAlt" class="h-full w-full object-cover object-center" />
              </div>
              <h3 class="mt-4 text-base font-semibold text-gray-900">
                <a :href="favorite.href">
                  <span class="absolute inset-0" />
                  {{ favorite.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ favorite.price }}</p>
            </div>
          </div>

          <div class="mt-6 sm:hidden">
            <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA section -->
      <section aria-labelledby="sale-heading">
        <div class="overflow-hidden pt-32 sm:pt-14">
          <div class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="relative pb-16 pt-48 sm:pb-24">
                <div>
                  <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Final Stock.
                    <br />
                    Up to 50% off.
                  </h2>
                  <div class="mt-6 text-base">
                    <a href="#" class="font-semibold text-white">
                      Shop the sale
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>

                <div class="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                  <div class="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div class="flex-shrink-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="" />
                      </div>

                      <div class="mt-6 flex-shrink-0 sm:mt-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="" />
                      </div>
                    </div>
                    <div class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div class="flex-shrink-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg" alt="" />
                      </div>

                      <div class="mt-6 flex-shrink-0 sm:mt-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg" alt="" />
                      </div>
                    </div>
                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div class="flex-shrink-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="" />
                      </div>

                      <div class="mt-6 flex-shrink-0 sm:mt-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
