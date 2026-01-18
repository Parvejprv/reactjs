import Card from "./components/Card.jsx";

const jobopenings = [
  {
    img: "https://images.icon-icons.com/1195/PNG/512/1490889698-amazon_82521.png",
    alt: "amazon",
    title: "Amazon Logo",
    company: "Amazon",
    dateOfPosting: "5 days ago",
    role: "Senior UI/UX Designer",
    tag: "Part-Time",
    tag2: "Senior Level",
    rate: "$120/hr",
    location: "Mumbai, India",
  },
  {
    img: "https://images.icon-icons.com/729/PNG/512/google_icon-icons.com_62736.png",
    alt: "google",
    title: "Google Logo",
    company: "Google",
    dateOfPosting: "30 days ago",
    role: "Graphic Designer",
    tag: "Part-Time",
    tag2: "Flexible Schedule",
    rate: "$150-220k",
    location: "Kochi, India",
  },
  {
    img: "https://images.icon-icons.com/2429/PNG/512/figma_logo_icon_147289.png",
    alt: "figma",
    title: "Figma Logo",
    company: "Figma",
    dateOfPosting: "5 days ago",
    role: "Senior UI/UX Designer",
    tag: "Full-Time",
    tag2: "In office",
    rate: "$200-250k",
    location: "Bangalore, India",
  },
  {
    img: "https://images.icon-icons.com/1109/PNG/512/1486053635-dribble_79185.png",
    alt: "dribble",
    title: "Dribble Logo",
    company: "Dribble",
    dateOfPosting: "18 days ago",
    role: "Graphic Designer",
    tag: "Contract",
    tag2: "Remote",
    rate: "$85/hr",
    location: "Chennai, India",
  },
  {
    img: "https://images.icon-icons.com/2699/PNG/512/airbnb_tile_logo_icon_168680.png",
    alt: "airbnb",
    title: "Airbnb Logo",
    company: "Airbnb",
    dateOfPosting: "5 days ago",
    role: "Junior UI/UX Designer",
    tag: "Contract",
    tag2: "Remote",
    rate: "$100/hr",
    location: "Delhi, India",
  },
  {
    img: "https://images.icon-icons.com/2428/PNG/512/apple_black_logo_icon_147162.png",
    alt: "apple",
    title: "Apple Logo",
    company: "Apple",
    dateOfPosting: "5 days ago",
    role: "Graphic Designer",
    tag: "Full-Time",
    tag2: "Flexible Schedule",
    rate: "$85-120k",
    location: "Kerala, India",
  },
  {
    img: "https://images.icon-icons.com/1195/PNG/512/1490889698-amazon_82521.png",
    alt: "amazon",
    title: "Amazon Logo",
    company: "Amazon",
    dateOfPosting: "5 days ago",
    role: "Senior UI/UX Designer",
    tag: "Part-Time",
    tag2: "Senior Level",
    rate: "$120/hr",
    location: "Mumbai, India",
  },
  {
    img: "https://images.icon-icons.com/729/PNG/512/google_icon-icons.com_62736.png",
    alt: "google",
    title: "Google Logo",
    company: "Google",
    dateOfPosting: "30 days ago",
    role: "Graphic Designer",
    tag: "Part-Time",
    tag2: "Flexible Schedule",
    rate: "$150-220k",
    location: "Kochi, India",
  },
  {
    img: "https://images.icon-icons.com/2429/PNG/512/figma_logo_icon_147289.png",
    alt: "figma",
    title: "Figma Logo",
    company: "Figma",
    dateOfPosting: "5 days ago",
    role: "Senior UI/UX Designer",
    tag: "Full-Time",
    tag2: "In office",
    rate: "$200-250k",
    location: "Bangalore, India",
  },
  {
    img: "https://images.icon-icons.com/1109/PNG/512/1486053635-dribble_79185.png",
    alt: "dribble",
    title: "Dribble Logo",
    company: "Dribble",
    dateOfPosting: "18 days ago",
    role: "Graphic Designer",
    tag: "Contract",
    tag2: "Remote",
    rate: "$85/hr",
    location: "Chennai, India",
  },
  {
    img: "https://images.icon-icons.com/2699/PNG/512/airbnb_tile_logo_icon_168680.png",
    alt: "airbnb",
    title: "Airbnb Logo",
    company: "Airbnb",
    dateOfPosting: "5 days ago",
    role: "Junior UI/UX Designer",
    tag: "Contract",
    tag2: "Remote",
    rate: "$100/hr",
    location: "Delhi, India",
  },
  {
    img: "https://images.icon-icons.com/2428/PNG/512/apple_black_logo_icon_147162.png",
    alt: "apple",
    title: "Apple Logo",
    company: "Apple",
    dateOfPosting: "5 days ago",
    role: "Graphic Designer",
    tag: "Full-Time",
    tag2: "Flexible Schedule",
    rate: "$85-120k",
    location: "Kerala, India",
  },
];

const App = () => {
  return (
    <div className="parent">
      {jobopenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              key={idx}
              img={elem.img}
              alt={elem.alt}
              title={elem.title}
              company={elem.company}
              dateOfPosting={elem.dateOfPosting}
              role={elem.role}
              tag={elem.tag}
              tag2={elem.tag2}
              rate={elem.rate}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
