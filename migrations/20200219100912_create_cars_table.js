exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.integer("VIN", 256);
    tbl.string("make", 256);
    tbl.string("model", 256);
    tbl.string("mileage", 256);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
