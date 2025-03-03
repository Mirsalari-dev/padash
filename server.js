/* eslint-disable @typescript-eslint/no-require-imports */
const { createServer } = require("https");
const { parse } = require("url");
const { existsSync, readFileSync } = require("fs");
const { execSync } = require("child_process");
const next = require("next");
const os = require("os");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT;

// مسیر گواهینامه‌ها
const keyPath = "./localhost-key.pem";
const certPath = "./localhost.pem";

// تشخیص سیستم‌عامل
const isWindows = os.platform() === "win32";

// اگر گواهینامه‌ها وجود نداشتند، آنها را بساز
if (!existsSync(keyPath) || !existsSync(certPath)) {
  console.log("🔐 گواهینامه SSL پیدا نشد، در حال ساخت...");

  if (isWindows) {
    // برای ویندوز: استفاده از PowerShell
    execSync(
      `powershell -Command "& {New-SelfSignedCertificate -DnsName 'localhost' -CertStoreLocation 'Cert:\\CurrentUser\\My'}"`,
      { stdio: "inherit" }
    );
    console.log("✅ گواهینامه ساخته شد! لطفاً یک‌بار سیستم را ری‌استارت کنید.");
  } else {
    // برای لینوکس و مک: استفاده از OpenSSL
    execSync(
      `openssl req -x509 -newkey rsa:2048 -keyout ${keyPath} -out ${certPath} -days 365 -nodes -subj "/CN=localhost"`
    );
    console.log("✅ گواهینامه ساخته شد!");
  }
}

// خواندن گواهینامه‌ها
const httpsOptions = {
  key: existsSync(keyPath) ? readFileSync(keyPath) : "",
  cert: existsSync(certPath) ? readFileSync(certPath) : "",
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 Server running on 👉 https://localhost:${port}`);
  });
});

// 🔹 نکات مهم
// برای ویندوز، PowerShell گواهینامه را در سیستم نصب می‌کند و ممکن است کاربر نیاز به ری‌استارت سیستم داشته باشد.
// برای لینوکس و مک، OpenSSL به‌صورت خودکار گواهینامه را ایجاد می‌کند.
// اگر ویندوزی‌ها خطای SSL گرفتند، گواهینامه را به Trusted Root CA اضافه کنند:
// روی Win + R بزنید، mmc تایپ کنید.
// از منوی File گزینه Add/Remove Snap-in را انتخاب کنید.
// Certificates را اضافه کنید.
// به Trusted Root Certification Authorities بروید و گواهینامه را ایمپورت کنید.

// توی ویندوز گیت بش رو باز کن
// export MSYS_NO_PATHCONV=1
// openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost-key.pem -out localhost.pem -subj "/CN=localhost"
