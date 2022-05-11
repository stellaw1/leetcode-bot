<template>
  <div class="navbar border-solid border border-gray-200">
    <div class="flex-1">
      <div class="navbar-start">
        <img alt="LeetCode logo" src="../assets/LeetCode.png" class="h-8 w-8">
      </div>
      <router-link to="/">
          <a class="btn btn-ghost normal-case text-xl">LeetCode Bot</a>
      </router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <router-link to="Add">
          <li><a>Add</a></li>
        </router-link>
        <router-link to="View">
          <li><a>View</a></li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
