Vue.component('read-project',{
    template:
    `<div>
         <h5>Nr Pavadinimas</h5>
         <p v-for="(name,id) in names" v-text="name" index=id ></p>
         <input type="text" id="input3" v-model="newName">
         <button v-on:click="addName">Add New Record</button>
    </div>    
    `,
    data(){
        return {
          names: [],
          newName: ''
        }
    },
    created: function() {
        this.setDir()
      },
    methods: {
        goProject(){

        },
        goEmploee(){
          
        },
        setDir(){
            url ='/controller';
            axios.post(url, JSON.stringify({name: 'project'}))
            .then( response => {console.log(response)
            this.names = response.data} )
            .catch(function () {
              console.log();
            });
          },
          addName(){
            this.names.push(this.newName);
            url ='/controller';
            axios.post(url, 
                JSON.stringify({name: this.newName, create:'OK' })
               )
               .then(function (response) {
                 alert(response.data);
               })
               .catch(function (error) {
                 console.log(error);
               });
            this.newName = ''
        },
    }
})
var app = new Vue({
    el: '#proj',
});