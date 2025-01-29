export class Person {
    fullName;
    birthDate;
    genre;
    isSingleMother;

    constructor(fullName, birthDate, genre, isSingleMother) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.genre = genre;
        this.isSingleMother = isSingleMother;
    }
    age = () => {
        return new Date().getFullYear() - this.birthDate.getFullYear();
    }

}