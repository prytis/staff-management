Vue.component('read-member',{
  // v-for="task in tasks" :key="task.id" :task="task" @delete="remove"
    template:
    `<div>
         <h5>Nr Vardas Pavarde</h5>
         <p v-for="(name,id) in names" :key="names.id" v-text="name" index=id @delete="remove"></p>
         <input type="text" id="input" v-model="newName">
         <input type="text" id="input1" v-model="newSec">
         <button v-on:click="addName">Add New Record</button>
    </div>    
    `,
    data(){
        return {
          names: [],
          newName: '',
          newSec: '',
          newiD: ''
          
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
            
            url ='/insert';
            axios.post(url, 
                JSON.stringify({name: this.newName, surname: this.newSec, create:'OK', table:'users' })
               )
               .then( function (response) 
                {console.log(response)
                    this.newId = response.data
               })
               .catch(function (error) {
                 console.log(error)
               }),
            this.names.push(this.newId+' '+this.newName+
            ' '+this.newSec),
            this.newName = '',
            this.newSec = '',
            this.newId = ''
        },
    }
})
var app = new Vue({
    el: '#memb',
});
