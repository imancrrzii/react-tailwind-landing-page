// navbar data

import { FiBarChart, FiLayout, FiServer, FiUploadCloud } from "react-icons/fi";

export const menuItems = {
    platform: {
      title: 'Platform',
      sections: [
        {
          title: 'BUILD',
          items: [
            { name: 'Design', desc: 'Build high-performing sites' },
            { name: 'Interactions', desc: 'Craft immersive experiences' },
            { name: 'Page building', desc: 'Launch simple landing pages quickly', isNew: true },
          ]
        },
        {
          title: 'MANAGE',
          items: [
            { name: 'CMS', desc: 'Manage content at scale' },
            { name: 'Localization', desc: 'Customize your site for a worldwide audience' },
            { name: 'Security', desc: 'Ensure your site stays safe' },
          ]
        },
        {
          title: 'OPTIMIZE',
          items: [
            { name: 'Analyze', desc: 'Understand how your site performs', isNew: true },
            { name: 'Optimize', desc: 'Maximize conversions with testing', isNew: true },
            { name: 'SEO', desc: 'Grow your reach with fine-tuned controls' },
          ]
        },
      ]
    },
    solutions: {
      title: 'Solutions',
      items: [
        { name: 'For Enterprise', desc: 'Scale your business' },
        { name: 'For Startups', desc: 'Move faster with CodeTutor' },
        { name: 'For Agencies', desc: 'Win more clients' },
        { name: 'For Marketing', desc: 'Drive more growth' },
      ]
    },
    resources: {
      title: 'Resources',
      items: [
        { name: 'Showcase', desc: 'Get inspired by the community' },
        { name: 'Blog', desc: 'Read latest news and articles' },
        { name: 'Documentation', desc: 'Learn from our resources' },
        { name: 'Community', desc: 'Join the conversation' },
      ]
    }
  };


