"use strict";

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("removal_pilot")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("removal_pilot").insert([
        { id: 1, name: "round_01", enrolled_users: 0 },
      ]);
    });
};
