import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/public/logo.png'

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 ">
          <div className="flex flex-col w-fit gap-5">
            {/* Logo */}
            <div className="col-span-full xl:col-span-2">
              <Link href="#" className="flex font-bold items-center">
                <Image
                  alt=""
                  src={logo}
                  className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-11 h-9 mr-2 border text-white flex items-center justify-center"
                />

                <h3 className="text-2xl">H3A EDUCATION</h3>
              </Link>
            </div>

            {/* lien he va lien ket */}
            <div className="flex flex-col gap-2 flex-[2]">
              {/* Liên hệ */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg">Liên hệ</h3>
                <div>
                  <Link href="#" className="opacity-60 hover:opacity-100">
                    0702681801
                  </Link>
                </div>

                <div>
                  <Link href="#" className="opacity-60 hover:opacity-100">
                    0989510100 
                  </Link>
                </div>

                <div>
                  <Link href="#" className="opacity-60 hover:opacity-100">
                    H3a.education.company@gmail.com
                  </Link>
                </div>

                <div>
                  <Link target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/gyxEpsysnCgp3Ddy9" className="opacity-60 hover:opacity-100">
                    250 Lê Sao, phường Phú Thạnh, quận Tân Phú, thành phố Hồ Chí
                    Minh
                  </Link>
                </div>
              </div>

              {/* Liên kết */}
              <div className="flex flex-col gap-2 flex-[1]">
                <h3 className="font-bold text-lg">Liên kết</h3>
                <div>
                  <Link target="_blank" rel="noopener noreferrer" href="gimcheon.ac.kr" className="opacity-60 hover:opacity-100">
                    Đại học Gimcheon
                  </Link>
                </div>

                <div>
                  <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/duhochanquoch3a" className="opacity-60 hover:opacity-100">
                    Facebook
                  </Link>
                </div>

                <div>
                  <Link target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@ik4050a" className="opacity-60 hover:opacity-100">
                    Youtube
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* gg map */}

          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3644893759147!2d106.61963867483117!3d10.783370689365846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c04ba2ac207%3A0xe0f0156167daf751!2zMjUwIMSQLiBMw6ogU2FvLCBQaMO6IFRo4bqhbmgsIFTDom4gUGjDuiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1729352539745!5m2!1svi!2s"
              width="100%"
              height="200"
              className="border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              //   loading="lazy"
            ></iframe>
          </div>
        </div>

{/* copy right */}
        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/Kato-147"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Kato
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
