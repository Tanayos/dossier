(function() {
  window.onload = function() {
    var tab = [];
    var test = document.getElementById('conteneur');
    var section = document.getElementById('gauche');
    var head =document.getElementById('head')
    function getPageModule() {
      tab.push(test,section,head);

      for (var i = 0; i < tab.length; i++) {
        console.log(tab[i]);
      }
      console.log(tab);
    }
    getPageModule();
    console.log(getPageModule());


    // var num = tab[1];@
    // var color = tab[1];
    // var bg =
      function styliserModule(num, color, bg) {
        tab[num].style.color = color;
        tab[num].style.background = bg;

      }

    styliserModule(2, "blue", "green");

    function getModuleInfo(num){

        console.log(object = { classe: tab[num].className,
       id : tab[num].id,
       balise : tab[num].tagName,
        dimension: tab[num].getBoundingClientRect()
      });
   }
   getModuleInfo(0)
   getModuleInfo(1)
   getModuleInfo(2)

          }


}());
