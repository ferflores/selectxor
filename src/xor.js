'use babel'

export default {
   encrypt: (key, text) => {
      if (!key || !text) {
        throw 'key and text are required';
      }
      return btoa(xor(key, text));
    },
    decrypt: (key, text) => {
       if (!key || !text) {
         throw 'key and text are required';
       }

       text = atob(text);
       return xor(key,text);
     }
}

function xor(key, text){
  let cipher = [];
  const keyLength = key.length;
  for (let i = 0; i < text.length; ++i) {
    cipher.push(String.fromCharCode(key.charCodeAt(i % keyLength)
      ^ text.charCodeAt(i)));
  }

  return cipher.join('');
}
