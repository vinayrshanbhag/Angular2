// (function(){
//   alert(window.app);
// })(window.app || (window.app={}));

(function(app){
    document.addEventListener('DOMContentLoaded', function(){
        ng.platformBrowserDynamic
          .platformBrowserDynamic()
          .bootstrapModule(app.AppModule);

    });

})(window.app ||(window.app={}));