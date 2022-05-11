

<template>
  <div>

    <!-- NavBar / Header -->
    <div class="navbar flex flex-row md:mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="navbar-start">
        <router-link to="/" class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400">
          <div className="hidden sm:inline w-22 h-22 md:p-2">
            <img alt="Vue logo" src="../assets/logo.png" class="h-8">
          </div>
        </router-link>
      </div>

      <!-- Nav Links -->
      <div className="hidden md:inline md:navbar-center">
        <div className="flex items-stretch">
          <router-link to="/Add">
            <a className="btn btn-ghost btn-sm rounded-btn">
              Add
            </a>
          </router-link>
          <router-link to="/View">
            <a className="btn btn-ghost btn-sm rounded-btn">
              View
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
