import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useTodoStore = defineStore({
  id:'counter',
  state:()=>({
    todos: [],
    todoForm:{
      title:null,
      userID:1,
      completed:null
    },
    editID:0,
    isEdit: false
  }),
  getters:{
      doubleCount: (state)=>state.count*2
  },
  actions:{
    getAllTodos()
    {
      const {data} = axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res)=>{
        this.todos = res.data
        
      })
    },

    createTodo()
    {
      const {data} = axios.post("https://jsonplaceholder.typicode.com/todos", this.todoForm)
      .then((res)=>{
        this.todos.push(res.data)
        this.todos.reverse()
        this.todoForm.title = null
      })
      // this.todos.push(data)
      // console.log(data);
    },

    deleteTodo(id)
    {
      const value = axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
        console.log(res);

        this.todos = this.todos.filter((todo)=>{
          return todo.id != id
        })
      })

    },

    getTodo(id)
    {
      const {data} = axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
        // console.log(res.data);
        this.todoForm.title     = res.data.title,
        this.todoForm.userID    = res.data.userId,
        this.todoForm.completed = res.data.completed,
        this.isEdit = true,
        this.editID = id
      })
    },

    updateTodo(id)
    {
      const {data} = axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, this.todoForm).then((res)=>{
        console.log(res.data);
        this.todos.push(res.data);
        this.todos.reverse()
        this.todoForm.title = null
        this.isEdit = false
      })
    },
    updateTodo(id)
    {
      const {data} = axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, this.todoForm).then((res)=>{
        console.log(res.data);
        this.todoForm.completed = true
      })
    },
  }
  
})
