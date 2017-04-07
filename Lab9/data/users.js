const users = [{
        _id: "1",
        username: "masterdetective123",
        hashedPassword: "$2a$10$FVoHzwhZKATFlc93JLJldOhh3FIEgoOQ9i4ie5Z50f4sqACr.iBjS",
        firstName: "Sherlock",
        lastName: "Holmes",
        profession: "Detective",
        bio: "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a \"consulting detective\" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard."
    },
    {
        _id: "2",
        username: "lemon",
        hashedPassword: "$2a$10$jJUhiCpcYqqp1JIiOdeo6eibtfF1.S22bMbp1eBBV3xjVghBCxEdu",
        firstName: "Elizabeth",
        lastName: "Lemon",
        profession: "Writer",
        bio: "Elizabeth Miervaldis \"Liz\" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan."
    },
    {
        _id: "3",
        username: "theboywholived",
        hashedPassword: "$2a$10$5pqg44A/HB4PBgpXzV3UF.Q6yBJ501b9vTzT8S9WM6QiquRnOpZ/C",
        firstName: "Harry",
        lastName: "Potter",
        profession: "Student",
        bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles."
    },
];
exports.findById = function(id) {
    if (!id) return Promise.reject("Please provide a user id.");
    return new Promise((fulfill, reject) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i]._id === id) {
                fulfill(users[i]);
                return;
            }
        }
        fulfill(null);
    });
};

exports.findByUsername = function(username) {
    if (!username) return Promise.reject("Please provide a username.");
    return new Promise((fulfill, reject) => {
        let user = users.find((user) => {
            return user.username == username;
        });
        fulfill(user);
    });
};