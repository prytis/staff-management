Vue.component('read-table',{
    template:
    `<div>
         <p v-for="(name,id) in names" v-text="name" index=id></p>
    </div>    
    `,
    data(){
        return {
           names: []
        }
    },
    created: function() {
        this.setDir()
      },
    methods: {
        setDir(){
            url ='/controller';
            axios.post(url, JSON.stringify({name: 'start'}))
            .then( response => {console.log(response)
            this.names = response.data} )
            .catch(function () {
              console.log();
            });
          },
      
    }
})
var app = new Vue({
    el: '#read',
});
