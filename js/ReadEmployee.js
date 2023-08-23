async function readEmp(res) {

    // window.open(res);
    var response = await fetch(res, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });

    var finaldata = await response.json();
    var data = response.status;

    console.log(finaldata.length);
    console.log(JSON.stringify(finaldata));
    console.log(data);
    if (finaldata.length == 0) {
        let displayEmp = document.getElementById("root");
        displayEmp.innerHTML = `<div class="outer-container">
    <h1>No Employees were found</h1>
    </div>`
    }
    else if (data > 200) {
        let displayEmp = document.getElementById("root");
        displayEmp.innerHTML = `<div class="outer-container">
    <h1>${finaldata.message}</h1>
    </div>`
    }
    else {
        let displayEmp = document.getElementById("root");
        displayEmp.innerHTML = `<div class="outer-container">
    <h1>Employee Details</h1>
       `;
        for (let i = 0; i < finaldata.length; i++) {
            let emp = finaldata[i];
            let course = emp.courseList;
            console.log(course.length);
            let totalCourses = '';
            for (let i = 0; i < course.length; i++) {
                totalCourses += course[i].courseName;
                totalCourses += ", ";
            }
            displayEmp.innerHTML += `<section class="inner-container"><table><tr>
        <td>Employee Id : </td>
        <td class="result">${emp.id}</td>
    </tr>
    <tr>
        <td>First Name : </td>
        <td class="result">${emp.firstName}</td>
    </tr>
    <tr>
        <td>Last Name : </td>
        <td class="result">${emp.lastName}</td>
    </tr>
    <tr>
        <td>Salary : </td>
        <td class="result">${emp.salary}</td>
    </tr>
    <tr>
        <td>Experience : </td>
        <td class="result">${emp.experience}</td>
    </tr>
    <tr>
        <td>Department : </td>
        <td class="result">${emp.department}</td>
    </tr>
    <tr>
    <td>Courses : </td>
    <td class="result">${totalCourses}</td>
</tr>
    <tr>
        <td>Street : </td>
        <td class="result">${emp.address.street}</td>
    </tr>
   
    <tr>
        <td>city : </td>
        <td class="result">${emp.address.city}</td>
    </tr>
    <tr>
        <td>Pincode : </td>
        <td class="result">${emp.address.pin}</td>
    </tr></table>
    </section>`

        }
        displayEmp += `</div>`;
    }
}
async function readEmpById(res) {

    // window.open(res);
    var response = await fetch(res, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });

    var finaldata = await response.json();
    var data = response.status;

    console.log(finaldata.length);
    console.log(JSON.stringify(finaldata));
    console.log(data);
    console.log(finaldata.message);

    if (data > 200) {
        let displayEmp = document.getElementById("root");
        displayEmp.innerHTML = `<div class="outer-container">
    <h1>${finaldata.message}</h1>
    </div>`
    }
    else {
        let displayEmp = document.getElementById("root");
        displayEmp.innerHTML = `<div class="outer-container">
    <h1>Employee Details</h1>
       `;

        let emp = finaldata;
        let course = emp.courseList;
        console.log(course.length);
        let totalCourses = '';
        for (let i = 0; i < course.length; i++) {
            totalCourses += course[i].courseName;
            totalCourses += ", ";
        }
        displayEmp.innerHTML += `<section class="inner-container"><table><tr>
        <td>Employee Id : </td>
        <td class="result">${emp.id}</td>
    </tr>
    <tr>
        <td>First Name : </td>
        <td class="result">${emp.firstName}</td>
    </tr>
    <tr>
        <td>Last Name : </td>
        <td class="result">${emp.lastName}</td>
    </tr>
    <tr>
        <td>Salary : </td>
        <td class="result">${emp.salary}</td>
    </tr>
    <tr>
        <td>Experience : </td>
        <td class="result">${emp.experience}</td>
    </tr>
    <tr>
        <td>Department : </td>
        <td class="result">${emp.department}</td>
    </tr>
    <tr>
    <td>Courses : </td>
    <td class="result">${totalCourses}</td>
</tr>
    <tr>
        <td>Street : </td>
        <td class="result">${emp.address.street}</td>
    </tr>
   
    <tr>
        <td>city : </td>
        <td class="result">${emp.address.city}</td>
    </tr>
    <tr>
        <td>Pincode : </td>
        <td class="result">${emp.address.pin}</td>
    </tr></table>
    </section>`

    }
    displayEmp += `</div>`;
}

function test() {
    let select = document.getElementById("select").value;
    console.log(select);
    let filter = document.getElementById("text-box").value;
    if (select === "firstName") {
        let res = "http://localhost:8080/api/employee?firstName=" + filter;
        readEmp(res);
    }
    else if (select === "id") {

        let res = "http://localhost:8080/api/employee/" + filter;
        readEmpById(res);
    }
    else if (select === "Department") {
        let res = "http://localhost:8080/api/employee/department?deptName=" + filter;
        readEmp(res);
    }
    else if (select === "course") {
        let res = "http://localhost:8080/api/employee/course?name=" + filter;
        readEmp(res);
    }


}