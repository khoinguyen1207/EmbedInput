document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("lazywiki-container");

  if (container) {
    const form = document.createElement("form");
    form.style.position = "relative";
    form.style.border = "1px solid #C1C7CD";
    form.style.padding = "3px 12px";
    form.style.width = "100%";
    form.style.borderRadius = "6px";
    form.style.display = "flex";
    form.style.alignItems = "center";
    form.style.boxSizing = "border-box";

    const input = document.createElement("input");
    input.type = "url";
    input.id = "lazywiki-url-input";
    input.placeholder = "URL here";
    input.style.width = "100%";
    input.style.paddingRight = "12px";
    input.style.outline = "none";
    input.style.fontSize = "16px";
    input.style.border = "none";

    const button = document.createElement("button");
    button.type = "submit";
    button.style.background = "none";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.flexShrink = "0";

    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon.setAttribute("viewBox", "0 0 24 24");
    svgIcon.setAttribute("fill", "none");
    svgIcon.setAttribute("stroke", "#000000");
    svgIcon.setAttribute("stroke-linecap", "round");
    svgIcon.setAttribute("stroke-linejoin", "round");
    svgIcon.setAttribute("width", "24");
    svgIcon.setAttribute("height", "24");
    svgIcon.style.width = "24px";
    svgIcon.style.height = "24px";
    svgIcon.style.strokeWidth = "2";

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "m3 3 3 9-3 9 19-9Z");
    path1.setAttribute("stroke", "#000000");

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M6 12h16");
    path2.setAttribute("stroke", "#000000");

    svgIcon.appendChild(path1);
    svgIcon.appendChild(path2);

    button.appendChild(svgIcon);

    form.appendChild(input);
    form.appendChild(button);

    form.onsubmit = function (event) {
      event.preventDefault();
      const inputValue = input.value;
      if (inputValue) {
        window.location.href = `https://lazywiki.ai/conversation?link=${inputValue}`;
      }
    };

    container.appendChild(form);
  }
});
