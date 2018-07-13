<template>
  <div class="posts">
    <h1>Edit Post</h1>
      <div class="form">
        <div>
          <input type="date" name="title" placeholder="Дата" v-model="numberPost">
        </div>
        <div>
          <textarea rows="1" cols="5" placeholder="Кому" v-model="description"></textarea>
        </div>
        <div>
          <textarea rows="1" cols="5" placeholder="О чем" v-model="soderzh"></textarea>
        </div>
        <div>
          <textarea rows="1" cols="5" placeholder="От кого" v-model="fiootpr"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="updatePost">Обновить</button>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'editpost',
  data () {
    return {
      numberPost: '',
      datePost: '',
      forPost: '',
      soderzhPost: '',
      fiootprPost: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.numberPost = response.data.numberPost
      this.datePost = response.data.datePost
      this.forPost = response.data.forPost
      this.soderzhPost = response.data.soderzhPost
      this.fiootprPost = response.data.fiootprPost
      // this.$router.push({ name: 'Posts' })
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        numberPost: this.numberPost,
        datePost: this.datePost,
        forPost: this.forPost,
        soderzhPost: this.soderzhPost,
        fiootprPost: this.fiootprPost
      })
      this.$swal(
        'Great!',
        `Your post has been updated!`,
        'success'
      )
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>

