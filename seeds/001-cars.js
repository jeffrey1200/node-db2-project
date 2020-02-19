exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          model: "Altima",
          make: "Nissan",
          VIN: "00004444",
          mileage: "130,000"
        },
        {
          id: 2,
          model: "Camry",
          make: "Toyota",
          VIN: "00004444",
          mileage: "130,000"
        },
        {
          id: 3,
          model: "Altima",
          make: "Nissan",
          VIN: "00004444",
          mileage: "130,000"
        }
      ]);
    });
};
