import { i18nRouter } from "next-i18n-router";
import { i18nConfig } from "./i18nConfig";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
     const pathname = request.nextUrl.pathname;
     if (pathname === "/") {
          const defaultLocale = i18nConfig.defaultLocale;
          const redirectUrl = new URL(`/${defaultLocale}`, request.url);
          return NextResponse.redirect(redirectUrl);
     }
     // Принудительно меняю NEXT_LOCALE на нужный язык из-за бага в next-i18n-router
     const pathnameIsMissingLocale = i18nConfig.locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

     let response: NextResponse;

     if (pathnameIsMissingLocale) {
          response = i18nRouter(request, i18nConfig);
     } else {
          response = NextResponse.next();
     }

     const localeFromUrl = i18nConfig.locales.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

     const currentLocale = localeFromUrl || i18nConfig.defaultLocale;

     response.cookies.set("NEXT_LOCALE", currentLocale, {
          path: "/",
          maxAge: 30 * 24 * 60 * 60, // 30 дней
          sameSite: "strict",
     });

     return response;
}

export const config = {
     matcher: "/((?!api|static|.*\\..*|_next).*)",
};