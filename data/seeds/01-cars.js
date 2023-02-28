// STRETCH
const cars = [
    {
        vin: '4709528794724',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '4709528794724',
        make: 'toyota',
        model: 'prius',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '4709528794724',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}