
const backend_configs = {
  api_urls: {
    auth: `${process.env.API_HOST}/api/${process.env.API_VERSION}/auth`,
    public: `${process.env.API_HOST}/api/${process.env.API_VERSION}/public`,
  },
}

export default backend_configs;