import { html } from "../router.js";

export function Logo() {
    const template = html`
    <svg width="70" height="70" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3_3)">
        <path d="M1.771 11H4.137V4.651H5.775V2.796H0.133V4.651H1.771V11ZM8.71276 11V7.654H10.5118V11H12.8288V2.796H10.5118V6.044H8.71276V2.796H6.39576V11H8.71276ZM18.7211 11V9.25L16.0751 9.32V7.458L17.9651 7.598V5.96H16.0751V4.378L18.4761 4.448L18.6161 2.796H13.7581V11H18.7211ZM5.38333 23.7787H4.49933V20.0953H5.38333C5.78378 20.0953 6.14267 20.2011 6.46 20.4127C6.77733 20.6167 6.936 20.9642 6.936 21.4553V22.2487C6.936 22.6642 6.81133 23.0231 6.562 23.3253C6.31267 23.6276 5.91978 23.7787 5.38333 23.7787ZM6.77733 16.1173V16.4007C6.77733 16.8993 6.66022 17.3224 6.426 17.67C6.19178 18.01 5.85556 18.18 5.41733 18.18H4.49933V14.9047H5.32667C5.79511 14.9047 6.154 14.9953 6.40333 15.1767C6.65267 15.3504 6.77733 15.664 6.77733 16.1173ZM6.154 26.102C6.97756 26.102 7.69533 26 8.30733 25.796C8.91933 25.592 9.40289 25.3087 9.758 24.946C10.1207 24.5758 10.3889 24.1564 10.5627 23.688C10.7364 23.212 10.8233 22.6831 10.8233 22.1013C10.8233 20.1671 9.93178 19.1207 8.14867 18.962C8.85133 18.8184 9.38778 18.4596 9.758 17.8853C10.1282 17.3111 10.3133 16.6236 10.3133 15.8227C10.3133 15.3013 10.2378 14.8518 10.0867 14.474C9.94311 14.0962 9.69756 13.7638 9.35 13.4767C9.00244 13.1896 8.52267 12.9742 7.91067 12.8307C7.30622 12.6871 6.562 12.6153 5.678 12.6153C5.406 12.6153 4.964 12.6342 4.352 12.672C3.74 12.7022 3.196 12.7173 2.72 12.7173H0.759333V26H1.84733C2.25533 26.0076 2.92778 26.0264 3.86467 26.0567C4.80156 26.0869 5.56467 26.102 6.154 26.102ZM11.8824 26H19.011V22.9627H15.6337V12.7173H11.8824V26ZM20.0843 26H23.949V12.7173H20.0843V26ZM27.6037 26H31.4343V15.7207H34.0863V12.7173H24.9517V15.7207H27.6037V26ZM34.808 26H43.9994V23.144L38.8087 23.3933L39.5907 22.5093L43.8634 14.6553V12.7173H35.182V15.6073L39.67 15.358L38.7634 16.4233L34.808 23.654V26ZM5.38333 38.7787H4.49933V35.0953H5.38333C5.78378 35.0953 6.14267 35.2011 6.46 35.4127C6.77733 35.6167 6.936 35.9642 6.936 36.4553V37.2487C6.936 37.6642 6.81133 38.0231 6.562 38.3253C6.31267 38.6276 5.91978 38.7787 5.38333 38.7787ZM6.77733 31.1173V31.4007C6.77733 31.8993 6.66022 32.3224 6.426 32.67C6.19178 33.01 5.85556 33.18 5.41733 33.18H4.49933V29.9047H5.32667C5.79511 29.9047 6.154 29.9953 6.40333 30.1767C6.65267 30.3504 6.77733 30.664 6.77733 31.1173ZM6.154 41.102C6.97756 41.102 7.69533 41 8.30733 40.796C8.91933 40.592 9.40289 40.3087 9.758 39.946C10.1207 39.5758 10.3889 39.1564 10.5627 38.688C10.7364 38.212 10.8233 37.6831 10.8233 37.1013C10.8233 35.1671 9.93178 34.1207 8.14867 33.962C8.85133 33.8184 9.38778 33.4596 9.758 32.8853C10.1282 32.3111 10.3133 31.6236 10.3133 30.8227C10.3133 30.3013 10.2378 29.8518 10.0867 29.474C9.94311 29.0962 9.69756 28.7638 9.35 28.4767C9.00244 28.1896 8.52267 27.9742 7.91067 27.8307C7.30622 27.6871 6.562 27.6153 5.678 27.6153C5.406 27.6153 4.964 27.6342 4.352 27.672C3.74 27.7022 3.196 27.7173 2.72 27.7173H0.759333V41H1.84733C2.25533 41.0076 2.92778 41.0264 3.86467 41.0567C4.80156 41.0869 5.56467 41.102 6.154 41.102ZM11.8824 41H19.011V37.9627H15.6337V27.7173H11.8824V41ZM23.8923 35.866V33.0213C23.8923 31.6538 23.9868 30.7131 24.1757 30.1993C24.3721 29.678 24.7121 29.4173 25.1957 29.4173C25.6792 29.4173 26.0268 29.6818 26.2383 30.2107C26.4499 30.7396 26.5557 31.5442 26.5557 32.6247V35.356C26.5557 36.4667 26.5066 37.3016 26.4083 37.8607C26.3177 38.4122 26.1817 38.7787 26.0003 38.96C25.819 39.1338 25.5508 39.2207 25.1957 39.2207C24.7121 39.2207 24.3721 38.9751 24.1757 38.484C23.9868 37.9929 23.8923 37.1202 23.8923 35.866ZM24.9577 41.238C25.8795 41.238 26.6766 41.136 27.349 40.932C28.029 40.7204 28.5843 40.4333 29.015 40.0707C29.4457 39.7004 29.7895 39.2244 30.0463 38.6427C30.3032 38.0533 30.4808 37.4224 30.579 36.75C30.6772 36.0776 30.7263 35.288 30.7263 34.3813C30.7263 33.7693 30.7075 33.2216 30.6697 32.738C30.6319 32.2544 30.5639 31.7671 30.4657 31.276C30.3675 30.7849 30.2352 30.358 30.069 29.9953C29.9103 29.6251 29.695 29.2776 29.423 28.9527C29.1586 28.6278 28.845 28.3633 28.4823 28.1593C28.1197 27.9553 27.6852 27.7967 27.179 27.6833C26.6728 27.5624 26.1023 27.502 25.4677 27.502C24.5459 27.502 23.745 27.6078 23.065 27.8193C22.3926 28.0309 21.841 28.3218 21.4103 28.692C20.9872 29.0622 20.6472 29.5458 20.3903 30.1427C20.1335 30.732 19.9559 31.3629 19.8577 32.0353C19.767 32.7078 19.7217 33.4973 19.7217 34.404C19.7217 35.016 19.7406 35.5676 19.7783 36.0587C19.8161 36.5422 19.8841 37.0296 19.9823 37.5207C20.0806 38.0042 20.209 38.4273 20.3677 38.79C20.5339 39.1527 20.7492 39.4927 21.0137 39.81C21.2857 40.1273 21.603 40.388 21.9657 40.592C22.3283 40.796 22.759 40.9547 23.2577 41.068C23.7639 41.1813 24.3306 41.238 24.9577 41.238ZM39.9959 39.7987L40.1319 41H42.1492L42.1605 33.2027H37.1172V35.5147L38.6132 35.8547V37.0107C38.6132 37.4187 38.5754 37.7549 38.4999 38.0193C38.4243 38.2762 38.3072 38.4727 38.1485 38.6087C37.9899 38.7371 37.8199 38.8278 37.6385 38.8807C37.4572 38.926 37.2343 38.9487 36.9699 38.9487C36.4334 38.9487 36.0745 38.552 35.8932 37.7587C35.7194 36.9653 35.6325 35.7489 35.6325 34.1093C35.6325 33.3236 35.6665 32.6587 35.7345 32.1147C35.8025 31.5631 35.8894 31.1287 35.9952 30.8113C36.1085 30.4864 36.2596 30.2409 36.4485 30.0747C36.645 29.9009 36.8414 29.7876 37.0379 29.7347C37.2343 29.6818 37.4836 29.6553 37.7859 29.6553C38.1561 29.6553 38.4243 29.7007 38.5905 29.7913L39.2365 31.2987H41.2992L41.4692 28.692C41.4541 28.6769 41.4314 28.6542 41.4012 28.624C41.3785 28.5938 41.3143 28.5371 41.2085 28.454C41.1028 28.3709 40.9856 28.2953 40.8572 28.2273C40.7363 28.1518 40.5663 28.0687 40.3472 27.978C40.1356 27.8798 39.909 27.8004 39.6672 27.74C39.4254 27.672 39.1308 27.6153 38.7832 27.57C38.4432 27.5247 38.0843 27.502 37.7065 27.502C36.8679 27.502 36.1199 27.5776 35.4625 27.7287C34.8052 27.8722 34.2461 28.0913 33.7852 28.386C33.3243 28.6807 32.9352 29.0282 32.6179 29.4287C32.3005 29.8216 32.0512 30.29 31.8699 30.834C31.6885 31.378 31.5563 31.9484 31.4732 32.5453C31.3976 33.1422 31.3599 33.8147 31.3599 34.5627C31.3599 35.5676 31.4505 36.4629 31.6319 37.2487C31.8208 38.0344 32.1154 38.7333 32.5159 39.3453C32.9163 39.9573 33.4565 40.4258 34.1365 40.7507C34.8241 41.0756 35.6363 41.238 36.5732 41.238C37.8954 41.238 39.0363 40.7582 39.9959 39.7987Z" fill="#004280"/>
        </g>
        <defs>
        <clipPath id="clip0_3_3">
        <rect width="45" height="45" fill="white"/>
        </clipPath>
        </defs>
    </svg>
    `
    const shell = document.createElement('div')
    shell.classList.add('logo')
    shell.innerHTML = template
    return shell
}