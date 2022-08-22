const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// need to have products 'belongTo()' the category
Product.belong(Category, {
    foreignKey: 'category_id',
});

// use .hasMany(), to categorize products
Category.hasMany(Product,{
    foreignKey: 'category_id',
});

// products belong to many tags, using the belongsToMany() method
Product.belongToMany(Tag, {
    thought: ProjectTag, 
    as: 'product_tags',
    foreignKey: 'product_id',
});

// tag belongs to many products, using the belongsToMany() method
Tag.belongToMany(Product, {
    thought: ProjectTag,
    as: 'product_tags',
    foreignKey: 'tag_id',
});

module.exports ={
    Product,
    Category,
    Tag,
    ProductTag,
};