import studentsOnDom from '../utils/studentsOnDom';
import houses from '../utils/data/houses';
import { students } from '../utils/data/studentsVoldy';

const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];
  const createId = (array) => {
    if (array.length) {
      const idArray = array.map((el) => el.id);
      return Math.max(...idArray) + 1;
    }
    return 0;
  };

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });
    // create the new student object

    student.value = ''; // reset value of input
    studentsOnDom('#students', students);
  }
};

export default sortStudent;
