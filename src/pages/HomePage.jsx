import React, { Suspense, lazy } from 'react'
import HeroContent from './Header'
import { Helmet } from 'react-helmet-async';
const Partners = lazy(() => import('./Partners'));
const Intro = lazy(() => import('../components/home/Intro'));
const VerticalLine = lazy(() => import('../components/functions/VerticalLines'));
const TransferList = lazy(() => import('./SetUp'));
const Cost = lazy(() => import('./Cost'));
const UserFeed = lazy(() => import('./UserFeedback'));
const FAQ = lazy(() => import('../components/home/FAQs'));
const Security = lazy(() => import("../pages/Security"));
const Scale = lazy(() => import("../pages/Scale"));

export default function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Nife - Hybrid cloud platform</title>
                <link rel="canonical" href="https://nife.io/" />
                <meta name="description"
                    content="Nife is a global edge application platform company that rapidly empowers enterprises and developers to launch their applications. Connect to any Cloud, Bare-metal, or Kubernetes servers and infrastructure management. It’s all about seamless automation, allowing you to focus on what truly matters." />
                <meta property="og:title" content="Nife - Hybrid cloud platform" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nife.io/" />
                <meta property="og:image" content="https://launch.nife.io/nifeLogo.png" />
                <meta property="og:description" content="Nife is a global edge application platform company that rapidly empowers enterprises and developers to launch their applications. Connect to any Cloud, Bare-metal, or Kubernetes servers and infrastructure management. It’s all about seamless automation, allowing you to focus on what truly matters." />
                <meta property="og:site_name" content="Nife Labs" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Nife - Hybrid cloud platform" />
                <meta name="twitter:description" content="Nife is a global edge application platform company that rapidly empowers enterprises and developers to launch their applications. Connect to any Cloud, Bare-metal, or Kubernetes servers and infrastructure management. It’s all about seamless automation, allowing you to focus on what truly matters." />
                <meta name="twitter:image" content="https://launch.nife.io/nifeLogo.png" />
                <meta name="twitter:site" content="@nifeio" />
            </Helmet>
            <HeroContent />
            <Suspense fallback={<div className='loader-line'></div>}>
                <Partners />
                <VerticalLine />
                <Intro />
             
                <TransferList />
                <VerticalLine />
                <Scale />
                <VerticalLine />
                <Cost />
                <VerticalLine />
                <Security />
                <VerticalLine />
                <UserFeed />
                <FAQ />
                
            </Suspense>
        </div>
    )
}
