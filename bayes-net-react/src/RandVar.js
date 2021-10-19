class CategoricalVariable {
    constructor(values, probs) {
        if (!(values instanceof Array)) {
            throw TypeError('values should be an array of possible values')
        }
        if (!(probs instanceof Array)) {
            throw TypeError('probs should be an array of possible values')
        }
        if (!(probs.length == values.length)) {
            throw Error('probs and values should be of the same length')
        }
        this.values = values;
        var probSum = probs.reduce((a,b) => a + b, 0);
        this.probs = probs.map(x => x / probSum);
    }
}