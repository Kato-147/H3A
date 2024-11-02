"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import navbar from "@/public/navbar-img.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
  href: string;
}

const routeList: RouteProps[] = [
  {
    href: "/enroll",
    label: "Đăng ký",
  },
  {
    href: "/event",
    label: "Sự kiện",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Khóa học tiếng hàn ",
    description: "Khóa học tiếng Hàn cơ bản dành cho người chưa có nền tảng.",
    href: "/course",
  },
  {
    title: "Đại học",
    description:
      "Cách ngành hệ đại học.",
    href: "/university",
  },
  {
    title: "Cao học",
    description:
      "Các ngành hệ cao học.",
    href: "/master",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          alt=""
          src={require("@/public/logo.png")}
          className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-11 h-9 mr-2 border text-white flex items-center justify-center"
        />
        H3A EDUCATION
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      alt=""
                      src={require("@/public/logo.png")}
                      className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-11 h-9 mr-2 border text-white flex items-center justify-center"
                    />
                    H3A EDUCATION
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <Accordion
                type="multiple"
                className="w-full"
              >
                <AccordionItem value="nganh-hoc">
                  <AccordionTrigger className="font-medium text-lg">
                    Ngành học
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-2">
                      {featureList.map(({ title, description, href }) => (
                        <Link
                        onClick={() => setIsOpen(false)}
                          href={href}
                          key={title}
                          className="rounded-md p-3 text-sm hover:bg-muted"
                        >
                          <p className="mb-1 font-semibold leading-none text-foreground">
                            {title}
                          </p>
                          <p className="line-clamp-2 text-muted-foreground">
                            {description}
                          </p>
                        </Link>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex flex-col mt-4">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Ngành học
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src={navbar}
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description, href }) => (
                    <Link
                      href={href}
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </Link>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        {/* <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button> */}
      </div>
    </header>
  );
};
