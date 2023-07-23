import Head from 'next/head'

export default function Page() {
  const ogImageArr = [
    'pycon-id-tailwind',
    'pycon-image-svg',
    'custom-font', 
    'dynamic-image',
    'emoji',
    'encrypted',
    'image-svg',
    'language',
    'param',
    'static',
    'tailwind',
    'vercel'
  ];
  return (
    <div>
      <Head>
        <meta name="og:title" content="Vercel Edge Network" />
        <meta name="og:description" content="Vercel Edge Network" />
        <meta
          name="og:image"
          content={
            // Because OG images must have a absolute URL, we use the
            // `VERCEL_URL` environment variable to get the deployment’s URL.
            // More info:
            // https://vercel.com/docs/concepts/projects/environment-variables
            `${
              process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
            }/api/vercel`
          }
        />
      </Head>
      <h1>A page with Open Graph Image.</h1>
      {
        ogImageArr.map((name) => (
          <div key={`div-${name}`}>
            <h2 key={`h2-${name}`}>{name}</h2>
            <img 
              key={`img-${name}`}
              src={
                `${
                  process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
                }/api/${name}`
              } 
            />
          </div>
        ))
      }
      {/* <div>
        <h2>Static</h2>
        <img 
          src={
            `${
              process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
            }/api/static`
          } 
        />
      </div> */}
      {/* <div>
        <h2>Static</h2>
        <img 
          src={
            `${
              process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
            }/api/static`
          } 
        />
      </div>
      <div>
        <h2>Tailwind</h2>
        <img 
          src={
            `${
              process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
            }/api/tailwind`
          } 
        />
      </div>
      <div>
        <h2>Vercel</h2>
        <img 
          src={
            `${
              process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
            }/api/vercel`
          } 
        />
      </div> */}
    </div>
  )
}
