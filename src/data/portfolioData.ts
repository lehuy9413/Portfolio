import type {
  NavRoute,
  Project,
  Skill,
  Experience,
  SocialLink,
  SkillCategory,
} from '@/types';

export const NAV_ROUTES: readonly NavRoute[] = [
  {
    id: 'hero',
    label: { vi: 'Trang chủ', en: 'Home' },
    href: '#hero',
  },
  {
    id: 'about',
    label: { vi: 'Về tôi', en: 'About' },
    href: '#about',
  },
  {
    id: 'projects',
    label: { vi: 'Dự án', en: 'Projects' },
    href: '#projects',
  },
  {
    id: 'skills',
    label: { vi: 'Kỹ năng', en: 'Skills' },
    href: '#skills',
  },
  {
    id: 'experience',
    label: { vi: 'Kinh nghiệm', en: 'Experience' },
    href: '#experience',
  },
  {
    id: 'contact',
    label: { vi: 'Liên hệ', en: 'Contact' },
    href: '#contact',
  },
] as const;

export const PERSONAL_INFO = {
  firstName: 'LE',
  middleName: 'QUOC',
  lastName: 'HUY',
  nameParts: ['LE', 'QUOC', 'HUY'] as const,
  fullName: 'LE QUOC HUY',
  title: {
    vi: 'Frontend Developer',
    en: 'Frontend Developer',
  },
  tagline: {
    vi: 'Xây dựng giao diện web hiện đại, chuẩn type-safe và tối ưu trải nghiệm người dùng.',
    en: 'Building clean, type-safe, and responsive web applications with modern React.',
  },
  aboutParagraphs: {
    vi: [
      'Tôi là Frontend Developer với niềm đam mê xây dựng các giao diện web & mobile hiện đại, tối ưu hiệu năng và trải nghiệm người dùng đến từ Thành phố Hồ Chí Minh, Việt Nam.',
      'Công nghệ nòng cốt gồm HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS cùng nền tảng phát triển ứng dụng di động React Native và Flutter (Dart). Tôi luôn chú trọng Clean Code, tối ưu trải nghiệm tương tác mượt mà và chuyển đổi thiết kế phức tạp thành các giải pháp web bền vững.',
    ],
    en: [
      'I am a Frontend Developer based in Ho Chi Minh City, Vietnam, passionate about crafting modern, high-performance web & mobile applications with delightful user experiences.',
      'Core technologies include HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS, along with cross-platform mobile development using React Native and Flutter (Dart). I prioritize Clean Code, smooth micro-interactions, and turning complex design concepts into sustainable, accessible solutions.',
    ],
  },
  email: 'lehuy9413@gmail.com',
  phone: '077-489-4626',
  location: {
    vi: 'Thành phố Hồ Chí Minh, Việt Nam',
    en: 'Ho Chi Minh City, Vietnam',
  },
  github: 'https://github.com/lehuy9413',
  linkedin: 'https://www.linkedin.com/in/huy-qu%E1%BB%91c-l%C3%AA-b4531b445/',
  cvUrl: '/CV_LE_QUOC_HUY.pdf',
} as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/lehuy9413',
    iconName: 'Github',
  },
  {
    platform: 'phone',
    label: 'Phone',
    url: 'tel:+84774894626',
    iconName: 'Phone',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/huy-qu%E1%BB%91c-l%C3%AA-b4531b445/',
    iconName: 'Linkedin',
  },
  {
    platform: 'email',
    label: 'Email',
    url: 'mailto:lehuy9413@gmail.com',
    iconName: 'Mail',
  },
] as const;

