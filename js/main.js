$('.ui.dropdown').dropdown();

$(".ui.sidebar").sidebar();

$(".ui.calendar").calendar();

$("#pinfomodal").modal("attach events", "#pinfolink", "show");

$("#secsettmodal").modal("attach events", ".secsettlink", "show");

$(".coupled.modal").modal({
  allowMultiple: false,
});
// attach events to buttons
$("#dlmodal").modal("attach events", "#benfmodal .button");
// show first after link click
$("#benfmodal").modal("attach events", "#benflink", "show");

$("#obankmodal").modal("attach events", "#obankbtnweb", "show");
$("#obankmodal").modal("attach events", "#obankbtnmob", "show");
$("#obankmodal").modal("attach events", "#obankbtntab", "show");

document.getElementById("loginButton").addEventListener("click", function () {
  var username = document.getElementById("uname").value;
  var password = document.getElementById("pword").value;

  if (username === "patrmac55" && password === "FireRocket78#") {
    document.getElementById("loader").style.display = "block";
    setTimeout(function () {
      window.location.href = "dashboard.html";
    }, 5000);
  } else {
    $(".ui.form")
      .form({
        fields: {
          uname: {
            identifier: "uname",
            rules: [
              {
                type: "empty",
                prompt: "Please enter your username",
              },
            ],
          },
          pword: {
            identifier: "pword",
            rules: [
              {
                type: "empty",
                prompt: "Please enter your password",
              },
            ],
          },
        },
      })
      .form("add errors", [
        "The username or password is invalid. Please try again or contact your branch adminstrator for support.",
      ]);
  }
});
