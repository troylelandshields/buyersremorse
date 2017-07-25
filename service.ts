
/// <reference path="remorse.ts" />


const remorse = require('./remorse.ts');
const trends = require('./trends.ts');

const summarize = function(product:string): Remorse.ProductSummary {
    return new remorse.ProductSummary(product);
};

module.exports = {
    summarize: summarize
}