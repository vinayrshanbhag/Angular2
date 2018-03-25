(function(app){
    app.BooksComponent = ng.core
                         .Component({
                             selector :'books',
                             template : 'Hello Angular'
                         })
                         .Class({
                             constructor:function(){

                             }
                         });
})(window.app|| (window.app={})); 