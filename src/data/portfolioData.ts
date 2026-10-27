import type {
  NavRoute,
  Project,
  Skill,
  Experience,
  MetricStat,
  SocialLink,
} from '@/types';

export const NAV_ROUTES: readonly NavRoute[] = [
  { id: 'about', label: 'Về tôi', href: '#about' },
  { id: 'projects', label: 'Dự án', href: '#projects' },
  { id: 'skills', label: 'Kỹ năng', href: '#skills' },
  { id: 'experience', label: 'Kinh nghiệm', href: '#experience' },
  { id: 'contact', label: 'Liên hệ', href: '#contact' },
] as const;

export const PERSONAL_INFO = {
  name: 'Huy Le',
  title: 'Frontend Developer (ReactJS / TypeScript)',
  tagline:
    'Xây dựng giao diện hiệu năng cao, type-safe, tối ưu trải nghiệm người dùng và chuyển đổi thiết kế phức tạp thành các component tái sử dụng bền vững.',
  bio: 'Với hơn 4 năm chuyên sâu về hệ sinh thái React, tôi tập trung vào việc tạo ra các ứng dụng web tốc độ cao, khả năng truy cập (A11y) xuất sắc, cùng trải nghiệm thị giác mượt mà 60fps thông qua thiết kế component-driven và TypeScript nghiêm ngặt.',
  location: 'Thành phố Hồ Chí Minh, Việt Nam',
  email: 'lehuy.dev@gmail.com',
  github: 'https://github.com/lehuy9413',
  linkedin: 'https://linkedin.com/in/lehuy-frontend',
  resumeUrl: '#contact',
  availability: 'Sẵn sàng tiếp nhận dự án mới & cơ hội Senior Frontend',
  status: 'Open to Work',
} as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/lehuy9413',
    iconName: 'Github',
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

export const METRIC_STATS: readonly MetricStat[] = [
  {
    label: 'Năm kinh nghiệm',
    value: '4+',
    description: 'Chuyên sâu hệ sinh thái React & TypeScript',
  },
  {
    label: 'Điểm Lighthouse trung bình',
    value: '98+',
    description: 'Tối ưu Core Web Vitals & tải trang < 1.2s',
  },
  {
    label: 'Component tái sử dụng',
    value: '50+',
    description: 'Chuẩn Design System, A11y & Radix Primitives',
  },
  {
    label: 'Code Type-Safety',
    value: '100%',
    description: 'Chế độ strict TS, không runtime type bugs',
  },
] as const;

