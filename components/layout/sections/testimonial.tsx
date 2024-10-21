"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image:
      "https://socwel.gimcheon.ac.kr/site/socwel/img/sub1/intro_img01.jpg",
    name: "상담심리전공",
    userName: "Tâm lý học",
    comment:
      "Ngành Tâm lý học Tư vấn giúp sinh viên trở thành những nhà tư vấn tâm lý có đạo đức, có khả năng giúp đỡ người khác vượt qua khó khăn và đạt được hạnh phúc. ",
    rating: 5.0,
  },
  {
    image:
      "https://ibhak.gimcheon.ac.kr/site/gimcheon/img/sub3/0301/0301_img26.jpg",
    name: "스포츠재활학과",
    userName: "Khoa phục hồi chức năng thể thao",
    comment:
      "Khoa đào tạo chuyên gia phục hồi chức năng thể thao, trang bị kiến thức và kỹ năng để giúp vận động viên hồi phục chấn thương và cải thiện hiệu suất.",
    rating: 4.8,
  },

  {
    image:
      "https://ibhak.gimcheon.ac.kr/site/gimcheon/img/sub3/0301/0301_img08.jpg",
    name: "안경광학과",
    userName: "Khoa nhãn quang học",
    comment:
      "Để đáp ứng nhu cầu của thị trường, việc đào tạo chuyên sâu cho các bác sĩ đo thị lực là vô cùng cần thiết.",
    rating: 4.9,
  },
  {
    image:
      "https://ibhak.gimcheon.ac.kr/site/gimcheon/img/sub3/0301/0301_img37.jpg",
    name: "생활체육학과",
    userName: "Khoa Đời sống và Giáo dục Thể chất",
    comment:
      "Những thay đổi trong khoa học thể thao trong kỷ nguyên Cách mạng công nghiệp lần thứ tư và những thay đổi trong mối quan tâm và cách tiếp cận sức khỏe trong thời đại lão hóa.",
    rating: 5.0,
  },
  {
    image:
      "https://ibhak.gimcheon.ac.kr/site/gimcheon/img/sub3/0301/0301_img03.jpg",
    name: "치기공학과",
    userName: "Kỹ thuật nha khoa",
    comment:
      "Với kỹ năng chuyên môn cao, kỹ thuật viên nha khoa có thể phát triển sự nghiệp trong nhiều lĩnh vực nha khoa và có thu nhập ổn định.",
    rating: 5.0,
  },
  {
    image:
      "https://ibhak.gimcheon.ac.kr/site/gimcheon/img/sub3/0301/0301_img11.jpg",
    name: "간호학과",
    userName: "Điều dưỡng và quản lý điều dưỡng",
    comment:
      "Mục đích giáo dục của Khoa Điều dưỡng tại Đại học Gimcheon là cung cấp các y tá cống hiến hết mình cho xã hội. ",
    rating: 4.9,
  },
  {
    image:
      "https://ibhak.gimcheon.ac.kr/site/gimcheon/img/sub3/0301/0301_img02.jpg",
    name: "방사선학과",
    userName: "Khoa X-quang",
    comment:
      "Đào tạo các bác sĩ X quang đóng vai trò chủ chốt trong điều trị ung thư và các bệnh khác.",
    rating: 4.9,
  },
  {
    image:
      "https://ibhak.gimcheon.ac.kr/site/gimcheon/img/sub3/0301/0301_img01.jpg",
    name: "임상병리학과",
    userName: "Khoa bệnh lý lâm sàn",
    comment:
      "Đây là một lĩnh vực y học bao gồm y học trong phòng thí nghiệm, xét nghiệm sinh học phân tử và xét nghiệm di truyền như một lĩnh vực nghiên cứu nhằm xác định nguyên nhân và gợi ý hướng điều trị.",
    rating: 4.9,
  },
  {
    image:
      "https://ibhak.gimcheon.ac.kr/site/gimcheon/img/sub3/0301/0301_img34.jpg",
    name: "사회복지상담학부",
    userName: "Khoa xã hội học (Phúc lợi xã hội)",
    comment:
      "Khoa Phúc lợi Xã hội Đại học Gimcheon đào tạo chuyên gia có kỹ năng giải quyết các vấn đề xã hội, hướng đến một xã hội tốt đẹp hơn.",
    rating: 4.9,
  },
  {
    image:
      "https://ibhak.gimcheon.ac.kr/site/gimcheon/img/sub3/0301/0301_img20.jpg",
    name: "유아교육과",
    userName: "Khoa giáo dục mầm non",
    comment:
      "Giáo dục Mầm non bồi dưỡng đội ngũ giáo viên mầm non nhân văn, sáng tạo, chuyên nghiệp, có ý thức sứ mệnh đối với nghề giáo viên. ",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Ngành học
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Các ngành được đào tạo tại Đại Học Gimcheon
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3 h-[450px] flex"
            >
              <Card className="bg-muted/50 dark:bg-card justify-between flex-col flex">
                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className=" pb-0">
                  {/* <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div> */}
                  {`"${review.comment}"`}
                </CardContent>

                <Image
                  alt="Review image"
                  src={review.image}
                  width={500} // Đặt giá trị width tùy ý, nó sẽ điều chỉnh theo tỷ lệ
                  height={300} // Đặt giá trị height tùy ý, nó sẽ điều chỉnh theo tỷ lệ
                  // layout="responsive"
                  className="w-full h-auto rounded" // Đảm bảo ảnh chiếm toàn bộ độ rộng của card
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
