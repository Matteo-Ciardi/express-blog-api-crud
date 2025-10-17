let posts = ('../data/postsContent.js');

function index(req, res) {
    let filteredPosts = posts;

    if (req.query.tags) {
        filteredPosts = posts.filter(
            post => pizza.tags.includes(req.query.tags)
        );
    }

    res.json(filteredPosts);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        res.status(404)

        return res.json({
            error: "Post non trovato",
            message: `Il post con id ${id} non esiste`
        });
    }

    res.json(post);
}

function store(req, res) {
    res.send('Crea un nuovo post');
}

function update(req, res) {
    res.send(`Aggiorna post con id ${req.params.id}`);
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.findIndex(p => p.id === id);

    if (!post) {
        res.status(404);

        return req.json({
            status: 404,
            error: "Post non trovato",
            message: `Il post con id ${id} non esiste`
        })
    }

    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };