"use strict";
exports.__esModule = true;
var Sholay1 = {
    Name: 'Sholay',
    cast: ['Amitabh', 'Dhanmendra', 'Hema', 'Jaya'],
    boxOfficeDetails: {
        CountriesReleasedIn: ['India', 'Pakistan'],
        Collection: 50000000,
        status: 'Superhit',
        rating: 5
    },
    addToCollection: function (amount) {
        this.boxOfficeDetails.Collection += amount;
        return this.boxOfficeDetails.Collection;
    }
};
Sholay1.addToCollection(150000);
console.log(Sholay1);
