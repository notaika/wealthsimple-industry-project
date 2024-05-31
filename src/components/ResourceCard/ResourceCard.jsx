import "./ResourceCard.scss";
import { useNavigate } from "react-router-dom";

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
    "name": "Retirement Planning",
  },
  {
    "id": 6,
    "name": "The Realities of Real Estate",
  },
  {
    "id": 7,
    "name": "Understanding Mutual Funds",
  },
  {
    "id": 8,
    "name": "Stock Market Basics",
  },
  {
    "id": 9,
    "name": "Managing Credit and Debt",
  },
  {
    "id": 10,
    "name": "Basics of Personal Finance",
  },
  {
    "id": 11,
    "name": "Advanced Investment Strategies",
  },
  {
    "id": 12,
    "name": "Tax Planning Essentials",
  },
  {
    "id": 13,
    "name": "Financial Goal Setting",
  },
  {
    "id": 14,
    "name": "Emergency Fund Planning",
  },
  {
    "id": 15,
    "name": "Insurance Planning Basics",
  },
  {
    "id": 16,
    "name": "Estate Planning 101",
  },
  {
    "id": 17,
    "name": "Cryptocurrency Investing",
  },
  {
    "id": 18,
    "name": "Understanding Annuities",
  },
  {
    "id": 19,
    "name": "Saving for Education",
  },
  {
    "id": 20,
    "name": "Navigating the Housing Market",
  }];

const navigate = useNavigate();

const handleClick = () => {
  navigate('/resources/curriculum')
}

return (
  <ul className="resource-card">
    {
      courseList.map(course => {
        return <li onClick={handleClick} className="resource-card__item" key={course.id}>{course.name}</li>;
      })
    }
  </ul>
);
};

export default ResourceCard;