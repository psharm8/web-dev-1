const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    let schools = [
        {
        	"schoolName": "Vidyatree Modern World College",
        	"degree": " Higher Secondary",
        	"favoriteClass": "Computer Lab",
        	"favoriteMemory": "The most memorable memory from the school is when I was elected as a captain of the school's Basketball team."
        },
        {
        	"schoolName": "Dr. A.P.J. Abdul Kalam Technical University",
        	"degree": "Bachelor of Technology in Computer Science and Engineering",
        	"favoriteClass": "Computer Graphics Lab",
        	"favoriteMemory": "The most memorable memory from the school is performing on-stage in a band during the college annual cultural fest."
        },
        {
        	"schoolName": "Stevens Institute of Technology",
        	"degree": "Master of Science degree in Computer Science",
        	"favoriteClass": "NVIDA CUDA® programming",
        	"favoriteMemory": "The most memorable memory from the school is the first day I joined, becuase this was the first time I had been to college in a different country."
        }
    ];
	res.json(schools);
});

module.exports = router;