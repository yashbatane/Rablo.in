import React, { useState } from "react";
import "./styles/ShareOverlay.css";
import { RxFontFamily } from "react-icons/rx";
import copy from "copy-to-clipboard";


function ShareOverlay(props) {

    const [copyText, setCopyText] = useState('');

    const handleCopyText = (e) => {
        setCopyText(e.target.value);
    }

    const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    }

    return (
        <div className="shareOverlayParent" style={{ position: "absolute", height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.30)", zIndex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>
            {/* marginTop: "-274px" */}
            <div className="shareOverlayBackground">
                <div className="shareOverlayContainer">
                    <div className="shareOverlaytitleCloseBtn">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 22" fill="none">
                                <path d="M2 2L20 20" stroke="black" stroke-opacity="0.72" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 20L20 2" stroke="black" stroke-opacity="0.72" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="shareOverlaytitle">
                        <h1 style={{ color: "#6764FF;", fontSize: "1.8rem", fontWeight: "600", marginTop: "-20px" }}>Invite via Sharing Link</h1>
                    </div>
                    <div className="shareOverlaybody">
                        Share through the channel given below
                    </div>

                    <div className="shareOverlayURLbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 30 18" fill="none">
                            <path d="M21.2785 17.4417H19.1715C18.5994 17.4417 18.125 16.9673 18.125 16.3952C18.125 15.8231 18.5994 15.3487 19.1715 15.3487H21.2785C24.9342 15.3487 27.9063 12.3766 27.9063 8.72085C27.9063 5.06507 24.9342 2.093 21.2785 2.093H19.1855C18.6134 2.093 18.139 1.61859 18.139 1.0465C18.139 0.474414 18.5994 0 19.1855 0H21.2785C26.0924 0 29.9993 3.90694 29.9993 8.72085C29.9993 13.5348 26.0924 17.4417 21.2785 17.4417Z" fill="#6764FF" />
                            <path d="M10.8139 17.4417H8.72085C3.90694 17.4417 0 13.5348 0 8.72085C0 3.90694 3.90694 0 8.72085 0H10.8139C11.3859 0 11.8604 0.474414 11.8604 1.0465C11.8604 1.61859 11.3859 2.093 10.8139 2.093H8.72085C5.06507 2.093 2.093 5.06507 2.093 8.72085C2.093 12.3766 5.06507 15.3487 8.72085 15.3487H10.8139C11.3859 15.3487 11.8604 15.8231 11.8604 16.3952C11.8604 16.9673 11.3859 17.4417 10.8139 17.4417Z" fill="#6764FF" />
                            <path d="M20.5842 9.76878H9.4215C8.84941 9.76878 8.375 9.29437 8.375 8.72228C8.375 8.1502 8.84941 7.67578 9.4215 7.67578H20.5842C21.1563 7.67578 21.6307 8.1502 21.6307 8.72228C21.6307 9.29437 21.1563 9.76878 20.5842 9.76878Z" fill="#6764FF" />
                        </svg>
                        <input
                            type="shareOverlaytext"
                            value={copyText}
                            onChange={handleCopyText}
                        />
                        <button onClick={copyToClipboard}>Copy</button>
                    </div>

                    <div className="shareOverlayorLine">
                        ---------------------- <b style={{ color: "#6764FF", fontSize: "22px" }}> OR </b> ----------------------
                    </div>

                    <div className="shareOverlayfooter">
                        <div className="shareOverlaytitle">
                            <div className="shareOverlayicon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 34 35" fill="none">
                                    <path d="M1.43493 34.25C1.12105 34.25 0.822818 34.1245 0.603102 33.9048C0.304915 33.6067 0.179441 33.1674 0.289299 32.7594L2.26676 25.3692C0.948464 22.9215 0.25788 20.16 0.25788 17.3671C0.25788 8.06277 7.82241 0.5 17.1289 0.5C26.4355 0.5 34 8.06277 34 17.3671C34 26.6715 26.4355 34.2343 17.1289 34.2343C14.2883 34.2343 11.5106 33.5282 9.03089 32.1789L1.74883 34.2029C1.63897 34.2343 1.54479 34.25 1.43493 34.25ZM9.18779 29.7469C9.39181 29.7469 9.59585 29.8098 9.78418 29.9039C11.997 31.2062 14.5394 31.8964 17.1289 31.8964C25.1329 31.8964 31.6459 25.3849 31.6459 17.3828C31.6459 9.38078 25.1329 2.86927 17.1289 2.86927C9.12501 2.86927 2.61199 9.38078 2.61199 17.3828C2.61199 19.9404 3.28681 22.4351 4.55803 24.6318C4.71497 24.8985 4.76208 25.228 4.68361 25.5261L3.11421 31.3943L8.8896 29.7939C8.98377 29.7625 9.09362 29.7469 9.18779 29.7469Z" fill="white" />
                                    <path d="M21.4258 26.4211C20.4528 26.4211 19.4484 26.2014 18.3969 25.7464C17.4081 25.3228 16.4194 24.7579 15.4621 24.0518C14.5204 23.3615 13.5946 22.5769 12.7471 21.7297C11.8997 20.8667 11.1149 19.9567 10.4243 19.0152C9.7181 18.0267 9.15312 17.0539 8.74507 16.0968C8.30564 15.0612 8.08594 14.0414 8.08594 13.0686C8.08594 12.3782 8.21146 11.7192 8.44687 11.1073C8.69797 10.464 9.10603 9.8834 9.63963 9.38131C10.644 8.39281 12.088 8.03197 13.2336 8.58113C13.626 8.75372 13.9556 9.03615 14.2067 9.41272L16.0271 11.9702C16.2154 12.2213 16.3568 12.488 16.4667 12.7547C16.5922 13.0686 16.6707 13.3824 16.6707 13.6805C16.6707 14.0885 16.5607 14.4964 16.341 14.8573C16.1997 15.0926 15.9957 15.3751 15.7289 15.6418L15.5249 15.8615C15.619 15.987 15.7289 16.1439 15.9015 16.3322C16.2311 16.7087 16.5921 17.1167 16.9844 17.509C17.3768 17.8855 17.7691 18.2621 18.1615 18.5916C18.3498 18.7485 18.5069 18.874 18.6324 18.9525L18.852 18.7328C19.1345 18.4504 19.4171 18.2307 19.6996 18.0895C20.2175 17.76 21.0178 17.6815 21.724 17.9797C21.9751 18.0738 22.2262 18.215 22.493 18.4033L25.1141 20.2548C25.475 20.5058 25.7574 20.851 25.9457 21.2433C26.1026 21.6355 26.1656 21.9807 26.1656 22.3416C26.1656 22.8123 26.0556 23.2673 25.8515 23.7067C25.6475 24.1146 25.4121 24.4755 25.1296 24.805C24.6274 25.3541 24.0469 25.7621 23.4191 26.0288C22.7914 26.2956 22.1164 26.4211 21.4258 26.4211ZM12.0879 10.6993C11.9937 10.6993 11.6799 10.6993 11.2876 11.0916C10.9894 11.374 10.7853 11.6721 10.6441 12.0016C10.5028 12.3311 10.44 12.7077 10.44 13.0843C10.44 13.7433 10.597 14.4493 10.9108 15.2025C11.2404 15.987 11.727 16.8186 12.3234 17.6502C12.9354 18.4818 13.626 19.3133 14.3951 20.0822C15.1641 20.8353 15.98 21.5414 16.8275 22.169C17.6436 22.7652 18.4755 23.2359 19.3073 23.5968C20.5 24.1146 21.5985 24.2401 22.493 23.8636C22.8069 23.738 23.0894 23.5184 23.3719 23.2359C23.5131 23.079 23.6231 22.9221 23.7173 22.7182C23.7644 22.6083 23.7956 22.4828 23.7956 22.373C23.7956 22.3416 23.7956 22.2945 23.7485 22.2004L21.1276 20.3803C21.0178 20.3018 20.9079 20.2391 20.8138 20.2077C20.751 20.2391 20.657 20.2862 20.4843 20.4587L19.888 21.055C19.4328 21.51 18.7109 21.6355 18.1302 21.4316L17.8477 21.306C17.4868 21.1177 17.0786 20.8353 16.6234 20.4431C16.184 20.0665 15.7604 19.6742 15.3053 19.2349C14.8659 18.7799 14.4735 18.3562 14.0969 17.9169C13.6887 17.4305 13.4062 17.0382 13.2179 16.7087L13.0453 16.3008C12.9982 16.1439 12.9825 15.9713 12.9825 15.8144C12.9825 15.3751 13.1395 14.9828 13.4377 14.669L14.0341 14.0571C14.2067 13.8845 14.2695 13.7903 14.3009 13.7276C14.2538 13.6177 14.191 13.5236 14.1126 13.4138L12.2762 10.8249L12.0879 10.6993Z" fill="white" />
                                </svg>
                            </div>
                            <h1 style={{ color: "#6764FF", fontSize: "15px", fontWeight: "500", fontFamily: "Poppins", marginTop: "-10px" }}>WhatsApp</h1>
                        </div>

                        <div className="shareOverlaytitle">
                            <div className="shareOverlayicon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 38 38" fill="none">
                                    <path d="M13.2188 30.9375H12.375C5.625 30.9375 2.25 29.25 2.25 20.8125V12.375C2.25 5.625 5.625 2.25 12.375 2.25H25.875C32.625 2.25 36 5.625 36 12.375V20.8125C36 27.5625 32.625 30.9375 25.875 30.9375H25.0312C24.5081 30.9375 24.0019 31.1906 23.6812 31.6125L21.15 34.9875C20.0362 36.4725 18.2138 36.4725 17.1 34.9875L14.5688 31.6125C14.2988 31.2412 13.6744 30.9375 13.2188 30.9375Z" stroke="white" stroke-width="3.17898" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.8594 17.4375H25.8744" stroke="white" stroke-width="4.23864" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19.1094 17.4375H19.1246" stroke="white" stroke-width="4.23864" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.3594 17.4375H12.3745" stroke="white" stroke-width="4.23864" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h1 style={{ color: "#6764FF", fontSize: "15px", fontWeight: "500", fontFamily: "Poppins", marginTop: "-10px" }}>LinkedIn</h1>
                        </div>

                        <div className="shareOverlaytitle">
                            <div className="shareOverlayicon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 37 38" fill="none">
                                    <path d="M9.88744 8.33615L26.0198 2.9587C33.2594 0.545492 37.1928 4.49783 34.7986 11.7374L29.4211 27.8698C25.8108 38.7197 19.8823 38.7197 16.272 27.8698L14.6758 23.0813L9.88744 21.4852C-0.96248 17.8749 -0.96248 11.9655 9.88744 8.33615Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.0391 22.263L21.8416 15.4414" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <h1 style={{ color: "#6764FF", fontSize: "15px", fontWeight: "500", fontFamily: "Poppins", marginTop: "-10px" }}>Telegram</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShareOverlay;

