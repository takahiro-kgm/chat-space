$(function(){

  function buildHTML(message){
    if ( message.image ) {
      var html =
      `<div class="message-box first">
        <div class="message-box__message-info">
          <div class="message-box__message-info--username">
            ${message.user_name}
          </div>
          <div class="message-box__message-info--date-time">
            ${message.created_at}
          </div>
        </div>
        <div class="message-box__sent-message">
          <p class="message-box__sent-message__body">
            ${message.body}
          </p>
        </div>
        <img src=${message.image} >
      </div>`
      return html;
    } else {
      var html =
       `<div class="message-box first">
          <div class="message-box__message-info">
            <div class="message-box__message-info--username">
              ${message.user_name}
            </div>
            <div class="message-box__message-info--date-time">
              ${message.created_at}
            </div>
          </div>
          <div class="message-box__sent-message">
            <p class="message-box__sent-message__body">
              ${message.body}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__message-list').append(html);
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.send-btn').attr('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});