var dizhi = 'http://localhost:8000'


var user = {

  login: function(my_name, my_password, callback) {

    $.post(dizhi + '/admin/login', {

        user_name: my_name,

        password: my_password

      },

      function(res) {
        callback(res)
      }
    )
  }

}