const express = require('express');
const Student = require('../model/Student');
const router = express.Router();

router.post('/login-student', function(req, res) {
    let { login, password } = req.body;

    if (!login || !password) {
        res.send({ loginStudent: false, message: 'invalid details!' });
    } else {
        // na obiekcie Student (biblioteka mongoose) wywolanie metody findOne(http://mongoosejs.com/docs/queries.html)
        // zwraca obiekt Promise dlatego mozemy uzyc then()
        // czyli wykona sie asynchronicznie po tym jak przegrzebie baze danych w poszukiwaniu Studenta
        Student.findOne({ login })
            .then((student) => {
                const userData = {
                    // student: student, skrocona wersja \/
                    student,
                    loginStudent: true,
                    message: ''
                };
                if (student === null) {
                    userData.message = 'user does not exsists!';
                    res.send(userData);
                } else if (student.password !== password) {
                    userData.message = 'wrong password!';
                    res.send(userData);
                } else {
                    // `${val}` => yo nigga; '${val}' => error;
                    userData.message = `logged in as ${user}`;
                    res.send(userData);
                }
            });
    }
});

module.exports = router;
