import Error from 'next/error'

export async function getServerSideProps(context) {
  const id = encodeURIComponent(context.params.id);
  const res = await fetch(`https://api.github.com/${id}/vercel/next.js`)
  const errorCode = res.ok ? false : res.statusCode
  const json = await res.json()

  return {
    props: { errorCode, stars: json.stargazers_count },
  }
}

export default function Page({ errorCode, stars }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>Next stars: {stars}</div>
}