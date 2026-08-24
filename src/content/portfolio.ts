import type { Locale } from "@/lib/i18n";

export type LocalizedText = Record<Locale, string>;

export type CaseStudy = {
  slug: string;
  index: string;
  type: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  context: LocalizedText;
  problem: LocalizedText;
  role: LocalizedText;
  decisions: Record<Locale, string[]>;
  validation: Record<Locale, string[]>;
  outcomes: Record<Locale, string[]>;
  technologies: string[];
  visual: "retail" | "manufacturing" | "integration" | "attendance";
};

export type Experience = {
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  summary: LocalizedText;
  technologies: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-operations",
    index: "01",
    type: { en: "ERP · Retail operations", vi: "ERP · Vận hành bán lẻ" },
    title: { en: "Making complex orders easier to trust", vi: "Giúp đơn hàng phức tạp trở nên đáng tin cậy" },
    summary: {
      en: "An Odoo POS and Purchase customization for daily F&B operations involving promotions, loyalty, vouchers, payments, tax, delivery fees, and reporting.",
      vi: "Giải pháp tùy chỉnh Odoo POS và Purchase cho vận hành F&B hằng ngày với khuyến mãi, tích điểm, voucher, thanh toán, thuế, phí giao hàng và báo cáo.",
    },
    context: {
      en: "Store teams needed to process real orders while keeping every promotion, payment, and receipt detail understandable at the counter and during reconciliation.",
      vi: "Nhân viên cửa hàng cần xử lý đơn hàng thực tế, đồng thời hiểu rõ từng chi tiết khuyến mãi, thanh toán và hóa đơn tại quầy cũng như khi đối soát.",
    },
    problem: {
      en: "Rules spread across checkout, loyalty, receipt printing, session reporting, and purchase tracking made edge cases difficult to verify and increased manual checking.",
      vi: "Quy tắc trải rộng từ thanh toán, loyalty, in hóa đơn, báo cáo phiên đến theo dõi mua hàng khiến các trường hợp biên khó kiểm tra và tăng thao tác thủ công.",
    },
    role: {
      en: "Business analysis, Odoo backend development, POS interface customization, testing, and production investigation.",
      vi: "Phân tích nghiệp vụ, phát triển backend Odoo, tùy chỉnh giao diện POS, kiểm thử và điều tra sự cố production.",
    },
    decisions: {
      en: [
        "Model promotion, voucher, loyalty, payment, and tax behavior as explicit business rules instead of scattered UI exceptions.",
        "Expose the details operators need on receipts, reprints, and session reports so bills can be checked without hidden calculations.",
        "Extend standard Odoo behavior only where the operating flow required it, preserving familiar workflows elsewhere.",
      ],
      vi: [
        "Mô hình hóa khuyến mãi, voucher, loyalty, thanh toán và thuế thành quy tắc nghiệp vụ rõ ràng thay vì các ngoại lệ rời rạc trên UI.",
        "Hiển thị thông tin cần thiết trên hóa đơn, bản in lại và báo cáo phiên để nhân viên kiểm tra đơn mà không phụ thuộc vào phép tính ẩn.",
        "Chỉ mở rộng hành vi chuẩn của Odoo khi luồng vận hành thực sự yêu cầu, giữ nguyên trải nghiệm quen thuộc ở phần còn lại.",
      ],
    },
    validation: {
      en: ["Scenario-based checks for combined promotion and payment cases", "Receipt, reprint, and session-report reconciliation", "Logs and data inspection for production issues"],
      vi: ["Kiểm tra theo tình huống kết hợp khuyến mãi và thanh toán", "Đối soát hóa đơn, bản in lại và báo cáo phiên", "Kiểm tra log và dữ liệu cho sự cố production"],
    },
    outcomes: {
      en: ["Operators could verify complex bills with less manual checking.", "Purchase and inventory records became easier to trace.", "Daily order and payment review followed a more consistent flow."],
      vi: ["Nhân viên kiểm tra hóa đơn phức tạp với ít thao tác thủ công hơn.", "Dữ liệu mua hàng và tồn kho dễ truy vết hơn.", "Việc rà soát đơn hàng và thanh toán hằng ngày nhất quán hơn."],
    },
    technologies: ["Odoo", "Python", "JavaScript", "OWL", "PostgreSQL", "QWeb"],
    visual: "retail",
  },
  {
    slug: "manufacturing-control",
    index: "02",
    type: { en: "ERP · Manufacturing", vi: "ERP · Sản xuất" },
    title: { en: "One workflow across teams and vendors", vi: "Một quy trình xuyên suốt đội ngũ và nhà cung cấp" },
    summary: {
      en: "A multi-module manufacturing and outsourcing workflow connecting commercial, material, production, subcontracting, and delivery activities.",
      vi: "Quy trình sản xuất và gia công đa module kết nối hoạt động thương mại, nguyên vật liệu, sản xuất, thầu phụ và giao hàng.",
    },
    context: {
      en: "A precision-manufacturing operation needed to follow work as it moved between departments and external vendors without losing ownership or status.",
      vi: "Doanh nghiệp sản xuất chính xác cần theo dõi công việc khi luân chuyển giữa các phòng ban và nhà cung cấp ngoài mà không mất thông tin trách nhiệm hoặc trạng thái.",
    },
    problem: {
      en: "Sales, purchasing, stock, planning, manufacturing, and subcontracting were connected in reality but could be tracked as separate processes in the system.",
      vi: "Sales, mua hàng, tồn kho, kế hoạch, sản xuất và gia công vốn liên kết trong thực tế nhưng lại có thể bị theo dõi như các quy trình rời rạc trên hệ thống.",
    },
    role: {
      en: "Requirement clarification, workflow design, custom states and permissions, operational views, backend implementation, and UAT support.",
      vi: "Làm rõ yêu cầu, thiết kế workflow, trạng thái và phân quyền tùy chỉnh, màn hình vận hành, phát triển backend và hỗ trợ UAT.",
    },
    decisions: {
      en: [
        "Represent operational handoffs with explicit states, transitions, and ownership rules.",
        "Connect documents across Sales, Purchase, Inventory, MRP, Planning, and Subcontracting instead of duplicating progress tracking.",
        "Make permissions and available actions reflect the responsibility of each department.",
      ],
      vi: [
        "Biểu diễn điểm bàn giao vận hành bằng trạng thái, chuyển đổi và quy tắc trách nhiệm rõ ràng.",
        "Kết nối chứng từ giữa Sales, Purchase, Inventory, MRP, Planning và Subcontracting thay vì lặp lại việc theo dõi tiến độ.",
        "Thiết kế phân quyền và hành động khả dụng theo đúng trách nhiệm từng phòng ban.",
      ],
    },
    validation: {
      en: ["End-to-end material and document traceability", "Permission checks for each operational role", "Regression scenarios across linked modules"],
      vi: ["Truy vết nguyên vật liệu và chứng từ đầu-cuối", "Kiểm tra phân quyền cho từng vai trò vận hành", "Kịch bản regression xuyên các module liên kết"],
    },
    outcomes: {
      en: ["Departments could follow a shared operational state.", "Outsourcing steps became part of the same traceable production flow.", "Finished-goods receiving and customer delivery stayed connected to upstream work."],
      vi: ["Các phòng ban có thể theo dõi chung một trạng thái vận hành.", "Công đoạn gia công trở thành một phần của luồng sản xuất có thể truy vết.", "Nhập thành phẩm và giao khách hàng tiếp tục liên kết với công việc phía trước."],
    },
    technologies: ["Odoo", "Python", "XML", "PostgreSQL", "MRP", "Inventory"],
    visual: "manufacturing",
  },
  {
    slug: "system-integration",
    index: "03",
    type: { en: "Backend · Integration", vi: "Backend · Tích hợp" },
    title: { en: "Keeping ERP and external systems in sync", vi: "Đồng bộ ERP với các hệ thống bên ngoài" },
    summary: {
      en: "Custom Odoo workflows and API-based data exchange that reduced disconnected handling between ERP and external services.",
      vi: "Workflow Odoo tùy chỉnh và trao đổi dữ liệu qua API nhằm giảm xử lý rời rạc giữa ERP và dịch vụ bên ngoài.",
    },
    context: {
      en: "Business processes depended on information owned by both Odoo and external systems, making consistent data exchange part of the core workflow.",
      vi: "Quy trình nghiệp vụ phụ thuộc vào thông tin nằm cả trong Odoo và hệ thống ngoài, khiến trao đổi dữ liệu nhất quán trở thành một phần cốt lõi của workflow.",
    },
    problem: {
      en: "Disconnected updates created manual handoffs and made it harder to understand whether data had moved successfully between systems.",
      vi: "Cập nhật rời rạc tạo ra bước bàn giao thủ công và khiến việc xác định dữ liệu đã truyền thành công giữa các hệ thống trở nên khó khăn.",
    },
    role: {
      en: "Integration design, API implementation, custom data handling, failure investigation, and workflow validation.",
      vi: "Thiết kế tích hợp, triển khai API, xử lý dữ liệu tùy chỉnh, điều tra lỗi và xác thực workflow.",
    },
    decisions: {
      en: [
        "Keep integration behavior close to the business operation it supports rather than treating the API as an isolated feature.",
        "Make mapping and processing steps explicit so failures can be investigated through logs and stored data.",
        "Validate both transport success and the resulting ERP state.",
      ],
      vi: [
        "Đặt hành vi tích hợp gần với nghiệp vụ mà nó phục vụ thay vì xem API như một tính năng độc lập.",
        "Làm rõ các bước mapping và xử lý để có thể điều tra lỗi qua log và dữ liệu lưu trữ.",
        "Xác thực cả kết quả truyền tải lẫn trạng thái ERP sau cùng.",
      ],
    },
    validation: {
      en: ["Payload and mapping checks", "Log-driven failure investigation", "Business-state verification after exchange"],
      vi: ["Kiểm tra payload và mapping", "Điều tra lỗi dựa trên log", "Xác minh trạng thái nghiệp vụ sau trao đổi"],
    },
    outcomes: {
      en: ["ERP data could participate in a continuous cross-system process.", "Manual handoffs between systems were reduced.", "Integration issues became easier to trace from request to business state."],
      vi: ["Dữ liệu ERP tham gia được vào quy trình liên hệ thống liên tục.", "Giảm các bước bàn giao thủ công giữa hệ thống.", "Sự cố tích hợp dễ truy vết hơn từ request đến trạng thái nghiệp vụ."],
    },
    technologies: ["Odoo", "Python", "REST API", "PostgreSQL", "Docker", "Linux"],
    visual: "integration",
  },
  {
    slug: "attendance-platform",
    index: "04",
    type: { en: "Mobile · Graduation project", vi: "Mobile · Đồ án tốt nghiệp" },
    title: { en: "Attendance with identity and location checks", vi: "Điểm danh với xác thực danh tính và vị trí" },
    summary: {
      en: "An end-to-end attendance application combining a Flutter client, backend services, face recognition, and geofencing.",
      vi: "Ứng dụng điểm danh đầu-cuối kết hợp Flutter, dịch vụ backend, nhận diện khuôn mặt và geofencing.",
    },
    context: {
      en: "The graduation project explored how mobile UX, identity verification, location rules, APIs, and deployment fit into one usable attendance flow.",
      vi: "Đồ án tốt nghiệp khám phá cách kết hợp mobile UX, xác minh danh tính, quy tắc vị trí, API và deployment thành một luồng điểm danh có thể sử dụng.",
    },
    problem: {
      en: "Attendance needed more context than a simple button press: the system had to coordinate user identity, location eligibility, backend records, and clear mobile feedback.",
      vi: "Điểm danh cần nhiều ngữ cảnh hơn một lần nhấn nút: hệ thống phải phối hợp danh tính người dùng, điều kiện vị trí, dữ liệu backend và phản hồi rõ ràng trên mobile.",
    },
    role: {
      en: "End-to-end product design and development across mobile UI, APIs, face-recognition service, database, and containerized deployment.",
      vi: "Thiết kế và phát triển sản phẩm đầu-cuối từ mobile UI, API, dịch vụ nhận diện khuôn mặt, database đến triển khai container.",
    },
    decisions: {
      en: [
        "Separate the mobile experience, application API, and recognition service by responsibility.",
        "Treat face and location checks as visible steps with clear success or failure feedback.",
        "Use containerized services to make the multi-stack development environment repeatable.",
      ],
      vi: [
        "Tách trải nghiệm mobile, application API và dịch vụ nhận diện theo đúng trách nhiệm.",
        "Thể hiện kiểm tra khuôn mặt và vị trí thành các bước rõ ràng với phản hồi thành công hoặc thất bại.",
        "Dùng container để môi trường phát triển đa stack có thể tái tạo nhất quán.",
      ],
    },
    validation: {
      en: ["Eligible and ineligible geofence scenarios", "Recognition success and failure states", "API and database flow across services"],
      vi: ["Tình huống trong và ngoài vùng geofence", "Trạng thái nhận diện thành công và thất bại", "Luồng API và database xuyên các dịch vụ"],
    },
    outcomes: {
      en: ["Demonstrated end-to-end product thinking beyond a single framework.", "Connected mobile interaction to backend and recognition services.", "Provided a deployable foundation for identity-aware attendance."],
      vi: ["Thể hiện tư duy sản phẩm đầu-cuối vượt ra ngoài một framework.", "Kết nối tương tác mobile với backend và dịch vụ nhận diện.", "Tạo nền tảng có thể triển khai cho bài toán điểm danh gắn với danh tính."],
    },
    technologies: ["Flutter", "Laravel", "Flask", "PostgreSQL", "Docker", "Geofencing"],
    visual: "attendance",
  },
];

