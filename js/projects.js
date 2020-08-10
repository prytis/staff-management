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
      dialogBox(header,holder){
        var txt;
        var name = prompt(header, holder);
        if (name == null || name == "") {
          return holder;
        } else {
           return name;
      }
        
      },
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
          this.newName=this.dialogBox('Enter new project name',this.names[id].name);
          url ='/update';
            axios.post(url, 
                JSON.stringify({id:this.names[id].id ,table:'projects', 
                name:this.newName , create:'OK' })
               )
               .then( response => 
                {console.log(response),
                    this.names[id].name = this.newName,
                    this.newName = ''
               })
               .catch(function (error) {
                 console.log(error)
               })
        },
        renderPage(){
          url ='/read';
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