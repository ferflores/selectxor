'use babel'

import xor from './xor';

const selectxor = {
  config:{
    xorKey:{
      type: 'string',
      default: 'selectxor',
      minimum: 1
    }
  },
  activate: function() {
      var editor = atom.workspace.getActiveTextEditor();
      atom.commands.add('atom-text-editor','selectxor:encrypt', () => {
        var selectedText = editor.getSelectedText();
        if(selectedText && selectedText.length > 0){
          var cryptedText = xor.encrypt(atom.config.get('selectxor.xorKey'), selectedText);
          editor.insertText(cryptedText);
        }
      });

      atom.commands.add('atom-text-editor','selectxor:decrypt', () => {
        var selectedText = editor.getSelectedText();
        if(selectedText && selectedText.length > 0){
          var decryptedText = xor.decrypt(atom.config.get('selectxor.xorKey'), selectedText);
          editor.insertText(decryptedText);
        }
      });

    }
};

export default selectxor;
