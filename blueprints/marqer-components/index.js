/* eslint-env node */
'use strict';

const path = require('path');
const fs   = require('fs');

module.exports = {
  description: '',

  normalizeEntityName() {},

  afterInstall() {
    let stylePath = path.join('app', 'styles');
    let filePath      = path.join(stylePath, 'app.scss');
    let folderNames   = ['utilities', 'base', 'elements', 'components', 'grid', 'layout'];

    let importStatement = folderNames.map(function(folder) {
      return `@import "marqer-components/${folder}/_all";`;
    }).join('\n');

    if (!fs.existsSync(stylePath)) fs.mkdirSync(stylePath);

    if (fs.existsSync(filePath)) {
      this.ui.writeLine(`Added import statement to ${filePath}`);
      return this.insertIntoFile(filePath, importStatement, {});
    } else {
      fs.writeFileSync(filePath, importStatement);
      this.ui.writeLine(`Created ${filePath}`);
    }

    return this.addAddonsToProject({
      packages: [
        {name: 'ember-cli-sass'},
        {name: 'ember-truth-helpers'}
      ]
    }).then(() => {
      return this.addPackagesToProject([
        {name: 'bulma', target: '^0.6.2'}
      ]);
    });
  }
};
