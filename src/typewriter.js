const words = ["Welcome to Educationist"];
const words1 = [" Your Gateway to Free Programming Education!"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
let timeoutId;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("text").textContent = currentWord.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i++;
      if (i === words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("text").textContent = currentWord.substring(0, j + 1);
    j++;
    if (j === currentWord.length) {
      isDeleting = true;
    }
  }
  timeoutId = setTimeout(type, 100);
}

let ii = 0;
let jj = 0;
let currentWord1 = "";
let isDeleting1 = false;
let timeoutId1;

function type1() {
  currentWord1 = words1[ii];
  if (isDeleting1) {
    document.getElementById("text2").textContent = currentWord1.substring(0, jj - 1);
    jj--;
    if (jj === 0) {
      isDeleting1 = false;
      ii++;
      if (ii === words1.length) {
        ii = 0;
      }
    }
  } else {
    document.getElementById("text2").textContent = currentWord1.substring(0, jj + 1);
    jj++;
    if (jj === currentWord1.length) {
      isDeleting1 = true;
    }
  }
  timeoutId1 = setTimeout(type1, 100);
}

type();
type1();

// Optionally, you can clear the timeouts when needed
// clearTimeout(timeoutId);
// clearTimeout(timeoutId1);
