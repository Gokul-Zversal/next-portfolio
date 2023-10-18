// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Gokul Sharma',
    image: "images/gokul.jpeg",
    designation: 'Full Stack Developer at Zversal pvt Ltd',
    view: "I had the privilege of working alongside Ritesh on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team on clients Project, where Ritseh's professionalism and attention to detail shone brightly. I wholeheartedly endorse Ritesh for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://in.linkedin.com/in/gokul-sharma-206970209"
  },
  {
    id: 1,
    name: 'Harpreet Singh',
    image: "images/happy.jpeg",
    designation: 'MERN | JavaScript | php | Sass | Bootstrap',
    view: "I wholeheartedly recommend Ritesh as a talented MERN Stack developer with an incredible flair for System design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Ritesh's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 2,
    name: 'Adam Murphy',
    image: 'images/adam.png',
    designation: 'Senior React Js Developer',
    view: "I highly recommend Ritesh for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "#"
  },
  {
    id: 3,
    name: 'Shubham Sasgohar',
    image: "images/shubh.jpeg",
    designation: 'Senior Full Stack Developer | Tech Lead | AWS Certified',
    view: "Ritesh is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
    linkednURL: "#"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
