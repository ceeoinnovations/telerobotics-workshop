// $(document).ready(function(){
//     activaTab('aaa');
// });

function activateTab(tab){ 
  var someTabTriggerEl = document.querySelector(tab)
  var tab = new bootstrap.Tab(someTabTriggerEl)

  tab.show()
};