export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: 'emergency-dispatch-system',
    title: 'AI-Assisted Emergency Dispatch System',
    subtitle: {
      vi: 'Hệ thống điều phối cứu nạn & quản lý sự cố thông minh',
      en: 'AI-Assisted Emergency Dispatch & Incident Management',
    },
    description: {
      vi: 'Nền tảng ứng cứu khẩn cấp tích hợp mô hình thị giác AI (Qwen2.5-VL), bản đồ số Mapbox và kết nối WebSocket thời gian thực hỗ trợ điều phối viên và nhân sự hiện trường.',
      en: 'A mission-critical incident dispatch system integrating Qwen2.5-VL vision-language model, Mapbox routing, and real-time WebSockets for field teams and dispatchers.',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com/lehuy9413',
    githubUrl: 'https://github.com/lehuy9413',
    tags: ['ReactJS', 'React Native', 'Express', 'PostgreSQL', 'WebSocket', 'Mapbox', 'AI Pipeline'],
    highlights: [
      {
        title: {
          vi: 'Tích hợp Pipeline AI',
          en: 'AI Pipeline Integration',
        },
        description: {
          vi: 'Tích hợp mô hình Qwen2.5-VL tự động phân loại nguy cơ (#Fire, #Accident, #Traffic_Jam) và đánh giá mức độ nghiêm trọng 3 cấp độ.',
          en: 'Fine-tuned and integrated Qwen2.5-VL to automate hazard classification and 3-tier severity scoring.',
        },
      },
      {
        title: {
          vi: 'Đồng bộ WebSocket thời gian thực',
          en: 'Real-Time Mission Sync',
        },
        description: {
          vi: 'Đồng bộ vòng đời nhiệm vụ (En Route, On Scene, Completed) qua WebSockets và biên bản kỹ thuật số kèm hình ảnh bằng chứng.',
          en: 'Synchronized mission lifecycles via WebSockets and built digital closure reports with photo evidence.',
        },
      },
      {
        title: {
          vi: 'Client Field App & Offline Caching',
          en: 'Offline-First Field Client',
        },
        description: {
          vi: 'Hỗ trợ cảnh báo âm thanh ưu tiên cao, lưu trữ offline và điều hướng tránh kẹt xe theo thời gian thực.',
          en: 'Field client featuring high-priority audible push alerts, offline caching, and turn-by-turn navigation.',
        },
      },
    ],
  },
  {
    id: 'smart-parking-system',
    title: 'Smart Parking Building Management',
    subtitle: {
      vi: 'Hệ thống quản lý bãi xe thông minh thời gian thực',
      en: 'Smart Parking Building Management System',
    },
    description: {
      vi: 'Giải pháp quản lý bãi đỗ xe thông minh gồm mobile app cho tài xế và dashboard ReactJS giám sát trạng thái chỗ trống qua WebSocket cùng tính toán phí đỗ xe tự động.',
      en: 'A comprehensive parking solution with driver mobile app for automated QR check-in, parking slot reservations, and a real-time ReactJS monitoring dashboard.',
    },
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com/lehuy9413',
    githubUrl: 'https://github.com/lehuy9413',
    tags: ['ReactJS', 'React Native', 'NodeJS', 'Express', 'MongoDB', 'Socket.io'],
    highlights: [
      {
        title: {
          vi: 'Dashboard giám sát thời gian thực',
          en: 'Real-Time Dashboard',
        },
        description: {
          vi: 'Giám sát mật độ bãi đỗ xe theo thời gian thực qua WebSockets và tự động tính toán phí linh hoạt.',
          en: 'Developed a real-time ReactJS dashboard to monitor slot occupancy via WebSockets and dynamic fee calculations.',
        },
      },
      {
        title: {
          vi: 'Mobile App đặt chỗ & Check-in QR',
          en: 'Mobile Driver App',
        },
        description: {
          vi: 'Ứng dụng mobile đa nền tảng cho tài xế đặt chỗ trước, check-in bằng mã QR và mô phỏng nhận diện biển số xe (ALPR).',
          en: 'Built a cross-platform mobile app for drivers with automated QR-code check-in and simulated license plate recognition (ALPR).',
        },
      },
      {
        title: {
          vi: 'Kiến trúc API & Đồng bộ dữ liệu',
          en: 'Event-Driven Architecture',
        },
        description: {
          vi: 'Xử lý các sự kiện xe ra vào đồng thời mà không bị xung đột vị trí đỗ.',
          en: 'Handled concurrent check-in/out events seamlessly with optimistic state synchronization.',
        },
      },
    ],
  },
  {
    id: 'freshmarket-ecommerce',
    title: 'Fresh Agriculture E-Commerce (FreshMarket)',
    subtitle: {
      vi: 'Nền tảng thương mại điện tử nông sản sạch',
      en: 'Fresh Agriculture E-Commerce Platform',
    },
    description: {
      vi: 'Sàn thương mại điện tử nông sản trực tuyến với bộ lọc sản phẩm mượt mà, quy trình giỏ hàng/thanh toán tối ưu và xác thực bảo mật Google OAuth 2.0 / JWT.',
      en: 'An online agricultural produce marketplace featuring instant product filtering, shopping cart workflows, and secure Google OAuth 2.0 / JWT authentication.',
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com/lehuy9413',
    githubUrl: 'https://github.com/lehuy9413',
    tags: ['ReactJS', 'NodeJS', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
    highlights: [
      {
        title: {
          vi: 'Tối ưu trải nghiệm mua sắm',
          en: 'Faceted Search & Cart UX',
        },
        description: {
          vi: 'Tìm kiếm lọc sản phẩm tức thì, quản lý state giỏ hàng client và thanh toán đa bước trực quan.',
          en: 'Engineered faceted product filtering, reactive client shopping cart state, and smooth checkout flows.',
        },
      },
      {
        title: {
          vi: 'Tối ưu API & Đánh chỉ mục Database',
          en: 'Indexed RESTful APIs',
        },
        description: {
          vi: 'Thiết kế RESTful APIs với database indexing cho đơn hàng khối lượng cao và tích hợp Cloudinary lưu trữ media tối ưu.',
          en: 'Designed RESTful APIs with database indexing for high-integrity order processing and Cloudinary media optimization.',
        },
      },
      {
        title: {
          vi: 'Xác thực bảo mật',
          en: 'Secure Authentication',
        },
        description: {
          vi: 'Tích hợp đăng nhập một chạm Google OAuth 2.0 kết hợp JWT Token Refresh Flow an toàn.',
          en: 'Integrated secure Google OAuth 2.0 and JWT token refresh mechanisms with protected route guards.',
        },
      },
    ],
  },
] as const;

export const SKILL_GROUPS: readonly {
  category: SkillCategory;
  title: { vi: string; en: string };
}[] = [
  {
    category: 'core',
    title: { vi: 'Nền tảng & Ngôn ngữ', en: 'Core & Languages' },
  },
  {
    category: 'ui',
    title: { vi: 'Giao diện & Mobile', en: 'Frontend & Mobile' },
  },
  {
    category: 'state',
    title: { vi: 'Backend & Dữ liệu', en: 'Backend & Data' },
  },
  {
    category: 'tools',
    title: { vi: 'Công cụ & Quy trình', en: 'Tools & DevOps' },
  },
] as const;

export const SKILLS: readonly Skill[] = [
  // Core
  {
    name: 'JavaScript (ES6+)',
    category: 'core',
    description: {
      vi: 'Async/await, DOM APIs, closures, modern ES features.',
      en: 'Async/await, DOM APIs, closures, modern ES features.',
    },
  },
  {
    name: 'TypeScript',
    category: 'core',
    description: {
      vi: 'Generics, union types, type narrowing, strict type safety.',
      en: 'Generics, union types, type narrowing, strict type safety.',
    },
  },
  {
    name: 'Java & SQL',
    category: 'core',
    description: {
      vi: 'Lập trình hướng đối tượng, truy vấn cơ sở dữ liệu quan hệ.',
      en: 'Object-oriented programming, relational database queries.',
    },
  },
  {
    name: 'HTML5 & CSS3',
    category: 'core',
    description: {
      vi: 'Semantic markup, SEO basics, Flexbox, Grid, Responsive.',
      en: 'Semantic markup, SEO basics, Flexbox, Grid, Responsive.',
    },
  },

  // Frontend & Mobile
  {
    name: 'ReactJS',
    category: 'ui',
    description: {
      vi: 'Hooks, custom hooks, context API, component lifecycle.',
      en: 'Hooks, custom hooks, context API, component lifecycle.',
    },
  },
  {
    name: 'React Native',
    category: 'ui',
    description: {
      vi: 'Xây dựng ứng dụng di động đa nền tảng iOS & Android.',
      en: 'Cross-platform mobile application development for iOS & Android.',
    },
  },
  {
    name: 'Flutter & Dart',
    category: 'ui',
    description: {
      vi: 'Phát triển ứng dụng di động đa nền tảng, thiết kế UI linh hoạt, mượt mà.',
      en: 'Cross-platform mobile app development with Dart, responsive UI.',
    },
  },
  {
    name: 'Tailwind CSS',
    category: 'ui',
    description: {
      vi: 'Utility-first styling, responsive design, dark mode architecture.',
      en: 'Utility-first styling, responsive design, dark mode architecture.',
    },
  },
  {
    name: 'Framer Motion',
    category: 'ui',
    description: {
      vi: 'Micro-interactions, layout transitions, gesture controls.',
      en: 'Micro-interactions, layout transitions, gesture controls.',
    },
  },

  // Backend & State
  {
    name: 'NodeJS & Express',
    category: 'state',
    description: {
      vi: 'Xây dựng RESTful APIs, middleware, xử lý xác thực JWT.',
      en: 'Building RESTful APIs, middleware, JWT authentication.',
    },
  },
  {
    name: 'MongoDB & PostgreSQL',
    category: 'state',
    description: {
      vi: 'Thiết kế schema, tối ưu hóa truy vấn và indexing dữ liệu.',
      en: 'Schema design, query optimization, and indexing.',
    },
  },
  {
    name: 'WebSockets & Socket.io',
    category: 'state',
    description: {
      vi: 'Giao tiếp 2 chiều thời gian thực, đồng bộ trạng thái trực tiếp.',
      en: 'Real-time bidirectional communication and live state sync.',
    },
  },
  {
    name: 'AI/VLM Integration',
    category: 'state',
    description: {
      vi: 'Tích hợp mô hình Vision-Language (Qwen2.5-VL), phân loại dữ liệu.',
      en: 'Integration of Vision-Language models (Qwen2.5-VL) and workflows.',
    },
  },

  // Tools
  {
    name: 'Git & GitHub Workflows',
    category: 'tools',
    description: {
      vi: 'Quản lý phiên bản mã nguồn, branching, pull requests, code reviews.',
      en: 'Version control, feature branching, pull requests, code reviews.',
    },
  },
  {
    name: 'Vite & Build Tooling',
    category: 'tools',
    description: {
      vi: 'Build tool hiện đại, HMR siêu nhanh, tối ưu hóa bundle.',
      en: 'Modern build tool, lightning-fast HMR, bundle optimizations.',
    },
  },
  {
    name: 'Agile & Unit Testing',
    category: 'tools',
    description: {
      vi: 'Quy trình Scrum/Agile, unit testing, CI/CD pipeline basics.',
      en: 'Agile methodologies, unit testing, code quality assurance.',
    },
  },
  {
    name: 'Postman & Mapbox',
    category: 'tools',
    description: {
      vi: 'Kiểm thử API, dịch vụ bản đồ số và định tuyến điều hướng.',
      en: 'API testing, geospatial routing, and location services.',
    },
  },
] as const;

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'exp-1',
    role: {
      vi: 'Software Engineer Intern',
      en: 'Software Engineer Intern',
    },
    company: 'FPT Software',
    location: {
      vi: 'TP. Hồ Chí Minh, Việt Nam',
      en: 'Ho Chi Minh City, Vietnam',
    },
    period: {
      vi: '09/2025 – 12/2025',
      en: '09/2025 – 12/2025',
    },
    current: false,
    summary: {
      vi: 'Tham gia phát triển và bảo trì các module web/mobile sử dụng ReactJS và NodeJS theo quy trình Agile trong môi trường doanh nghiệp.',
      en: 'Participated in developing and maintaining web/mobile modules using ReactJS/NodeJS, adhering to Agile methodologies.',
    },
    achievements: [
      {
        vi: 'Phối hợp với các kỹ sư dày dạn kinh nghiệm để triển khai RESTful APIs và tối ưu hóa các UI component.',
        en: 'Collaborated with senior engineers to implement RESTful APIs and optimize UI components.',
      },
      {
        vi: 'Thực hiện kiểm thử đơn vị (unit testing), tham gia code review và quản lý Git workflow chuyên nghiệp.',
        en: 'Conducted unit testing, code reviews, and managed Git workflows in an enterprise team environment.',
      },
      {
        vi: 'Đóng góp hoàn thiện các tính năng cốt lõi đảm bảo hiệu năng và chuẩn clean code.',
        en: 'Contributed to core product features ensuring high performance and clean code standards.',
      },
    ],
    techStack: ['ReactJS', 'NodeJS', 'TypeScript', 'RESTful APIs', 'Unit Testing', 'Git'],
  },
  {
    id: 'exp-2',
    role: {
      vi: 'Kỹ sư Phần mềm (Software Engineer)',
      en: 'Software Engineer',
    },
    company: 'Đại học FPT (FPT University)',
    location: {
      vi: 'TP. Hồ Chí Minh, Việt Nam',
      en: 'Ho Chi Minh City, Vietnam',
    },
    period: {
      vi: '2022 – 2026',
      en: '2022 – 2026',
    },
    current: true,
    summary: {
      vi: 'Chuyên ngành Kỹ thuật Phần mềm. Trang bị nền tảng chuyên sâu về phát triển phần mềm hiện đại, lập trình hướng đối tượng, kiến trúc web/mobile và tích hợp AI.',
      en: 'Majoring in Software Engineering with strong foundations in modern software development, web/mobile architecture, and AI integration.',
    },
    achievements: [
      {
        vi: 'Xây dựng thành công hệ thống điều phối cứu nạn tích hợp AI Vision-Language (Qwen2.5-VL) và WebSocket.',
        en: 'Built an AI-assisted emergency dispatch system integrating Qwen2.5-VL and real-time WebSockets.',
      },
      {
        vi: 'Đạt các chứng chỉ chuyên nghiệp của Coursera: Full Stack Web Development, Application Development, Amazon Junior Software Developer.',
        en: 'Earned professional certifications: Full Stack Web Development, Application Development, Amazon Junior Software Developer.',
      },
      {
        vi: 'Hoàn thành nhiều dự án thực tế về IoT bãi xe thông minh và sàn thương mại điện tử nông sản.',
        en: 'Completed practical projects in smart parking management and agricultural e-commerce.',
      },
    ],
    techStack: ['Java', 'JavaScript', 'TypeScript', 'React', 'React Native', 'NodeJS', 'SQL', 'MongoDB'],
  },
] as const;

