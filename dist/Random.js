"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomIntBetween = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
