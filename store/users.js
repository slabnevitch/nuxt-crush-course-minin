 export const state = () => ({ //здесь state должен быть ф-цией., чтобы избежать мутаций
 	users: []

 })

 export const mutations = {
 	setUsers(state, users){

 		console.log('setUsers called')
 		state.users = users
 	}
 }
 export const actions = {

 	async loadUsers(ctx){
 		console.log('loadUsers called')
 		// здесь мы можем использовать this для обращения к $axios
 		const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
 		// this.$axios.$get('https://jsonplaceholder.typicode.com/users')
		 //  .then(response => {
		 //  	console.log(Array.isArray(response))
		 //  	ctx.commit('setUsers', response)
		 //  })
		 //  .catch((err) => {
		 //  	console.error(err)
		 //  })

		  	ctx.commit('setUsers', users)
 		
 	}
 }
 export const getters = {
 	getUsers(state){return state.users}
 }