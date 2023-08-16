

<template>
  <div class="home">
    <h1>{{useCounter.title}}</h1>
    <EditModal v-if="showEditModal" @hideEditModal="hideEditModal" :editUser="userId"/>
    <DeleteModal v-if="showModal" @hideModal="hideModal" @deleteUser="deleteUser" />
    <div class="container">
    <div class="row">
      <div class="col-12">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Full Name</th>
              <th scope="col">Position</th>
              <th scope="col">Salary</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in useCounter.users" @click="routDetailPage(user.id)">
              <!-- <RouterLink :to="'/id'+user.id"> -->
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.position }}</td>
              <td>${{ user.salary }}</td>
              <td>
                <button @click.stop="openEditModal(user.id)" type="button" class="btn btn-warning">Edit</button>
              <button @click.stop="openModel(user.id)" type="button" class="btn btn-danger">Delete</button>
              
              </td>
            <!-- </RouterLink> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</div>
  </div>
</template>

<script setup>
  import {computed, onMounted, ref} from 'vue'
  import {useCounterStore} from '@/stores/counter'
  import DeleteModal from './DeleteModal.vue'
  import EditModal from './EditModal.vue'
import { useRouter } from 'vue-router';

  const useCounter = useCounterStore();
  const router = useRouter();
  const routDetailPage = (id) => {
    router.push('/id'+id)
  }

  useCounter.getUsers(); 


  const showModal = ref(false)
  let selectedId = ""

  const openModel = (id) => {
    showModal.value = true
    selectedId = id
  }

  const hideModal = () =>{
    showModal.value = false
  }

  const deleteUser = () =>{
    hideModal()
    useCounter.deleteUser(selectedId)
  }

  const showEditModal = ref(false)
  let userId = ""

  const hideEditModal = () =>{
    showEditModal.value = false
  }

  const openEditModal = (user) =>{
    showEditModal.value = true
    userId= user
    console.log(userId);
  }


</script>

<style scoped>
tr{
  cursor: pointer;
}

</style>