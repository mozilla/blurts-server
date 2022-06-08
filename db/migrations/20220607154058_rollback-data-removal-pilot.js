
exports.up = async function (knex) {
  await knex.schema.table('subscribers', (table) => {
    table.dropColumns('kid', 'removal_would_pay', 'removal_enrolled_time', 'removal_optout')
  })

  await knex.schema.dropTableIfExists('removal_pilot')
}

exports.down = async function (knex) {
  const hasTable = await knex.schema.hasTable('removal_pilot')

  if (!hasTable) {
    await knex.schema.createTable('removal_pilot', (table) => {
      table.increments('id').primary()
      table.string('name').unique()
      table.integer('enrolled_users').defaultTo(0)
    })
  }

  await knex.schema.table('subscribers', (table) => {
    table.integer('kid')
    table.boolean('removal_would_pay')
    table.timestamp('removal_enrolled_time')
    table.boolean('removal_optout').defaultTo(false)
  })
}
