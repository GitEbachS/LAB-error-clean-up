import filterBtnRow from '../buttons/filterBtnRow';
import studentAreas from '../shared/studentAreas';
import { students, voldysArmy } from '../../utils/data/studentsVoldy';
import form from '../forms/addStudentForms';
import studentsOnDom from '../../utils/studentsOnDom';

const formEvents = () => {
  // get form on the DOM on button click
  document.querySelector('#start-sorting').addEventListener('click', () => {
    // put html elements on the DOM on click
    form(); // form
    filterBtnRow(); // filter buttons
    studentAreas(); // students and voldy's army divs
  });

  document.querySelector('#student-container').addEventListener('click', (e) => {
    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('--'); const index = students.findIndex((student) => student.id === Number(id));

      voldysArmy.push(...students.splice(index, 1));
      // get both sets of students on the DOM
      studentsOnDom('#students', students);
      studentsOnDom('#voldy', voldysArmy);
    }
  });
};
export default formEvents;
