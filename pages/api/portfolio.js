const portfolio = [
    {
        id: 0,
        projectName: "Chatty Backend",
        url: "https://github.com/riteshbenjwal/chatty-backend",
        image: "projects/chatty.png",
        projectDetail: "Chatty App backend server is an interesting real-time social network application. It is developed using node.js, typescript, redis and mongodb.",
        technologiesUsed: [
            {
                tech: "NodeJS"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "Redis"
            },
            {
                tech: "AWS"
            },
            {
                tech: "Socket.io"
            },
            {
                tech: "Nodemailer"
            },
        ]
    },
    {
        id: 1,
        projectName: "mernspace-auth-service",
        url: "https://github.com/riteshbenjwal/mernspace-auth-service",
        image: "projects/culyte.png",
        projectDetail: "This MERN Stack project with microservices architecture demonstrates my skills in building and deploying scalable, reliable, and maintainable software systems.",
        technologiesUsed: [
            {
                tech: "Microservices architecture"
            },
            {
                tech: "REST Api design"
            },
            {
                tech: "Development in Docker"
            },
            {
                tech: "MERN Stack"
            },
            {
                tech: "Multi Tenant System"
            },
        ]
    },
    {
        id: 2,
        projectName: "Tanstack-query",
        url: "https://github.com/riteshbenjwal/Tanstack-query",
        image: "projects/jmm.png",
        projectDetail: "Developed a React application using TanStack Query to manage data fetching and caching. The application provides a seamless user experience by ensuring that data is always up-to-date and available, even when the network is slow or unreliable.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "vite"
            },
            {
                tech: "expressJS"
            },
            {
                tech: "TanStack Query"
            },
        ]
    },
    {
        id: 2,
        projectName: "Air-bnb Clone",
        url: "hhttps://github.com/riteshbenjwal/airbnb-clone",
        image: "projects/airbnb.png",
        projectDetail: "Developed a full-stack Airbnb clone using Next.js, Tailwind CSS, Prisma, SQL, and NextAuth. The application allows users to create and book listings, as well as manage their reservations.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "SQL"
            },
            {
                tech: "NextAuth"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "prisma"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
