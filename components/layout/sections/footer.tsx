import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon, FacebookIcon, Mail, Map, Phone, School, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

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
                <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 opacity-60" />
                  <Link href="#footer" className="opacity-60 hover:opacity-100">
                    0702681801
                  </Link>
                </div>

                <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 opacity-60" />
                  <Link href="#footer" className="opacity-60 hover:opacity-100">
                    0989510100
                  </Link>
                </div>

                <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 opacity-60" />
                  <Link href="#footer" className="opacity-60 hover:opacity-100">
                    H3a.education.company@gmail.com
                  </Link>
                </div>

                <div className="flex items-center space-x-2">
                <Map className="h-5 w-5 opacity-60" />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/6V31MDFBj6w7oRQBA"
                    className="opacity-60 hover:opacity-100"
                  >
                    Số 44, đường số 12, phường Tăng Nhơn Phú B, thành phố Thủ
                    Đức, TPHCM
                  </Link>
                </div>
              </div>

              {/* Liên kết */}
              <div className="flex flex-col gap-2 flex-[1]">
                <h3 className="font-bold text-lg">Liên kết</h3>
                <div className="flex items-center space-x-2">
                <School className="h-5 w-5 opacity-60" />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.gimcheon.ac.kr/site/gimcheon/"
                    className="opacity-60 hover:opacity-100"
                  >
                    Đại học Gimcheon
                  </Link>
                </div>

                <div className="flex items-center space-x-2">
                <FacebookIcon className="h-5 w-5 opacity-60" />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/duhochanquoch3a"
                    className="opacity-60 hover:opacity-100"
                  >
                    Facebook
                  </Link>
                </div>

                <div className="flex items-center space-x-2">
                <YoutubeIcon className="h-5 w-5 opacity-60" />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/@ik4050a"
                    className="opacity-60 hover:opacity-100"
                  >
                    Youtube
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* gg map */}

          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6515798590463!2d106.77282497485785!3d10.837953289314575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527066b638b4d%3A0xbde8d28147f66ba4!2zNDQgxJDGsOG7nW5nIHPhu5EgMTIsIFTEg25nIE5oxqFuIFBow7ogQiwgUXXhuq1uIDksIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1729610239074!5m2!1svi!2s"
              width="100%"
              height="250"
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