export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: 'nexus-design-system',
    title: 'Nexus UI Design System & Component Studio',
    subtitle: 'Hệ thống Design System Headless đa nền tảng cho Enterprise',
    description:
      'Thư viện UI component headless enterprise-grade với hơn 45+ components tùy biến cao, hỗ trợ đa theme, kiểm thử tự động A11y bằng Axe-core và zero CSS runtime overhead.',
    longDescription:
      'Được thiết kế nhằm giải quyết bài toán đồng bộ UI/UX cho 12 dự án con trong hệ sinh thái doanh nghiệp. Đạt 100% tuân thủ chuẩn WAI-ARIA, tích hợp Storybook tương tác trực tiếp và hỗ trợ token động thông qua CSS Custom Properties.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com/lehuy9413',
    githubUrl: 'https://github.com/lehuy9413',
    featured: true,
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix Primitives', 'Storybook'],
    highlights: [
      {
        title: 'Compound Components & Headless Architecture',
        description:
          'Thiết kế dạng Compound Components linh hoạt với Radix UI primitives, cho phép mở rộng logic mà không phụ thuộc cấu trúc DOM cố định.',
        metric: '100% WAI-ARIA compliance',
      },
      {
        title: 'Tối ưu Bundle Size & Tree-shaking',
        description:
          'Cấu hình Rollup + ESBuild cho phép tree-shaking tuyệt đối, mỗi component nhập lẻ chỉ chiếm trung bình dưới 2.5KB gzipped.',
        metric: '< 2.5KB / component',
      },
      {
        title: 'Theme Token Engine',
        description:
          'Xây dựng generator tự động tính toán contrast ratio (WCAG AAA) và inject dynamic CSS variables khi hoán đổi giao diện mà không re-render cây DOM.',
        metric: 'Zero-flash theme toggle',
      },
    ],
    architecturePoints: [
      'Strict Polymorphic Component types với TypeScript generics (`as` prop support)',
      'Automated visual regression testing với Playwright và Vitest',
      'Đóng gói Monorepo quản lý bằng Turborepo & Changesets',
    ],
  },
  {
    id: 'pulse-realtime-analytics',
    title: 'Pulse Financial - Realtime Crypto & Stock Dashboard',
    subtitle: 'Nền tảng phân tích tài chính thời gian thực xử lý dữ liệu lớn',
    description:
      'Dashboard giao dịch tài chính trực quan hóa biến động thị trường theo thời gian thực (WebSocket 100 msg/s) với virtualized table, interactive Canvas charts và optimistic updates.',
    longDescription:
      'Ứng dụng xử lý dữ liệu dòng lớn liên tục mà không gây giật lag hoặc tụt FPS. Tận dụng Web Workers để tính toán kỹ thuật (RSI, MACD, Bollinger Bands) ngoài main thread, giữ cho giao diện duy trì ổn định 60fps.',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com/lehuy9413',
    githubUrl: 'https://github.com/lehuy9413',
    featured: true,
    tags: ['React 18', 'TypeScript', 'TanStack Query', 'Zustand', 'Web Workers', 'HTML5 Canvas'],
    highlights: [
      {
        title: 'Virtual List 50,000+ Dòng dữ liệu',
        description:
          'Áp dụng TanStack Virtual để render danh sách sổ lệnh (order book) khổng lồ chỉ tính toán các element nằm trong viewport.',
        metric: 'Duy trì 60 FPS mượt mà',
      },
      {
        title: 'Off-main-thread Computation với Web Worker',
        description:
          'Chuyển toàn bộ logic tính toán chỉ số trung bình động và parse dữ liệu WebSocket vào background worker, ngăn chặn main-thread blockage.',
        metric: 'Giảm 75% Total Blocking Time',
      },
      {
        title: 'Optimistic UI & Cache Normalization',
        description:
          'Quản lý state đặt lệnh bằng Zustand + TanStack Query mutation, cập nhật số dư tức thời trên giao diện với cơ chế rollback an toàn khi API gặp sự cố.',
        metric: 'Phản hồi người dùng tức thì 0ms',
      },
    ],
    architecturePoints: [
      'Custom hook `useWebSocketStream` với cơ chế Exponential Backoff auto-reconnect',
      'Custom Canvas chart renderer hỗ trợ pan/zoom siêu tốc mượt mà hơn SVG',
      'Memory leak prevention qua strict lifecycle cleanup và EventTarget dispose',
    ],
  },
  {
    id: 'flowstate-workflow-builder',
    title: 'FlowState - Collaborative Visual Workflow Builder',
    subtitle: 'Trình biên tập quy trình tự động hóa dạng Node Canvas kéo thả',
    description:
      'Nền tảng thiết kế quy trình kéo thả dạng node (node-based editor) hỗ trợ cộng tác thời gian thực, quản lý lịch sử Undo/Redo phân nhánh và kiểm tra lỗi logic đồ thị (DAG validation).',
    longDescription:
      'Cung cấp trải nghiệm vẽ luồng công việc trực quan giống Figma/Notion. Tích hợp thuật toán Topological Sort để phát hiện vòng lặp vô hạn (circular dependencies) ngay khi người dùng nối kết nối trên canvas.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://github.com/lehuy9413',
    githubUrl: 'https://github.com/lehuy9413',
    featured: true,
    tags: ['React 18', 'TypeScript', 'Zustand (Temporal)', 'Tailwind CSS', 'Framer Motion', 'WebRTC'],
    highlights: [
      {
        title: 'Kiểm tra chu trình Đồ thị (DAG Cycle Detection)',
        description:
          'Thuật toán duyệt đồ thị Tarjan / DFS chạy ngay khi thả kết nối, cảnh báo và chặn liên kết tạo loop ngay tại client.',
        metric: 'Kiểm tra tức thì trong < 1ms',
      },
      {
        title: 'Hệ thống Undo/Redo phân nhánh (Time Travel)',
        description:
          'Kiến trúc state bất biến với Immer middleware trên Zustand, cho phép quay ngược trạng thái các thao tác kéo thả và chỉnh sửa node.',
        metric: 'Hỗ trợ 50 bước lịch sử mượt mà',
      },
      {
        title: 'Spatial Indexing cho Canvas Viewport Culling',
        description:
          'Áp dụng thuật toán chia vùng không gian (QuadTree / R-Tree) chỉ render các node và dây dẫn (bezier curve) nằm trong tầm nhìn của người dùng.',
        metric: 'Hỗ trợ hơn 1,000 nodes trên canvas',
      },
    ],
    architecturePoints: [
      'Custom SVG dynamic Bezier curve path calculator with tangent snapping',
      'Multi-cursor presence synchronization qua WebRTC DataChannels',
      'Keyboard shortcut engine với access key memoization',
    ],
  },
] as const;

