import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { HiMapPin } from "react-icons/hi2";
export const Footer = () => {
    return (
        <div className="flex px-14">
            <div>
                <h3>CHÍNH SÁCH</h3>
                <p>Chính sách bảo mật</p>
                <p>Chính sách vận chuyển</p>
                <p>Chính sách đổi trả, bảo hành</p>
            </div>
            <div>
                <h3>CHÍNH SÁCH</h3>
                <div>
                    <div>
                        <HiMapPin />
                        <p>Seoul, Korea</p>
                    </div>
                    <div>
                        <IoCall />
                        <p>Seoul, Korea</p>
                    </div>
                    <div>
                        <CgMail />
                        <p>Seoul, Korea</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
