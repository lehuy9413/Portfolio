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
  firstName: 'HUY',
  lastName: 'LE',
  fullName: 'HUY LE',
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
      'Tôi là Frontend Developer với niềm đam mê xây dựng các giao diện web hiện đại, tối ưu hiệu năng và trải nghiệm người dùng đến từ Thành phố Hồ Chí Minh, Việt Nam. Tôi tập trung vào kiến trúc component tái sử dụng, khả năng truy cập (A11y) và tính thẩm mỹ chuẩn mực.',
      'Công nghệ nòng cốt gồm React, TypeScript, Next.js, Tailwind CSS, TanStack Query và Zustand. Tôi luôn chú trọng Clean Code, tối ưu trải nghiệm tương tác mượt mà và chuyển đổi thiết kế phức tạp thành các giải pháp web bền vững.',
    ],
    en: [
      'I am a Frontend Developer based in Ho Chi Minh City, Vietnam, passionate about crafting modern, high-performance web applications with delightful user experiences. I focus on reusable component architectures, web accessibility, and clean design systems.',
      'Core technologies include React, TypeScript, Next.js, Tailwind CSS, TanStack Query, and Zustand. I prioritize Clean Code, smooth micro-interactions, and turning complex design concepts into sustainable, accessible web solutions.',
    ],
  },
  email: 'lehuy.dev@gmail.com',
  phone: '(+84) 941 388 999',
  location: {
    vi: 'Thành phố Hồ Chí Minh, Việt Nam',
    en: 'Ho Chi Minh City, Vietnam',
  },
  github: 'https://github.com/lehuy9413',
  linkedin: 'https://linkedin.com/in/lehuy-frontend',
  cvUrl: 'https://github.com/lehuy9413',
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
    url: 'tel:+84941388999',
    iconName: 'Phone',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/lehuy-frontend',
    iconName: 'Linkedin',
  },
  {
    platform: 'email',
    label: 'Email',
    url: 'mailto:lehuy.dev@gmail.com',
    iconName: 'Mail',
  },
] as const;

