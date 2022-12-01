const downloadHTMLFile = (title: string, editorHtmlValue: string): void => {
  let ele = document.createElement("a");
  const txt = `${title === "" ? `United` : title}\n\n${editorHtmlValue}\n`;
  ele.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(txt)
  );
  ele.setAttribute("download", `${title}.html`);
  ele.style.display = "none";
  document.body.appendChild(ele);
  ele.click();
  document.body.removeChild(ele);
};

export { downloadHTMLFile };
