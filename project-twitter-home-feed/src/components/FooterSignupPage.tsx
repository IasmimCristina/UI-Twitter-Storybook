import clsx from "clsx"
import { FooterSignupItem } from "./FooterSignupItem";




export interface FooterSignupPageProps {

  type?: 'normal' | 'dark';

}
export function FooterSignupPage({ type = 'normal' }: FooterSignupPageProps) {



  return (
    <footer className={clsx('bg-transparent  w-full h-8 flex  ', {

    })}>

      <ul className="flex  ml-80 items-center  " >
        <FooterSignupItem type={type} />
        <FooterSignupItem type={type} itemText="Help Center" />
        <FooterSignupItem type={type} itemText="Termos of Service" />
        <FooterSignupItem type={type} itemText="Privacy Policy" />
        <FooterSignupItem type={type} itemText="Cookie Policy" />
        <FooterSignupItem type={type} itemText="Ads Info" />
        <FooterSignupItem type={type} itemText="Blog" />
        <FooterSignupItem type={type} itemText="Status" />
        <FooterSignupItem type={type} itemText="Carrres" />
        <FooterSignupItem type={type} itemText="Brand Resources" />
        <FooterSignupItem type={type} itemText="Advertising" />
        <FooterSignupItem type={type} itemText="Marketing" />
        <FooterSignupItem type={type} itemText="Twitter for Business" />
        <FooterSignupItem type={type} itemText="Developers" />
        <FooterSignupItem type={type} itemText="Diretory" />
        <FooterSignupItem type={type} itemText="Settings" />
        <FooterSignupItem type={type} itemText="© 2021 Twitter, Inc." />


        {/* <li>About</li>
  <li>Help Center</li>
  <li>Terms of service</li>
  <li>Privacy Policy</li>
  <li>Cookie Policy</li>
  <li>Ads Info</li>
  <li>Blog</li>
  <li>Status</li>
  <li>Carrres</li>
  <li>Brand Resources</li>
  <li>Advertising</li>
  <li>Marketing</li>
  <li>Twitter for Business</li>
  <li>Developers</li>
  <li></li>
  <li></li>
  <li></li> */}
      </ul>

    </footer>
  )
}