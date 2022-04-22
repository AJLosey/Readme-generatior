const fs = require('fs')

var inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your linkedin?",
            name: "linkedin"
        },
        {
            type: "input",
            message: "What is your github",
            name: "github"
        },
    ])
    .then((answers) => {

        a = answers.name;
        b = answers.linkedin;
        c = answers.github;

        let file = `<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>mini project</title>
</head>

<body>
    <ul class="list-group" style="background-color: antiquewhite;">
        <li class="list-group-item">${a}</li>
        <li class="list-group-item">${b}</li>
        <li class="list-group-item">${c}</li>
    </ul>





    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</body>

</html>`


        fs.writeFile('index.html', file, err => {
            if (err) {
                console.error(err)
                return
            }
            //file written successfully
        })






    })
    .catch(error => console.log(error));