// company logo data

   export const logos = [
    { src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white", alt: "HTML", width: 130, height: 27 },
    { src: "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white", alt: "CSS",  width: 130, height: 27 },
    { src: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white", alt: "Monda.com",  width: 130, height: 27 },
    { src: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white", alt: "Ted", width: 130, height: 27 },
    { src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E", alt: "Dropbox",  width: 130, height: 27},
    { src: "https://img.shields.io/badge/CodeIgniter-EF4223?style=for-the-badge&logo=codeigniter&logoColor=white", alt: "", width: 130, height: 27 },
    { src: "https://img.shields.io/badge/Flask-%23323330?style=for-the-badge&logo=flask&logoColor=white", alt: "greenhouse",  width: 130, height: 27 },
    { src: "https://img.shields.io/badge/react-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black", alt: "Vice",  width: 130, height: 27 },
    { src: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white", alt: "Ideo",  width: 130, height: 27 },
    { src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white", alt: "Philips",  width: 130, height: 27},
    { src: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white", alt: "Mural", width: 130, height: 27 },
    { src: "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white", alt: "ABM Industries",  width: 130, height: 27 },
    { src: "https://img.shields.io/badge/express-%23000000.svg?style=for-the-badge&logo=express&logoColor=white", alt: "The New York Times", width: 130, height: 27 },
    { src: "https://img.shields.io/badge/node-5FA04E.svg?style=for-the-badge&logo=node.js&logoColor=white", alt: "Upwork", width: 130, height: 27 },
    { src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white", alt: "decathlon logo",  width: 130, height: 27 },
  ];


// features section data

export const features = [
    {
      icon: FiLayout,
      title: "Design and build",
      description: "Designers can take control of HTML, CSS, and JavaScript in a visual canvas — while marketers can work with pre-made, design-approved building blocks.",
      link: "#design-build"
    },
    {
      icon: FiUploadCloud,
      title: "Publish and edit",
      description: "Choose how you want to add, edit, and update content at scale with our CMS: visually in our platform or programmatically through our headless APIs.",
      link: "#publish-edit"
    },
    {
      icon: FiBarChart,
      title: "Analyze and optimize",
      description: "Transform your site into your most valuable marketing asset with native tools for AI-powered personalization, A/B testing, SEO, localization, and more.",
      link: "#analyze-optimize"
    },
    {
      icon: FiServer,
      title: "Scale and collaborate",
      description: "15,000 websites are published every hour. Confidently scale your site with tools for hosting, security, compliance, and publishing — plus connect to your tech stack with integrations and APIs.",
      link: "#scale-collaborate"
    }
  ];

// design section data
export const tabsData = [
    {
      id: 'tab1',
      title: 'Design without limitless',
      subtitle: 'CodeTutor puts the power of code into a visual canvas so every team can create stunning websites quickly — and extend the power of their work with custom code.',
      video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/design.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/670570322cf4b274d716fed4_design-without-limits.avif',
      cta: {
        text: 'Discover Designer',
        link: '/designer'
      }
    },
    {
      id: 'tab2',
      title: 'Create complex, rich interactions',
      subtitle: 'Design scroll-based and multi-step interactions and animations and easily work with GSAP, Spline, 3D, Lottie, and Rive — all without even thinking about code.',
      video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/complex-rich-animations.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057032ad30932a68cd9d18_animations.avif',
      cta: {
        text: 'Discover Interactions',
        link: '/interactions-animations'
      }
    },
    {
      id: 'tab3',
      title: 'Empower everyone to build on-brand sites',
      subtitle: 'Give less technical teams the tools they need to build confidently with reusable design systems powered by variables, components, and libraries.',
      video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/build-on-brand-sites.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67058d52036e5522e27966de_build-on-brand.avif',
      cta: {
        text: 'Discover page building',
        link: '/page-building'
      }
    },
    {
      id: 'tab4',
      title: 'Create even faster with the CodeTutor AI Assistant',
      subtitle: "CodeTutor's AI Assistant lets you build faster and more efficiently by applying your site's existing design system to new page sections.",
      video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/webflow-ai-assistant.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/670570323f08ce0aed3368e4_ai-assistant.avif',
      cta: {
        text: 'Discover AI Assistant',
        link: '/ai'
      }
    }
  ];

// customer section data

export const customerData = [
    {
      id: 'techstart',
      logo: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff7808fef2aeecfff1b_Outliant.svg',
      video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/lattice.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa88e83cdb12efc5b3_lattice-bg.webp',
      stat: '94%',
      statDesc: 'job placement rate',
      quote: "CodeTutor's platform revolutionized how we train our junior developers. The AI-powered guidance and interactive exercises have significantly accelerated our onboarding process.",
      author: 'Sarah Chen — CTO',
      link: '/customers/techstart'
    },
    {
      id: 'edutech',
      logo: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff8ace31b63debbf4d9_Jasper.svg',
      video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/outliant.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp',
      stat: '85%',
      statDesc: 'completion rate',
      quote: "CodeTutor has transformed our computer science curriculum. Students are more engaged and show better understanding of complex programming concepts thanks to the interactive learning approach.",
      author: 'Dr. Michael Torres — Department Head',
      link: '/customers/edutech'
    },
    {
      id: 'devacademy',
      logo: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff8a7ffdf748142d329_Fivetran.svg',
      video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/fivetran.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp',
      stat: '3x',
      statDesc: 'faster learning',
      quote: "Our students consistently report that CodeTutor's personalized learning paths and AI assistance help them grasp programming concepts three times faster than traditional methods.",
      author: 'Rachel Kim — Lead Instructor',
      link: '/customers/devacademy'
    }
  ];


//   about section data

export const aboutFeatures = [
    {
      id: "ai-1",
      title: "Generate styled content quickly",
      description:
        "Whether you're trying to build even faster or you're just new to codeTutor, you can use AI Assistant to generate new page sections using your site's existing design system.",
      link: "https://help.webflow.com/hc/en-us/articles/34205154436243",
      linkText: "Explore documentation",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/design-assistant-ai.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/6705703132e8c6c85119c96d_design-assistant.avif",
    },
    {
      id: "ai-2",
      title: "Generate text right within codetutor",
      description:
        "Quickly and easily create new content, natively within CodeTutor. From generating first-pass content to publishing at speed, the AI Assistant can help you develop variations with just a few clicks.",
      link: "https://help.webflow.com/hc/articles/34295931022099",
      linkText: "Explore documentation",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/writing-assistant-square.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057031236cd506cd0ae632_writing-assistant.avif",
    },
    {
      id: "ai-3",
      title: "Generate text right within CodeTutor",
      description:
        "Quickly and easily create new content, natively within codetutor. From generating first-pass content to publishing at speed, the AI Assistant can help you develop variations with just a few clicks.",
      link: "https://help.webflow.com/hc/articles/34295931022099",
      linkText: "Explore documentation",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/writing-assistant-square.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057031236cd506cd0ae632_writing-assistant.avif",
    },
  ];


//   footer section data

export const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Design', href: '/design' },
        { name: 'Interactions', href: '/interactions' },
        { name: 'Page Building', href: '/page-building' },
        { name: 'AI Assistant', href: '/ai' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Community', href: '/community' },
        { name: 'Support', href: '/support' },
        { name: 'API', href: '/api' }
      ]
    }
  };