$('document').ready(() => {

  let phrases = ['This is phrase #1',
               'Second phrase',
               'This is the third line'];
  let complete = true;

  cursor();
  typePhrase(phrases, 0);
});

function addChar (phrase, callback) {
  let letters = phrase.split('');
  let delay = 0;
  letters.forEach(letter => {
    delay += ((Math.random() * .1) + .1) * 1000;
    setTimeout(() => {
      $('#subtext').append(letter);
    },delay);
  });
  setTimeout(() => {
    callback();
  }, 3000);
}

function remChar (phrase) {
  let back = phrase;
  let letters = phrase.split('');
  let delay = 0;
  letters.forEach((letter,idx) => {
    delay += ((Math.random() * .1) + .05) * 1000;
    setTimeout(() => {
      back = back.substring(0,back.length - 2);
      $('#subtext').text(back);
    },delay);
    if (idx == letters.length - 1) {
      complete = true;
      phrase++;
    }
  });
}

function cursor () {
  setInterval(() => {
    if ($('#cursor').css('visibility') == 'hidden')
      $('#cursor').css('visibility', 'visible');
    else $('#cursor').css('visibility', 'hidden');
  }, 300);
}

// function typePhrase (phrases, counter) {
//   setTimeout(() => {
//     let delay = addChar(phrases[counter]);
//     setTimeout(() => {
//       remChar(phrases[counter], );
//       if (counter < phrases.length)
//         typePhrase(phrases, counter);≠
//     }, delay + 3000);
//   },1000);

  function typePhrase (phrases, counter) {
    setTimeout(() => {
      addChar(phrases[counter], () => {
        setTimeout(() => {
          remChar(phrases[counter]);
          counter++;
          if (counter < phrases.length) {
            typePhrase(phrases, counter);
          }
        },3000);
      });
    },2000);
}
