interface HeaderProps {
    title: string;
}

export const Header = (props: HeaderProps) => {

    const {title} = props;

    return <div><h1>{title} / {title}</h1></div>
}

export default Header;
