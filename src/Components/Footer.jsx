import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TiStarburst } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-[85%] m-auto py-16">
      {/* NewsLetter */}
      <div className="flex items-center justify-between  ">
        <div className="flex justify-between items-center gap-2">
          <span>
            <svg
              width={40}
              height={40}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FFEDB3]"
            >
              <path
                d="M20 0s-.834 17.324-20 20c0 0 16.453.315 20 20 0 0 1.13-17.018 20-20 0 0-17.93-2.523-20-20Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <p className="text-ml-2 lg:flex lg:items-end">
            <span className="block text-32 lg:text-5xl text-white font-bold tracking-tighter">
              {" "}
              Cool Stuff Only{" "}
            </span>
            <span className="text-[#FFEDB3] block  lg:ml-4">
              Subscribe to our News Letter
            </span>
          </p>
        </div>
        <figure>
          <img src="/Pack.svg" alt="" className="w-20 h-20" />
        </figure>
      </div>

      {/* Input */}
      <div className="SubscribeContainer_container__A_UBB">
        <span className="flex-1 h-full flex items-center border-r border-[#ffffff20] ">
          <input
            type="email"
            className="flex w-full pr-10 text-xl bg-transparent text-gray-100 font-bold focus:outline-none placeholder:text-black-14"
            placeholder="yourname@email.com"
            autocapitalize="off"
            autocorrect="off"
            name="email"
            id="email"
            size="25"
            value=""
          />
        </span>
        <button className="w-[30%] lg:w-[23.3%] flex items-center justify-center">
          <FaArrowRight className="text-purple-500" size={32} />
        </button>
      </div>

      <div class="lg:hidden">
        <ul class="grid grid-cols-2">
          <li class="h-24 font-bold text-xl flex items-center justify-center border-white-20 border-r border-b">
            <a
              href="https://twitter.com/chowdeck"
              target="_blank"
              rel="noreferrer"
              class="text-white flex items-center hover:underline"
            >
              <svg
                width="35"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 43 41"
                class="text-mint"
              >
                <path
                  d="M20 0s-.834 17.324-20 20c0 0 16.453.315 20 20 0 0 1.13-17.018 20-20 0 0-17.93-2.523-20-20Z"
                  fill="currentColor"
                ></path>
              </svg>
              Twitter
            </a>
          </li>
          <li class="h-24 font-bold text-xl flex items-center justify-center border-white-20 border-b">
            <a
              href="https://www.instagram.com/chowdeck/"
              target="_blank"
              rel="noreferrer"
              class="text-white flex items-center hover:underline"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-candy"
                viewBox="0 0 30 24"
              >
                <path
                  d="m13.733 1.223.579 1.627a1.84 1.84 0 0 0 2.523 1.045l1.56-.741c1.563-.743 3.194.888 2.451 2.451l-.741 1.56a1.838 1.838 0 0 0 1.045 2.523l1.627.578c1.63.58 1.63 2.886 0 3.467l-1.627.579a1.84 1.84 0 0 0-1.045 2.523l.741 1.56c.743 1.563-.888 3.194-2.451 2.451l-1.56-.741a1.839 1.839 0 0 0-2.523 1.044l-.579 1.628c-.58 1.63-2.886 1.63-3.466 0l-.579-1.628a1.84 1.84 0 0 0-2.523-1.044l-1.56.74c-1.563.744-3.194-.887-2.451-2.45l.741-1.56A1.84 1.84 0 0 0 2.85 14.31l-1.627-.578c-1.63-.58-1.63-2.887 0-3.467l1.627-.578a1.84 1.84 0 0 0 1.048-2.523l-.742-1.56c-.743-1.564.888-3.195 2.452-2.452l1.56.742A1.84 1.84 0 0 0 9.69 2.85l.578-1.627c.578-1.63 2.884-1.63 3.464 0Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              Instagram
            </a>
          </li>
          <li class="h-24 font-bold text-xl flex items-center justify-center border-white-20 border-r">
            <a
              href="https://facebook.com/chowdeck"
              target="_blank"
              rel="noreferrer"
              class="text-white flex items-center hover:underline"
            >
              <svg
                width="35"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 65 30"
                class="text-onion-100 rotate-180 mr-2"
              >
                <path
                  d="M19.739 0A20.261 20.261 0 0 1 40 20.261v3.88H0v-4.402A19.739 19.739 0 0 1 19.739 0Z"
                  fill="currentColor"
                ></path>
              </svg>
              Facebook
            </a>
          </li>
          <li class="h-24 font-bold text-xl flex items-center justify-center border-white-20">
            <a
              href="https://www.linkedin.com/company/chowdeck/"
              target="_blank"
              rel="noreferrer"
              class="text-white flex items-center hover:underline"
            >
              <span class="w-5 h-5 border-4 bg-jollof border-white border-opacity-40 rounded-full mr-2"></span>{" "}
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div className="lg:flex border-t border-[#ffffff66]">
        <div className="hidden lg:flex lg:flex-col w-[30%] pt-16 pb-8">
          <svg
            width="128"
            height="128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64 124c33.137 0 60-26.863 60-60S97.137 4 64 4 4 30.863 4 64s26.863 60 60 60Z"
              fill="#0C513F"
              stroke="#fff"
              stroke-width="7.09"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M23.383 54.783c-.35 1.539-1.6 2.576-3.624 2.112-2.03-.464-2.718-1.937-2.346-3.47.365-1.534 1.598-2.576 3.623-2.113 2.024.464 2.696 1.938 2.346 3.471Zm-5.267-1.2c-.261 1.075.235 2.068 1.845 2.433 1.615.371 2.472-.316 2.718-1.391.245-1.08-.235-2.069-1.845-2.434-1.62-.371-2.466.327-2.718 1.391ZM23.121 39.416l.459-.818 4.18 4.83-.415.741-6.303-1.037.458-.818 4.983.884-3.362-3.776v-.006ZM32.141 29.583l-2.188 2.189 1.31 1.31 1.855-1.856.54.54-1.855 1.855 1.315 1.316 2.188-2.189.54.54-2.788 2.789-4.245-4.245 2.788-2.789.54.54ZM45.173 26.86l-.835.475-1.964-1.217c-.055.043-.115.076-.175.109l-1.151.66 1.004 1.757-.737.42-2.985-5.21 1.894-1.081c1.19-.683 2.259-.475 2.892.633.458.802.398 1.56-.12 2.172l2.172 1.276.005.006Zm-5.752-2.816 1.277 2.232 1.152-.66c.775-.442.9-1.14.53-1.785-.372-.65-1.032-.89-1.807-.447l-1.151.66ZM55.82 23.247l-.95-1.457-2.275.545-.186 1.73-.911.218.802-6.368.824-.196 3.602 5.31-.911.218h.005Zm-3.138-1.676 1.768-.425-1.473-2.26-.295 2.68v.005ZM64.496 21.774l2.838.104-.028.736-3.683-.136.224-5.998.846.033-.197 5.26ZM75.104 23.286l2.718.813-.213.71-3.53-1.06 1.724-5.751.813.246-1.512 5.042ZM95.192 34.04c-.874.932-1.84.752-2.838-.186l-1.665-1.561 4.115-4.371 1.473 1.386c.977.917 1.152 1.73.393 2.538-.425.447-.83.573-1.277.43.382.584.399 1.13-.201 1.769v-.006Zm-2.358-.7c.65.612 1.228.661 1.74.115.514-.545.367-1.053-.283-1.664l-1.042-.982-1.457 1.55 1.042.982Zm2.106-4.327-1.233 1.31.857.802c.59.551 1.102.671 1.555.191.453-.48.268-.95-.316-1.5l-.857-.803h-.005ZM104.813 41.388l-1.616-2.641-1.582.966 1.37 2.237-.65.398-1.369-2.237-1.588.971 1.615 2.642-.65.398-2.057-3.367 5.119-3.138 2.057 3.367-.649.398v.006ZM105.014 50.685c-.737.284-.786 1.059-.611 1.66.18.627.627 1.249 1.473 1.003 1.648-.475-.862-3.383 1.49-4.06 1.015-.294 1.905.344 2.227 1.534.272 1.01-.022 1.931-.841 2.313l-.36-.725c.611-.257.715-.868.562-1.403-.164-.567-.589-1.113-1.348-.895-1.473.426 1.026 3.34-1.49 4.06-.758.219-1.91.093-2.406-1.626-.469-1.632.24-2.33.944-2.608l.36.753v-.006ZM110.646 66.048l-.032-1.932-5.239.088-.017-.852 5.239-.082-.033-1.937.764-.01.077 4.714-.764.011h.005ZM107.295 83.358l-.349.774-5.463-2.488.35-.775 5.462 2.489ZM100.36 94.532l-.524.671-4.731-3.7.523-.67 5.594.507-3.716-2.909.523-.671 4.732 3.7-.524.67-5.61-.523 3.738 2.925h-.005ZM79.787 105.742c-.84-1.861.022-3.302 1.55-3.989l1.85-.835 2.466 5.468-1.85.835c-1.522.687-3.176.382-4.016-1.479Zm1.839-3.34c-1.086.491-1.703 1.501-1.037 2.98.671 1.484 1.839 1.681 2.92 1.195l1.08-.486-1.883-4.174-1.08.485ZM68.78 110.63l3.062-.459-.273-1.833-2.597.387-.115-.753 2.598-.387-.273-1.839-3.061.458-.115-.753 3.902-.584.884 5.937-3.902.584-.115-.753.006-.005ZM60.148 106.193l-2.822-.305.082-.732 3.667.399-.65 5.964-.845-.093.568-5.233ZM48.748 109.168l-.803-.278 1.954-5.675.802.278-1.953 5.675ZM36.71 103.16l-.786-.508 5.075-3.869.715.459-1.425 6.221-.785-.508 1.19-4.917-3.979 3.122h-.005ZM27.448 93.556l2.052 2.32 1.386-1.228-1.74-1.965.572-.507 1.74 1.964 1.392-1.233-2.051-2.32.573-.507 2.614 2.952-4.497 3.978-2.614-2.952.573-.507v.005ZM25.538 80.365l.425.863-1.337 1.882c.038.06.071.12.098.18l.59 1.195 1.817-.895.377.764-5.386 2.652-.96-1.953c-.607-1.233-.334-2.287.812-2.849.83-.409 1.583-.3 2.161.257l1.408-2.09-.005-.006Zm-3.17 5.566 2.307-1.135-.589-1.195c-.393-.802-1.08-.971-1.752-.638-.67.327-.955.977-.562 1.779l.59 1.195.005-.006ZM16.769 71.046l-.18-.987 3.356 1.506 2.914-.524.153.846-2.914.524-2.62 2.597-.18-.988 1.96-1.893-2.494-1.075.005-.006Z"
              fill="#fff"
            ></path>
            <path
              d="m64 44.154 6.45 13.064 14.424 2.096-10.44 10.172 2.467 14.363L64 77.066l-12.896 6.783 2.462-14.363-10.434-10.172 14.423-2.096L64 44.154Z"
              fill="#FFC501"
            ></path>
          </svg>
          <div className="items-center justify-center hidden lg:flex mt-auto lg:justify-start">
            <svg
              width="220"
              height="80"
              viewBox="0 0 1314 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M212.892 120.252C203.818 168.549 160.177 207.937 108.542 207.937C85.7271 207.937 64.2953 200.904 46.666 188.883L0 207.511L18.2775 160.45C7.43199 144.422 1.03702 125.282 1.03702 104.651C1.03702 47.2313 50.3388 0 108.542 0C162.726 0 207.318 40.3257 213.238 92.2034C157.368 91.4788 140.387 81.8449 129.455 74.2999C127.381 72.8505 125.134 71.7848 122.887 70.9749C118.134 68.8862 112.863 67.7778 107.289 67.7778C85.8567 67.7778 70.6039 80.7793 70.6039 101.88C70.6039 122.981 86.937 135.982 108.326 135.982C111.653 135.982 114.893 135.556 118.004 134.788C123.622 133.595 127.208 131.634 127.208 131.634C161.43 113.006 204.034 117.439 212.805 120.252H212.892Z"
                fill="#FFC501"
              ></path>
              <path
                d="M323.965 183.237C279.07 183.237 245.238 149.05 245.238 103.694C245.238 58.3382 278.077 25.0034 323.36 25.0034C362.421 25.0034 388.908 45.8909 392.451 79.5241L362.637 79.652C356.717 63.7092 341.637 53.4786 324.051 53.4786C296.44 53.4786 277.904 73.6841 277.904 103.737C277.904 133.789 296.44 154.208 324.051 154.208C341.681 154.208 356.199 144.361 362.032 128.461L392.365 128.631C391.025 137.839 380.871 183.28 324.051 183.28L323.965 183.237Z"
                fill="white"
                stroke="white"
              ></path>
              <path
                d="M477.532 183.07L477.446 112.47C477.446 99.8096 469.063 91.3267 456.619 91.3267C444.174 91.3267 435.792 99.8096 435.792 112.47L435.848 183L404.292 182.988L404.206 24.7425L435.705 24.6572L435.792 76.1513C441.582 67.7963 452.255 63.2352 465.606 63.2352C491.575 63.2352 509.031 80.3715 509.031 105.863V183.07H477.532Z"
                fill="white"
                stroke="white"
              ></path>
              <path
                d="M580.341 183C545.471 183 519.157 155.792 519.157 122.201C519.157 88.6108 545.471 63.29 580.341 63.29C615.211 63.29 641.525 88.6108 641.525 122.201C641.525 155.792 615.211 183 580.341 183ZM580.341 91.339C563.533 91.339 551.78 104.042 551.78 122.201C551.78 140.361 563.533 153.064 580.341 153.064C597.15 153.064 608.902 140.361 608.902 122.201C608.902 104.042 597.15 91.339 580.341 91.339Z"
                fill="white"
                stroke="white"
              ></path>
              <path
                d="M757.672 183L731.444 103.448L705.302 182.957L677.562 183L638.155 65.893L670.648 65.7651L691.907 133.117L713.858 65.8504L748.9 65.7651L771.196 133.117L791.894 65.8504L824.646 65.7651L785.369 183H757.672Z"
                fill="white"
                stroke="white"
              ></path>
              <path
                d="M879.757 183C847.091 183 821.38 155.261 821.38 122.225C821.38 89.1883 846.873 63.3134 879.453 63.3134C892.848 63.3134 904.514 67.5761 912.379 75.3344L912.206 24.8633L943.705 24.7781L943.792 183.04L914.409 183.125L914.323 167.879C906.459 176.49 894.236 183 879.847 183H879.757ZM883.385 91.3623C867.052 91.3623 856.077 103.852 856.077 122.395C856.077 140.938 866.793 153.044 883.385 153.044C899.977 153.044 908.922 141.578 908.922 122.395C908.922 103.213 899.373 91.3623 883.385 91.3623Z"
                fill="white"
                stroke="white"
              ></path>
              <path
                d="M1009.85 183C993.514 183 978.92 174.932 968.42 163.55C958.353 152.637 952.822 137.888 952.822 122.031C952.822 88.5682 977.408 63.29 1009.94 63.29H1010.64C1043.82 63.6737 1066.07 86.181 1066.07 119.26C1066.07 123.821 1066.07 127.658 1065.94 130.897L985.488 130.983C987.476 145.178 998.019 154.087 1013.1 154.087C1023.86 154.087 1031.59 150.08 1036.13 142.236H1065.94C1061.1 164.744 1039.96 181.806 1012.53 182.915C1011.62 182.915 1010.67 182.957 1009.76 182.957L1009.85 183ZM1010.68 88.2698C998.235 88.2698 989.377 95.5165 986.309 108.219L1034.1 108.092C1032.72 96.1133 1023.56 88.2698 1010.68 88.2698Z"
                fill="white"
                stroke="white"
              ></path>
              <path
                d="M1137.32 183C1102.79 183 1076.78 155.691 1076.78 121.972C1076.78 88.2538 1101.84 63.2314 1135.11 63.2314C1135.85 63.2314 1136.58 63.2314 1137.36 63.2314C1177.98 64.6382 1187.83 86.9324 1192.45 110.804L1163.93 110.889C1160.26 98.7828 1150.11 91.2804 1137.36 91.2804C1120.9 91.2804 1109.45 103.983 1109.45 122.143C1109.45 140.302 1120.94 153.005 1137.36 153.005C1150.11 153.005 1160.26 145.503 1163.8 133.482L1192.32 133.78C1188.95 156.714 1172.66 183 1137.32 183Z"
                fill="white"
                stroke="white"
              ></path>
              <path
                d="M1278.58 182.915L1249.16 133.743L1233.43 150.666V182.915L1201.98 183L1201.85 25.1279L1233.35 25L1233.43 108.934L1274.27 66.1356L1310.95 66.093L1269.6 111.662L1312.89 182.915H1278.58Z"
                fill="white"
                stroke="white"
              ></path>
            </svg>
          </div>
        </div>
        {/* other */}

        <div className="lg:border-l border-[#ffffff66] flex-1">
          <div className="border-b border-[#ffffff66] pt-16 lg:pt-0 lg:grid lg:grid-cols-3">
            <div className="flex items-start lg:block mb-20 lg:mb-0 lg:even:border-x lg:border-[#ffffff66] lg:pl-4 lg:py-16">
              <h3 className="uppercase text-gray-400 sub-title w-[40%] pr-5 lg:mb-8 lg:w-full">
                Company
              </h3>
              <ul className="w-[60%] lg:w-full grid gap-6">
                <li className="text-white first-letter:capitalize">
                  <a className="hover:underline" title="customers" href="/">
                    customers
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    className="hover:underline"
                    title="Vendors"
                    href="/vendors"
                  >
                    Vendors
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a className="hover:underline" title="Riders" href="/riders">
                    Riders
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Storefront
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Documentation
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a className="hover:underline" title="About" href="/company">
                    About
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="https://chowdeck.bamboohr.com/careers"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Careers
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a className="hover:underline" title="FAQs" href="/#faqs">
                    FAQs
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a className="hover:underline" title="Blog" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    className="hover:underline"
                    title="Contact"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    className="hover:underline"
                    title="Terms of Use"
                    href="/terms"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    className="hover:underline"
                    title="Privacy Policy"
                    href="/privacy"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-start lg:block mb-20 lg:mb-0 lg:even:border-x lg:border-[#ffffff66] lg:pl-4 lg:py-16">
              <h3 className="uppercase text-gray-400 sub-title w-[40%] pr-5 lg:mb-8 lg:w-full">
                Cuisines near you
              </h3>
              <ul className="w-[60%] lg:w-full grid gap-6">
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/pasta-near-me"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Pasta near me
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/rice-near-me"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Rice near me
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/fast-food-near-me"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Fast food near me
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/asian-food-in-lagos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Asian food in Lagos
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/african-food-in-lagos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    African food in Lagos
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/breakfast-menu-in-lagos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Breakfast menu in Lagos
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/fitfam-stores-in-lagos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Fitfam stores in Lagos
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/american-food-in-lagos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    American food in Lagos
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/pastries-in-lagos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Pastries in Lagos
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/salad-in-lagos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Salad in Lagos
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/cuisines/fruits-in-lagos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Fruits in Lagos
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-start lg:block mb-20 lg:mb-0 lg:even:border-x lg:border-[#ffffff66] lg:pl-4 lg:py-16">
              <h3 className="uppercase text-gray-400 sub-title w-[40%] pr-5 lg:mb-8 lg:w-full">
                popular
              </h3>
              <ul className="w-[60%] lg:w-full grid gap-6">
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Food delivery
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/surulere"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Surulere
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/ogudu"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Ogudu
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/lagos-mainland"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Yaba
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/ikeja"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Ikeja
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/lekki"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Lekki
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/ikeja/restaurants/king-glab-ikeja"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    King Glab
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/lagos-mainland/restaurants/korede-spaghetti"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Korede Spaghetti
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/lagos-mainland/restaurants/iyan-aladuke"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Iyan Aladuke
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/ikeja/restaurants/food-fusion-lagos"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Food Fusion
                  </a>
                </li>
                <li className="text-white first-letter:capitalize">
                  <a
                    href="/store/ikeja/restaurants/belefull"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Belefull
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:block">
            <ul className="grid grid-cols-2">
              <li className="h-24 font-bold text-xl flex items-center justify-center border-[#ffffff66] border-r border-b">
                <a
                  href="https://twitter.com/chowdeck"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white flex items-center hover:underline"
                >
                  <svg
                    width="35"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 43 41"
                    className="text-mint"
                  >
                    <path
                      d="M20 0s-.834 17.324-20 20c0 0 16.453.315 20 20 0 0 1.13-17.018 20-20 0 0-17.93-2.523-20-20Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Twitter
                </a>
              </li>
              <li className="h-24 font-bold text-xl flex items-center justify-center border-[#ffffff66] border-b">
                <a
                  href="https://www.instagram.com/chowdeck/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white flex items-center hover:underline"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-candy"
                    viewBox="0 0 30 24"
                  >
                    <path
                      d="m13.733 1.223.579 1.627a1.84 1.84 0 0 0 2.523 1.045l1.56-.741c1.563-.743 3.194.888 2.451 2.451l-.741 1.56a1.838 1.838 0 0 0 1.045 2.523l1.627.578c1.63.58 1.63 2.886 0 3.467l-1.627.579a1.84 1.84 0 0 0-1.045 2.523l.741 1.56c.743 1.563-.888 3.194-2.451 2.451l-1.56-.741a1.839 1.839 0 0 0-2.523 1.044l-.579 1.628c-.58 1.63-2.886 1.63-3.466 0l-.579-1.628a1.84 1.84 0 0 0-2.523-1.044l-1.56.74c-1.563.744-3.194-.887-2.451-2.45l.741-1.56A1.84 1.84 0 0 0 2.85 14.31l-1.627-.578c-1.63-.58-1.63-2.887 0-3.467l1.627-.578a1.84 1.84 0 0 0 1.048-2.523l-.742-1.56c-.743-1.564.888-3.195 2.452-2.452l1.56.742A1.84 1.84 0 0 0 9.69 2.85l.578-1.627c.578-1.63 2.884-1.63 3.464 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>{" "}
                  Instagram
                </a>
              </li>
              <li className="h-24 font-bold text-xl flex items-center justify-center border-[#ffffff66] border-r">
                <a
                  href="https://facebook.com/chowdeck"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white flex items-center hover:underline"
                >
                  <svg
                    width="35"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 65 30"
                    className="text-onion-100 rotate-180 mr-2"
                  >
                    <path
                      d="M19.739 0A20.261 20.261 0 0 1 40 20.261v3.88H0v-4.402A19.739 19.739 0 0 1 19.739 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Facebook
                </a>
              </li>
              <li className="h-24 font-bold text-xl flex items-center justify-center border-[#ffffff66]">
                <a
                  href="https://www.linkedin.com/company/chowdeck/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white flex items-center hover:underline"
                >
                  <span className="w-5 h-5 border-4 bg-jollof border-white border-opacity-40 rounded-full mr-2"></span>{" "}
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-xs text-center py-10 border-t border-[#ffffff66]">
        <p class="text-gray-500">
          © All Rights Reserved. 2022, Chowdeck Logistics Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
