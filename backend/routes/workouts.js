const express = require('express')
const router = express.Router()
const {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// Route to get all workouts
router.get('/', getAllWorkouts)

// Route to get a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)


module.exports = router