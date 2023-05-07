import { NextApiRequest } from 'next'
import { User, sessionOptions } from '@/lib/session';
import { getIronSession } from 'iron-session';

export async function GET(req: NextApiRequest) {
    const res = new Response("Hello, Next.js!")

    console.log("connect to login route")

    const session = await getIronSession(req, res, sessionOptions);
    console.log("before ", session, session.user === undefined)
    
    if (session.user === undefined) {
        console.log("set user")
        const user = { isLoggedIn: true, login: "sample user", avatarUrl: "avatar_url" } as User
        session.user = user
        await session.save()
    }
    console.log("after ", session)

    return res

}
