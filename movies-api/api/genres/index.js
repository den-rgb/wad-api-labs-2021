import express from 'express';
import { genres } from './genreData';
import uniqid from 'uniqid'
import Genre from './userModel';

const router = express.Router(); 
router.get('/', (req, res) => {
    res.json(genres);
});


/*router.get('/:genres', (req, res) => {
    const id = req.params.genres;
    // find reviews in list
    if (genres.genres ==id) {
        res.status(200).json(genres);
    } else {
        
        res.status(404).json({
            
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});*/

router.get('/:genres', async (req, res) => {
    const genre = await Genre.findById(req.params.genres);
    if (genre) {
        res.status(200).json(genre);
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find favourites' });
    }
});

export default router;