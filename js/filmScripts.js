const filmReco = (films = []) => {
  let ans = true;

  do {
    if (!ans) {
      alert("Daeng!!! Wrong answer!");
    }
    ans = confirm("Do you like watching movies?");
  } while (!ans);

  const favFilm = prompt("Enter your favourite movie");

  if (films.map((f) => f.toUpperCase()).includes(favFilm.toUpperCase())) {
    alert("We know such film :) You've got a nice taste");
  }
};
