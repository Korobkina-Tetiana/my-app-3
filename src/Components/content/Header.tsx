interface HeaderProps {
    title: string;
}

export const Header = (props: HeaderProps) => {

    const {title} = props;

    return <>{title}</>
}

export default Header;
