import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const currentUrlPath = request.nextUrl.pathname;
    return setCustomHeader(currentUrlPath);
}

// CREATE HTTP HEADER WITH URL PATH
function setCustomHeader(currentRoute: string) {
    const response = NextResponse.next();
    
    if (currentRoute.startsWith("/_next/static") || currentRoute.startsWith("/favicon.ico")) {
        return response;
    }

    response.headers.set("urlpath", currentRoute);
    return response;
}

// FOR DETERMINING LANGUAGE OF HOMEPAGE (in app router "/" route is german, "/en" is english")
/*function processAcceptLanguage(request: NextRequest, currentRoute: string) { 
    const acceptLanguageHeader = request.headers.get('accept-language'); 
    const germanVariations = ["de", "de-DE", "de-AT", "de-CH", "de-LI"];
    
    if (currentRoute !== "/") return NextResponse.next();
    else if (currentRoute === "/" && acceptLanguageHeader) {
        const preferredLanguage = acceptLanguageHeader.split(",")[0];
    
        // REDIRECT IF PREFERRED LANGUAGE ISNT GERMAN
        if (!germanVariations.includes(preferredLanguage)) {
            const redirectUrl = `${request.nextUrl.origin}/en`;
            console.log(`redirect url is ${redirectUrl}`)
            return NextResponse.redirect(redirectUrl);
        }   
    }
    
    return NextResponse.next(); 
}*/