export const CONTACT_STRINGS = {
  heading: {
    vi: 'Liên hệ với tôi',
    en: "Let's work together",
  },
  subheading: {
    vi: 'Tôi luôn sẵn sàng trao đổi về các dự án mới, cơ hội hợp tác hoặc trao đổi chuyên môn.',
    en: 'Feel free to reach out if you have an open role, a project inquiry, or simply want to connect.',
  },
  emailLabel: {
    vi: 'Email cá nhân',
    en: 'Personal Email',
  },
  locationLabel: {
    vi: 'Địa điểm làm việc',
    en: 'Location',
  },
  nameLabel: {
    vi: 'Họ và tên',
    en: 'Your Name',
  },
  emailInputLabel: {
    vi: 'Địa chỉ Email',
    en: 'Email Address',
  },
  subjectLabel: {
    vi: 'Tiêu đề',
    en: 'Subject',
  },
  messageLabel: {
    vi: 'Nội dung tin nhắn',
    en: 'Message',
  },
  sendButton: {
    vi: 'Gửi tin nhắn',
    en: 'Send Message',
  },
  sendingButton: {
    vi: 'Đang gửi...',
    en: 'Sending...',
  },
  successMessage: {
    vi: 'Cảm ơn bạn! Tin nhắn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất.',
    en: 'Thank you! Your message has been received. I will reply soon.',
  },
  copySuccess: {
    vi: 'Đã sao chép email!',
    en: 'Copied email to clipboard!',
  },
  errors: {
    nameRequired: {
      vi: 'Vui lòng nhập họ và tên.',
      en: 'Please enter your name.',
    },
    nameShort: {
      vi: 'Họ tên cần có ít nhất 2 ký tự.',
      en: 'Name must be at least 2 characters.',
    },
    emailRequired: {
      vi: 'Vui lòng nhập địa chỉ email.',
      en: 'Please enter your email.',
    },
    emailInvalid: {
      vi: 'Địa chỉ email không hợp lệ.',
      en: 'Please enter a valid email address.',
    },
    subjectRequired: {
      vi: 'Vui lòng nhập tiêu đề.',
      en: 'Please enter a subject.',
    },
    messageRequired: {
      vi: 'Vui lòng nhập nội dung tin nhắn.',
      en: 'Please enter a message.',
    },
    messageShort: {
      vi: 'Nội dung tin nhắn tối thiểu 10 ký tự.',
      en: 'Message must be at least 10 characters.',
    },
  },
} as const;
