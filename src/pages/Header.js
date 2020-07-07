import Head from 'next/head';

const Header = () => {
  return (
    <>
      <Head>
	      <meta charset="UTF-8" />
        <title>부동산 시세 - thereright</title>
	      <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:title" content="부동산 시세 - 부동산 실거래가 정보" />
        <meta property="og:description" content="공공마스크 관련 공공데이터를 이용한 공적마스크 판매처 및 재고현황과 코로나19 통계 데이터를 제공하는 서비스입니다." />
        <meta property="og:url" content="https://www.thereright.co.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta name="description" content="공공데이터를 활용한 공공마스크 판매처 및 공적마스크 재고 현황과 코로나19 통계 데이터를 제공하는 서비스입니다." />
        <meta name="naver-site-verification" content="35d9bc3262f8f9b45b902fb875586a9a965099dd"/>
        <meta name="google-site-verification" content="0EJP9jEvzKPlfbRC0y57xWXrAIVIWJ69yR9m1MyUXe8" />
        <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" /> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        {/* <script src="https://www.gstatic.com/charts/loader.js" type="text/javascript" ></script> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script> */}
        {/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-151381503-2"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=j767ea842t"></script>
      </Head>
    </>
  )
}

export default Header;