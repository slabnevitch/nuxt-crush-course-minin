<template>
	<section>
		<h1>{{pageTitle}}</h1>
		<!-- <pre>{{$store.getters['users/getUsers']}}</pre> -->
		<ul class="users-list">
			<li v-for="user of users" :key="user.id">
				<a href="#" @click.prevent="$router.push('users/' + user.id )">{{user.name}}</a>
			</li>
		</ul>
	</section>
</template>

<script>
export default {

  name: 'index',

 	async fetch({store}){
  	if(store.getters['users/getUsers'].length === 0){//"['users/getUsers']" -- обращение к геттеру getUsers модуля users
  		// console.log(store)
  	await	store.dispatch('users/loadUsers')
  		//на стороне сервера выполнится action "loadUsers", массив юзеров будет занесен в state
  		// когда произойдет ининциализация данной стр-цы, мы будем иметь доступ до this.$store.getters.getUsers
  	}
  },

  computed: {
  	users(){
  		return this.$store.getters['users/getUsers'];
  	}
  },
  // asyncData({$axios}){//context -- объект, содержащий все поля приложения
  // 	return $axios.$get('https://jsonplaceholder.typicode.com/users')
		//   .then(response => ({users: response}))  //users будет работать совместено с полем дата

		//   // .then(json => ({users: json}))
		//   //в общем, загрузка юзеров и их рендер в шаблон происходит НА СЕРВЕРЕ
		//   //конструкция "({})" - так обозначается объект в стрелочной ф-ции.

		//   // поля объекта, возвращаемые этой ф-цией., будут слиты с полями объекта data () и доступны

  // },

  data () {
    return {
    	pageTitle: "Users page"
    	// users: []
    }
  },
  mounted(){
  	// fetch('https://jsonplaceholder.typicode.com/users')
		 //  .then(response => response.json())
		 //  .then(json => {
		 //  	console.log(json)
		 //  	this.users = json
		 //  })
  	
  }
}
</script>

<style lang="css" scoped>
</style>