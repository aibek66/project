<template>
    <div class="cover">
        <div class="modals">
            <h3>Are you sure. Do you want to delete user?</h3>
            <button @click="$emit('hideModal')" type="button" class="btn btn-primary">Close</button>
            <button @click="$emit('deleteUser')" type="button" class="btn btn-danger">Delete</button>
        </div>
    </div>
    
</template>

<script setup>
const emit = defineEmits(['deleteUser', 'hideModal'])
</script>

<style scoped>
.modals{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: gainsboro;
    border-radius: 20px;
    padding: 30px;
}
h3{
    color: black;
    margin-bottom: 20px;
}
button{
    margin: 10px;
}
</style>