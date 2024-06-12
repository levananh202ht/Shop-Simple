
import { FeatureCard } from "./FeatureCard";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
export const Features = () => {
    const data = [
        {
        icon: {TbTruckDelivery},
        title: "Free Delivery",
        desc: "Orders from all items",
        },
        {
        icon: {TbTruckDelivery},
        title: "Return & Refund",
        desc: "Money back guarantee",
        },
        {
        icon: {RiRefund2Fill},
        title: "Member Discount",
        desc: "On order over $99",
        },
        {
        icon: {MdSupportAgent},
        title: "Support 24/7",
        desc: "Contact us 24 hours a day",
        },
    ];
    return (
        <div className="container grid gap-2 mx-auto mt-8 px-14 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item,index) => (
            <FeatureCard key={index} item={item} />
        ))}
        </div>
    );
};
