import { positions } from "@mui/system";

class RandVar {
    constructor(name, description) {
        this.description = description;
        this.name = name;
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


export class CategoricalVariable extends RandVar {
    constructor(name, description, values, probs) {
        super(name, description);
        if (!(values instanceof Array)) {
            throw TypeError('for a categorival variable ' +
                'values should be an array of possible values')
        }
        if (!(probs instanceof Array)) {
            throw TypeError('for a categorical vairable probs ' +
                'should be an array of possible values')
        }
        if (!(probs.length == values.length)) {
            throw Error('probs and values of a categorical variable ' +
            'should be of the same length, probs = ' + probs + 
            ', values = ' + values)
        }
        this.values = values;
        var probSum = probs.reduce((a,b) => a + b, 0);
        this.probs = probs.map(x => x / probSum);
    }
}