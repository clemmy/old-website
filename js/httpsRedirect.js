const host = "clementhoang.net";

if (window.location.host === host && window.location.protocol !== "https:") {
  window.location.protocol = "https:";
}
