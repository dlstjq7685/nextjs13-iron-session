"use client"

import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter()

    const onClick = () => {
        fetch('/api/secure', {
            method: 'GET',
            cache: 'no-store',
        }).then(result => result.text())
        .then(text => console.log(text))
    }
    
    const logout = () => {
        fetch('/api/logout').then(result => {
            console.log(result.status)
            router.push('/login')

        })
    }

    return <div>
        <p>this secure page.</p>
        <p>must be logged in to see this.</p>
        <input type="button" value="get secure data" onClick={onClick} />
        <input type="button" value="logout" onClick={logout} />
        
    </div>
  }
  