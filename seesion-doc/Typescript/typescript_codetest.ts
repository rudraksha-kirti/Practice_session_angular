interface Movie1 {
    Name: string;
    cast: string[];
    boxOfficeDetails: {
        CountriesReleasedIn: string[];
        Collection: number;
        status:  'Superhit' | 'Hit' | 'Avg' | 'Flop' ,
        rating: 1 | 2 | 4 | 5
    },
    addToCollection: (amount: number) => number
}
const Sholay1 : Movie1 = {
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

}
Sholay1.addToCollection(150000);
console.log(Sholay1);
export { }