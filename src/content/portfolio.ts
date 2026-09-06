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
  approach: Record<Locale, string[]>;
  validation: Record<Locale, string[]>;
  delivered: Record<Locale, string[]>;
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
    "slug": "retail-operations",
    "index": "01",
    "type": {
      "en": "Odoo · F&B operations",
      "vi": "Odoo · Vận hành F&B"
    },
    "title": {
      "en": "Odoo POS customization for F&B operations",
      "vi": "Tùy chỉnh Odoo POS cho vận hành F&B"
    },
    "summary": {
      "en": "Customizing checkout rules, receipts, and session reports in Odoo POS, alongside Purchase changes for F&B operations.",
      "vi": "Tùy chỉnh quy tắc thanh toán, hóa đơn và báo cáo phiên trên Odoo POS, cùng các phần mở rộng Purchase phục vụ vận hành F&B."
    },
    "context": {
      "en": "Store staff handled orders with promotions, loyalty points, vouchers, tax, and delivery fees. They needed to review these details at checkout and when reconciling the sales session.",
      "vi": "Nhân viên cửa hàng xử lý đơn có khuyến mãi, điểm tích lũy, voucher, thuế và phí giao hàng. Những thông tin này cần được kiểm tra tại quầy và khi đối soát phiên bán hàng."
    },
    "problem": {
      "en": "A checkout change could also affect the receipt, reprint, and session report. Each part needed to reflect the same order and payment details, including cases with several rules applied together.",
      "vi": "Một thay đổi ở bước thanh toán có thể ảnh hưởng đến hóa đơn, bản in lại và báo cáo phiên. Các phần này cần thể hiện cùng thông tin đơn hàng và thanh toán, kể cả khi áp dụng nhiều quy tắc cùng lúc."
    },
    "role": {
      "en": "I clarified requirements, developed Odoo backend and POS interface changes, tested business scenarios, and investigated production issues.",
      "vi": "Tôi làm rõ yêu cầu, phát triển backend Odoo và giao diện POS, kiểm thử tình huống nghiệp vụ và kiểm tra sự cố trên hệ thống đang vận hành."
    },
    "approach": {
      "en": [
        "Reviewed how promotions, vouchers, loyalty points, tax, and payment methods were applied to an order before implementing the custom rules.",
        "Updated receipts, reprints, and session reports to show the details staff used to check a bill and reconcile payments.",
        "Extended POS and Purchase where the requirements called for changes, keeping the standard Odoo workflow for the remaining steps."
      ],
      "vi": [
        "Làm rõ cách áp dụng khuyến mãi, voucher, điểm tích lũy, thuế và phương thức thanh toán trên đơn hàng trước khi triển khai quy tắc tùy chỉnh.",
        "Điều chỉnh hóa đơn, bản in lại và báo cáo phiên để hiển thị thông tin nhân viên cần khi kiểm tra đơn và đối soát thanh toán.",
        "Mở rộng POS và Purchase ở những phần có yêu cầu riêng; các bước còn lại tiếp tục dùng quy trình chuẩn của Odoo."
      ]
    },
    "validation": {
      "en": [
        "Checked orders combining promotions, vouchers, and payment rules.",
        "Compared order details against receipts, reprints, and session reports.",
        "Inspected logs and stored records when investigating production issues."
      ],
      "vi": [
        "Kiểm tra đơn hàng kết hợp khuyến mãi, voucher và quy tắc thanh toán.",
        "Đối chiếu thông tin đơn với hóa đơn, bản in lại và báo cáo phiên.",
        "Xem log và dữ liệu lưu trữ khi kiểm tra sự cố vận hành."
      ]
    },
    "delivered": {
      "en": [
        "Custom POS handling for promotions, loyalty, vouchers, payments, tax, and delivery fees.",
        "Receipt, reprint, and session-report changes for order and payment review.",
        "Purchase customizations for purchasing and inventory record tracking."
      ],
      "vi": [
        "Xử lý tùy chỉnh trên POS cho khuyến mãi, tích điểm, voucher, thanh toán, thuế và phí giao hàng.",
        "Điều chỉnh hóa đơn, bản in lại và báo cáo phiên phục vụ kiểm tra đơn và thanh toán.",
        "Tùy chỉnh Purchase phục vụ theo dõi mua hàng và dữ liệu tồn kho."
      ]
    },
    "technologies": [
      "Odoo",
      "Python",
      "JavaScript",
      "OWL",
      "PostgreSQL",
      "QWeb"
    ],
    "visual": "retail"
  },
  {
    "slug": "manufacturing-control",
    "index": "02",
    "type": {
      "en": "Odoo · Manufacturing",
      "vi": "Odoo · Sản xuất"
    },
    "title": {
      "en": "Manufacturing and subcontracting workflows in Odoo",
      "vi": "Quản lý sản xuất và gia công trên Odoo"
    },
    "summary": {
      "en": "Connecting sales, purchasing, inventory, planning, manufacturing, and subcontracting documents within a precision-manufacturing workflow.",
      "vi": "Kết nối chứng từ bán hàng, mua hàng, kho, kế hoạch, sản xuất và gia công trong quy trình sản xuất chính xác."
    },
    "context": {
      "en": "Work moved between internal departments and external subcontractors. Teams needed to follow material, production progress, finished-goods receiving, and customer delivery.",
      "vi": "Công việc luân chuyển giữa các bộ phận nội bộ và đơn vị gia công bên ngoài. Các nhóm cần theo dõi vật tư, tiến độ sản xuất, nhập thành phẩm và giao hàng cho khách."
    },
    "problem": {
      "en": "The departments worked on related tasks but tracked them through different modules. Handoffs needed defined states and responsibilities, with links back to the relevant documents.",
      "vi": "Các phòng ban xử lý những công việc liên quan nhưng theo dõi trên nhiều module. Mỗi bước bàn giao cần có trạng thái, trách nhiệm và liên kết đến chứng từ tương ứng."
    },
    "role": {
      "en": "I clarified requirements, designed workflow changes, implemented custom states, permissions, and operational views, and supported user acceptance testing.",
      "vi": "Tôi làm rõ yêu cầu, thiết kế thay đổi quy trình, triển khai trạng thái, phân quyền và màn hình vận hành, đồng thời hỗ trợ người dùng kiểm thử nghiệm thu."
    },
    "approach": {
      "en": [
        "Mapped the documents and handoffs across Sales, Purchase, Inventory, MRP, Planning, and Subcontracting.",
        "Added workflow states and actions to represent departmental responsibilities and production handoffs.",
        "Connected subcontracting steps, finished-goods receiving, and delivery to the related upstream documents."
      ],
      "vi": [
        "Xác định chứng từ và các bước bàn giao giữa Sales, Purchase, Inventory, MRP, Planning và Subcontracting.",
        "Bổ sung trạng thái và hành động theo trách nhiệm từng bộ phận và các bước bàn giao trong sản xuất.",
        "Liên kết công đoạn gia công, nhập thành phẩm và giao hàng với các chứng từ liên quan trước đó."
      ]
    },
    "validation": {
      "en": [
        "Traced material and document links through the production flow.",
        "Checked permissions and available actions for each operational role.",
        "Ran regression scenarios across the connected modules and supported UAT."
      ],
      "vi": [
        "Truy vết vật tư và liên kết chứng từ xuyên suốt quy trình sản xuất.",
        "Kiểm tra quyền và thao tác được phép của từng vai trò vận hành.",
        "Kiểm thử lại các luồng liên quan giữa các module và hỗ trợ nghiệm thu."
      ]
    },
    "delivered": {
      "en": [
        "Custom states, permissions, and operational views for departmental handoffs.",
        "Linked records across sales, purchasing, inventory, planning, production, and subcontracting.",
        "Document links from production and outsourcing through finished-goods receiving and delivery."
      ],
      "vi": [
        "Trạng thái, phân quyền và màn hình vận hành cho các bước bàn giao giữa bộ phận.",
        "Liên kết dữ liệu bán hàng, mua hàng, kho, kế hoạch, sản xuất và gia công.",
        "Liên kết chứng từ từ sản xuất, gia công đến nhập thành phẩm và giao hàng."
      ]
    },
    "technologies": [
      "Odoo",
      "Python",
      "XML",
      "PostgreSQL",
      "MRP",
      "Inventory"
    ],
    "visual": "manufacturing"
  },
  {
    "slug": "system-integration",
    "index": "03",
    "type": {
      "en": "Odoo · Integration",
      "vi": "Odoo · Tích hợp"
    },
    "title": {
      "en": "Odoo integrations with external systems",
      "vi": "Tích hợp Odoo với hệ thống bên ngoài"
    },
    "summary": {
      "en": "API-based data exchange and custom Odoo processing for business workflows involving external services.",
      "vi": "Trao đổi dữ liệu qua API và xử lý tùy chỉnh trên Odoo cho các nghiệp vụ liên quan đến dịch vụ bên ngoài."
    },
    "context": {
      "en": "Parts of the business process used information from Odoo; other parts relied on external services. Data exchange needed to fit the operation that used those records.",
      "vi": "Một phần quy trình sử dụng dữ liệu trong Odoo, phần khác phụ thuộc vào dịch vụ bên ngoài. Việc trao đổi dữ liệu cần gắn với nghiệp vụ sử dụng các bản ghi đó."
    },
    "problem": {
      "en": "A successful API response alone did not explain whether the expected data had been processed in Odoo. Mapping and processing issues needed to be traceable when an exchange failed.",
      "vi": "API phản hồi thành công chưa đủ để biết dữ liệu đã được xử lý đúng trong Odoo. Khi trao đổi thất bại, cần kiểm tra được bước ánh xạ và xử lý dữ liệu liên quan."
    },
    "role": {
      "en": "I designed integrations, implemented API connections and custom data processing, investigated failures, and checked the resulting workflow.",
      "vi": "Tôi thiết kế tích hợp, triển khai kết nối API và xử lý dữ liệu tùy chỉnh, kiểm tra lỗi và xác nhận kết quả trong quy trình nghiệp vụ."
    },
    "approach": {
      "en": [
        "Clarified which data the business operation required and how it mapped between Odoo and the external system.",
        "Implemented API exchange and the corresponding custom processing in Odoo.",
        "Used request details, logs, and stored records to investigate failures and check the final Odoo state."
      ],
      "vi": [
        "Làm rõ dữ liệu nghiệp vụ cần sử dụng và cách ánh xạ giữa Odoo với hệ thống ngoài.",
        "Triển khai trao đổi qua API và phần xử lý tùy chỉnh tương ứng trên Odoo.",
        "Dựa vào thông tin yêu cầu, log và bản ghi lưu trữ để kiểm tra lỗi và xác nhận trạng thái cuối trong Odoo."
      ]
    },
    "validation": {
      "en": [
        "Checked request data and field mappings.",
        "Followed logs and stored records when investigating failed exchanges.",
        "Verified the resulting Odoo records after data processing."
      ],
      "vi": [
        "Kiểm tra dữ liệu gửi nhận và ánh xạ trường.",
        "Theo dõi log và bản ghi lưu trữ khi kiểm tra lần trao đổi bị lỗi.",
        "Đối chiếu bản ghi trong Odoo sau khi xử lý dữ liệu."
      ]
    },
    "delivered": {
      "en": [
        "API connections between Odoo and external services.",
        "Data mappings and custom processing tied to the relevant Odoo workflow.",
        "Processing steps that could be inspected through logs and stored records."
      ],
      "vi": [
        "Kết nối API giữa Odoo và dịch vụ bên ngoài.",
        "Ánh xạ và xử lý dữ liệu tùy chỉnh gắn với quy trình Odoo liên quan.",
        "Các bước xử lý có thể kiểm tra qua log và dữ liệu lưu trữ."
      ]
    },
    "technologies": [
      "Odoo",
      "Python",
      "REST API",
      "PostgreSQL",
      "Docker",
      "Linux"
    ],
    "visual": "integration"
  },
  {
    "slug": "attendance-platform",
    "index": "04",
    "type": {
      "en": "Mobile · Graduation project",
      "vi": "Mobile · Đồ án tốt nghiệp"
    },
    "title": {
      "en": "Attendance application — graduation project",
      "vi": "Ứng dụng điểm danh — đồ án tốt nghiệp"
    },
    "summary": {
      "en": "A Flutter attendance application using face recognition and location checks, with backend services and a database.",
      "vi": "Ứng dụng điểm danh Flutter sử dụng nhận diện khuôn mặt và kiểm tra vị trí, kết nối dịch vụ backend và cơ sở dữ liệu."
    },
    "context": {
      "en": "This graduation project combined mobile development, APIs, face recognition, and location rules in one attendance flow.",
      "vi": "Đồ án tốt nghiệp kết hợp phát triển mobile, API, nhận diện khuôn mặt và quy tắc vị trí trong một luồng điểm danh."
    },
    "problem": {
      "en": "The application needed to check identity and location before recording attendance, and show the user whether those checks had passed.",
      "vi": "Ứng dụng cần kiểm tra danh tính và vị trí trước khi ghi nhận điểm danh, đồng thời thông báo cho người dùng kết quả của các bước kiểm tra."
    },
    "role": {
      "en": "I designed and developed the mobile interface, APIs, recognition service, database, and containerized deployment.",
      "vi": "Tôi thiết kế và phát triển giao diện mobile, API, dịch vụ nhận diện, cơ sở dữ liệu và cấu hình triển khai bằng container."
    },
    "approach": {
      "en": [
        "Separated the Flutter interface, application API, and face-recognition service.",
        "Showed face and location check results in the attendance flow.",
        "Configured the services in containers to run the application together."
      ],
      "vi": [
        "Tách giao diện Flutter, API ứng dụng và dịch vụ nhận diện khuôn mặt.",
        "Hiển thị kết quả kiểm tra khuôn mặt và vị trí trong luồng điểm danh.",
        "Cấu hình các dịch vụ bằng container để chạy ứng dụng cùng nhau."
      ]
    },
    "validation": {
      "en": [
        "Checked locations inside and outside the permitted area.",
        "Tested successful and failed face-recognition results.",
        "Followed the attendance request through the API to the database."
      ],
      "vi": [
        "Kiểm tra vị trí nằm trong và ngoài vùng cho phép.",
        "Kiểm thử kết quả nhận diện thành công và thất bại.",
        "Theo dõi yêu cầu điểm danh qua API đến cơ sở dữ liệu."
      ]
    },
    "delivered": {
      "en": [
        "Flutter attendance interface with identity and location feedback.",
        "Application API, face-recognition service, and attendance records.",
        "Container configuration for running the project services."
      ],
      "vi": [
        "Giao diện điểm danh Flutter với phản hồi kiểm tra danh tính và vị trí.",
        "API ứng dụng, dịch vụ nhận diện và dữ liệu điểm danh.",
        "Cấu hình container để chạy các dịch vụ của đồ án."
      ]
    },
    "technologies": [
      "Flutter",
      "Laravel",
      "Flask",
      "PostgreSQL",
      "Docker",
      "Geofencing"
    ],
    "visual": "attendance"
  }
];

export const experiences: Experience[] = [
  {
    company: "Nextwaves Industries",
    role: { en: "Software Engineer", vi: "Kỹ sư phần mềm" },
    period: { en: "Jul 2026 — Present", vi: "07/2026 — Hiện tại" },
    summary: {
      en: "Developing backend and mobile features with Node.js and Flutter.",
      vi: "Phát triển tính năng backend và mobile với Node.js và Flutter.",
    },
    technologies: ["Node.js", "Flutter"],
  },
  {
    company: "Besco Consulting",
    role: { en: "Odoo Developer", vi: "Lập trình viên Odoo" },
    period: { en: "Jun 2025 — Jul 2026", vi: "06/2025 — 07/2026" },
    summary: {
      en: "Customized Odoo POS, Purchase, Inventory, and manufacturing workflows. Implemented business rules, views, reports, and external integrations.",
      vi: "Tùy chỉnh Odoo POS, Purchase, Inventory và quy trình sản xuất. Triển khai quy tắc nghiệp vụ, màn hình, báo cáo và tích hợp hệ thống ngoài.",
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
