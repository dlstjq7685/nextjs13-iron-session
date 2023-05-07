"use client"

export default function Page() {

    const onClick = () => {
        console.log("login start")
        fetch('/api/login').then(result => result.text())
        .then(text => console.log(text))
    }

    return <div>
    this is the login page.
    <input type="button" value="login" onClick={onClick} />
    </div>
}
