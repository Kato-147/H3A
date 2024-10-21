import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Chất lượng",
    description:
      "Nằm trong hệ thống giáo dục chất lượng quốc tế của Hàn Quốc.",
  },
  {
    icon: "BadgeCheck",
    title: "Bằng cấp",
    description:
      "Bằng cấp được công nhận trên toàn thế giới.",
  },
  {
    icon: "Goal",
    title: "Giao lưu",
    description:
      "Cơ hội giao lưu văn hóa quốc tế với các sinh viên đến từ 100 trường Đại Học của hơn 30 quốc gia trên toàn thế giới.",
  },
  {
    icon: "PictureInPicture",
    title: "Môi trường",
    description:
      "Môi trường học tập an toàn và chất lượng.",
  },
  {
    icon: "MousePointerClick",
    title: "Rèn luyện",
    description:
      "Sinh viên được quan tâm chăm sóc. Có môi trường để sinh viên rèn luyện tinh thần vượt qua khó khăn thử thách để đi đến thành công.",
  },
  {
    icon: "Newspaper",
    title: "Cơ hội",
    description:
      "Cơ hội làm việc cao sau khi tốt nghiệp.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Gimcheon
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Đại học Gimcheon
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Được học tại trường Đại Học Gimcheon tại Hàn Quốc.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
