import { NextApiRequest } from 'next'
import { sessionOptions } from '@/lib/session';
import { getIronSession } from 'iron-session';

export async function GET(req: NextApiRequest) {
    const res = new Response("logout done", {
        status: 302,
    })

    const session = await getIronSession(req, res, sessionOptions);
    
    console.log("before ", session, session.user === undefined)    
    session.destroy()
    console.log("after ", session)

    return res

}
