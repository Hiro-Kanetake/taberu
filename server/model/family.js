const knex = require("../db/knex/knex");

const FAMILY_TABLE = "family";

module.exports = {
  FAMILY_TABLE,

  createFamily(data) {
    return knex.insert(data).into(FAMILY_TABLE);
  },
};
