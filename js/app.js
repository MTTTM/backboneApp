/**
 * Created by Administrator on 2015/12/7.
 */
var app=app||{};
$(function(){
    var books=[
        {title:'javascript',author:"Douglas Crokfof",releaseDate:"208",keywords:"javascript","keyword":"programming"},
        {title:'javascript',author:"Douglas Crokfof",releaseDate:"208",keywords:"javascript","keyword":"programming"},
        {title:'javascript',author:"Douglas Crokfof",releaseDate:"208",keywords:"javascript","keyword":"programming"},
        {title:'javascript',author:"Douglas Crokfof",releaseDate:"208",keywords:"javascript","keyword":"programming"},
        {title:'javascript',author:"Douglas Crokfof",releaseDate:"208",keywords:"javascript","keyword":"programming"},
        {title:'javascript',author:"Douglas Crokfof",releaseDate:"208",keywords:"javascript","keyword":"programming"}
    ];
    new app.libraryView(books);
});