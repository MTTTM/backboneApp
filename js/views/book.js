/**
 * Created by Administrator on 2015/12/7.
 */
app.BookView=Backbone.View.extend({
    tagName:"div",
    className:"bookContainer",
    template: _.template($("#bookTemplate").html()),
    events:{
        "click .delete":"deleteBook"
    },
    render:function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    deleteBook:function(){
        this.model.destroy();
        this.remove();
    }
});