Vue.component('read-member',{
  // v-for="task in tasks" :key="task.id" :task="task" @delete="remove"
    template:
    `<div>
         <h5>Nr Vardas Pavarde</h5>
         <p v-for="(name,id) in names" :key="names.id" v-text="name" index=id @delete="remove"></p>
         <input type="text" id="input" v-model="newName">
         <input type="text" id="input" v-model="newSec">
         <button v-on:click="addName">Add New Record</button>
    </div>    
    `,
    data(){
        return {
          names: [],
          newName: '',
          newSec: ''
          
        }
    },
    created: function() {
        this.setDir()
      },
    methods: {
        remove(){

        },
        goEmploee(){
          
        },
        setDir(){
            url ='/controller';
            axios.post(url, JSON.stringify({name: 'member'}))
            .then( response => {console.log(response)
            this.names = response.data} )
            .catch(function () {
              console.log();
            });
          },
          addName(){
            this.names.push('2'+' '+this.newName+
               ' '+this.newSec)
            url ='/controller';
            axios.post(url, 
                JSON.stringify({name: this.newName, surname: this.newSec, create:'OK' })
               )
               .then( function (response) {
                 alert(response.data)
               })
               .catch(function (error) {
                 console.log(error)
               })
            this.newName = ''
            this.newSec = ''
        },
    }
})
var app = new Vue({
    el: '#memb',
});
