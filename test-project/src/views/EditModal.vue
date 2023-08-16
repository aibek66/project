<template>
    
    <div class="edit-modal">
        <div style="width: 100%;" class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
  </div>
  <input v-model="name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
</div>
<div style="width: 100%;" class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Position</span>
  </div>
  <input v-model="position" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
</div>
<div style="width: 100%;" class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
    <span class="input-group-text">0.00</span>
  </div>
  <input v-model="salary" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
        <button @click="$emit('hideEditModal')" type="button" class="btn btn-primary">Close</button>
        <button @click="changeDataUser" type="button" class="btn btn-success">Save</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useCounterStore} from '@/stores/counter'

const useCounter = useCounterStore();

const emit = defineEmits(['hideEditModal'])
const props = defineProps({
    editUser:String
})

let user = {};

for (let index = 0; index < useCounter.users.length; index++) {
    if(useCounter.users[index].id == props.editUser){
        user = useCounter.users[index]
        break
    }
    
}

const name = ref(user.name)
const position = ref(user.position)
const salary = ref(user.salary)
const index = parseInt(props.editUser)-1

const changeDataUser = () => {
    useCounter.users[index].name = name
    useCounter.users[index].position = position
    useCounter.users[index].salary = salary
    emit('hideEditModal')
}


</script>

<style scoped>
.edit-modal{
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: gainsboro;
    border-radius: 20px;
    padding: 30px;
}
.input-group-text{
    color: black;
}
button{
    margin: 10px;
}
</style>