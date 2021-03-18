$(document).ready(function(){

    $('#button').click(function(){
        var inserisci = $('input').val();
        $('ul').append('<li>' + inserisci + '</li>');
    });

      $('input').keypress(function(e){
        var inserisci = $('input').val();
        if(e.which == 13 || e.keyCode == 13){
          $('ul').append('<li>' + inserisci + '</li>');
        }
      });

      $(document).on('click','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');
      });

});
