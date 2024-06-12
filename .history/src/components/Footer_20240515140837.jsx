import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { HiMapPin } from "react-icons/hi2";
export const Footer = () => {
    return (
        <div className="mt-20 border-t-4 border-gray-900 rounded-full px-14">
            <div className="flex mt-8 h-36 justify-evenly ">
                <div>
                    <h3 className="mb-4 text-2xl font-bold">CHÍNH SÁCH</h3>
                    <p>Chính sách bảo mật</p>
                    <p>Chính sách vận chuyển</p>
                    <p>Chính sách đổi trả, bảo hành</p>
                </div>
                <div>
                    <h3 className="mb-4 text-2xl font-bold">CONTACT INFO</h3>
                    <div>
                        <div className="flex ">
                            <HiMapPin />
                            <p className="ml-3">Seoul, Korea</p>
                        </div>
                        <div  className="flex ">
                            <IoCall />
                            <p className="ml-3">+82 888888888</p>
                        </div>
                        <div  className="flex ">
                            <CgMail />
                            <p className="ml-3">email@domain.com</p>
                        </div>
                    </div>
                </div>

            </div>
            <p className="border-t-4 border-gray-900 ">Copyright ©2022 All rights reserved</p>
        </div>
        
    )
}
