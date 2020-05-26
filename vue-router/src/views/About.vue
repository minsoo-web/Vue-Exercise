<template>
  <div>
    This is About Page
    <router-link
      :to="{
      name : 'users',
       params :{
          id :'123',
          name : 'minsoo'
        } }"
    >클릭</router-link>
  </div>
</template>
