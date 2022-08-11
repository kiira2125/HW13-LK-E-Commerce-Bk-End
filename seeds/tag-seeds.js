const {Tag} = require('../models/tag');

const tagData = [

    {
        tag_name: 'rock music',
    },

    {
        tag_name: 'alternative rock music',
    },

    {
        tag_name: 'blue',
    },

    {
        tag_name: 'red',
    },

    {
        tag_name: 'green',
    },

    {
        tag_name: 'white',
    },
    
    {
        tag_name: 'gold',
    },

    {
        tag_name: 'pop culture',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;