const request = require('jest');
const app = require('./routes/User');
const mongoose = require('mongoose');


test.todo('It should response the GET method'), () => {
        const response = request(app).post("http://localhost:8000/users/add").json({
            Name: "aimen",
            Email: "iaimen",
            Age: 20,
            Contact: 12345788
    })
    expect(response.statusCode).toBe(200);
};

test.todo('It should response the DELEET method'), () => {
    const response = request(app).post("http://localhost:8000/users/637b2f13908ae118bc6772b0").json({
        Name: "Aimen",
        Email: "iaimen",
        Age: 20,
        Contact: 12345788
})
expect(response.statusCode).toBe(200);
};

