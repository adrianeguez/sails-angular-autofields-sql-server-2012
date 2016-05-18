/**
 * Persons.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    schema: true,
    autoUpdatedAt: false,
    autoCreatedAt: false,
    tableName: 'Persons',
    autoPK: true,
    attributes: {
        Persons_ID: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true,
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