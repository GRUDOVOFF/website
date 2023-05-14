import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { AboutMe } from "../components/homepage/AboutMe";
import {
  SocialLinkData,
  SocialLinks,
} from "../components/homepage/SocialLinks";
import { Hero } from "../components/homepage/Hero";

import avatar from "./assets/index/avatar.jpg";
import AboutMeDesc from "./assets/index/_about-me.md";

const socialLinks: SocialLinkData[] = [
  {
    name: "VK",
    url: "https://vk.com/grudovoff",
    svg: (
      <svg role="img" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <title>VK</title>
        <path d="M5260 14389 c-1754 -23 -2600 -127 -3330 -410 -100 -38 -358 -168
-448 -224 -277 -175 -556 -436 -739 -693 -40 -56 -73 -104 -73 -108 0 -3 -11
-20 -24 -37 -13 -18 -56 -93 -94 -167 -322 -617 -466 -1380 -522 -2768 -39
-950 -39 -4624 0 -5562 49 -1207 155 -1883 390 -2488 42 -108 167 -359 222
-445 141 -221 345 -458 531 -615 81 -69 261 -202 272 -202 4 0 21 -11 38 -24
50 -38 291 -160 417 -212 593 -242 1305 -356 2535 -404 968 -39 4562 -39 5530
0 1211 48 1892 154 2505 391 100 38 358 168 448 224 276 174 559 438 737 690
39 55 75 107 80 116 6 10 34 58 63 108 351 598 511 1401 572 2862 39 930 39
4613 0 5549 -57 1386 -192 2126 -500 2737 -158 313 -346 556 -614 795 -85 75
-250 201 -308 233 -9 6 -57 33 -105 61 -607 355 -1407 515 -2878 574 -667 27
-3327 38 -4705 19z m2590 -5549 l0 -1180 28 0 c48 0 202 36 302 70 113 39 312
132 393 183 31 20 60 37 63 37 11 0 142 96 254 185 193 154 441 412 610 635
134 177 279 418 386 640 30 63 59 122 64 132 20 36 101 250 136 361 l38 117
756 1 c733 1 791 1 798 -6 6 -5 -55 -274 -88 -390 -79 -283 -238 -656 -392
-920 -36 -60 -71 -121 -79 -134 -8 -14 -33 -54 -56 -89 -24 -35 -43 -65 -43
-67 0 -3 -26 -39 -58 -82 -32 -43 -63 -85 -68 -94 -5 -9 -21 -32 -37 -50 -15
-19 -50 -63 -78 -99 -141 -178 -419 -468 -606 -628 -45 -39 -78 -74 -75 -79 4
-4 3 -5 -1 -1 -5 3 -54 -30 -110 -73 -86 -67 -318 -228 -383 -265 -17 -10 -11
-15 52 -47 40 -20 115 -61 168 -92 53 -30 100 -55 106 -55 5 0 10 -3 10 -7 0
-5 30 -26 66 -48 72 -44 308 -209 364 -254 186 -152 249 -208 409 -365 198
-195 305 -317 494 -561 152 -197 386 -595 497 -845 28 -63 56 -123 61 -133 9
-17 27 -62 96 -247 24 -65 94 -290 107 -343 l6 -27 -856 2 -857 3 -17 50
c-146 425 -349 785 -625 1111 -64 75 -253 264 -328 328 -269 228 -606 420
-915 522 -169 56 -483 124 -568 124 l-24 0 0 -1072 0 -1071 -284 6 c-900 21
-1613 174 -2274 488 -738 350 -1314 849 -1795 1555 -41 61 -83 126 -94 145
-10 19 -28 48 -40 66 -13 17 -23 34 -23 37 0 3 -19 36 -41 73 -43 70 -216 415
-258 513 -13 30 -29 69 -36 85 -172 400 -325 921 -425 1456 -80 426 -150 1113
-150 1466 l0 113 824 0 823 0 7 -177 c22 -597 110 -1180 252 -1670 39 -136
124 -387 159 -468 78 -185 105 -245 151 -335 96 -188 196 -361 220 -381 8 -6
14 -16 14 -21 0 -5 9 -22 21 -36 11 -15 58 -78 104 -140 98 -131 120 -156 275
-313 200 -201 396 -342 645 -464 150 -73 336 -141 362 -131 11 5 13 348 13
2068 0 1135 0 2065 0 2068 0 3 349 4 775 2 l775 -2 0 -1180z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/pkosiec",
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Twitter</title>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pkosiec",
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Medium",
    url: "https://medium.com/@pkosiec",
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Medium</title>
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    name: "Dev.to",
    url: "https://dev.to/pkosiec",
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>dev.to</title>
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pkosiec",
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Instagram</title>
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Hero />
      <main>
        <div className="container padding-vert">
          <AboutMe avatar={avatar} descriptionComponent={<AboutMeDesc />} />
          <SocialLinks data={socialLinks} />
        </div>
      </main>
    </Layout>
  );
}
