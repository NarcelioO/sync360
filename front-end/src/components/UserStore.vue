<template>
    <div class="p-4" >
                
          <form @submit.prevent = "submitForm" enctype="multipart/form-data"  class="max-w-xl mx-auto mb-4 border border-gray-300 rounded-lg shadow-sm p-4 space-x-4">
              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-black" for="image">Imagem</label>
                <input class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " aria-describedby="user_avatar_help" id="image" name="image" type="file" @change="onFileChange" >
              </div> 
              <div class="mb-6">
                  <label for="name" class="block mb-2 text-sm font-medium xt-white">Nome completo</label>
                  <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required v-model="form.name" />
              </div> 
              <div class="mb-6">
                  <label for="age" class="block mb-2 text-sm font-medium xt-white">Idade </label>
                  <input type="text" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required  v-model="form.age"/>
              </div>
              <div class="mb-6">
                  <label for="city" class="block mb-2 text-sm font-medium xt-white">Cidade</label>
                  <input type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required  v-model="form.city"/>
              </div>
              <div class="mb-6">
                  <label for="state" class="block mb-2 text-sm font-medium xt-white">Estado</label>
                  <input type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required  v-model="form.state"/>
              </div>
              <div class="mb-6">
                  <label for="neighborhood" class="block mb-2 text-sm font-medium xt-white">Bairro</label>
                  <input type="text" id="neighborhood" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required v-model="form.neighborhood"/>
              </div>
              <div class="mb-6">
                  <label for="street" class="block mb-2 text-sm font-medium xt-white">Rua</label>
                  <input type="text" id="street" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required v-model="form.street"/>
              </div>
              
              <div class="mb-6">
                <label for="message" class="block mb-2 text-sm font-medium xt-white">Biografia</label>
                <textarea id="message" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" v-model="form.bio"></textarea>
              </div>
              
              
            
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
          </form>
        </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/UserStore'

const router = useRouter()
const userStore = useUserStore()
const form = ref<{ 
    id: string, 
    name: string, 
    age: string, 
    image: File | null, 
    state: string, 
    city: string, 
    neighborhood: string, 
    street: string, 
    bio: string 
}>({ 
    id:'', 
    name: '', 
    age: '', 
    image: null, 
    state: '', 
    city:'', 
    neighborhood:'', 
    street:'', 
    bio: '' 
})

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    form.value.image = target.files[0]
  }
}
async function submitForm() {
    try {
        const formData = new FormData()
        for (const key in form.value) {
        if (form.value[key] !== null && form.value[key] !== undefined) {
            formData.append(key, form.value[key])
        }
        }
        const response = await userStore.createUser(formData)
        if (response) {
            router.push('/')
        }
    } catch (error) {
        console.error('Error creating user:', error)
    }
}

</script>

<style scoped>

</style>