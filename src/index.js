import { join } from "lodash";

export const anObject = {
  one: "one value",
  two: "two value",
  three: "three value",
};

console.log(anObject);

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
