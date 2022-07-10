//adding element to the list
function newElement() {
  var inputValue = document.getElementById("inputfield").value;
  var newTask = document.createTextNode(inputValue);
  var li = document.createElement("li");
  li.appendChild(newTask);

  if (inputValue == "") {
    alert("Please include a Task in order to add");
  } else {
    document.getElementById("myList").appendChild(li);
  }

  var span = document.createElement("SPAN");
  var cls = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(cls);
  li.appendChild(span);

  var clsBtn = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < clsBtn.length; i++) {
    clsBtn[i].onclick = function () {
      let p = this.parentElement;
      p.style.display = "none";
    };
  }
}

//add a close button
var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN");
  var cls = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(cls);
  list[i].appendChild(span);
}

//add a check mark
var check = document.querySelector("ul");
check.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName == "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// close button fucntionalilty
var clsBtn = document.getElementsByClassName("close");
var i;
for (i = 0; i < clsBtn.length; i++) {
  clsBtn[i].onclick = function () {
    var p = this.parentElement;
    p.style.display = "none";
  };
}
