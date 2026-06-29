export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    // Live exchange rates — Frankfurter (free, no key)
    const fxRes = await fetch("https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,JPY,CAD,CHF,INR,AUD");
    const fxData = await fxRes.json();

    // Live Fed Funds Rate — FRED (free key)
    let fedRate = null;
    try {
      const fredRes = await fetch(
        `https://api.stlouisfed.org/fred/series/observations?series_id=FEDFUNDS&api_key=${process.env.FRED_API_KEY}&sort_order=desc&limit=1&file_type=json`
      );
      const fredData = await fredRes.json();
      fedRate = fredData.observations?.[0]?.value || null;
    } catch (_) {}

    return res.status(200).json({
      fx: fxData.rates,
      base: fxData.base,
      date: fxData.date,
      fed_rate: fedRate,
    });
  } catch (err) {
    return res.status(500).json({ error: "Rate fetch failed", detail: err.message });
  }
}
