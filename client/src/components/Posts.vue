<template>
  <div class="posts">
    <h1>Журнал исходящих писем</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'addpost' }" class="">Добавить письмо</router-link>
      </div>
      <table>
        <tr>
          <td>Номер</td>
          <td>Дата</td>
          <td width="250">Кому</td>
          <td width="250" align="center">Содержание</td>
          <td width="200" align="center">От кого</td>
        </tr>
        <tr v-for="post in posts">
          <td>{{ post.numberPost }} </td>
          <td>{{ post.datePost }}</td>
          <td>{{ post.forPost }}</td>
          <td>{{ post.soderzhPost }}</td>
          <td>{{ post.fiootprPost }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'editpost', params: { id: post._id } }">Правка</router-link> |
            <a href="#" @click="deletePost(post._id)">Удалить</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      На данный момент нет исходящих писем... Добавить одно? <br /><br />
      <router-link v-bind:to="{ name: 'addpost' }" class="add_post_link">Добавить письмо</router-link>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost (id) {
      const $this = this
      $this.$swal({
        title: 'Вы уверены?',
        text: 'Это действие нельзя будет отменить!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Удалено!'
      }).then(function () {
        PostsService.deletePost(id)
        $this.$router.go({
          path: '/'
        })
      })
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