export const experiences: Experience[] = [
  {
    company: "Nextwaves Industries",
    role: { en: "Software Engineer", vi: "Kỹ sư phần mềm" },
    period: { en: "Jul 2026 — Present", vi: "07/2026 — Hiện tại" },
    summary: {
      en: "Building software with Node.js and Flutter in an on-site engineering role.",
      vi: "Phát triển phần mềm với Node.js và Flutter trong vai trò kỹ sư làm việc tại văn phòng.",
    },
    technologies: ["Node.js", "Flutter"],
  },
  {
    company: "Besco Consulting",
    role: { en: "Odoo Developer", vi: "Lập trình viên Odoo" },
    period: { en: "Jun 2025 — Jul 2026", vi: "06/2025 — 07/2026" },
    summary: {
      en: "Delivered ERP workflows across retail, purchasing, inventory, manufacturing, planning, subcontracting, and external integrations.",
      vi: "Phát triển các workflow ERP cho bán lẻ, mua hàng, tồn kho, sản xuất, kế hoạch, gia công và tích hợp hệ thống ngoài.",
    },
    technologies: ["Odoo", "Python", "PostgreSQL", "JavaScript"],
  },
  {
    company: "Quoc Cuong Trading Services and Technology",
    role: { en: "Operations Assistant", vi: "Trợ lý vận hành" },
    period: { en: "Feb 2025 — Apr 2025", vi: "02/2025 — 04/2025" },
    summary: {
      en: "Supported order, product, and customer operations while maintaining WordPress and SEO-oriented content.",
      vi: "Hỗ trợ vận hành đơn hàng, sản phẩm và khách hàng, đồng thời duy trì nội dung WordPress theo định hướng SEO.",
    },
    technologies: ["Operations", "WordPress", "SEO"],
  },
  {
    company: "IT X Services · allXone",
    role: { en: "Web Development Intern", vi: "Thực tập sinh phát triển web" },
    period: { en: "Jun 2024 — Aug 2024", vi: "06/2024 — 08/2024" },
    summary: {
      en: "Built web application features with Laravel and Angular, working with REST APIs, MVC, testing, and documentation.",
      vi: "Phát triển tính năng web với Laravel và Angular, làm việc cùng REST API, MVC, kiểm thử và tài liệu kỹ thuật.",
    },
    technologies: ["Laravel", "Angular", "REST API"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
