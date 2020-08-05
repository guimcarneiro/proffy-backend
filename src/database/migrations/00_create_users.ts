import Knex from 'knex';

//Alterações novas da respectiva versão do bd
export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

//Retorno das alterações novas da respectiva versão do bd para a anterior, caso dê problema
export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}