export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: 'nexus-design-system',
    title: 'Nexus Component Studio',
    subtitle: {
      vi: 'Thư viện UI Headless đa nền tảng',
      en: 'Modular Headless UI Library',
    },
    description: {
      vi: 'Bộ sưu tập UI component headless có khả năng tùy biến cao xây dựng trên nền tảng Radix UI và Tailwind CSS. Hỗ trợ đầy đủ điều hướng bàn phím, dark mode token và kiểm thử tự động.',
      en: 'A collection of accessible, headless React components built on Radix primitives and Tailwind CSS. Features full keyboard navigation, customizable theme tokens, and comprehensive unit tests.',
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com/lehuy9413',
    githubUrl: 'https://github.com/lehuy9413',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Vitest'],
    highlights: [
      {
        title: {
          vi: 'Compound Components',
          en: 'Compound Components',
        },
        description: {
          vi: 'Tách biệt cấu trúc DOM khỏi logic trạng thái giúp mở rộng linh hoạt.',
          en: 'Flexible API design separating layout from state and behavior.',
        },
      },
      {
        title: {
          vi: 'Chuẩn Accessibility (A11y)',
          en: 'Accessibility First',
        },
        description: {
          vi: 'Hỗ trợ phím tắt và thuộc tính ARIA tuân thủ tiêu chuẩn WCAG.',
          en: 'Full keyboard navigation and ARIA attributes compliant with WCAG.',
        },
      },
      {
        title: {
          vi: 'Hệ thống Theme Token',
          en: 'Theme Token System',
        },
        description: {
          vi: 'Chuyển đổi giao diện sáng/tối không giật lag qua CSS Custom Properties.',
          en: 'Zero-runtime CSS variable switching between light and dark modes.',
        },
      },
    ],
  },
  {
    id: 'pulse-realtime-analytics',
    title: 'Pulse Financial Dashboard',
    subtitle: {
      vi: 'Giao diện theo dõi thị trường thời gian thực',
      en: 'Real-Time Market Tracking Interface',
    },
    description: {
      vi: 'Dashboard trực quan hóa dữ liệu giao dịch tài chính với luồng WebSocket thời gian thực, bảng dữ liệu ảo hóa (virtual list) và cập nhật giao diện tức thì (optimistic UI).',
      en: 'A responsive trading and market analytics dashboard handling live WebSocket data feeds with fast chart updates, virtualized order book rendering, and client-side filtering.',
    },
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com/lehuy9413',
    githubUrl: 'https://github.com/lehuy9413',
    tags: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
    highlights: [
      {
        title: {
          vi: 'Virtual List dữ liệu lớn',
          en: 'Virtual List Rendering',
        },
        description: {
          vi: 'Tối ưu DOM recycling giúp render hàng nghìn dòng dữ liệu mượt mà.',
          en: 'Efficient DOM recycling for large transaction feeds without scroll lag.',
        },
      },
      {
        title: {
          vi: 'Quản lý WebSocket Stream',
          en: 'WebSocket Stream Management',
        },
        description: {
          vi: 'Cơ chế tự động kết nối lại với thuật toán Exponential Backoff.',
          en: 'Automatic reconnection logic with exponential backoff on network drop.',
        },
      },
      {
        title: {
          vi: 'Cập nhật Optimistic UI',
          en: 'Optimistic UI Updates',
        },
        description: {
          vi: 'Phản hồi tức thì khi người dùng thực hiện thao tác với cơ chế rollback an toàn.',
          en: 'Immediate feedback for simulated order placement with rollback safeguards.',
        },
      },
    ],
  },
  {
    id: 'flowstate-workflow-builder',
    title: 'FlowState Workflow Editor',
    subtitle: {
      vi: 'Trình biên tập quy trình trực quan dạng Node Canvas',
      en: 'Node-Based Visual Process Builder',
    },
    description: {
      vi: 'Giao diện vẽ quy trình kéo thả dạng node trực quan, hỗ trợ kiểm tra vòng lặp logic (DAG cycle detection), phóng to/thu nhỏ canvas và lịch sử Undo/Redo.',
      en: 'An interactive node canvas interface allowing users to visually connect automated workflow steps, validate node connections, and export configuration schemas.',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com/lehuy9413',
    githubUrl: 'https://github.com/lehuy9413',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    highlights: [
      {
        title: {
          vi: 'Phát hiện vòng lặp đồ thị',
          en: 'Cycle Detection Algorithm',
        },
        description: {
          vi: 'Kiểm tra ngay tại client để ngăn chặn liên kết tạo chu trình vô tận.',
          en: 'Instant graph validation to prevent circular dependencies before saving.',
        },
      },
      {
        title: {
          vi: 'Hệ thống Undo / Redo',
          en: 'Undo / Redo History',
        },
        description: {
          vi: 'Quản lý snapshot lịch sử thao tác kéo thả mượt mà.',
          en: 'State snapshots allowing users to traverse action history smoothly.',
        },
      },
      {
        title: {
          vi: 'Dây nối Bezier động',
          en: 'Custom Bezier Curves',
        },
        description: {
          vi: 'Tính toán đường cong SVG mượt mà theo thời gian thực khi nối các node.',
          en: 'Dynamic SVG connector lines calculated in real time during drag events.',
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
    title: { vi: 'Giao diện & Thiết kế', en: 'UI & Styling' },
  },
  {
    category: 'state',
    title: { vi: 'Quản lý State & API', en: 'State & Data Fetching' },
  },
  {
    category: 'tools',
    title: { vi: 'Công cụ & Quy trình', en: 'Tools & Workflow' },
  },
] as const;

export const SKILLS: readonly Skill[] = [
  // Core
  {
    name: 'React',
    category: 'core',
    description: {
      vi: 'Hooks, custom hooks, context API, component lifecycle.',
      en: 'Hooks, custom hooks, context API, component lifecycle.',
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
    name: 'JavaScript (ES6+)',
    category: 'core',
    description: {
      vi: 'Async/await, DOM manipulation, closures, modern ES features.',
      en: 'Async/await, DOM manipulation, closures, modern ES features.',
    },
  },
  {
    name: 'HTML5 & CSS3',
    category: 'core',
    description: {
      vi: 'Semantic markup, SEO basics, Flexbox, Grid, Subgrid.',
      en: 'Semantic markup, SEO basics, Flexbox, Grid, Subgrid.',
    },
  },

  // UI
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
  {
    name: 'Radix UI Primitives',
    category: 'ui',
    description: {
      vi: 'Accessible modals, popovers, tooltips, dropdowns.',
      en: 'Accessible modals, popovers, tooltips, dropdowns.',
    },
  },
  {
    name: 'Responsive Design',
    category: 'ui',
    description: {
      vi: 'Tối ưu hiển thị đa thiết bị từ Mobile (320px) đến Desktop.',
      en: 'Mobile-first optimization from 320px to wide desktop viewports.',
    },
  },

  // State
  {
    name: 'TanStack Query',
    category: 'state',
    description: {
      vi: 'Server state caching, optimistic updates, pagination.',
      en: 'Server state caching, optimistic updates, pagination.',
    },
  },
  {
    name: 'Zustand',
    category: 'state',
    description: {
      vi: 'Client state store siêu nhẹ, selector optimization.',
      en: 'Lightweight client store with selective re-rendering.',
    },
  },
  {
    name: 'Axios & Fetch APIs',
    category: 'state',
    description: {
      vi: 'HTTP interceptors, error handling, token refresh.',
      en: 'HTTP interceptors, error handling, token refresh.',
    },
  },
  {
    name: 'REST APIs & WebSockets',
    category: 'state',
    description: {
      vi: 'Tích hợp endpoint REST, dữ liệu thời gian thực qua socket.',
      en: 'REST endpoints integration and real-time streaming sockets.',
    },
  },

  // Tools
  {
    name: 'Vite',
    category: 'tools',
    description: {
      vi: 'Build tool thế hệ mới, HMR siêu nhanh, module bundler.',
      en: 'Modern build tool, lightning-fast HMR, bundle optimizations.',
    },
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    description: {
      vi: 'Quản lý phiên bản mã nguồn, branching, pull requests.',
      en: 'Version control, feature branching, code reviews.',
    },
  },
  {
    name: 'Vitest & Testing Library',
    category: 'tools',
    description: {
      vi: 'Unit test cho component và custom hooks.',
      en: 'Unit testing components and custom hooks.',
    },
  },
  {
    name: 'Chrome DevTools',
    category: 'tools',
    description: {
      vi: 'Profiling render, network tab, performance audit.',
      en: 'Profiling re-renders, network inspection, performance audits.',
    },
  },
] as const;

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'exp-1',
    role: {
      vi: 'Frontend Developer',
      en: 'Frontend Developer',
    },
    company: 'TechLab Solutions',
    location: {
      vi: 'TP. Hồ Chí Minh, Việt Nam',
      en: 'Ho Chi Minh City, Vietnam',
    },
    period: {
      vi: '2023 - Hiện tại',
      en: '2023 - Present',
    },
    current: true,
    summary: {
      vi: 'Phát triển các ứng dụng web hướng người dùng sử dụng React và TypeScript. Phối hợp chặt chẽ với UI/UX designer và backend team để xây dựng sản phẩm chất lượng cao.',
      en: 'Developing responsive web applications using React and TypeScript. Collaborating closely with UI/UX designers and backend teams to deliver high-quality digital products.',
    },
    achievements: [
      {
        vi: 'Xây dựng thư viện component tái sử dụng giúp chuẩn hóa UI trên toàn bộ sản phẩm.',
        en: 'Built reusable component libraries reducing UI inconsistency across client modules.',
      },
      {
        vi: 'Áp dụng TanStack Query tối ưu cache dữ liệu, tăng tốc độ phản hồi trên giao diện.',
        en: 'Implemented caching with TanStack Query, improving perceived page transition speeds.',
      },
      {
        vi: 'Chuyển đổi các bản vẽ Figma thành giao diện responsive chính xác và mượt mà.',
        en: 'Converted Figma designs into pixel-perfect, accessible, and mobile-friendly layouts.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'Vite'],
  },
  {
    id: 'exp-2',
    role: {
      vi: 'Junior Frontend Developer',
      en: 'Junior Frontend Developer',
    },
    company: 'NexTech Digital',
    location: {
      vi: 'TP. Hồ Chí Minh, Việt Nam',
      en: 'Ho Chi Minh City, Vietnam',
    },
    period: {
      vi: '2021 - 2023',
      en: '2021 - 2023',
    },
    current: false,
    summary: {
      vi: 'Tham gia xây dựng các trang web khách hàng và hệ thống thương mại điện tử. Phát triển UI component tương tác, sửa lỗi tương thích trình duyệt và tích hợp REST API.',
      en: 'Contributed to client portals and e-commerce websites. Built interactive UI components, resolved cross-browser quirks, and assisted with REST API integrations.',
    },
    achievements: [
      {
        vi: 'Phát triển hơn 20 mẫu trang chuẩn responsive mobile-first.',
        en: 'Developed 20+ responsive page templates adhering to mobile-first best practices.',
      },
      {
        vi: 'Tái cấu trúc các module JavaScript cũ sang React component dạng module.',
        en: 'Refactored legacy vanilla JavaScript modules into structured React components.',
      },
      {
        vi: 'Hỗ trợ thiết lập quy chuẩn ESLint và Git commit cho nhóm frontend.',
        en: 'Assisted in setting up ESLint and Git commit guidelines across the frontend team.',
      },
    ],
    techStack: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/SCSS', 'Git'],
  },
  {
    id: 'exp-3',
    role: {
      vi: 'Cử nhân Kỹ thuật Phần mềm',
      en: 'B.S. in Software Engineering',
    },
    company: 'Đại học Công nghệ Thông tin (UIT)',
    location: {
      vi: 'TP. Hồ Chí Minh, Việt Nam',
      en: 'Ho Chi Minh City, Vietnam',
    },
    period: {
      vi: '2017 - 2021',
      en: '2017 - 2021',
    },
    current: false,
    summary: {
      vi: 'Tốt nghiệp chuyên ngành Kỹ thuật Phần mềm. Trang bị nền tảng vững chắc về cấu trúc dữ liệu, giải thuật, lập trình hướng đối tượng và kiến trúc web.',
      en: 'Graduated in Software Engineering with solid fundamentals in data structures, algorithms, object-oriented programming, and web technologies.',
    },
    achievements: [
      {
        vi: 'Đồ án tốt nghiệp: Ứng dụng cộng tác trực tuyến thời gian thực với React và WebSockets.',
        en: 'Graduation Capstone: Real-time collaborative web application built with React and WebSockets.',
      },
      {
        vi: 'Thành viên tích cực câu lạc bộ lập trình và các hội thảo công nghệ của trường.',
        en: 'Active participant in university developer clubs and technical workshops.',
      },
    ],
    techStack: ['Algorithms', 'Data Structures', 'OOP', 'Web Architecture', 'Databases'],
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
