import { signJwtAccessToken } from '@/jwt'
import NextAuth from 'next-auth'
import NaverProvider from 'next-auth/providers/naver'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user}
    },
    async session({session, token}) {
      const accessToken = signJwtAccessToken(session.user)
      session.user.accessToken = accessToken
      const getGroup = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/getUserByEmail`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          email: session.user.email
        })
      })
      const json = (await getGroup.json())
      const knownAs = json.rows[0].knownas
      const group = json.rows[0].group
      session.user.group = group
      session.user.knownAs = knownAs
      //session.user = token
      return session 
    },
    async signIn({ user }) {
      const { id, email } = user
      const accessToken = signJwtAccessToken(user)
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/signin`, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          handle: id,
          email: email,
        }),
        headers: {
          'Content-Type': 'application/json',
          'authorization': accessToken,
        }
      })
      if (!response.ok) return false

      return true
    }
  }
})