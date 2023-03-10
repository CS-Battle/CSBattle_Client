import { classNames } from "../../../utils/classNames";

interface FooterProps {
  children?: JSX.Element | string;
  className?: string;
}
const Footer = (props: FooterProps) => {
  const {className="", children} = props
  return (
    <footer className={classNames("text-white", className)}>
        {/* md 이하로 줄였을 때 맞춰서 footer 글자크기도 줄이고 싶은데, 안줄여지고 두줄처리되는 문제    */}
        {children}
    </footer>
  );
};

export default Footer;