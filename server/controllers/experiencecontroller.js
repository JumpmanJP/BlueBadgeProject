const router = require('express').Router();
const experience = require('../db').import('../models/experience');
const validateSession = require('../middleware/validate-session');

router.get('/', (req,res) => {
    experience.findAll({
        where: { ownerOfExperience: req.body.ownerOfExperience }
    }) //include where to specify the individual owner. Adds security to postman. 

        .then(experience => res.status(200).json(experience))
        .catch(err => res.status(500).json({
            error: err
        }))
})

// CREATE EXPERIENCE
router.post('/create', validateSession, (req, res) => {
    const experienceFromRequest = {
        locationOfExperience: req.body.locationOfExperience,
        ownerOfExperience: req.body.ownerOfExperience,
        reviewsOfExperience: req.body.reviewsOfExperience,
        likesOfExperience: req.body.likesOfExperience
    }

experience.create(experienceFromRequest)
    .then(experience => res.status(200).json(experience))
    .catch(err => res.json(req.errors))
})



//UPDATE EXPERIENCE
router.put('/:id', validateSession, (req, res) => {
    experience.update(req.body, { where: {id: req.params.id, ownerOfExperience: req.body.ownerOfExperience}})
    .then(experience => res.status(200).json(experience))
    .catch(err => res.json(req.errors))
})



//DELETE EXPERIENCE
router.delete('/:id', validateSession, (req, res) => {
    experience.destroy({
        where: {
            id: req.params.id,
            ownerOfExperience: req.body.ownerOfExperience
        }
    })
    .then(experience => res.status(200).json(experience))
    .catch(err => console.log(err))
})

module.exports = router;