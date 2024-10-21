import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Nâng cao trình độ học vấn",
    description:
      "Du học Hàn Quốc giúp bạn tiếp cận nền giáo dục chất lượng cao, trang bị kiến thức chuyên môn và kỹ năng thực hành.",
  },
  {
    icon: "LineChart",
    title: "Mở rộng cơ hội nghề nghiệp",
    description:
      "Hàn Quốc là một thị trường việc làm sôi động, với nhiều cơ hội cho người nước ngoài.",
  },
  {
    icon: "Wallet",
    title: "Mở rộng tầm nhìn",
    description:
      " Du học giúp bạn khám phá văn hóa Hàn Quốc, giao lưu với bạn bè quốc tế và trở nên tự tin hơn.",
  },
  {
    icon: "Sparkle",
    title: "Cải thiện kỹ năng sống",
    description:
      "Bạn sẽ học cách tự lập, thích nghi với môi trường mới và giải quyết các vấn đề một cách hiệu quả.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Lợi ích</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sau chương trình du học
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Những lợi ích sau khi bạn hoàng thành chương trình du học tại Hàn Quốc.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
