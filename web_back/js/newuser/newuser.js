var dizhi = 'http://localhost:8000/'


var user = {

  login: function(my_name, my_password, callback) {

    $.post(dizhi + 'admin/login', {

        user_name: my_name,

        password: my_password

      },

      function(res) {
        callback(res)
      }
    )
  },



  logout: function(callback) {

    $.post(dizhi + 'admin/logout', function(res) {
      callback(res)
    })

  },


  getuser: function(callback) {

    $.get(dizhi + 'admin/getuser',
      function(res) {
        callback(res)
      }
    )
  }

}