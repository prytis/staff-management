Vue.component('read-project',{
    template:
    `<div>
    <h5>Nr Pavadinimas</h5>
    <p v-for="(name,index) in names" v-on:click="handle(index,$event)">
    {{name.id}}  {{name.name}} 
    </p>
    <input type="text" id="input" v-model="newName">
    <button v-on:click="addName">Add New Record</button>
</div>        
    `,
    data(){
        return {
          names: [
            {id:''},
            {name:''}
          ],
          newName: '',
          newId: ''
        }
    },
    created: function() {
        this.renderPage()
      },
    methods: {
      handle(id,e) {
        if (e.shiftKey) this.remove(id)
        else this.update(id)
      },
      remove(id){
        url ='/delete';
        axios.post(url, 
          JSON.stringify({name: this.names[id].id ,table:'projects' })
          )
          .then( response => { console.log(response)
            this.names.splice(id,1);
         
          })
          .catch(function () {
            console.log();
          });
      },
        update(id){
         
          url ='/update';
            axios.post(url, 
                JSON.stringify({id:this.names[id].id ,table:'projects', 
                name:'Tomasass' , create:'OK' })
               )
               .then( response => 
                {console.log(response),
                    this.names[id].name = 'Tomasass'
                    
               })
               .catch(function (error) {
                 console.log(error)
               })
        },
        renderPage(){
          url ='/controller';
          axios.post(url, JSON.stringify({name: 'project'}))
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
                surname: this.newSec, create:'OK', table:'projects' })
               )
               .then( response => 
                {console.log(response),
                    this.newId = response.data
                    this.names.push( {id:this.newId , name:this.newName } ),
                    this.newId = '',
                    this.newName = ''
                    
               })
               .catch(function (error) {
                 console.log(error)
               })
        }
    }
})
var app = new Vue({
    el: '#proj',
});