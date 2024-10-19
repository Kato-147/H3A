import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import React from 'react'
import img1 from '../assets/img1.png';
import Footer from "@/components/layout/footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-dvh  ">

      {/* header */}
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="size-6" />
          <span className="sr-only">Acme Consulting</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Liên hệ
          </a>
        </nav>
      </header>

      {/* body */}

      <main className="flex-1 ">

        {/* title */}
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y flex justify-center">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1200px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 ">

              {/* content left */}
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Tư vấn du học H3A
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-5">
                  Hàn Quốc - Điểm đến của ước mơ. Chúng tôi sẽ đồng hành cùng bạn từ những bước đầu tiên, giúp bạn chinh phục mọi thử thách và đạt được thành công.
                </p>
                {/* <div className="mt-6 space-x-4">
                  <a
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#007bff] px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#007bff]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get in Touch
                  </a>
                </div> */}
              </div>

              {/* img */}
              <img
                src={img1}
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />

            </div>
          </div>
        </section>

        {/* our services */}
        <section id="services" className="w-full py-5 md:py-24 lg:py-32 items-center flex justify-center ">
          <div className="container space-y-12 px-4 md:px-6    ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center ">
              <div className="space-y-2  ">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm ">H3A company</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">Dịch của chúng tôi </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Lĩnh vực hoạt động chuyên nghiệp tích luỹ qua nhiều năm kinh nghiệm.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">

              {/* list */}
              
                {data.map((item, index) => (
                  <div key={index} className="grid gap-1">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
            
            </div>
          </div>
        </section>

        {/* about */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Về chúng tôi</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                H3A EDUCATION
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                H3A EDUCATION tự hào là đơn vị uy tín và chất lượng trong lĩnh vực tư vấn du học, với sứ mệnh đồng hành cùng học sinh, sinh viên Việt Nam trên con đường chinh phục tri thức toàn cầu. Với phương châm "Hiểu học sinh – Định hướng tương lai," H3A luôn lắng nghe và thấu hiểu từng nguyện vọng, từ đó đưa ra những giải pháp tối ưu nhất.
              </p>
            </div>
            <div className="flex gap-4 lg:justify-end">
              {/* img */}
              <img
                src={img1}
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Liên hệ</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Liên hệ với chúng tôi bằng cách nhập form bên dưới.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="flex flex-col gap-2">
                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                <Textarea placeholder="Message" className="max-w-lg flex-1" rows={4} />
                <Button type="submit">Gửi</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <Footer/>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

const data = [
  {
    title: "Tư Vấn du học Hàn Quốc",
    description: "Khác biệt so với các đơn vị khác, chúng tôi không chỉ tư vấn du học mà còn đồng hành cùng bạn trong suốt quá trình học tập tại Hàn Quốc. Chúng tôi mang đến cho bạn những trải nghiệm du học trọn vẹn và đáng nhớ.",
  },
  {
    title: "Đào tạo tiếng Hàn Quốc cấp tốc",
    description: "Khóa học tiếng Hàn cấp tốc của chúng tôi được thiết kế đặc biệt để giúp bạn nhanh chóng đạt được trình độ tiếng Hàn mong muốn trong thời gian ngắn nhất. Với phương pháp giảng dạy hiện đại và đội ngũ giáo viên giàu kinh nghiệm, bạn sẽ được trang bị đầy đủ kiến thức và kỹ năng giao tiếp tiếng Hàn.",
  },
  {
    title: "Hỗ trợ VISA",
    description: "Mỗi hồ sơ của bạn đều được chúng tôi chăm chút tỉ mỉ, đảm bảo tính chính xác và đầy đủ. Dịch vụ dịch thuật và công chứng chuyên nghiệp của chúng tôi sẽ giúp hồ sơ của bạn trở nên hoàn hảo và tăng cơ hội đậu visa.",
  },
  {
    title: "Các thủ tục khác",
    description: "Chúng tôi không chỉ dừng lại ở việc tư vấn du học mà còn hỗ trợ bạn hoàn thiện các thủ tục khác như đặt vé máy bay, tìm kiếm chỗ ở phù hợp và đón bạn tại sân bay. Điều này giúp bạn tiết kiệm thời gian và có một khởi đầu thuận lợi tại Hàn Quốc.",
  },
  
];


export default Home