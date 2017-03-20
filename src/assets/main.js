$.ajax({
    url: 'https://codeschool.pluralsight.com/users/2516180.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
    var list =  response.courses.completed;
    console.log(list[0].badges);
    }
  });
