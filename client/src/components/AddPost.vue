
<template>
  <div class="posts">
    <h1>Добавить письмо</h1>
      <div class="form">

        <div>
            <input type="text" name="numberPost" width="600" placeholder="Номер" v-model="numberPost">
        </div>
        <div>
          <input type="date" name="datePost" placeholder="Дата" v-model="datePost">
        </div>
        <div>
          <input type="text" name="forPost" placeholder="Кому" v-model="forPost">
        </div>
        <div>
          <input type="text" name="soderzhPost" placeholder="Содержание" v-model="soderzhPost">
        </div>
        <div> 
          <select v-model="fiootprPost">
            <option disabled value="">От кого</option>
            <option>Иванов П. А.</option>
            <option>Петров Е. В.</option>
            <option>Сидоров О. Ю.</option>
          </select>
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">Записать</button>
        </div>

      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'addpost',
  data () {
    return {
      numberPost: '',
      datePost: '',
      forPost: '',
      soderzhPost: '',
      fiootprPost: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        numberPost: this.numberPost,
        datePost: this.datePost,
        forPost: this.forPost,
        soderzhPost: this.soderzhPost,
        fiootprPost: this.fiootprPost
      })
      this.$swal(
        'Отлично!',
        `Номер вашего сообщения опубликован!`,
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

