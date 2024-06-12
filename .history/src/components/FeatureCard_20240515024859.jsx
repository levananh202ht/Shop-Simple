

export const FeatureCard = ({item}) => {
    const { icon, desc, title } = item;
    return (
        <div className="flex gap-2 px-4 py-6 bg-gray-100 font-karla">
        {icon}
        <div>
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="text-gray-600">{desc}</p>
        </div>
        </div>
    );
};
