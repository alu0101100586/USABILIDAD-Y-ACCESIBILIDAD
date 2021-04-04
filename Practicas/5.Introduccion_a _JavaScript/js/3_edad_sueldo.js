let users =
{
    "dni": 78549658,
    "bornYear": 1994,
    "startDate": 2017,
    "productivityPlus": 20,
    "antiquePlus": 0.1,
    "baseSalary": 1800,
}

function AgeAndSalary(users) {
    var date = new Date()
    var age = parseInt(date.getFullYear()) - parseInt(users.bornYear)
    var longevity = (parseInt(date.getFullYear()) - parseInt(users.startDate))
    var totalSalary = (users.baseSalary * (longevity + users.productivityPlus)) * users.antiquePlus
    document.getElementById('ver').innerHTML = "El usuario tiene " + age + " años y un salario de " + totalSalary + "€"
    console.log(users)
}
