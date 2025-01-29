export class Property {
    extension;
    zone;
    owner;

    constructor(extension, zone, owner) {
        this.extension = extension;
        this.zone = zone;
        this.owner = owner;
    }

    tax() {
        return  this.extension * this.zone.costForSquareMeter;
    }
}