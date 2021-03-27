import React from "react";
function StudentFormCom() {
  return (
    <div>
      <form method="post">
        <input
          type="number"
          name="txtAdhar"
          placeholder="Input adhar Number here"
        />
        <br />
        <br />
        <input type="text" name="txtName" placeholder="Input Name here" />
        <br />
        <br />
        <input type="radio" name="txtRadio" value="Male" />
        Male
        <input type="radio" name="txtRadio" value="Female" /> Female
        <br />
        <br />
        <input
          type="date"
          name="txtDOB"
          placeholder="Input Date of birth here"
        />
        <br />
        <br />
        <input
          type="address"
          name="txtSchool"
          placeholder="Input School Name here"
        />
        <br />
        <br />
        <input type="file" name="imgFile" placeholder="Select Image" />
        <br />
        <br />
        <button type="submit"> SUBMIT</button>
      </form>
    </div>
  );
}
export default StudentFormCom;
