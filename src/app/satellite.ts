export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    number: number;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning() {
        if(this.type.toLowerCase() === 'space debris') {
            return true;
        }
        return false;
    }

    zebraStripes() {
        if(this.number % 2 === 0) {
            return true;
        }
        return false;
    }

}
