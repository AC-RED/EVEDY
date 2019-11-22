var world_dispose = {


  getworld: function(callback) {

    $.get(user_need.world_get, function(res) {
      callback(res)
    })
  },

  worldadd: function(fname, fslug, callback) {
    $.post(user_need.world_add, {


        name: fname,
        slug: fslug

      },
      function(res) {
        callback(res)
      }

    )
  },

  worldremove: function(ids, callback) {
    $.post(user_need.world_remove, { id: ids }, function(res) { callback(res) })
  }


}