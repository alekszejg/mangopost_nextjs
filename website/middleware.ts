import { NextRequest, NextResponse } from "next/server";

// FOR FINDING <html> lang value
export const allRoutes: { [key: string]: string } = {
    "/": "de",
    "/en": "en",
    "/ueber-uns": "de",
    "/about-us": "en",
    "/auf-anruf-lieferung": "de",
    "/on-demand-delivery": "en",
    "/geplante-lieferung": "de",
    "/scheduled-delivery": "en",
    "/privacy-policy": "en",
    "/datenschutz": "de"
};

export function middleware(req: NextRequest) {
    const currentUrlPath = req.nextUrl.pathname;
    return checkPath(currentUrlPath);
}

function checkPath(currentPath: string) {
    if (currentPath in allRoutes) {
        return setURLPathHeader(currentPath);
    }
    else {
        return NextResponse.next()
    }
}

// CREATE HTTP HEADER WITH URL PATH
function setURLPathHeader(currentRoute: string) {
    const response = NextResponse.next();
    response.headers.set("urlpath", currentRoute);
    return response;
}

