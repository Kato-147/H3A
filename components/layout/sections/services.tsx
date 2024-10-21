import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Tư Vấn du học Hàn Quốc",
    description:
      "Khác biệt so với các đơn vị khác, chúng tôi không chỉ tư vấn du học mà còn đồng hành cùng bạn trong suốt quá trình học tập tại Hàn Quốc. Chúng tôi mang đến cho bạn những trải nghiệm du học trọn vẹn và đáng nhớ.",
    pro: 0,
  },
  {
    title: "Đào tạo tiếng Hàn Quốc",
    description:
      "Khóa học tiếng Hàn cấp tốc của chúng tôi được thiết kế đặc biệt để giúp bạn nhanh chóng đạt được trình độ tiếng Hàn mong muốn trong thời gian ngắn nhất. Với phương pháp giảng dạy hiện đại và đội ngũ giáo viên giàu kinh nghiệm, bạn sẽ được trang bị đầy đủ kiến thức và kỹ năng giao tiếp tiếng Hàn.",
    pro: 0,
  },
  {
    title: "Hỗ trợ VISA",
    description: "Mỗi hồ sơ của bạn đều được chúng tôi chăm chút tỉ mỉ, đảm bảo tính chính xác và đầy đủ. Dịch vụ dịch thuật và công chứng chuyên nghiệp của chúng tôi sẽ giúp hồ sơ của bạn trở nên hoàn hảo và tăng cơ hội đậu visa.",
    pro: 0,
  },
  {
    title: "Các thủ tục khác",
    description: "Chúng tôi không chỉ dừng lại ở việc tư vấn du học mà còn hỗ trợ bạn hoàn thiện các thủ tục khác như đặt vé máy bay, tìm kiếm chỗ ở phù hợp và đón bạn tại sân bay. Điều này giúp bạn tiết kiệm thời gian và có một khởi đầu thuận lợi tại Hàn Quốc.",
    pro: 0, //pro : 0 hoặc 1
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Dịch vụ
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Các dịch vụ tại H3A
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Lĩnh vực hoạt động chuyên nghiệp tích luỹ qua nhiều năm kinh nghiệm.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
