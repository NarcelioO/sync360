<script setup lang="ts">

import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/UserStore'

const userStore = useUserStore()
const { users, loading, error } = storeToRefs(userStore)

onMounted(() => {
  userStore.fetchUsers()
})

const excluirUsuario = async (id: number) => {
  await userStore.destroy(id) // Refresh the list after deletion
}


</script>

<template>
  <main class=" w-full h-full p-8">
    <div>
    
    <div v-if="loading">Carregando...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else class=" flex flex-wrap  justify-center gap-4">
      

   

      <li v-for="user in users" :key="user.id">
       
           <div class="w-full max-w-xs min-w-xs bg-white border border-gray-300 rounded-lg shadow-sm ">
            <div class="flex flex-col items-center p-8">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="user.image" alt=""/>
                <h5 class="mb-1 text-md font-medium text-black ">{{ user.name }}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400"> Idade: {{user.age}}</span>
                <div class="flex mt-4 md:mt-6">
                  <router-link :to="`/users/${user.id}`">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visualizar</a>
                  </router-link>
                  <button @click="excluirUsuario(user.id!)" class="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-2">Excluir</button>
                    
                  
                </div>
            </div>
          </div>
         
        
  
      </li>
    </ul>
  </div>
  </main>
</template>
