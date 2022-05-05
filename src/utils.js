export function getJWTExpireTime(jwtToken) {
  if (jwtToken) {
    try {
      const [, payload] = jwtToken.split(".");
      const { exp: expires } = JSON.parse(
        Buffer.from(payload, "base64").toString()
      );
      if (typeof expires === "number") {
        return new Date(expires * 1000);
      }
    } catch (e) {}
  }
  return null;
}
