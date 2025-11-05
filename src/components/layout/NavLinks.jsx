import { Link } from "react-router-dom";

export default function NavLinks( {
    items,
    isActive,
    onItemClick,
    listClassName,
    listProps,
}){
    return (
        <ul className={listClassName} {...listProps}>
            {items.map((item) => (
                <Link key={item.path} to={item.path} className={`flex items-center gap-2 px-2 rounded ${isActive(item) ? 'active bg-primary text-primary-content' : 'hover:bg-base-200'}`} onClick={() => onItemClick(item.path)}>
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                </Link>
            ))}
        </ul>
    );
}