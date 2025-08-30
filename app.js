let $ = document;

let input = $.getElementById("input-password");
let passwordShowingBtn = $.getElementById("password-showing");

passwordShowingBtn.addEventListener("click", () => {
  if (input.getAttribute("type") == "password") {
    input.removeAttribute("type");
  } else {
    input.setAttribute("type", "password");
  }
});
