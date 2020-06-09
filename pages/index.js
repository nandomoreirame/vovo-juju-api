const IndexPage = () => null

IndexPage.getInitialProps = async ({ res }) => {
  return res.writeHead(302, { Location: '/api' }).end()
}

export default IndexPage
