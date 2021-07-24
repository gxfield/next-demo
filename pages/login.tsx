import Head from 'next/head'
import Login from '../components/Login'
import LoginRegisterLayout from '../layouts/LoginRegister'

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>DMG Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginRegisterLayout>
        <Login />
      </LoginRegisterLayout>
    </div>
  )
}
