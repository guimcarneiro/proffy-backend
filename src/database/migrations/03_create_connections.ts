import Knex from 'knex';

//Alterações novas da respectiva versão do bd
export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    })
}

//Retorno das alterações novas da respectiva versão do bd para a anterior, caso dê problema
export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}