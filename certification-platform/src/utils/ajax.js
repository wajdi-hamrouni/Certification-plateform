console.log("ajax connected")

var request = {

    server: `http://localhost:3000/create`,
  
    create: function(name, successCB, errorCB = null) {
        $.ajax({
            url: request.server,
            type: 'POST',
            data: JSON.stringify({name}),
            contentType: 'application/json',
            success: successCB,
            error: errorCB || function(error) {
              console.error('chatterbox: Failed to fetch messages', error);
            }
          });
    },
  
    readAll: function(successCB, errorCB = null) {
      $.ajax({
        url: request.server,
        type: 'GET',
        data: { order: '-createdAt' },
        contentType: 'application/json',
        success: successCB,
        error: errorCB || function(error) {
          console.error('chatterbox: Failed to fetch messages', error);
        }
      });
    }
  
  };