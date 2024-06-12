
import { FeatureCard } from "./FeatureCard";
// import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";
// import { RiRefund2Fill } from "react-icons/ri";
// import { MdSupportAgent } from "react-icons/md";
export const Features = () => {
    const data = [
        {
        icon: "",
        title: "Free Delivery",
        desc: "Orders from all items",
        },
        {
        icon: "",
        title: "Return & Refund",
        desc: "Money back guarantee",
        },
        {
        icon: "",
        title: "Member Discount",
        desc: "On order over $99",
        },
        {
        icon: "",
        title: "Support 24/7",
        desc: "Contact us 24 hours a day",
        },
    ];
    return (
        <div className="container grid gap-2 px-4 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item,index) => (
            <FeatureCard key={index} item={item} />
        ))}
        </div>
    );
};
