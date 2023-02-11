const express = require('express')
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalControllers')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

//this is the same thing as above in less lines of code
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router