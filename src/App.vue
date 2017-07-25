<template>
    <div>
        <!-- <input v-model="text" type="text"> -->
        <!-- <div>{{text}}</div> -->
        <router-view></router-view> 
    </div>
</template>

<script>
    export default {
      name: 'App',
      beforeCreated() {
        console.log('beforeCreated')
      },
      created () {
        console.log('created')
      },
      mounted () {
        console.log('mounted')
      },
      updated () {
        console.log('updated')
      },
      data () {
        return {
            text:'hello'
        }
      }
    }
</script>
</script>