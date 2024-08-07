import { NextRequest, NextResponse } from "next/server";

// FOR FINDING <html> lang value
export const allRoutes: { [key: string]: string } = {
    "/de": "de",
    "/en": "en",
    "/about/de": "de",
    "/about/en": "en",
    "/catering/de": "de",
    "/catering/en": "en",
    "/cafe/de": "de",
    "/cafe/en": "en",
    "/privacy/de": "de",
    "/privacy/en": "en"
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

