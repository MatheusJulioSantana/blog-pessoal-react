import { useContext } from 'react'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
    const { usuario } = useContext(AuthContext)

    let footerComponent

    let data = new Date().getFullYear()

    if (usuario.token !== '') {
        footerComponent = (
    <>
      <div
        className="flex justify-center bg-Primary text-Secundary"
        style={{ fontFamily: "Share Tech Mono, sans-serif" }}
      >
        <div className="container flex justify-between items-center py-2 text-base ">
          <p className=" font-none">/portalDev | Copyright: {data} </p>
          <p className="font-none">/MatheusJulioSantana</p>
          <div className="flex gap-2">
            <GithubLogo size={28} />
            <LinkedinLogo size={28} />
          </div>
        </div>
      </div>
    </>
        )
      }
  
      return (
          <>
              {footerComponent}
          </>
      )
  }
  export default Footer