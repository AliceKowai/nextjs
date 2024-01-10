import Link from 'next/link'
export default function Page() {
    return <div>
        <h1>Hello, Next.js!</h1>
        <ul>
            <li>
                <Link href="/sobre">
                    Ir para o sobre
                </Link>
            </li>
        </ul>
        <img src="images/perfil.jpg"/>
        </div>
    }