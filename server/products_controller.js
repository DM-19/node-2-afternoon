
const create = (req, res, next) => {
    console.log(req.body, 'products_controller')
    req.app
        .get('db')
        .create_product([req.body.name, req.body.description, req.body.price, req.body.image_url])
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
};

const getOne = (req, res, next) => {
    req.app
        .get('db')
        .read_product([req.params.id])
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
};

const getAll = (req, res, next) => {
    req.app
        .get('db')
        .read_products()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err))
};

const update = (req, res, next) => {
    req.app
        .get('db')
        .update_products([req.params.id, req.query.desc])
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
};

const deleteProd = (req, res, next) => {
    req.app
        .get('db')
        .delete_products(req.params.id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
};

module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleteProd
};