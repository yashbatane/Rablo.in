import React from "react";
import "./styles/Invoice.css";
import Logo from "../../../pages/TutorDashboard/AddStudents/resource/rablo.png";
// src\components\pages\TutorDashboard\AddStudents\resource\rablo.png


function Invoice(props) {

    return (
        // , backgroundColor: "rgba(0, 0, 0, 0.30)", zIndex: 1 
        <div className="invoiceParent" style={{ height: "100vh", width: "100%", marginTop: "-393px", marginLeft: "-110px", position: "absolute", zIndex: "1" }}>
            <div className="invoiceBackground">
                <div className="invoiceContainer">
                    <div className="invoiceTitleCloseBtn">
                        <div className="imgIcon">
                            <img src={Logo} style={{ height: "43px", width: "104px", marginTop: "-5px" }} alt="" />
                        </div>
                        <h1 style={{ color: "rgba(103, 100, 255, 0.80)", fontSize: "1.438rem", fontWeight: "400", marginLeft: "-50px" }}>Invoice</h1>
                        <button
                            onClick={() => {
                                props.openInvoice();
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 22" fill="none">
                                <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="invoiceBody">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ marginLeft: "17px" }}>
                                <p style={{ fontWeight: "300" }}>Sold by:</p>
                                <h4 style={{ color: "rgba(0, 0, 0, 0.70)", fontSize: "20px", fontWeight: "500" }}>Rablo.in</h4>
                                <p style={{ fontWeight: "300" }}> Lucknow, U.P.</p>
                                <p style={{ color: "rgba(0, 0, 0, 0.70)", fontWeight: "500" }}>PAN No: AALCA0171E</p>
                                <p style={{ color: "rgba(0, 0, 0, 0.70)", fontWeight: "500" }}>GST Registration No: 36AALCA0171E1Z0</p>
                            </div>
                            <div style={{ marginRight: "50px" }}>
                                <p style={{ fontWeight: "300" }}>Sold to:</p>
                                <p style={{ color: "rgba(0, 0, 0, 0.70)", fontSize: "20px", fontWeight: "500" }}>John P</p>

                                <p style={{ fontWeight: "300" }}>ID <b style={{ color: "rgba(0, 0, 0, 0.70)", fontWeight: "500" }}>#556989</b></p>
                            </div>
                        </div>

                        <hr style={{ margin: "20px" }} />
                        <div className="">
                            <table style={{ width: "100%", textAlign: "center", color: "black" }}>
                                <thead className="invoiceTable">
                                    <th>Product/ Service</th>
                                    <th>Amount</th>
                                    <th >Tax (18%) GST</th>
                                    <th>Total Amount</th>
                                </thead>
                                <tbody style={{ marginBottom: "5px" }}>
                                    <tr className="invoiceTableData">
                                        <td>{props.invoiceData.product}</td>
                                        <td>{props.invoiceData.amount}</td>
                                        <td>{props.invoiceData.GST}</td>
                                        <td>{props.invoiceData.Tamount}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr style={{ margin: "20px" }} />
                            <div className="invoiceFooter">
                                <div>
                                    <p style={{ color: "rgba(0,0,0,0.90)" }}><b style={{ fontWeight: "400", color: "rgba(0,0,0,0.60)" }}> Paid at </b>{props.invoiceData.time}, {props.invoiceData.date}</p>
                                    <p style={{ color: "rgba(0,0,0,0.90)" }}><b style={{ fontWeight: "400", color: "rgba(0,0,0,0.60)" }}> Transaction ID </b>- {props.invoiceData.transactionID}</p>
                                </div>
                                <div style={{ display: "inline-block" }}>

                                    <button
                                        // onClick={() => {
                                        //     props.openLogout();
                                        // }}
                                        className="downloadBtn"
                                    >
                                        <svg width="120" height="30" viewBox="0 0 131 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M44.7329 11.49C46.0649 11.49 47.2289 11.748 48.2249 12.264C49.2329 12.768 50.0069 13.5 50.5469 14.46C51.0989 15.408 51.3749 16.518 51.3749 17.79C51.3749 19.062 51.0989 20.166 50.5469 21.102C50.0069 22.038 49.2329 22.758 48.2249 23.262C47.2289 23.754 46.0649 24 44.7329 24H40.6469V11.49H44.7329ZM44.7329 22.326C46.1969 22.326 47.3189 21.93 48.0989 21.138C48.8789 20.346 49.2689 19.23 49.2689 17.79C49.2689 16.338 48.8789 15.204 48.0989 14.388C47.3189 13.572 46.1969 13.164 44.7329 13.164H42.6989V22.326H44.7329ZM57.7106 24.162C56.7746 24.162 55.9286 23.952 55.1726 23.532C54.4166 23.1 53.8226 22.5 53.3906 21.732C52.9586 20.952 52.7426 20.052 52.7426 19.032C52.7426 18.024 52.9646 17.13 53.4086 16.35C53.8526 15.57 54.4586 14.97 55.2266 14.55C55.9946 14.13 56.8526 13.92 57.8006 13.92C58.7486 13.92 59.6066 14.13 60.3746 14.55C61.1426 14.97 61.7486 15.57 62.1926 16.35C62.6366 17.13 62.8586 18.024 62.8586 19.032C62.8586 20.04 62.6306 20.934 62.1746 21.714C61.7186 22.494 61.0946 23.1 60.3026 23.532C59.5226 23.952 58.6586 24.162 57.7106 24.162ZM57.7106 22.38C58.2386 22.38 58.7306 22.254 59.1866 22.002C59.6546 21.75 60.0326 21.372 60.3206 20.868C60.6086 20.364 60.7526 19.752 60.7526 19.032C60.7526 18.312 60.6146 17.706 60.3386 17.214C60.0626 16.71 59.6966 16.332 59.2406 16.08C58.7846 15.828 58.2926 15.702 57.7646 15.702C57.2366 15.702 56.7446 15.828 56.2886 16.08C55.8446 16.332 55.4906 16.71 55.2266 17.214C54.9626 17.706 54.8306 18.312 54.8306 19.032C54.8306 20.1 55.1006 20.928 55.6406 21.516C56.1926 22.092 56.8826 22.38 57.7106 22.38ZM78.2071 14.082L75.1291 24H72.9691L70.9711 16.674L68.9731 24H66.8131L63.7171 14.082H65.8051L67.8751 22.056L69.9811 14.082H72.1231L74.1391 22.02L76.1911 14.082H78.2071ZM84.7446 13.92C85.5246 13.92 86.2206 14.082 86.8326 14.406C87.4566 14.73 87.9426 15.21 88.2906 15.846C88.6386 16.482 88.8126 17.25 88.8126 18.15V24H86.7786V18.456C86.7786 17.568 86.5566 16.89 86.1126 16.422C85.6686 15.942 85.0626 15.702 84.2946 15.702C83.5266 15.702 82.9146 15.942 82.4586 16.422C82.0146 16.89 81.7926 17.568 81.7926 18.456V24H79.7406V14.082H81.7926V15.216C82.1286 14.808 82.5546 14.49 83.0706 14.262C83.5986 14.034 84.1566 13.92 84.7446 13.92ZM93.4821 10.68V24H91.4301V10.68H93.4821ZM100.478 24.162C99.5422 24.162 98.6962 23.952 97.9402 23.532C97.1842 23.1 96.5902 22.5 96.1582 21.732C95.7262 20.952 95.5102 20.052 95.5102 19.032C95.5102 18.024 95.7322 17.13 96.1762 16.35C96.6202 15.57 97.2262 14.97 97.9942 14.55C98.7622 14.13 99.6202 13.92 100.568 13.92C101.516 13.92 102.374 14.13 103.142 14.55C103.91 14.97 104.516 15.57 104.96 16.35C105.404 17.13 105.626 18.024 105.626 19.032C105.626 20.04 105.398 20.934 104.942 21.714C104.486 22.494 103.862 23.1 103.07 23.532C102.29 23.952 101.426 24.162 100.478 24.162ZM100.478 22.38C101.006 22.38 101.498 22.254 101.954 22.002C102.422 21.75 102.8 21.372 103.088 20.868C103.376 20.364 103.52 19.752 103.52 19.032C103.52 18.312 103.382 17.706 103.106 17.214C102.83 16.71 102.464 16.332 102.008 16.08C101.552 15.828 101.06 15.702 100.532 15.702C100.004 15.702 99.5122 15.828 99.0562 16.08C98.6122 16.332 98.2582 16.71 97.9942 17.214C97.7302 17.706 97.5982 18.312 97.5982 19.032C97.5982 20.1 97.8682 20.928 98.4082 21.516C98.9602 22.092 99.6502 22.38 100.478 22.38ZM106.971 18.996C106.971 18 107.175 17.118 107.583 16.35C108.003 15.582 108.567 14.988 109.275 14.568C109.995 14.136 110.787 13.92 111.651 13.92C112.431 13.92 113.109 14.076 113.685 14.388C114.273 14.688 114.741 15.066 115.089 15.522V14.082H117.159V24H115.089V22.524C114.741 22.992 114.267 23.382 113.667 23.694C113.067 24.006 112.383 24.162 111.615 24.162C110.763 24.162 109.983 23.946 109.275 23.514C108.567 23.07 108.003 22.458 107.583 21.678C107.175 20.886 106.971 19.992 106.971 18.996ZM115.089 19.032C115.089 18.348 114.945 17.754 114.657 17.25C114.381 16.746 114.015 16.362 113.559 16.098C113.103 15.834 112.611 15.702 112.083 15.702C111.555 15.702 111.063 15.834 110.607 16.098C110.151 16.35 109.779 16.728 109.491 17.232C109.215 17.724 109.077 18.312 109.077 18.996C109.077 19.68 109.215 20.28 109.491 20.796C109.779 21.312 110.151 21.708 110.607 21.984C111.075 22.248 111.567 22.38 112.083 22.38C112.611 22.38 113.103 22.248 113.559 21.984C114.015 21.72 114.381 21.336 114.657 20.832C114.945 20.316 115.089 19.716 115.089 19.032ZM119.17 18.996C119.17 18 119.374 17.118 119.782 16.35C120.202 15.582 120.766 14.988 121.474 14.568C122.194 14.136 122.992 13.92 123.868 13.92C124.516 13.92 125.152 14.064 125.776 14.352C126.412 14.628 126.916 15 127.288 15.468V10.68H129.358V24H127.288V22.506C126.952 22.986 126.484 23.382 125.884 23.694C125.296 24.006 124.618 24.162 123.85 24.162C122.986 24.162 122.194 23.946 121.474 23.514C120.766 23.07 120.202 22.458 119.782 21.678C119.374 20.886 119.17 19.992 119.17 18.996ZM127.288 19.032C127.288 18.348 127.144 17.754 126.856 17.25C126.58 16.746 126.214 16.362 125.758 16.098C125.302 15.834 124.81 15.702 124.282 15.702C123.754 15.702 123.262 15.834 122.806 16.098C122.35 16.35 121.978 16.728 121.69 17.232C121.414 17.724 121.276 18.312 121.276 18.996C121.276 19.68 121.414 20.28 121.69 20.796C121.978 21.312 122.35 21.708 122.806 21.984C123.274 22.248 123.766 22.38 124.282 22.38C124.81 22.38 125.302 22.248 125.758 21.984C126.214 21.72 126.58 21.336 126.856 20.832C127.144 20.316 127.288 19.716 127.288 19.032Z" fill="#6764FF"></path>
                                            <path d="M16.5 32.9375C13.4406 32.9375 10.4499 32.0028 7.90603 30.2516C5.36221 28.5003 3.37954 26.0112 2.20875 23.099C1.03795 20.1868 0.73162 16.9823 1.32848 13.8908C1.92535 10.7992 3.39861 7.95939 5.56195 5.73049C7.72529 3.50159 10.4816 1.98369 13.4822 1.36874C16.4828 0.75379 19.5931 1.06941 22.4196 2.27568C25.2462 3.48195 27.6621 5.5247 29.3618 8.14561C31.0615 10.7665 31.9688 13.8479 31.9688 17C31.9688 21.2269 30.339 25.2807 27.4381 28.2695C24.5371 31.2584 20.6026 32.9375 16.5 32.9375ZM16.5 2.12501C13.6445 2.12501 10.8532 2.99741 8.47896 4.6319C6.10473 6.26638 4.25424 8.58954 3.1615 11.3076C2.06876 14.0256 1.78285 17.0165 2.33992 19.902C2.89699 22.7874 4.27203 25.4379 6.29115 27.5182C8.31027 29.5985 10.8828 31.0152 13.6834 31.5892C16.484 32.1631 19.3869 31.8686 22.025 30.7427C24.6631 29.6169 26.9179 27.7103 28.5043 25.2641C30.0908 22.8179 30.9375 19.942 30.9375 17C30.9375 13.0549 29.4164 9.2714 26.7089 6.48179C24.0013 3.69219 20.3291 2.12501 16.5 2.12501Z" fill="#8690FA"></path>
                                            <path d="M16.5 29.75C23.3345 29.75 28.875 24.0416 28.875 17C28.875 9.95837 23.3345 4.25 16.5 4.25C9.66548 4.25 4.125 9.95837 4.125 17C4.125 24.0416 9.66548 29.75 16.5 29.75Z" fill="#CFD2FC"></path>
                                            <path d="M21.0439 19.2844C20.9555 19.1906 20.8497 19.116 20.7328 19.065C20.6159 19.0141 20.4902 18.9879 20.3633 18.9879C20.2364 18.9879 20.1107 19.0141 19.9938 19.065C19.8769 19.116 19.7711 19.1906 19.6827 19.2844L17.4655 21.5688V10.03C17.4655 9.89884 17.4404 9.76897 17.3917 9.64779C17.343 9.52662 17.2716 9.41652 17.1816 9.32378C17.0916 9.23104 16.9847 9.15747 16.8671 9.10728C16.7495 9.05708 16.6234 9.03125 16.4961 9.03125C16.3688 9.03125 16.2428 9.05708 16.1252 9.10728C16.0076 9.15747 15.9007 9.23104 15.8107 9.32378C15.7207 9.41652 15.6493 9.52662 15.6005 9.64779C15.5518 9.76897 15.5268 9.89884 15.5268 10.03V21.5688L13.3096 19.2844C13.2211 19.1906 13.1153 19.116 12.9984 19.065C12.8815 19.0141 12.7559 18.9879 12.6289 18.9879C12.502 18.9879 12.3764 19.0141 12.2595 19.065C12.1425 19.116 12.0367 19.1906 11.9483 19.2844C11.8582 19.3771 11.7867 19.4873 11.7379 19.6085C11.6892 19.7297 11.6641 19.8597 11.6641 19.9909C11.6641 20.1222 11.6892 20.2521 11.7379 20.3734C11.7867 20.4946 11.8582 20.6047 11.9483 20.6975L15.8155 24.6713C15.9053 24.7608 16.0101 24.8328 16.1249 24.8838C16.3638 24.9787 16.6285 24.9787 16.8674 24.8838C16.9821 24.8328 17.087 24.7608 17.1768 24.6713L21.0439 20.6975C21.1341 20.6047 21.2055 20.4946 21.2543 20.3734C21.3031 20.2521 21.3282 20.1222 21.3282 19.9909C21.3282 19.8597 21.3031 19.7297 21.2543 19.6085C21.2055 19.4873 21.1341 19.3771 21.0439 19.2844Z" fill="#8690FA"></path>
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoice;

