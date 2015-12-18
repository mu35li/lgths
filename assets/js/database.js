  var name="";
  var email="";
  var coming="";
  var formUrl = 'https://docs.google.com/forms/d/1Z13K8mDYDJ3hPVhnekGZ-rFp67B9jIdjEJwaN9lxd4U/formResponse';
window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1G5kKQIBo9YqO_9eW0KvxYhNk3qWN3AjhTrAmQanZhWM/pubhtml?gid=2005829260&single=true';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    console.log(data);
  }

$(document).ready(function() {
  $('#submit').on('click', function() {
    console.log('submitting values');
    name = $('#name').val();
    email = $('#email').val();
    coming = "1";
    submitValues();
  });
  $('#reject').on('click', function() {
    console.log('submitting values');
    name = $('#name').val();
    email = $('#email').val();
    coming = "0";
    submitValues();
  });

});


function submitValues() {
  $.ajax({
    url: formUrl,
    data: {"entry.1141963586" : name, "entry.1243372032" : email, "entry.1204417090": coming},
    type: "POST",
    dataType: "JSON",
    statusCode: {
      0: function (){
        console.log('it worked with 0');
        location.reload();
          },
      200: function (){
          console.log('it worked with 200');
        location.reload();
          //Success Message
            }
    }
  });
}