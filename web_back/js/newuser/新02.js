var world_dispose = {


  getworld: function(callback) {

    $.get(user_need.world_get, function(res) {
      callback(res)
    })


  }




}