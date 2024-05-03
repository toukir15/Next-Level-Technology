{
    // generic with interface 
    //
    interface Developer<T, X = null> {
        name: string;
        laptop: {
            brand: string;
            model: string;
            releaseDate: number;
        }
        watch: T;
        bike?: X;
    }

    interface OliviaWatch {
        brand: string,
        price: number,
    }

    interface TVSBike {
        brand: string,
        color: string,
    }

    const poorDeveloper: Developer<OliviaWatch, TVSBike> = {
        name: 'Toukir',
        laptop: {
            brand: "hp",
            model: "elite book",
            releaseDate: 2020,
        },
        watch: {
            brand: "Olivia",
            price: 300,
        },
        bike: {
            brand: "TVS",
            color: "blue",
        }
    }

    interface AppleWatch {
        brand: string,
        price: number,
        heartTrack: boolean,
        sleepTrack: boolean,
    }

    const richDeveloper: Developer<AppleWatch> = {
        name: 'Toukir',
        laptop: {
            brand: "hp",
            model: "elite book",
            releaseDate: 2020,
        },
        watch: {
            brand: "Apple",
            price: 30000,
            heartTrack: true,
            sleepTrack: true,
        },
    }

    //
}

