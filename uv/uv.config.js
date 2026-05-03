self.__uv$config = {
    prefix: '/rainfall/',
    bare:'https://hyperion-v1.us.to/bare/', //dont steal my bare instead deploy one yorself on vercel via https://github.com/321EZ123/focus-bare
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
