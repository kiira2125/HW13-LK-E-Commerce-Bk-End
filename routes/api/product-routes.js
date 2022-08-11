const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// Coding the `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
    // find all products and  include its associated Category and Tag data
    Product.findAll({
        include: [
            {
                model: Category,
                attributes: ['id', 'category_name']
            },
            {
                model: Tag,
                attributes: ['id', 'tag_name'],
                through: ProductTag,
                as: 'product_tags'
            }
        ]
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No products found' });
                return;
            }

            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// get one product in the 'router.get'
router.get('/:id', (req, res) => {
    // find a single product by its `id` and include its associated Category and Tag data here with 'product.findOne'
    Product.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Category,
                attributes: ['id', 'category_name']
            },
            {
                model: Tag,
                attributes: ['id', 'tag_name'],
                through: ProductTag,
                as: 'product_tags'
            }
        ]
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No products found at this id' });
                return;
            }

            res.json(dbProductData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// create new product here
router.post('/', (req, res) => {

    Product.create(req.body)
        .then((product) => {
            // if there is  product tags, then it will need to create pair, to bulk and create in the ProductTag model
            if (req.body.tagIds.length) {
                const productTagIdArr = req.body.tagIds.map((tag_id) => {
                    return {
                        product_id: product.id,
                        tag_id,
                    };
                });
                return ProductTag.bulkCreate(productTagIdArr);
            }
            // if no product tags then, just respond
            res.status(200).json(product);
        })
        .then((productTagIds) => res.status(200).json(productTagIds))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// update product here
router.put('/:id', (req, res) => {
    // update product data below
    Product.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((product) => {
            // find all the associated tags from ProductTag here
            return ProductTag.findAll({ where: { product_id: req.params.id } });
        })
        .then((productTags) => {
            // get list of the current tag_ids
            const productTagIds = productTags.map(({ tag_id }) => tag_id);
            // creating a filtered list of the  new tag_ids here
            const newProductTags = req.body.tagIds
                .filter((tag_id) => !productTagIds.includes(tag_id))
                .map((tag_id) => {
                    return {
                        product_id: req.params.id,
                        tag_id,
                    };
                });
            // figuring out which ones to remove here
            const productTagsToRemove = productTags
                .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                .map(({ id }) => id);

            // run both actions 
            return Promise.all([
                ProductTag.destroy({ where: { id: productTagsToRemove } }),
                ProductTag.bulkCreate(newProductTags),
            ]);
        })
        .then((updatedProductTags) => res.json(updatedProductTags))
        .catch((err) => {
            // console.log(err); with .json(err)
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete one product by its `id` value id: req.params.id
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found at this id' });
                return;
            }

            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
