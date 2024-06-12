import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { HiMapPin } from "react-icons/hi2";
export const Footer = () => {
    return (
        <div className="mt-8 px-14 h-36">
            <div className="flex ">
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
            <p>Copyright ©2022 All rights reserved</p>
        </div>
        
    )
}
