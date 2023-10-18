const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Chandigarh University',
                degree: 'MCA CC & DevOps',
                detail: "Master's Degree in Cloud computing & Devops from Chandigarh University.",
                year: '2021-2023'
            },
            {
                id: 1,
                title: 'Cluster University',
                degree: 'BCA',
                detail: "Completed BCA from SPMR College of commerce .",
                year: '2018-2021'
            },
            {
                id: 2,
                title: 'Kendriya Vidhyalya',
                degree: 'PCM, Science Subjects',
                detail: "Completed 10th & 12th in Science subjects from Kendriya Vidhyalya Miransahib ",
                year: '2014-2018'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Gekky Bones Lab PVT LTd',
                role: 'Full stack Developer',
                url: 'https://www.geekybones.com/',
                desc: 'As a Full stack developer, I use Node, Next,Nest & JavaScript to build software & applications.',
                year: '09/2022 - Present',
                location: 'Mohali, Indaia'
            },
            {
                id: 2,
                title: 'crio.do',
                role: 'Trainee',
                url: 'https://www.crio.do/',
                desc: 'As an Trainee, I learned MERN stack Development & built i3+ Guided and Unguided Projects.',
                year: '3/2021- 10/2021',
                location: 'Remote,India'
            },
            {
                id: 3,
                title: 'Freelance Digital Marketing ',
                role: 'Digital marketer | Blogger',
                url: 'no website',
                desc: "Built micro niche sites in Tech and Health Domain and scaled the traffic from 100-200 users per day to 7000-8000 users per day. Worked with Client and Delivered Seo optimized Content.",
                year: '09/2019 - 01/2021',
                location: 'Jammu, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
