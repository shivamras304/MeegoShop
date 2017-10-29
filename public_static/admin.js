$(function() {

  $.ajax({
    url: "/admin",
    type: "GET",
    headers: {
      "get-json-data": "yes"
    },
    success: function(items) {
      for (const item of items) {
        $("#items-list").append(
          `
          <div class="item card">
            <img id="item-img" class="card-img-top" src="${item.image}" alt="">
            <div class="card-body">
              <h5 id="item-title" class="card-title">${item.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">$${item.price}</h6>
              <p id="item-desc" class="card-text">${item.description}</p>
              <a href="#" class="btn btn-outline-danger item-del" data-id="${item.id}">X</a>
            </div>
          </div>
          `
        )
      }

      $(".item-del").on("click", function() {
        var that = this;
        $.ajax({
          url: "/admin/" + that.getAttribute("data-id"),
          type: "DELETE",
          success: function() {
            console.log("Deleted Successfully!");
          }
        })
      })
    }
  })

  $("#add-btn").on("click", function() {
    $("#body").addClass("blur-background");
    $("#form-container").removeClass("hidden");
  })

  $("#close-btn").on("click", function() {
    console.log("hi")
    $("#body").removeClass("blur-background");
    $("#form-container").addClass("hidden");
  })

  $("#close-btn").on("click", function() {
    $("#body").removeClass("blur-background");
    $("#form-container").addClass("hidden");
  })

  $("form#add-item").on("submit", function() {
    $("#body").removeClass("blur-background");
    $("#form-container").addClass("hidden");
  })
})
