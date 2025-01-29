import {Zone} from "./zone.js";
import {Person } from "./person.js";
import {Property } from "./property.js";
import {TaxProperty } from "./taxproperty.js";

const ruralZone = new Zone("RUR","Zona Rural",2.0);
const urbanZone = new Zone("URB","Zona Urbana",10.0);
const residentialZone = new Zone("RES","Zona Residencial",25.0);

import promptSync from 'prompt-sync';
const prompt = promptSync();

const  ownerName= prompt('Nombre del dueño: ');


const person =  new Person(ownerName,
    new Date("1950-01-01"),
    "H",
    false);

const properties = [
    new Property(100000, ruralZone, person),
    new Property(10000, urbanZone, person),
    new Property(100, residentialZone, person)
];

const taxPropertyForPerson = new TaxProperty("0001",
    new Date(), properties, person);

console.log(`Total a pagar: ${taxPropertyForPerson.totalTax()}`)
console.log(`Descuento: ${taxPropertyForPerson.discount()}`)
console.log(`${ownerName} debe pagar: ${taxPropertyForPerson.totalTaxWithDiscount()}`)



