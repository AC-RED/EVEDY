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
  },



  logout: function() {

    $.post(dizhi + '/admin/getuser')
  },


  getuser: function() {

    $.get(dizhi + '/admin/getuser',
      function(res) {
        $('#know_name').text(res.data.nickname)
        console.log(res.data.nickname);


        $('.know_img').prop('src', res.data.user_pic)
        console.log(res.data.user_pic);


      }
    )
  }

}