import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Analytics placeholder - replace with your analytics code */}
        {process.env.NEXT_PUBLIC_ANALYTICS_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Add your analytics script here (Plausible, GA, etc.)
                console.log('Analytics ID: ${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
              `,
            }}
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
