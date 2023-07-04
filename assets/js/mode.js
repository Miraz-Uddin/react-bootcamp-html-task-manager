(() => {
  document.getElementById("light_id").addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  });
  document.getElementById("dark_id").addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-bs-theme") == "light") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  });
  document.getElementById("year").innerHTML = new Date().getFullYear();
  document.getElementById("company_name").innerHTML = "Md. Miraz Uddin";
})();
$(document).ready(function () {
  v = $("#taskProgress").val();
  $(".percentage").text(v);
  $("#taskProgress").on("input", function () {
    v = $("#taskProgress").val();
    $(".percentage").text(v);
  });
});
