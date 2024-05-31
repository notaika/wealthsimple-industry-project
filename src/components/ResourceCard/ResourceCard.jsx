import "./ResourceCard.scss"
function ResourceCard(){
  const courseList= [{
    "id": 1,
    "name": "Introduction to RRSP",
  },
  {
    "id": 2,
    "name": "Introduction to TFSA",
  },
  {
    "id": 3,
    "name": "Introduction to HFSA",
  },
  {
    "id": 4,
    "name": "Introduction to Budgeting",
  },
  {
    "id": 5,
    "name": "Retirement Planning ",
  },
  {
    "id": 6,
    "name": "The realities of Real Estate",
  }

]

return (
  <ul className="resource-card">
    {
      courseList.map(course => {
        return <li className="resource-card__item" key={course.id}>{course.name}</li>;
      })
    }
  </ul>
);
};

export default ResourceCard;