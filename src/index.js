'use babel'

const selectxor = {
  config:{
    xorKey:{
      type: 'string',
      default: 'selectxor',
      minimum: 1
    }
  },
  activate: function() {
      atom.commands.add('atom-text-editor','selectxor:encrypt', () => {
        console.log('encrypt');
      });

      atom.commands.add('atom-text-editor','selectxor:decrypt', () => {
        console.log('decrypt');
      });

    }
};

export default selectxor;
