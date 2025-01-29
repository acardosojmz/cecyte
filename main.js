import {Zone} from "./zone.js";
import {Person } from "./person.js";
import {Property } from "./property.js";
import {TaxProperty } from "./taxproperty.js";

const ruralZone = new Zone("RUR","Zona Rural",2.0);
const urbanZone = new Zone("URB","Zona Urbana",10.0);
const residentialZone = new Zone("RES","Zona Residencial",25.0);

const jhony =  new Person("Juan Perez",
    new Date("1950-01-01"),
    "H",
    false);

const properties = [
    new Property(100000, ruralZone, jhony),
    new Property(10000, urbanZone, jhony),
    new Property(100, residentialZone, jhony)
];

const taxPropertyForJhony = new TaxProperty("0001",
    new Date(), properties, jhony);

console.log(`TOTAL a pagar: ${taxPropertyForJhony.totalTax()}`)
console.log(`DESCUENTO a pagar: ${taxPropertyForJhony.discount()}`)
console.log(`Impuesto a pagar: ${taxPropertyForJhony.totalTaxWithDiscount()}`)

