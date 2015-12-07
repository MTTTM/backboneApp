/**
 * Created by Administrator on 2015/12/7.
 */
var app=app||{};
app.Book=Backbone.Model.extend({
    defaults:{
        coverImage:"img/placeholder.jpg",
        title:"No title",
        author:"Unkown",
        releaseDate:"Unkown",
        keywords:"None"
    }
})