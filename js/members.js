Vue.component('read-member',{
 
    template:
    `<div>
         <h5>Nr Vardas Pavarde</h5>
         <p v-for="(name,index) in names" v-on:click="handle(index,$event)">
         {{name.id}}  {{name.name}}  {{name.surname}}
         </p>
         <input type="text" id="input" v-model="newName">
         <input type="text" id="input1" v-model="newSurname">
         <button v-on:click="addName">Add New Record</button>
    </div>    
    `,
    data(){
        return {
          names: [
            {id:''},
            {name:''},
            {surname:''}
          ],
          newName: '',
          newSurname: '',
          newId: ''
          
        }
    },
    created: function() {
        this.setDir()
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
            JSON.stringify({name: this.names[id].id ,table:'members',sep:'sep' })
            )
            .then( response => { console.log(response)
              this.names.splice(id,1);
           
            })
            .catch(function () {
              console.log();
            });
        },
        update(id){
          this.newName=this.dialogBox('Enter new name',this.names[id].name);
          this.newSurname=this.dialogBox('Enter new surname',this.names[id].surname);
          url ='/update';
            axios.post(url, 
                JSON.stringify({id:this.names[id].id ,table:'members', 
                name:this.newName , surname:this.newSurname , create:'OK' })
               )
               .then( response => 
                {console.log(response),
                    this.names[id].name = this.newName,
                    this.names[id].surname = this.newSurname,
                    this.newName = '',
                    this.newSurname = ''
               })
               .catch(function (error) {
                 console.log(error)
               })
        },
        goEmploee(){
          
        },
        setDir(){
            url ='/read';
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
                surname: this.newSurname, create:'OK', table:'users' })
               )
               .then( response => 
                {console.log(response),
                    this.newId = response.data
                    this.names.push( {id:this.newId , name:this.newName, surname:this.newSurname} ),
                    this.newId = '',
                    this.newName = '',
                    this.newSurname = ''
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
