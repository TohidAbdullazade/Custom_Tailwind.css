let body = Array.from(document.body.children);

runEvents();

function runEvents() {
  document.addEventListener("DOMContentLoaded", HTML_CLONE);
}

function HTML_CLONE() {
  body.forEach(() => {
    let clonedNode = document.cloneNode(true);
    let allTags = clonedNode.all;
    console.log(allTags[0]);
  });
}

document.addEventListener("mousemove", (e) => {
  console.log(e);
});
