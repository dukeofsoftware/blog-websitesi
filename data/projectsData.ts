interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Dizi ve Film Takipçisi',
    description: `Projenin amacı, TV dizileri ve filmlerin takibini kolaylaştırmaktır. Benzer uygulamalar olmasına rağmen kendi ihtiyaçlarımı karşılamıyorlardı.`,
    imgSrc: '/static/images/zaratracker.png',
    href: 'https://zaratracker.vercel.app',
  },

]

export default projectsData
