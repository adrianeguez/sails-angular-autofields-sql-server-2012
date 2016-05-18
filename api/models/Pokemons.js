/**
 * Pokemons.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    schema: true,
    autoUpdatedAt: false,
    autoCreatedAt: false,
    tableName: 'Pokemons',
    autoPK: true,
    attributes: {
        Pokemons_ID: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true,
        },
        Name: {
            type: 'string',
        },
        TypeNature1: {
            type: 'string',
        },
        TypeNature2: {
            type: 'string',
        },
        urlFoto: {
            type: 'string',
        },
        Persons_ID: {
            type: 'integer'
        }
    }
};