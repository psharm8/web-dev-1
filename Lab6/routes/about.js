const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    let about = {
        "name": "Puneet Sharma",
        "biography": [
            "I am from northern part of India. Currenly a masters student, majoring in Computer Science. I have software development experience, primarily in Windows application development in WPF using C#.",
            "My current interests involve parallel programming using NVIDIA CUDA® (brushing up my C++) and learning Web Development."
        ],
        "favoriteShows": [
            "Sherlock", "Mr. Robot", "Dr. Who", "Fringe", "Person of Interest", "The Flash", "Arrow", "Sense8",
            "Stranger Things", "Westworld"
        ],
        "hobbies": [
            "Coding (yes that's correct)", "Listening to Hard Rock and Heavy Metal", "Playing Bass",
            "Composing Electronic Music", "Watching TV Shows"
        ]
    };
    res.json(about);
});

module.exports = router;