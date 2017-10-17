/* Structure.js -- Transforms raw style information into a structure object
 *
 * Copyright (C) 2016 Michael Seibt
 *
 * With contributions from: -
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

'use strict';

var Entity = require('./Entity');

var Layouts = function(raw) {
  // Call parent constructor
  Entity.call(this, raw);

  // Set structure-specific entity properties
  this.type = "Layouts";
  this.fillable = ['layouts', 'section', 'description', 'modifiers', 'markup', 'flag', 'deprecated','script'];

  // Validate the raw input data for common mistakes
  if (!this.validate()) return {};

  return {
    name: this.getName(),
    type: 'layouts',
    descriptor: raw.descriptor,
    section: 'Layouts > ' + this.getSection(),
    description: raw.annotations.description,
    modifiers: this.getModifiers(),
    markup: raw.annotations.markup,
    script: raw.annotations.script || false,
    deprecated: raw.annotations.deprecated,
    flags: this.getFlags(),
    location: 'layouts.html',
    hash: this.hash()
  };

};

Layouts.prototype = Object.create(Entity.prototype);

Layouts.prototype.getName = function() {
  if(this.raw.annotations.layouts === true) {
    this.raw.annotations.layouts = "Unnamed";
  }
  return this.raw.annotations.layouts;
};

// TODO: Remove code duplication
Layouts.prototype.getFlags = function() {
  var raw_flags = this.raw.annotations.flag || [];
  var flags = {};
  if(raw_flags.indexOf('full-width') !== -1) {
    flags.fullWidth = true;
  }
  if(raw_flags.indexOf('inline') !== -1) {
    flags.inline = true;
  }
  return flags;
};


module.exports = Layouts;
