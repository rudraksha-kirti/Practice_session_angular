class Movie{
    constructor(Name, Cast , Collection ,Status , CountriesReleasedIn){
        this.Name = Name;
        this.Cast = Cast;
        this.BoxOfficeDetails= {
            CountriesReleasedIn :CountriesReleasedIn,
            Collection : Collection,
            Status : Status
        }
    }
    AddCollection (Amount){
        this.BoxOfficeDetails.Collection += Amount;
        return this.BoxOfficeDetails.Collection;
    }
}

const Sholay = new Movie('Sholay' , ['Amitabh' , 'Dhanmendra', 'Hema', 'Jaya'],['India', 'Pakistan'],50000000,'Superhit');
        Sholay.AddCollection(150000);
        console.log((Sholay));