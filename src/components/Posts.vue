<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div class="card m-1" v-for="(post, idx) in postList" :key="idx">
        <img class="card-img-top" :src="post.thumbnail" :alt="post.title">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.previewText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default{
    data(){
      return {
        postList: [],
      }
    },
    created(){
      axios.get("https://vuejs-axios-blog-44ce8-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
        .then(response => {
          let data = response.data;
          console.log(`response.data`, response.data);
          for(let key in data){
            this.postList.push({ ...data[key], id: key})
          }
        })
        .catch(error => console.log(error))
    }
  }
</script>
<style>

  .card {
    width: 300px;
  }
</style>
