import React from "react";
import Profile from "../../subcomponents/Profile/Profile";
import Reviews from "../../subcomponents/Reviews/Reviews";
import Financials from "../../subcomponents/Financials/Financials";

export const icons = {
    "overview": {
        "selected":
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.15405 8.57141H5.25675C7.35946 8.57141 8.41081 7.49998 8.41081 5.35713V3.21428C8.41081 1.07143 7.35946 0 5.25675 0H3.15405C1.05135 0 0 1.07143 0 3.21428V5.35713C0 7.49998 1.05135 8.57141 3.15405 8.57141Z" fill="white" />
                <path d="M14.74 8.57141H16.8427C18.9454 8.57141 19.9967 7.49998 19.9967 5.35713V3.21428C19.9967 1.07143 18.9454 0 16.8427 0H14.74C12.6373 0 11.5859 1.07143 11.5859 3.21428V5.35713C11.5859 7.49998 12.6373 8.57141 14.74 8.57141Z" fill="white" />
                <path d="M14.74 20.0011H16.8427C18.9454 20.0011 19.9967 18.9297 19.9967 16.7868V14.644C19.9967 12.5011 18.9454 11.4297 16.8427 11.4297H14.74C12.6373 11.4297 11.5859 12.5011 11.5859 14.644V16.7868C11.5859 18.9297 12.6373 20.0011 14.74 20.0011Z" fill="white" />
                <path d="M3.15405 20.0011H5.25675C7.35946 20.0011 8.41081 18.9297 8.41081 16.7868V14.644C8.41081 12.5011 7.35946 11.4297 5.25675 11.4297H3.15405C1.05135 11.4297 0 12.5011 0 14.644V16.7868C0 18.9297 1.05135 20.0011 3.15405 20.0011Z" fill="white" />
            </svg>,
        "default":
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.15405 8.57141H5.25675C7.35946 8.57141 8.41081 7.49998 8.41081 5.35713V3.21428C8.41081 1.07143 7.35946 0 5.25675 0H3.15405C1.05135 0 0 1.07143 0 3.21428V5.35713C0 7.49998 1.05135 8.57141 3.15405 8.57141Z" fill="#6764FF" fill-opacity="0.6" />
                <path d="M14.74 8.57141H16.8427C18.9454 8.57141 19.9967 7.49998 19.9967 5.35713V3.21428C19.9967 1.07143 18.9454 0 16.8427 0H14.74C12.6373 0 11.5859 1.07143 11.5859 3.21428V5.35713C11.5859 7.49998 12.6373 8.57141 14.74 8.57141Z" fill="#6764FF" fill-opacity="0.6" />
                <path d="M14.74 20.0011H16.8427C18.9454 20.0011 19.9967 18.9297 19.9967 16.7868V14.644C19.9967 12.5011 18.9454 11.4297 16.8427 11.4297H14.74C12.6373 11.4297 11.5859 12.5011 11.5859 14.644V16.7868C11.5859 18.9297 12.6373 20.0011 14.74 20.0011Z" fill="#6764FF" fill-opacity="0.6" />
                <path d="M3.15405 20.0011H5.25675C7.35946 20.0011 8.41081 18.9297 8.41081 16.7868V14.644C8.41081 12.5011 7.35946 11.4297 5.25675 11.4297H3.15405C1.05135 11.4297 0 12.5011 0 14.644V16.7868C0 18.9297 1.05135 20.0011 3.15405 20.0011Z" fill="#6764FF" fill-opacity="0.6" />
            </svg>

    },
    "reviews": {
        "selected":
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3604 2.4442L20.1886 5.99334C20.435 6.48418 21.0963 6.94985 21.6539 7.05054L24.9606 7.57913C27.0742 7.91895 27.567 9.40407 26.0498 10.8892L23.4693 13.3937C23.0414 13.809 22.7951 14.6271 22.9377 15.2186L23.6767 18.3147C24.2603 20.7563 22.9118 21.7128 20.6945 20.4291L17.5952 18.6419C17.0376 18.3147 16.1041 18.3147 15.5465 18.6419L12.4473 20.4291C10.23 21.7002 8.88142 20.7563 9.46494 18.3147L10.2041 15.2186C10.3467 14.6397 10.1003 13.8216 9.67241 13.3937L7.09199 10.8892C5.57484 9.41665 6.06759 7.93153 8.18122 7.57913L11.4877 7.05054C12.0453 6.96244 12.7068 6.48418 12.9531 5.99334L14.7815 2.4442C15.754 0.518599 17.3619 0.518599 18.3604 2.4442Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.78022 2.17969H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.89011 19.8008H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.2967 10.9883H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
        "default":
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3604 2.4442L20.1886 5.99334C20.435 6.48418 21.0963 6.94985 21.6539 7.05054L24.9606 7.57913C27.0742 7.91895 27.567 9.40407 26.0498 10.8892L23.4693 13.3937C23.0414 13.809 22.7951 14.6271 22.9377 15.2186L23.6767 18.3147C24.2603 20.7563 22.9118 21.7128 20.6945 20.4291L17.5952 18.6419C17.0376 18.3147 16.1041 18.3147 15.5465 18.6419L12.4473 20.4291C10.23 21.7002 8.88142 20.7563 9.46494 18.3147L10.2041 15.2186C10.3467 14.6397 10.1003 13.8216 9.67241 13.3937L7.09199 10.8892C5.57484 9.41665 6.06759 7.93153 8.18122 7.57913L11.4877 7.05054C12.0453 6.96244 12.7068 6.48418 12.9531 5.99334L14.7815 2.4442C15.754 0.518599 17.3619 0.518599 18.3604 2.4442Z" stroke="#6764FF" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.78022 2.17969H1" stroke="#6764FF" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.89011 19.8008H1" stroke="#6764FF" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.2967 10.9883H1" stroke="#6764FF" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

    },
    "financials": {
        "selected":
            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9296 9.30859H6.92969H12.9296Z" fill="white" />
                <path d="M12.9296 9.30859H6.92969" stroke="#6764FF" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.92969 9.30992V4.68996C1.92969 2.64998 3.57967 1 5.61965 1H11.2396C13.2796 1 14.9295 2.26999 14.9295 4.30996" fill="white" />
                <path d="M1.92969 9.30992V4.68996C1.92969 2.64998 3.57967 1 5.61965 1H11.2396C13.2796 1 14.9295 2.26999 14.9295 4.30996" stroke="#6764FF" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.4095 10.3585C16.9095 10.8385 16.6695 11.5785 16.8695 12.3385C17.1195 13.2685 18.0395 13.8585 18.9995 13.8585H19.9295V15.3085C19.9295 17.5184 18.1395 19.3084 15.9295 19.3084H5.92964C3.71967 19.3084 1.92969 17.5184 1.92969 15.3085V8.30855C1.92969 6.09857 3.71967 4.30859 5.92964 4.30859H15.9295C18.1295 4.30859 19.9295 6.10857 19.9295 8.30855V9.75853H18.8495C18.2895 9.75853 17.7795 9.97853 17.4095 10.3585Z" fill="white" stroke="#6764FF" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.9338 10.7817V12.8417C21.9338 13.4017 21.4737 13.8617 20.9037 13.8617H18.9737C17.8937 13.8617 16.9038 13.0717 16.8138 11.9917C16.7538 11.3617 16.9937 10.7717 17.4137 10.3617C17.7837 9.98172 18.2938 9.76172 18.8538 9.76172H20.9037C21.4737 9.76172 21.9338 10.2217 21.9338 10.7817Z" fill="white" stroke="#6764FF" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ,
        "default":
            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9296 9.30859H6.92969" stroke="#6764FF" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.92969 9.30992V4.68996C1.92969 2.64998 3.57967 1 5.61965 1H11.2396C13.2796 1 14.9295 2.26999 14.9295 4.30996" stroke="#6764FF" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.4095 10.3585C16.9095 10.8385 16.6695 11.5785 16.8695 12.3385C17.1195 13.2685 18.0395 13.8585 18.9995 13.8585H19.9295V15.3085C19.9295 17.5184 18.1395 19.3084 15.9295 19.3084H5.92964C3.71967 19.3084 1.92969 17.5184 1.92969 15.3085V8.30855C1.92969 6.09857 3.71967 4.30859 5.92964 4.30859H15.9295C18.1295 4.30859 19.9295 6.10857 19.9295 8.30855V9.75853H18.8495C18.2895 9.75853 17.7795 9.97853 17.4095 10.3585Z" stroke="#6764FF" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.9338 10.7817V12.8417C21.9338 13.4017 21.4737 13.8617 20.9037 13.8617H18.9737C17.8937 13.8617 16.9038 13.0717 16.8138 11.9917C16.7538 11.3617 16.9937 10.7717 17.4137 10.3617C17.7837 9.98172 18.2938 9.76172 18.8538 9.76172H20.9037C21.4737 9.76172 21.9338 10.2217 21.9338 10.7817Z" stroke="#6764FF" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
    },
    "email":
        <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30.5" cy="30" rx="30.5" ry="30" fill="#6764FF" fill-opacity="0.5" />
            <path d="M31.0312 15V25.5001L34.0313 22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M31.0313 25.5L28.0312 22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 31.5H22.615C23.185 31.5 23.695 31.815 23.95 32.325L25.705 35.835C26.2151 36.855 27.2501 37.5 28.3901 37.5H33.6851C34.8251 37.5 35.8601 36.855 36.3701 35.835L38.1252 32.325C38.3802 31.815 38.9052 31.5 39.4602 31.5H46.0002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.0625 40.5005C18.5025 43.6505 21.5025 45.0005 26.5275 45.0005H35.5277C43.0277 45.0005 46.0277 42.0005 46.0277 34.5004V28.5004C46.0277 22.0953 43.8377 18.9753 38.5277 18.1953" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23.5313 18.1953C18.2213 18.9753 16.0312 22.0953 16.0312 28.5004V34.5004" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    ,
    "contact":
        <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30.5" cy="30" rx="30.5" ry="30" fill="#6764FF" fill-opacity="0.5" />
            <path d="M38.6047 45C37.0279 45 35.3674 44.6233 33.6512 43.8977C31.9767 43.186 30.2884 42.2093 28.6419 41.0233C27.0093 39.8233 25.4326 38.4837 23.9395 37.0186C22.4605 35.5256 21.1209 33.9488 19.9349 32.3302C18.7349 30.6558 17.7721 28.9814 17.0884 27.3628C16.3628 25.6326 16 23.9581 16 22.3814C16 21.293 16.1953 20.2605 16.5721 19.2977C16.9628 18.307 17.5907 17.386 18.4419 16.5907C19.5163 15.5302 20.7442 15 22.0558 15C22.6 15 23.1581 15.1256 23.6326 15.3488C24.1767 15.6 24.6372 15.9767 24.9721 16.4791L28.2093 21.0419C28.5023 21.4465 28.7256 21.8372 28.8791 22.2279C29.0605 22.6465 29.1581 23.0651 29.1581 23.4698C29.1581 24 29.0047 24.5163 28.7116 25.0047C28.5023 25.3814 28.1814 25.786 27.7767 26.1907L26.8279 27.1814C26.8419 27.2233 26.8558 27.2512 26.8698 27.2791C27.0372 27.5721 27.3721 28.0744 28.014 28.8279C28.6977 29.6093 29.3395 30.3209 29.9814 30.9767C30.8047 31.786 31.4884 32.4279 32.1302 32.9581C32.9256 33.6279 33.4419 33.9628 33.7488 34.1163L33.7209 34.186L34.7395 33.1814C35.1721 32.7488 35.5907 32.4279 35.9953 32.2186C36.7628 31.7442 37.7395 31.6605 38.7163 32.0651C39.0791 32.2186 39.4698 32.4279 39.8884 32.7209L44.5209 36.014C45.0372 36.3628 45.414 36.8093 45.6372 37.3395C45.8465 37.8698 45.9442 38.3581 45.9442 38.8465C45.9442 39.5163 45.7907 40.186 45.4977 40.814C45.2046 41.4419 44.8419 41.986 44.3814 42.4884C43.586 43.3674 42.7209 43.9953 41.7163 44.4C40.7535 44.7907 39.707 45 38.6047 45ZM22.0558 17.093C21.2884 17.093 20.5767 17.4279 19.893 18.0977C19.2512 18.6977 18.8047 19.3535 18.5256 20.0651C18.2326 20.7907 18.093 21.5581 18.093 22.3814C18.093 23.6791 18.4 25.0884 19.014 26.5395C19.6419 28.0186 20.5209 29.5535 21.6372 31.0884C22.7535 32.6233 24.0233 34.1163 25.4186 35.5256C26.814 36.907 28.3209 38.1907 29.8698 39.3209C31.3767 40.4233 32.9256 41.3163 34.4605 41.9581C36.8465 42.9767 39.0791 43.214 40.9209 42.4465C41.6326 42.1535 42.2605 41.707 42.8326 41.0651C43.1535 40.7163 43.4047 40.3395 43.614 39.893C43.7814 39.5442 43.8651 39.1814 43.8651 38.8186C43.8651 38.5953 43.8233 38.3721 43.7116 38.1209C43.6698 38.0372 43.586 37.8837 43.3209 37.7023L38.6884 34.4093C38.4093 34.214 38.1581 34.0744 37.9209 33.9767C37.614 33.8512 37.4884 33.7256 37.014 34.0186C36.7349 34.1581 36.4837 34.3674 36.2046 34.6465L35.1442 35.693C34.6 36.2233 33.7628 36.3488 33.1209 36.1116L32.7442 35.9442C32.1721 35.6372 31.5023 35.1628 30.7628 34.5349C30.093 33.9628 29.3674 33.293 28.4884 32.4279C27.8047 31.7302 27.1209 30.9907 26.4093 30.1674C25.7535 29.4 25.2791 28.7442 24.986 28.2L24.8186 27.7814C24.7349 27.4605 24.707 27.2791 24.707 27.0837C24.707 26.5814 24.8884 26.1349 25.2372 25.786L26.2837 24.6977C26.5628 24.4186 26.7721 24.1535 26.9116 23.9163C27.0233 23.7349 27.0651 23.5814 27.0651 23.4419C27.0651 23.3302 27.0233 23.1628 26.9535 22.9953C26.8558 22.7721 26.7023 22.5209 26.507 22.2558L23.2698 17.6791C23.1302 17.4837 22.9628 17.3442 22.7535 17.2465C22.5302 17.1488 22.293 17.093 22.0558 17.093ZM33.7209 34.2L33.4977 35.1488L33.8744 34.1721C33.8047 34.1581 33.7488 34.1721 33.7209 34.2Z" fill="white" />
        </svg>
    ,
    "whatsapp":
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 1C24.28 1 31 7.72 31 16C31 24.28 24.28 31 16 31C13.24 31 10.645 30.25 8.41 28.945L1 31L3.01004 23.5C1.73504 21.295 1 18.73 1 16C1 10.45 4.015 5.605 8.5 3.01" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23.5 20.7538C23.5 21.0238 23.44 21.3088 23.305 21.5788C23.17 21.8488 23.005 22.1038 22.795 22.3438C22.42 22.7488 22.015 23.0488 21.565 23.2288C21.115 23.4238 20.62 23.5138 20.095 23.5138C19.33 23.5138 18.505 23.3338 17.65 22.9588C16.78 22.5838 15.925 22.0888 15.07 21.4738C14.2 20.8438 13.39 20.1388 12.61 19.3738C11.83 18.5938 11.14 17.7688 10.51 16.9138C9.89504 16.0588 9.39999 15.2038 9.03999 14.3488C8.67999 13.4938 8.5 12.6688 8.5 11.8888C8.5 11.3788 8.58998 10.8838 8.76998 10.4338C8.94998 9.96875 9.23501 9.54875 9.64001 9.17375C10.12 8.69375 10.645 8.46875 11.2 8.46875C11.41 8.46875 11.62 8.51375 11.815 8.60375C12.01 8.69375 12.19 8.82875 12.325 9.02375L14.065 11.4837C14.2 11.6787 14.305 11.8437 14.365 12.0087C14.44 12.1737 14.47 12.3237 14.47 12.4737C14.47 12.6537 14.41 12.8338 14.305 13.0138C14.2 13.1938 14.065 13.3738 13.885 13.5538L13.315 14.1538C13.225 14.2438 13.195 14.3338 13.195 14.4538C13.195 14.5138 13.21 14.5738 13.225 14.6338C13.255 14.6938 13.27 14.7388 13.285 14.7838C13.42 15.0388 13.66 15.3538 13.99 15.7438C14.335 16.1338 14.695 16.5388 15.085 16.9288C15.49 17.3338 15.88 17.6938 16.285 18.0388C16.675 18.3688 17.005 18.5938 17.26 18.7288C17.305 18.7438 17.35 18.7738 17.395 18.7888C17.455 18.8188 17.515 18.8188 17.59 18.8188C17.725 18.8188 17.815 18.7738 17.905 18.6838L18.475 18.1138C18.67 17.9188 18.85 17.7838 19.015 17.6938C19.195 17.5888 19.36 17.5288 19.555 17.5288C19.705 17.5288 19.855 17.5588 20.02 17.6338C20.185 17.7088 20.365 17.7988 20.545 17.9338L23.035 19.7038C23.23 19.8388 23.365 20.0038 23.455 20.1838C23.455 20.3638 23.5 20.5438 23.5 20.7538Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
        </svg>
    ,
    "address":
        <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30.5" cy="30" rx="30.5" ry="30" fill="#6764FF" fill-opacity="0.5" />
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6193 13.457C18.6193 16.0369 16.5344 18.1367 13.9395 18.1367C11.3447 18.1367 9.25977 16.0519 9.25977 13.457C9.25977 10.8622 11.3597 8.77734 13.9395 8.77734C14.4495 8.77734 14.9445 8.85234 15.3945 9.00233" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.91063 4.44403C11.4652 -1.7206 24.1694 0.394269 26.5093 10.7586C28.2342 18.3783 23.4945 24.8279 19.3397 28.8176C16.3249 31.7275 11.5552 31.7275 8.52541 28.8176C4.38566 24.8129 -0.369056 18.3633 1.37084 10.7436" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </svg>

    ,
    "edit":
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.53542 13.5765C2.06619 13.5765 1.62772 13.4188 1.31234 13.1262C0.912339 12.7585 0.720032 12.2033 0.789262 11.603L1.07388 9.17193C1.12772 8.71422 1.41234 8.10645 1.74311 7.7763L8.0585 1.2559C9.63542 -0.372333 11.2816 -0.417353 12.9508 1.12084C14.62 2.65903 14.6662 4.26476 13.0893 5.89299L6.77388 12.4134C6.45081 12.751 5.8508 13.0662 5.38157 13.1413L2.90465 13.5539C2.77388 13.5614 2.65849 13.5765 2.53542 13.5765ZM10.5277 1.11334C9.93542 1.11334 9.42004 1.4735 8.89696 2.01374L2.58157 8.54172C2.42772 8.69929 2.2508 9.07446 2.22003 9.29206L1.93542 11.7231C1.90465 11.9707 1.96619 12.1733 2.10465 12.3008C2.24311 12.4284 2.4508 12.4734 2.70465 12.4359L5.18157 12.0233C5.40465 11.9858 5.77388 11.7906 5.92772 11.633L12.2431 5.11264C13.197 4.12219 13.5431 3.20678 12.1508 1.9312C11.5354 1.35344 11.0047 1.11334 10.5277 1.11334Z" fill="#6764FF" />
            <path d="M11.6058 7.14453C11.5904 7.14453 11.5673 7.14453 11.5519 7.14453C9.15193 6.91192 7.22116 5.13366 6.85193 2.80761C6.80577 2.49997 7.02116 2.21485 7.33654 2.16232C7.65193 2.1173 7.94423 2.3274 7.99808 2.63503C8.29039 4.45085 9.79808 5.84648 11.675 6.02656C11.9904 6.05657 12.2212 6.3342 12.1904 6.6418C12.1519 6.92693 11.8981 7.14453 11.6058 7.14453Z" fill="#6764FF" />
            <path d="M14.425 16.0005H0.578876C0.263492 16.0005 0.00195312 15.7454 0.00195312 15.4378C0.00195312 15.1301 0.263492 14.875 0.578876 14.875H14.425C14.7404 14.875 15.002 15.1301 15.002 15.4378C15.002 15.7454 14.7404 16.0005 14.425 16.0005Z" fill="#6764FF" />
        </svg>,
    "whatsapp": <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30.5" cy="30" rx="30.5" ry="30" fill="#6764FF" fill-opacity="0.5" />
        <path d="M31 15C39.28 15 46 21.72 46 30C46 38.28 39.28 45 31 45C28.24 45 25.645 44.25 23.41 42.945L16 45L18.01 37.5C16.735 35.295 16 32.73 16 30C16 24.45 19.015 19.605 23.5 17.01" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M38.5 34.7538C38.5 35.0238 38.44 35.3088 38.305 35.5788C38.17 35.8488 38.005 36.1038 37.795 36.3438C37.42 36.7488 37.015 37.0488 36.565 37.2288C36.115 37.4238 35.62 37.5138 35.095 37.5138C34.33 37.5138 33.505 37.3338 32.65 36.9588C31.78 36.5838 30.925 36.0888 30.07 35.4738C29.2 34.8438 28.39 34.1388 27.61 33.3738C26.83 32.5938 26.14 31.7688 25.51 30.9138C24.895 30.0588 24.4 29.2038 24.04 28.3488C23.68 27.4938 23.5 26.6688 23.5 25.8888C23.5 25.3788 23.59 24.8838 23.77 24.4338C23.95 23.9688 24.235 23.5487 24.64 23.1737C25.12 22.6937 25.645 22.4688 26.2 22.4688C26.41 22.4688 26.62 22.5138 26.815 22.6038C27.01 22.6938 27.19 22.8287 27.325 23.0237L29.065 25.4837C29.2 25.6787 29.305 25.8437 29.365 26.0087C29.44 26.1737 29.47 26.3237 29.47 26.4737C29.47 26.6537 29.41 26.8338 29.305 27.0138C29.2 27.1938 29.065 27.3738 28.885 27.5538L28.315 28.1538C28.225 28.2438 28.195 28.3338 28.195 28.4538C28.195 28.5138 28.21 28.5738 28.225 28.6338C28.255 28.6938 28.27 28.7388 28.285 28.7838C28.42 29.0388 28.66 29.3538 28.99 29.7438C29.335 30.1338 29.695 30.5388 30.085 30.9288C30.49 31.3338 30.88 31.6938 31.285 32.0388C31.675 32.3688 32.005 32.5938 32.26 32.7288C32.305 32.7438 32.35 32.7738 32.395 32.7888C32.455 32.8188 32.515 32.8188 32.59 32.8188C32.725 32.8188 32.815 32.7738 32.905 32.6838L33.475 32.1138C33.67 31.9188 33.85 31.7838 34.015 31.6938C34.195 31.5888 34.36 31.5288 34.555 31.5288C34.705 31.5288 34.855 31.5588 35.02 31.6338C35.185 31.7088 35.365 31.7988 35.545 31.9338L38.035 33.7038C38.23 33.8388 38.365 34.0038 38.455 34.1838C38.455 34.3638 38.5 34.5438 38.5 34.7538Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
    </svg>


}
export const components = {
    1: <Profile />,
    2: <Reviews />,
    3: <Financials />
}