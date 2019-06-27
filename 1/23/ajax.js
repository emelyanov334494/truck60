/* Article FructCode.com */
$( document ).ready(function() {
    $("#button").click(
    function(){
      sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
      return false; 
    }
  );
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
          result = $.parseJSON(response);
          $('#result_form').html('Your name: '+result.name+'<br>Your favourite color: : '+result.color+'<br>You are older than 18 years : '+result.howold+'<br>Your favourite time of day : '+result.daytime);
      },
      error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
      }
  });
}