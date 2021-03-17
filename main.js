$(document).ready(function(){

    $('#button').click(function(){
        var inserisci = $('input[name=ListItem]').val();
        $('ul').append('<li>' + inserisci + '</li>');
      });

      $('input[name=ListItem]').keypress(function(e){
        var inserisci = $('input[name=ListItem]').val();
        if(e.which == 13 || e.keyCode == 13){
          $('ul').append('<li>' + inserisci + '</li>');
        }
      });

      $(document).on('click','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');
      });

      $('input').focus(function(){
        $(this).val('');
      });
  });