export const SKILL_GROUPS: readonly {
  category: 'core' | 'ui' | 'state' | 'tools';
  title: string;
  description: string;
  iconName: string;
}[] = [
  {
    category: 'core',
    title: 'Core Technologies',
    description: 'Nền tảng vững chắc với JavaScript hiện đại và type safety nghiêm ngặt.',
    iconName: 'Code2',
  },
  {
    category: 'ui',
    title: 'UI & Design Systems',
    description: 'Xây dựng giao diện responsive, micro-interactions và khả năng truy cập cao.',
    iconName: 'Layout',
  },
  {
    category: 'state',
    title: 'State & Data Architecture',
    description: 'Quản lý state quy mô lớn, cache normalization và bất đồng bộ hiệu quả.',
    iconName: 'Database',
  },
  {
    category: 'tools',
    title: 'Engineering & Practices',
    description: 'Tối ưu hiệu năng, công cụ build thế hệ mới và văn hóa Clean Code.',
    iconName: 'Wrench',
  },
] as const;

export const SKILLS: readonly Skill[] = [
  // Core
  {
    name: 'React 18+ (Hooks, Fiber, Concurrent)',
    category: 'core',
    level: 'Expert',
    iconName: 'Atom',
    description: 'useTransition, useDeferredValue, Custom Hooks, Server Components.',
    isPrimary: true,
  },
  {
    name: 'TypeScript (Strict Mode)',
    category: 'core',
    level: 'Expert',
    iconName: 'FileCode2',
    description: 'Generics, Conditional Types, Template Literals, Strict Type-Safety.',
    isPrimary: true,
  },
  {
    name: 'Modern JavaScript (ES2023+)',
    category: 'core',
    level: 'Expert',
    iconName: 'Cpu',
    description: 'Async/Await, Event Loop, Closures, Prototypal Inheritance, Web APIs.',
    isPrimary: true,
  },
  {
    name: 'HTML5 & Semantic SEO',
    category: 'core',
    level: 'Expert',
    iconName: 'Layers',
    description: 'Semantic tags, OpenGraph, Web Vitals, Structured Data.',
  },
  {
    name: 'Modern CSS & CSS3 Architecture',
    category: 'core',
    level: 'Advanced',
    iconName: 'Palette',
    description: 'Subgrid, Container Queries, CSS Variables, BEM, CSS Modules.',
  },

  // UI
  {
    name: 'Tailwind CSS',
    category: 'ui',
    level: 'Expert',
    iconName: 'Sparkles',
    description: 'Custom Plugins, Design Tokens, JIT Compiler, Dark Mode architecture.',
    isPrimary: true,
  },
  {
    name: 'Framer Motion',
    category: 'ui',
    level: 'Advanced',
    iconName: 'Activity',
    description: 'Layout animations, gesture recognition, physics-based springs, SVG morph.',
    isPrimary: true,
  },
  {
    name: 'Radix UI & Headless UI',
    category: 'ui',
    level: 'Advanced',
    iconName: 'Component',
    description: 'Accessible modal dialogs, popovers, dropdowns tuân thủ chuẩn WCAG AA.',
  },
  {
    name: 'Responsive & Mobile First',
    category: 'ui',
    level: 'Expert',
    iconName: 'Smartphone',
    description: 'Tối ưu hiển thị hoàn hảo từ 320px đến màn hình Ultra-wide 4K.',
  },
  {
    name: 'Design System & Storybook',
    category: 'ui',
    level: 'Advanced',
    iconName: 'BookOpen',
    description: 'Document hóa components, visual test, tokens mapping từ Figma.',
  },

  // State & Data
  {
    name: 'TanStack Query (React Query)',
    category: 'state',
    level: 'Expert',
    iconName: 'RefreshCw',
    description: 'Server state caching, optimistic updates, pagination, infinite scroll.',
    isPrimary: true,
  },
  {
    name: 'Zustand & Redux Toolkit',
    category: 'state',
    level: 'Advanced',
    iconName: 'Sliders',
    description: 'Client state cực nhẹ, selector optimization, slice modular architecture.',
    isPrimary: true,
  },
  {
    name: 'Axios & Fetch Interceptors',
    category: 'state',
    level: 'Advanced',
    iconName: 'Send',
    description: 'Token refresh flow, request retry với exponential backoff, request cancel.',
  },
  {
    name: 'WebSocket & Server-Sent Events',
    category: 'state',
    level: 'Proficient',
    iconName: 'Wifi',
    description: 'Real-time duplex communication, heartbeats, reconnect strategies.',
  },

  // Tools
  {
    name: 'Vite & Bundler Tooling',
    category: 'tools',
    level: 'Expert',
    iconName: 'Zap',
    description: 'ESBuild plugins, code splitting, dynamic imports, rollup chunk strategy.',
    isPrimary: true,
  },
  {
    name: 'Performance Profiling',
    category: 'tools',
    level: 'Advanced',
    iconName: 'Gauge',
    description: 'Chrome DevTools, React DevTools Profiler, Core Web Vitals (LCP, INP, CLS).',
    isPrimary: true,
  },
  {
    name: 'Git & GitHub Workflows',
    category: 'tools',
    level: 'Advanced',
    iconName: 'GitBranch',
    description: 'Git flow, interactive rebase, pull request review, GitHub Actions CI/CD.',
  },
  {
    name: 'Testing (Vitest & Testing Library)',
    category: 'tools',
    level: 'Advanced',
    iconName: 'CheckCircle2',
    description: 'Component unit testing, custom hook testing, mock service worker (MSW).',
  },
] as const;

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Frontend Engineer',
    company: 'Fintech Solutions Corp',
    location: 'TP. Hồ Chí Minh',
    period: '2023 - Hiện tại',
    current: true,
    type: 'work',
    summary:
      'Chịu trách nhiệm kiến trúc và phát triển cổng thông tin quản trị tài sản số, dẫn dắt đội ngũ 5 Frontend Developers chuyển dịch từ legacy SPA sang React 18 + TypeScript.',
    achievements: [
      'Tái cấu trúc code base cũ sang kiến trúc Feature-based, giảm 40% thời gian onboarding nhân sự mới.',
      'Cải thiện chỉ số Interaction to Next Paint (INP) từ 280ms xuống < 65ms bằng kỹ thuật Virtualization và React 18 `useTransition`.',
      'Xây dựng thư viện component dùng chung cho 4 team con, loại bỏ 65% code trùng lặp.',
    ],
    techStack: ['React 18', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Zustand', 'Vite', 'Vitest'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'NexTech Digital Agency',
    location: 'TP. Hồ Chí Minh',
    period: '2021 - 2023',
    current: false,
    type: 'work',
    summary:
      'Trực tiếp phát triển giao diện người dùng cho hơn 8 dự án Web App phức tạp thuộc lĩnh vực E-Commerce, SaaS và Booking platform.',
    achievements: [
      'Đạt điểm 100/100 Google Lighthouse cho 3 trang thương mại điện tử lớn của khách hàng quốc tế.',
      'Tích hợp Stripe payment gateway và real-time chat với kết nối WebSocket ổn định.',
      'Đề xuất và thiết lập quy chuẩn ESLint, Prettier và Husky Pre-commit hooks cho toàn bộ frontend team.',
    ],
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'Axios'],
  },
  {
    id: 'exp-3',
    role: 'Junior Frontend Developer & Open-source Contributor',
    company: 'Vanguard Software Lab',
    location: 'TP. Hồ Chí Minh',
    period: '2020 - 2021',
    current: false,
    type: 'work',
    summary:
      'Tham gia phát triển các module giao diện người dùng, chuyển đổi bản vẽ Figma độ nét cao thành code HTML/CSS/React chuẩn responsive.',
    achievements: [
      'Viết hơn 80+ unit tests với React Testing Library đạt độ bao phủ code (coverage) trên 85%.',
      'Đóng góp pull request sửa lỗi và bổ sung tính năng vào các open-source React components trên GitHub.',
    ],
    techStack: ['ReactJS', 'JavaScript ES6+', 'HTML5/SCSS', 'Webpack', 'Jest', 'Git'],
  },
  {
    id: 'exp-4',
    role: 'Cử nhân Kỹ thuật Phần mềm (Software Engineering)',
    company: 'Đại học Công nghệ Thông tin (UIT)',
    location: 'TP. Hồ Chí Minh',
    period: '2016 - 2020',
    current: false,
    type: 'education',
    summary:
      'Tốt nghiệp chuyên ngành Kỹ thuật Phần mềm loại Giỏi. Nền tảng vững chắc về Cấu trúc dữ liệu & Giải thuật, Thiết kế hướng đối tượng và Mạng máy tính.',
    achievements: [
      'Đồ án tốt nghiệp: Xây dựng hệ thống học tập trực tuyến thời gian thực với ReactJS & WebRTC (Điểm 9.4/10).',
      'Học bổng khuyến khích học tập 3 năm liên tiếp.',
    ],
    techStack: ['Algorithms', 'Data Structures', 'OOP', 'Web Architecture', 'Database Systems'],
  },
] as const;

export const CONTACT_INFO = {
  heading: 'Hãy cùng tạo nên sản phẩm tuyệt vời!',
  subheading:
    'Tôi luôn hào hứng thảo luận về các dự án Web App mới, kiến trúc Frontend hiệu năng cao hoặc cơ hội hợp tác nghề nghiệp.',
  email: 'lehuy.dev@gmail.com',
  phone: '(+84) 941 388 999',
  location: 'Quận 1, Thành phố Hồ Chí Minh (Hỗ trợ On-site hoặc Remote)',
  workingHours: 'Thứ Hai - Thứ Bảy: 08:30 - 18:30 (GMT+7)',
  responseTime: 'Thường phản hồi trong vòng 2-4 giờ làm việc',
} as const;
