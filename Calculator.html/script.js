const addCourseBtn = document.getElementById("addCourse");
const calculateBtn = document.getElementById("calculateBtn");
const courseBody = document.getElementById("courseBody");
const cgpaResult = document.getElementById("cgpaResult");
const themeBtn = document.getElementById("themeBtn");


// ADD COURSE FUNCTION
addCourseBtn.addEventListener("click", () => {

    const row = document.createElement("tr");

    row.innerHTML = `
    
        <td>
            <input type="text" placeholder="Course Code">
        </td>

        <td>
            <input type="number" class="unit" placeholder="3">
        </td>

        <td>
            <select class="grade">
                <option value="5">A</option>
                <option value="4">B</option>
                <option value="3">C</option>
                <option value="2">D</option>
                <option value="1">E</option>
                <option value="0">F</option>
            </select>
        </td>

        <td class="point">0</td>

        <td>
            <button class="deleteBtn">X</button>
        </td>
    
    `;

    courseBody.appendChild(row);

});


// DELETE COURSE
courseBody.addEventListener("click", (e) => {

    if(e.target.classList.contains("deleteBtn")){
        e.target.parentElement.parentElement.remove();
    }

});


// CALCULATE CGPA
calculateBtn.addEventListener("click", () => {

    const rows = document.querySelectorAll("#courseBody tr");

    let totalPoint = 0;
    let totalUnit = 0;

    rows.forEach(row => {

        const unit = row.querySelector(".unit").value;
        const grade = row.querySelector(".grade").value;

        const point = unit * grade;

        row.querySelector(".point").innerText = point;

        totalPoint += point;
        totalUnit += Number(unit);

    });

    if(totalUnit === 0){
        cgpaResult.innerText = "0.00";
        return;
    }

    const cgpa = totalPoint / totalUnit;

    cgpaResult.innerText = cgpa.toFixed(2);

});


// DARK MODE
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.innerText = "☀ Light Mode";
    }else{
        themeBtn.innerText = "🌙 Dark Mode";
    }

});