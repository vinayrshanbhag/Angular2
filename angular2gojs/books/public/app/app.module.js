(function(app){
    app.AppModule =
       ng.core.NgModule({
           imports : [
               ng.platformBrowser.BrowserModule,
               ng.http.HttpModule,
               ng.forms.FormsModule
           ],
           declarations:[
               app.BooksComponent
           ],
           providers :[],
           bootstrap:[app.BooksComponent]
       }).Class({
           constructor:function(){}
       });
})(window.app|| (window.app={}));