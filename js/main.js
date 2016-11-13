(function($){
  var button = $('button'),
      list = $('#list'),
      warning = $('#warning');

  button.on('click', function(e){

      validate($('input[type=text]'));

    });

  function appendLi(value) {

    var li = $('<li class="list-group-item"></li>').text(value);
    list.append(li);
  }

  function validate(field) {

    if ($.trim(field.val()) === '') {

      warning.removeClass('hidden');

    } else {

      warning.addClass('hidden');
      appendLi(field.val());
      field.val('');

    }
  }



})(jQuery)
