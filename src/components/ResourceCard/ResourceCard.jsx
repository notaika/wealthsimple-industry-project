
function ResourceCard(){
  courseList= [{
    "name": "Introduction to RRSP",
  },
  {
    "name": "Introduction to TFSA",
  },
  {
    "name": "Introduction to HFSA",
  },
  {
    "name": "Introduction to Budgeting",
  },
  {
    "name": "Retirement Planning ",
  },
  {
    "name": "The realities of Real Estate",
  }

]

return (
  <ul className="resource__list">
    {
      courseList.map(course => {
        return <li className="resource__item" key={course.id}>{course.name}</li>;
      })
    }
  </ul>
);
};

export default ResourceCard;