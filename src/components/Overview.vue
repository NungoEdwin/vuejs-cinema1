<template>
<movie-list v-bind:Genre="genre" v-bind:Time="time"></movie-list>
</template>
<script>
import "../style.scss"
import MovieList from './MovieList.vue';
import MovieFilter from './MovieFilter.vue';
export default{
components:{
MovieList,MovieFilter
}

}</script>
