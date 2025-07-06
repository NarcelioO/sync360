<template>
    <div v-if="user" class="p-8 m-auto">
        <a href="/" class="px-4 py-3 bg-blue-700 text-sm font-medium rounded-lg text-white">Inicio</a>

        <div class="max-w-xl mx-auto mb-4 border border-gray-300 rounded-lg shadow-sm p-4">
                
          <form @submit.prevent="submitForm" >
              
              <div class="mb-6">
                  <label for="name" class="block mb-2 text-sm font-medium xt-white">Nome completo</label>
                  <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required v-model="form.name" />
              </div> 
              <div class="mb-6">
                  <label for="age" class="block mb-2 text-sm font-medium xt-white">Idade </label>
                  <input type="text" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required v-model="form.age" />
              </div>
              <div class="mb-6">
                  <label for="city" class="block mb-2 text-sm font-medium xt-white">Cidade</label>
                  <input type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required v-model="form.city" />
              </div>
              <div class="mb-6">
                  <label for="state" class="block mb-2 text-sm font-medium xt-white">Estado</label>
                  <input type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required v-model="form.state" />
              </div>
              <div class="mb-6">
                  <label for="neighborhood" class="block mb-2 text-sm font-medium xt-white">Bairro</label>
                  <input type="text" id="neighborhood" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required v-model="form.neighborhood" />
              </div>
              <div class="mb-6">
                  <label for="street" class="block mb-2 text-sm font-medium xt-white">Rua</label>
                  <input type="text" id="street" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required v-model="form.street"/>
              </div>
              
              <div class="mb-6">
                <label for="bio" class="block mb-2 text-sm font-medium xt-white">Biografia</label>
                <textarea id="bio" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write your thoughts here...">{{ form.bio }}</textarea>
              </div>
              
              
            
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
          </form>
        </div>
       
    </div>
  <div v-else>Carregando...</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../stores/UserStore'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const user = ref<{ id?: number; name: string; age: string; image: string; state?: string; city?: string; neighborhood?: string; street?: string; bio?: string } | null>(null)
const form = ref({ name: '', age: '', image:'', state: '', city: '', neighborhood: '', street:'', bio: '' })

onMounted(async () => {
  const id = Number(route.params.id)
  const data = await userStore.fetchUserById(id)
  if (data) {
    user.value = data
    form.value.name = data.name
    form.value.age = data.age
    form.value.image = data.image || ''
    form.value.state = data.state || ''
    form.value.city = data.city || ''
    form.value.neighborhood = data.neighborhood || ''
    form.value.street = data.street || ''
    form.value.bio = data.bio || ''
  }
})

async function submitForm() {
  if (user.value) {
    await userStore.updateUser({ ...user.value, ...form.value })
    router.push('/')
  }
}
</script>

<style scoped>

</style>