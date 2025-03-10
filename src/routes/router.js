const router = require('express').Router();

router.get('/users', (req, res) => {
    res.status(200).json({
        users: [
            {id: 1, name: 'John Doe'},
            {id: 2, name: 'Jane Doe'}
        ]
    })
})

module.exports = router