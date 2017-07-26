<template>
    <div class="container">
        {{hello}}
        <router-link :to="{name:'book',params:{bookId:123}}">book</router-link> 
    </div>    
</template>
<script>
    
    export default {
        data(){
            return {
                hello:'hello'
            }
        }
    }
</script>