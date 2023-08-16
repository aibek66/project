import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id:'counter',
  state:()=>({
    title: 'Users',
    users: [],
    loading: true
  }),
  actions:{
    async getUsers(){
      const res = await fetch("https://64dc5973e64a8525a0f663fb.mockapi.io/users");
      const data = await res.json();

      this.users = data;
    },
    deleteUser(userId){
      for (let index = 0; index < this.users.length; index++) {
        if(userId == this.users[index].id){
          this.users.splice(index,1);
          break;
        }
      }
    }
  }
  
})
