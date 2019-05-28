"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = exports.Requests = exports.Internals = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
var entity_1 = require("./entity");
Object.defineProperty(exports, "Entity", { enumerable: true, get: function () { return entity_1.Entity; } });
var mapper_1 = require("./mapper");
Object.defineProperty(exports, "Mapper", { enumerable: true, get: function () { return mapper_1.Mapper; } });
// Imported aliases.
const Internals = require("./internals");
const Requests = require("./requests");
const Types = require("./types");
/**
 * Internals namespace.
 */
exports.Internals = Internals;
/**
 * Requests namespace.
 */
exports.Requests = Requests;
/**
 * Types namespace.
 */
exports.Types = Types;
//# sourceMappingURL=index.js.map