import { headers } from 'next/headers';

export default function TopContainer({}: {}) {
    const headersList = headers()
    const referer = headersList.get('referer');
    console.log("referer from header component", referer);
    return <div>Referer from header component - {referer}</div>
}