Vue.component('read-msg',{
 
    template:
    `<div>
         
    <p v-for="(name,index) in names" :key="name.id" v-on:click="handle(index,$event)">
        {{name.id}}  {{name.title}}  {{name.body}} 
        </p>
        <input type="text" id="input" v-model="newTitle" placeholder="Title">
        <input type="text" id="input1" v-model="newBody" placeholder="Body">
        <button v-on:click="addName">Send Message</button>
    </div>    
    `,
    data(){
      return {
        names: [
          {id:''},
          {title:''},
          {body:''},
          {user:''}
        ],
        newTitle: '',
        newBody: '',
        newId: '',
        newUser: '',
        url:''
        
      }
  },
  created: function() {
    this.renderMessages()
  },
  mounted: function() {
    this.renderMessages()
  },
  updated: function() {
    this.renderMessages()

  }, 
  methods: {
  
    
    renderMessages(){
    let url ='http://localhost:3000'
        axios.get(url)
        .then( response => {console.log(response)
        this.names = response.data} )
        .catch(function () {
          console.log();
        });
      },
addName(){
        let url ='http://localhost:3000';
        axios.post(url, 
            JSON.stringify({ title: this.newTitle, 
            body:this.newBody, create:'OK' })
           )
           .then( response => 
            {console.log(response),
                this.newId = response.data.id
                this.names.push( 
                  {id:this.newId , title:this.newTitle,
                   body:this.newBody}),
                this.newId = '',
                this.newTitle = '',
                this.newBody = ''
           })
           .catch(function (error) {
             console.log(error)
           })
    }
   

}
})
var app = new Vue({
    el: '#msg',
});
