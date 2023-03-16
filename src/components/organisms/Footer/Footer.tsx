import { copyrights } from "./const"

const Footer = () => {
  return (
    <footer className="top-0 left-0 z-50">
      <h3 className="relative text-center text-white scale-50 md:scale-25 md:text-sm">{copyrights}</h3>
      {/* md 이하로 줄였을 때 맞춰서 footer 글자크기도 줄이고 싶은데, 안줄여지고 두줄처리되는 문제    */}
    </footer>
  )
}

export default Footer
