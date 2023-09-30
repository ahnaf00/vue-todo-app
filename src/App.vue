<script setup>
import { onMounted } from 'vue';
import { useTodoStore } from './stores/todo';
const todoStore = useTodoStore();

onMounted(()=>{
  todoStore.getAllTodos()
})

</script>

<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-12">
        <div class="card bg-purple-500">

          <div class="card-body">
              <h4 class="card-title text-center"> Task List</h4>

              <div class="row mb-3">

                <form action="">
                  <div class="col-md-12">
                    <label for="" class="form-label">
                    <span v-if="!todoStore.isEdit">Add New Task</span> 
                    <span v-else>Update Task</span> 
                    
                    </label>
                    <input type="text" class="form-control" v-model="todoStore.todoForm.title">
                  </div>

                  <div class="mt-3" v-if="!todoStore.isEdit">
                    <input type="button" class="btn btn-success" value="Add Task" @click.prevent="todoStore.createTodo" >
                  </div>
                  <div class="mt-3"  v-else>
                    <input type="button" class="btn btn-success" value="Update Task" @click.prevent="todoStore.updateTodo(todoStore.editID)">
                  </div>


                </form>

              </div>

          </div>

          <div class="card-body">
            <h4 class="text-danger">Tasks</h4>
            
            <ul class="list-group">
              
              <li class="list-group-item d-flex justify-content-between align-items-center" v-for="task in todoStore.todos" :key="task.id">
                <div class="" >
                  <input type="checkbox" @click="todoStore.toggleCheckbox(task.id)" v-model="todoStore.todoForm.isChecked" class="form-check-input me-2">
                  <span :class="todoStore.todoForm.completed ? 'text-decoration-line-through':'' ">{{ task.title }}</span>
                </div>
                
                
                <div class="">
                  <button class="btn" @click.prevent="todoStore.getTodo(task.id)">
                    <i class="fa-solid fa-edit"></i>
                  </button>
                  <button class="btn" @click.prevent="todoStore.deleteTodo(task.id)">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>


              </li>
            </ul>
          
          </div>


        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>