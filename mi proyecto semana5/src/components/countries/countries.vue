<template>

</template>


import request from './request';

export default {
    data (){
        return{
            data:[],
        }
    },
    methods: {
        async getAllcountries(){
            const response = await fetch(request.getAllcountries);
            this.data = await response,json();
        }
    },
    created(){
        this.getAllcountries();
    }
} 