function printDevInfo(name, surname, position = "Dev.") {
  const devInfo = document.getElementById("dev-info");

  devInfo.innerHTML = `Author: ${name ?? "Olena"} ${
    surname ?? "Khilchuk"
  } - ${position}`;
}

const alertLonger = (str1, str2) => {
  if (!str1 && !str2) {
    alert("No messages given");
  }

  const longer = str1?.length >= str2?.length ? str1 : str2;
  alert(longer);
};

const changeBackground = (color = "#c9bd6d") => {
  const initialColor = window
    .getComputedStyle(document.body, null)
    .getPropertyValue("background-color");

  document.body.style.backgroundColor = `${color}`;

  setTimeout(() => {
    document.body.style.backgroundColor = `${initialColor}`;
  }, 30000);
};

const makeAllParagraphsItalic = () => {
  const pars = document.querySelectorAll("p");

  for (let p of pars) {
    p.style.fontStyle = "italic";
  }
};

const changeConclusion = (text) => {
  const container = document.getElementById("conclusion");
  container.outerHTML = `<p>${text}</p>`;

  console.log(container.textContent);
};

const logInfo = (id) => {
  var x = document.getElementById(id).firstChild;
  var txt = "";
  txt += "The node name: " + x.nodeName + "\n";
  txt += "The node value: " + x.nodeValue + "\n";
  txt += "The node type: " + x.nodeType;

  console.log(txt);
};

const addSpinner = () => {
  let element = document.createElement("div");
  element.innerHTML = '<div class="lds-heart"><div></div></div>';
  const node = document.createTextNode("spinner ~");

  element.append(node);

  setTimeout(() => {
    element.removeChild(node);
  }, 2000);

  document.getElementById("placeholder").replaceWith(element);
};
