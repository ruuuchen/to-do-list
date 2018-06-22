var todos=[
  {name: "Lunch with Jenny",done: true},
  {name: "Get fruits",done: false},
  {name: "Call Mom",done: false}];

var vm=new Vue({
  el: "#todolist",
  data: {
    items: todos,
    newitem: "",
    status: false
  },
  computed: {
    array: function(){
      if (this.status==false) {
        return this.items;
      }
      var sortedarray=[];
      var donearray=this.items.filter(function(item){
        return item.done;
      });
      var undoarray=this.items.filter(function(item){
        return !item.done;
      });
      sortedarray=[...undoarray, ...donearray];
      return sortedarray;  
    }
  },
  methods: {
    remove: function(id,item){
      this.items.splice(id,1);
    },
    add: function(e){
      todos.push({name: e,done: false});
      this.newitem="";
    },
    check: function(item){
      item.done=!item.done;  
    },
    toogle: function() {
      this.status=!this.status;
      
    }
  }
});