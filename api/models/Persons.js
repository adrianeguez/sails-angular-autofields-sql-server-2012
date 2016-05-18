/**
 * Persons.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
//    schema: true,
//    connection: 'sqlserver',
//    identity: 'PersonID',
//    tableName: 'Persons',
    attributes: {
        PersonID: {
            type: 'integer',
            primaryKey: true,
            unique: true
        },
        LastName: {
            type: 'string',
        },
        FirstName: {
            type: 'string',
        },
        Address: {
            type: 'string',
        },
        City: {
            type: 'string',
        }
    }
};