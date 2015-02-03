/* jshint node: true */
'use strict';

var BroccoliPizzazz = require('broccoli-pizzazz');

module.exports = {
  name: 'ember-cli-pizzazz',
  included: function (app) {
    this.app = app;
  },

  liveReloadPath: function () {
    return '/ember-cli-live-reload.js';
  },

  treeForPublic: function (type) {
    return new BroccoliPizzazz(
      this.app.trees.styles,{
        applicationCssPath: this.app.options.outputPaths.app.css.app,
        liveReloadPath: this.liveReloadPath()
      }
    );
  }
};
