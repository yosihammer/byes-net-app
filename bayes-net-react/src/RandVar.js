
class RandVar {
    constructor(name, description) {
        this.description = description;
        this.name = name;
        this.params = {};
    }

    get element() {
        return {
            id: this.name,
            type: 'default',
            data: {
                label: this.name
            },
            position: {x : 0, y: 0} 
        }
    }
}

class CategoricalVariable extends RandVar {
    constructor(name, description, valuePairs) {
        super(name, description);
        var probSum = valuePairs.reduce((a,b) => a + b[1], 0);
        this.params.valuePairs = valuePairs.map(x => [x[0], x[1] / probSum]);
    }
}
