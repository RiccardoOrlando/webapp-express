const db = require('../data/db');


const index = (req, res) => {
    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    }
    );
}

const show = (req, res) => {
    const {id} = req.params;
    db.query('SELECT * FROM movies WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Not Found');
            return;
        }
        res.json(results[0]);
    });
}

const destroy = (req, res) => {
    const {id} = req.params;
    db.query('DELETE FROM movies WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        res.status(204).send();
    });
}


module.exports = { index, show, destroy };