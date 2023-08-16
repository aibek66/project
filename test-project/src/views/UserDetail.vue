<template>
    <section class="vh-100" style="background-color: #9de2ff;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-md-9 col-lg-7 col-xl-5">
        <div class="card" style="border-radius: 15px;">
          <div class="card-body p-4">
            <div class="d-flex text-black">
              <div class="flex-shrink-0">
                <img :src="userData.avatar"
                  alt="Generic placeholder image" class="img-fluid"
                  style="width: 180px; border-radius: 10px;">
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 style="color: black;" class="mb-1">{{ userData.name }}</h5>
                <p class="mb-2 pb-1" style="color: #2b2a2a;"></p>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                  >
                  <div>
                    <p class="small text-muted mb-1">{{ userData.position }}</p>
                  </div>
                  <div class="px-3">
                    <p class="small text-muted mb-1">${{ userData.salary }}</p>
                  </div>
                </div>
                <div class="d-flex pt-1">
                  <button type="button" class="btn btn-primary flex-grow-1"><RouterLink to="/" style="color: white; text-decoration: none;">Home Page</RouterLink></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import { onActivated,onMounted, ref,computed } from 'vue';
import {useRoute} from 'vue-router'
import {useCounterStore} from '@/stores/counter'


const useCounter = useCounterStore();
const route = useRoute()

const url = "https://64dc5973e64a8525a0f663fb.mockapi.io/users/" + route.params.id.slice(-1);

let userData={}
for (let index = 0; index < useCounter.users.length; index++) {
    if(useCounter.users[index].id == route.params.id.slice(-1)){
        userData = useCounter.users[index];
        break;
    }
}


</script>