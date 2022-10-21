import NavbarLayout from "../navbar/navbar"
import Image from 'next/image'
import placeHolder from '../../public/assets/copyright-symbol.png'

export default function SectionLayout({ children, pageProps }) {
  return (
    <>
      <h1>This is the section title</h1>
      <main>{children}</main>
      <Image
        src={placeHolder}
        width={200}
        height={200}
        alt="Copyright"
      />
      <div>This is the section footer</div>
    </>
  )
}