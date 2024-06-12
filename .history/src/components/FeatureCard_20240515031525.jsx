

export const FeatureCard = ({item}) => {
    const { icon, desc, title } = item;
    return (
        <div className="gap-2 px-4 py-6 text-center bg-gray-100 font-karla">
        <div className="text-center">
        {icon}
        </div>
        <div>
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="text-gray-600">{desc}</p>
        </div>
        </div>
    );
};
