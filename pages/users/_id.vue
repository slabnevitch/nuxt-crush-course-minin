<template>
	<section>
		<h2>{{user.name}}</h2>
		<hr>
		<h5>{{user.email}}</h5>
		
	</section>
</template>

<script>
export default {

	validate({params}) {//получаем поле params из объекта context
		console.log(params)
		//нельзя обратиться k this.$route.params
		return /^\d+$/.test(params.id) //валидируем параметр id, чтлбы были только цифры 
		//если вернет false, страница не загрузится
	},

	asyncData({params}){
		return fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
		  .then(response => response.json())
		  .then(json => ({user: json}))
	},


  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>