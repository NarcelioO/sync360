import { defineStore } from 'pinia';
import axios from 'axios';

interface User {
    id?: number 
    name: string
    age: string
    image: string
    state:string
    city: string
    neighborhood: string
    street:string
    bio: string

  // Adicione outros campos conforme necessário
}

interface UserState {
  users: User[]
  loading: boolean
  error: string | null
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        users: [] ,
        loading:false,
        error: null as string | null,
    }),
    actions: {
        async fetchUsers() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get<User[]>('http://localhost:8000/api/users/');
                this.users = response.data;
               
            }catch (error) {
                this.error = 'Falha ao buscar usuários';
            }finally{
                this.loading = false;
            }
        },

        async fetchUserById(id: number) {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get<User>(`http://localhost:8000/api/users/${id}/`);
                return await response.data;
            } catch (error) {
                this.error = 'Falha ao buscar usuário';
                throw error; // Re-throw the error for further handling
            } finally {
                this.loading = false;
            }
        },

        async createUser(user: FormData) {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.post<User>('http://localhost:8000/api/users/', user, {
                     headers: { 'Content-Type': 'multipart/form-data' }
                });
                this.users.push(response.data);
                return response.data; 
            } catch (error) {
                this.error = 'Failed to create user';
            } finally {
                this.loading = false;
            }
        },
        
        async updateUser(user:User) {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.put<User>(`http://localhost:8000/api/users/${user.id}/`, user);
    
                const index = this.users.findIndex(u => u.id === user.id);
                if (index !== -1) {
                    this.users[index] = response.data;
                }
            } catch (error) {
                this.error = 'Failed to update user';
            } finally {
                this.loading = false;
            }
        },

        async destroy(id: number) {
            this.loading = true;
            this.error = null;
            try {
                await axios.delete(`http://localhost:8000/api/users/${id}/`);
                this.users = this.users.filter(user => user.id !== id);
            } catch (error) {
                this.error = 'Failed to delete user';
            } finally {
                this.loading = false;
            }
        }
        
    },

})