<script setup>

</script>

<template>


  <div class="bg-white w-full">
    <div>
      <a href="/"  target="_blank">
        <img src="./assets/logo.png" class="text-center mx-auto py-8 " alt="Borocamp logo" />
      </a>
    </div>
    <div class="flex flex-row p-4 mx-auto  w-100">
      <div class="basis-64 px-4">
        <router-link to="/" class="">
          <span class=" text-amber-600 text-3xl hover:text-amber-800 font-semibold">Home</span>
        </router-link>
      </div>
      <div class="basis-64 px-4">
        <router-link to="/about" class="">
          <span class=" text-amber-600 text-3xl hover:text-amber-800 font-semibold">About</span>
        </router-link>
      </div>
      <div class="basis-64 px-4">
        <router-link to="/contacts" class="">
          <span class=" text-amber-600 text-3xl hover:text-amber-800 font-semibold">Contacts</span>
        </router-link>
      </div>

    </div>
    <router-view />
  </div>
</template>
