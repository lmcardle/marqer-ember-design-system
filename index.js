'use strict';

const Funnel    = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'marqer-components',

  treeForStyles: function treeForStyles(tree) {
    let styleTrees = [];

    if (this.app.project.findAddonByName('ember-cli-sass')) {
      styleTrees.push(new Funnel('node_modules/bulma/sass', {
        destDir: 'marqer-components'
      }));
    }

    if (tree) {
      styleTrees.push(tree);
    }

    return mergeTrees(styleTrees, {overwrite: true});
  },

  included: function() {
    this._super.included.apply(this, arguments);
  }
};
