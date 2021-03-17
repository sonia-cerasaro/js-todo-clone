$(document).ready(function(){

    $('#button').click(function(){
        var inserisci = $('input[name=ListItem]').val();
        $('ul').append('<li>' + inserisci + '</li>');
      });

      $('input[name=ListItem]').keyup(function(e){
        if(e.which == 13){
          $('#button').click();
        }
      });

      $(document).on('click','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');
      });

      $('input').focus(function(){
        $(this).val('');
      });
  });
