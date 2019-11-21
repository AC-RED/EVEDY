var user = {

  login: function(my_name, my_password, callback) {

    $.post(usergit.log_in, {

        user_name: my_name,

        password: my_password

      },

      function(res) {
        callback(res)
      }
    )
  },



  logout: function(callback) {

    $.post(usergit.log_out, function(res) {
      callback(res)
    })

  },


  getuser: function(callback) {

    $.get(usergit.get_user,
      function(res) {
        callback(res)
      }
    )
  }

}