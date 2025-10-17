let posts = ('../data/postContent');

const index = (req, res) => {
    res.send('Lista di tutti i post')
}

const show = (req, res) => {
    res.send(`Post con id ${req.params.id}`);
}

const store = (req, res) => {
    res.send('Crea un nuovo post');
}

const update = (req, res) => {
    res.send(`Aggiorna post con id ${req.params.id}`);
}

const destroy = (req, res) => {
    res.send(`Elimina post con id ${req.params.id}`);
}

module.exports = { index, show, store, update, destroy };