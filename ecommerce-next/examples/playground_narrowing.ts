interface Person {
	kind: 'Business' | 'Academic' | 'Philanthropist';
	name: string;
	age: number;
}

interface BusinessPerson extends Person {
	kind: 'Business';
	salary: number;
}

interface AcademicPerson extends Person {
	kind: 'Academic';
	booksWritten: string[];
}

interface Person {
    level: number;
    title: string;
}

interface LuxuryVehicle {
	luxury: boolean;
}

type Car = {
	type: string;
	model: string;
	mileage: number;
} & LuxuryVehicle & { damage: string };

type AlcoholicBeverages = {
	brand: string;
	type: string;
	alcoholPercentage: number;
};

type NonAlcoholicBeverages = {
	brand: string;
	type: string;
	sugarContent: number;
};

export default function play() {
	const names: string[] = [ 'Raj', 'Tanish' ];
	const numbers: Array<number> = [ 1, 2, 34, 72 ];

	//narrowing are from if statements or switch
	const random = Math.random() > 0.5 ? 'hello' : [ 1, 2 ];
	if (typeof random === 'string') {
		const upper = random.toUpperCase();
	} else {
		console.log(random);
	}

	// both strings and arrays have the property of length
	console.log(random.length);

	const individual: BusinessPerson = {
		name: 'Janos',
		age: 44,
		salary: 70000,
        kind: 'Business',
        level: 5,
        title: 'Lead Consultant'
	};

	const individual2: AcademicPerson = {
		name: 'Rajesh',
		age: 44,
        kind: 'Academic',
		booksWritten: [ 'Diff EQ', 'MathForMates' ],
        level: 3,
        title: "Lead Researcher"
	};

	type Human = BusinessPerson | AcademicPerson | {kind: 'Philanthropist', special: string};

	//extending with interfaces
	function logIndividual(person: Person) {
		logIndividual(individual2);
	}

	const car: Car = {
		type: 'mercedes',
		model: 's-class',
		mileage: 12000,
		damage: 'mild',
		luxury: true
	};

	type Beverage = AlcoholicBeverages | NonAlcoholicBeverages;

	const importedBeerVendor: AlcoholicBeverages = {
		brand: 'Corona',
		type: 'beer',
		alcoholPercentage: 4.5
	};

	// extending types
	function logCar(car: Car | never) {}

	logCar(car);

    // declaration merging (only on interfaces)
    // Look at Person for this example

    // generic object tyes
    // object should have a key where it is a string and value is any
    // we can have multiple data types as a value for the object
    function printInfo(someObject: {[key: string]: string | number | Boolean}) {}

    printInfo({
        employmentBackground: 'Military',
        countryOfEmployment: 'Tanzania',
        yearsOfEmployment: 22,
        expectingNewField: true,
    })

    // use of data type - unknown
    // if-statement with the typeof to check documents
    function transfer(resources: {[key: string]: unknown}) {
        if (typeof resources.documents === 'string'){
        resources.documents.toUpperCase()
        }
    }

    transfer({
        visa: true,
        resume: true,
        passport: false,
        governmentId: true,
        governmentRecord: true,
        socialSecurity: true,
        taxBenefits: true,
        insuranceHealth: false,
        insuranceLife: true,
        birthCertificate: false,
        documents: 7,
        requiredDocuments: 10
    })

    // narrowing interfaces 
	function logPersonInfo(human: Human) {
		if (human.kind === 'Academic') {
			console.log(human);
		} else if (human.kind === 'Business') {
            console.log(human);
        } else {
			console.log(human);
		}
	}

	//Unions and Union Narrowing
	function logBeverageInfo(beverages: AlcoholicBeverages | NonAlcoholicBeverages) {
		console.log(beverages.brand);
		console.log((beverages as AlcoholicBeverages).alcoholPercentage); //various ways to cast types
		console.log((<AlcoholicBeverages>beverages).alcoholPercentage);

		switch (importedBeerVendor.alcoholPercentage) {
			case 4.5:
				console.log(importedBeerVendor.brand);
				break;
			case 7.5:
				console.log('This beverage has crossed the threshold of legally being a beer');
				break;
			default:
				console.log(importedBeerVendor);
		}
        
        switch (car.type) {
            case 'mercedes':
                console.log('Ship to California or Texas for resale.')
                break;
            case 'tesla':
                console.log('Ship to New York or Florida for resale.')
                break;
            default:
                // type never to car is not assignable
                //const _never: never = car
                //return _never
                console.log('Do not ship an empty container');
        }
	}
}
