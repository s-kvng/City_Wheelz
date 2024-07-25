export interface ISignupFormDetails{
    email: string,
    password: string,
    confirmPassword: string,
    terms: boolean,
}

export interface IDriverFormDetails{
    firstname: string,
    lastname: string,
    phone: string,
    address: string,
    licenseNumber: string,
    drivingLicenseExpiry: string,
    email: string,
    ghanaCard: string,
}

export interface ICar {
    make: string,
    model:  string
    year: string,
    description: string,
    color: string,
    transmission: string,
    seatingCapacity: string,
    fuelType: string,
    pricePerDay: string,
    image: string,
    isAvailable: boolean,
}

export interface IBooking{
    imageUrl: string,
    firstname: string,
    lastname: string,
    phone: string,
    address: string,
    licenseNumber: string,
    drivingLicenseExpiry: string,
    email: string,
    ghanaCard: string,
    carId: string,
    pickupDate: string,
    returnTime: string,
}