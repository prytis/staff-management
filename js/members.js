Vue.component('read-member',{
 
    template:
    `<div>
         <h5>Nr Vardas Pavarde</h5>
         <p v-for="(name,index) in names" v-on:click.prevent="remove(index)">
         {{name.id}}  {{name.name}}  {{name.surname}}
         </p>
         <input type="text" id="input" v-model="newName">
         <input type="text" id="input1" v-model="newSec">
         <button v-on:click="addName">Add New Record</button>
    </div>    
    `,
    data(){
        return {
          names: [
            {id:''},
            {name:''},
            {sec:''}
          ],
          newName: '',
          newSec: '',
          newId: ''
          
        }
    },
    created: function() {
        this.setDir()
      },
    methods: {
        remove(id){
          url ='/delete';
          axios.post(url, 
            JSON.stringify({name: this.names[id].id ,table:'members' })
            )
            .then( response => { console.log(response)
              this.names.splice(id,1);
           
            })
            .catch(function () {
              console.log();
            });
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
                JSON.stringify({name: this.newName, 
                surname: this.newSec, create:'OK', table:'users' })
               )
               .then( response => 
                {console.log(response),
                    this.newId = response.data
                    this.names.push( {id:this.newId , name:this.newName, surname:this.newSec} ),
                    this.newId = '',
                    this.newName = '',
                    this.newSec = ''
               })
               .catch(function (error) {
                 console.log(error)
               })
        }
       

    }
})
var app = new Vue({
    el: '#memb',
});
