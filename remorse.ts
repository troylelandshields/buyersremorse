
declare namespace Remorse {

    export class ProductSummary {
        constructor(
            public name: string
        ) { }
    }

}

module.exports = {
    ProductSummary: Remorse.ProductSummary
}
