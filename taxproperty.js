import MonthEnum from 'month-enum';

export class TaxProperty {
    folio;
    paymentDate;
    properties;
    owner;
    constructor(folio, paymentDate, properties, owner) {
        this.folio = folio;
        this.paymentDate = paymentDate;
        this.properties = properties;
        this.owner = owner;
    }

    totalTax = () => {
        return this.properties
            .filter(property => this.owner === property.owner)
            .map(property => property.tax())
            .reduce((sum, tax) => sum + tax, 0);
    }

    discount = () => {
        const SEVENTY_YEARS = 70;
        const total = this.totalTax();
        let discount = 0;
        if (this.owner.getAge() >= SEVENTY_YEARS || this.owner.isSingleMother){
            if (this.paymentDate.getMonth() <= MonthEnum.February)
                discount = total * 0.70;
            else {
                discount = total * 0.50;
            }
        }
        else if (this.paymentDate.month<=MonthEnum.February ){
            discount = total * 0.40
        }
        return discount;
    };
    totalTaxWithDiscount = () => this.totalTax() - this.discount();
}