const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');

let axios = require('axios');

const TeacherProfile = require('../../models/TeacherProfile');
const User = require('../../models/User');
const Student = require('../../models/Student');

//@route    GET api/teacherprofile/me
//@desc     Get current users profile
//@access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await TeacherProfile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'email', 'avatar']);

    profile.classes = profile.classes.sort((a, b) =>
      a.period > b.period ? 1 : -1
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST api/user/
//@desc     Create or update user profile
//@access   Private

router.post('/', [
  auth,
  [
    check('subject', 'Subject is required').not().isEmpty(),
    check('skills', 'Skill(s) is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      room,
      subject,
      skills,
      classes,
      bio,
      todos,
      youtube,
      twitter,
      facebook,
      linkedin,
      instagram
    } = req.body;

    console.log(req.body);

    //Build Profile Object

    const profileFields = {};
    profileFields.user = req.user.id;
    if (room) profileFields.room = room;
    if (subject) profileFields.subject = subject;
    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim());
    }
    if (bio) profileFields.bio = bio;
    if (classes) profileFields.classes = classes;
    if (todos) profileFields.todos = todos;

    // Build SocialMedia Object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      let profile = await TeacherProfile.findOne({ user: req.user._id });

      if (profile) {
        profile = await TeacherProfile.findOneAndUpdate(
          { user: req.user._id },
          { $set: profileFields },
          { new: true }
        );
        console.log(profile);

        return res.json(profile);
      }

      profile = new TeacherProfile(profileFields);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
]);

//@route    GET api/user
//@desc     Get all profiles
//@access   Public

router.get('/', async (req, res) => {
  try {
    const allProfiles = await User.find();
    res.json(allProfiles);
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }
});

// Gets a user's profile
//@route    GET api/user/:user_id
//@desc     Get profile by user ID
//@access   Public

router.get('/:user_id', async (req, res) => {
  try {
    const profile = await TeacherProfile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'email', 'avatar']);
    if (!profile) return res.status(400).json({ msg: 'Profile not found.' });

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found.' });
    }
    res.status(500).json('Server Error');
  }
});

//@route    DELETE api/
//@desc     DELETE user and posts
//@access   Private

router.delete('/', auth, async (req, res) => {
  try {
    // deletes user's posts
    await Post.deleteMany({ user: req.user.id });
    // remove profile
    await TeacherProfile.findOneAndRemove({ user: req.user.id });
    // removes user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'user removed ' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }
});

//@route    PUT api/teacherprofile/classes
//@desc     Adds a class period
//@access   Private

router.put(
  '/classes',
  [
    auth,
    [
      check('name', 'Period is required').not().isEmpty(),
      check('period', 'Period is required').not().isEmpty(),
      check('description', 'description is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let students = await axios.get(
      'https://api.mockaroo.com/api/0f76e990?count=30&key=818fe000'
    );

    let s_count = students.data.length - 1;
    let s_curr_count = 0;
    let s_array = [];

    let fetch_students = new Promise(function (resolve, reject) {
      for (let i = 0; i < students.data.length; i++) {
        let newStudent = new Student();
        newStudent.name = students.data[i].name;
        newStudent.grade = students.data[i].grade;
        newStudent.email = students.data[i].email;
        newStudent.gender = students.data[i].gender;
        newStudent.englishlearner = students.data[i].englishlearner;
        newStudent.resourcestudent = students.data[i].resourcestudent;
        newStudent.medical = students.data[i].medical;
        newStudent.athlete = students.data[i].athlete;
        newStudent.goals = students.data[i].goals;

        // add all the student stuff
        newStudent.save(function (err, s) {
          if (err) {
            reject(err);
          } else {
            // we saved the student
            s_array.push(s);
            s_curr_count++;
            if (s_curr_count == s_count) {
              resolve('done');
            }
          }
        });
      }
    });

    try {
      fetch_students.then(async function () {
        const { name, period, description } = req.body;

        let students = s_array.map(function (st) {
          return mongoose.Types.ObjectId(st._id);
        });

        const newPeriod = {
          name,
          period,
          description,
          students
        };

        try {
          const profile = await TeacherProfile.findOne({ user: req.user.id });

          profile.classes.unshift(newPeriod);

          await profile.save();

          TeacherProfile.findOne({
            user: req.user.id
          })
            .populate('classes.students', ['name', 'grade', 'email'])
            .exec(function (err, teacher) {
              if (err) {
                res.json(err);
              } else {
                res.json(teacher);
              }
            });

          //await p.populate('students').execPopulate()
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
        }
      });
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  }
);

//@route    DELETE api/teacherprofile/classes
//@desc     Deletes a class period
//@access   Private

router.delete('/classes/:class_id', auth, async (req, res) => {
  try {
    const profile = await TeacherProfile.findOne({ user: req.user.id });

    // get remove index
    const removeIndex = profile.classes
      .map(item => item.id)
      .indexOf(req.params.class_id);

    profile.classes.splice(removeIndex, 1);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    PUT api/teacherprofile/todos
//@desc     Posts a todo item
//@access   Private

router.put(
  '/todos',
  [auth, [check('task', 'Task is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { task, deadline, completed } = req.body;

    const newTodo = {
      task,
      deadline,
      completed
    };

    try {
      const profile = await TeacherProfile.findOne({ user: req.user.id });

      profile.todos.unshift(newTodo);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// DELETE ToDo
router.delete('/todos/:todo_id', auth, async (req, res) => {
  try {
    const profile = await TeacherProfile.findOne({ user: req.user.id });

    // get remove index
    const removeIndex = profile.todos
      .map(item => item.id)
      .indexOf(req.params.todo_id);

    profile.todos.splice(removeIndex, 1);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// ROUTE TO GET STUDENTS BY CLASS PERIOD

module.exports = router;
