/*
  Translate the provided string to pig latin.
*/

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const lastCon = idx => {
    if (vowels.indexOf(str.charAt(idx)) == -1) {
      return lastCon(idx + 1);
    } else {
      return idx;
    }
  };

  const remainder = str.substr(lastCon(0));
  const ending = `${lastCon(0) === 0 ? 'w' : str.substr(0, lastCon(0))}ay`;

  return remainder + ending;
}

console.log(translatePigLatin('consonant'));
