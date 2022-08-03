/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("family", function (table) {
    table.integer("id").unique().notNullable();
    table
      .integer("account_id")
      .notNullable()
      .references("id")
      .inTable("account")
      .onDelete("CASCADE");
    table.string("first_name", 32).notNullable();
    table.string("last_name", 32).notNullable();

    table.primary(["id", "account_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("family");
};
