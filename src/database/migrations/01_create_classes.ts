import Knex from 'knex';

//Alterações novas da respectiva versão do bd
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

//Retorno das alterações novas da respectiva versão do bd para a anterior, caso dê problema
export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}