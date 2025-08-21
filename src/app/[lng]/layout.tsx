
import ReactLenis from "lenis/react";
import "./globals.css";
import Header from "@/components/common/header/Header";
import initTranslations from "./i18n";

interface RootLayoutProps {
     children: React.ReactNode;
      params: { lng: string };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const { lng } = params;
    const { t } = await initTranslations(lng, ["translation"]);
    console.log("TEST t(Home) =>", t("Home"));
    const nav = [
    {
        id: 0,
        title: t('Home'),
        href: '/'
    },
    {
        id: 1,
        title: t('Experience'),
        href: '/#experience'
    },
    {
        id: 2,
        title: t('Skills'),
        href: '/#skills'
    },
    {
        id: 3,
        title: t('Projects'),
        href: '/#projects'
    },
    {
        id: 4,
        title: t('Contacts'),
        href: '/#contacts'
    },
]
  return (
    <html lang={lng}>
      <ReactLenis root>
      <body
        className=""
      >
        <Header lng={lng} nav={nav} />
        {children}
      </body>
      </ReactLenis>
    </html>
  );
}
