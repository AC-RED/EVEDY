var world_dispose = {


  getworld: function(callback) {

    $.get(user_need.world_get,
      function(res) {
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
  },

  world_name_change: function(ids, names, slugs, callback) {
    $.post(user_need.world_change,

      {
        id: ids,
        name: names,
        slug: slugs,

      },
      function(res) {
        callback(res)
      }
    )
  },

  allWorld: function(callback) {
    $.get(user_need.all_world, function(res) {
      callback(res)
    })
  },

  deleteWorld: function(id, callback) {
    $.get(user_need.delete_world, { id: id }, function(res) {
      callback(res)
    })
  },

  editWorld: function(id, title, cover, type, date, content, callback) {
    $.post(user_need.edit_world,

      {

        id: id,
        title: title,
        cover: cover,
        type: type,
        date: date,
        content: content,

      },

      function(res) {
        callback(res)
      }

    )
  },

  theWorld: function(id, callback) {
    $.get(user_need.all_world, { id: id }, function(res) {
      callback(res)
    })
  }
}