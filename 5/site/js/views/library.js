var app=app||{};
app.libraryView =Backbone.View.extend({
    el:"#books",
    initialize:function(initialBooks){
        this.collection=new  app.Library(initialBooks);
        this.render();
        this.listenTo(this.collection,"add",this.renderBook);
        this.listenTo(this.collection,"reset",this.renderBook);
        this.collection.fetch();
    },
    events:{
        "click #add":"addBook"
    },
    render:function(){
        this.collection.each(function(item){
            this.renderBook(item);
        },this)
    },
    renderBook:function(item){
        var bookView=new app.BookView({model:item});
        this.$el.append(bookView.render().el);

    },
    addBook:function(e){
        e.preventDefault();
        var formData={};
        $("#addBook div").children("input").each(function(i,el){
            var elValue=$(el).val();
            console.log($("#coverImage").val()=="");
            if(elValue!==""){//
                formData[el.id]=elValue;
                console.log(el.id)
            }

        });
        //this.collection.save(new app.Book(formData));
        this.collection.create(new app.Book(formData));//保存到缓存，create会触发add
        //app.Book.save(formData);
    }
});