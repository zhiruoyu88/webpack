<template>
    <div class="book">
        {{book}}  {{$route.params.bookId}}
    </div>
</template>
<script>
    
    export default {
        data(){
            return {
                book:'book'
            }
        },
        mounted(){
            console.log(this.$route)
        }
    }
</script>