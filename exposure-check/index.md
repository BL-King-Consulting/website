---
layout: page
title: CMMC Exposure Check
slug: exposure-check
seo_title: CMMC Exposure Check | BL King Consulting
seo_description: Eight questions, about two minutes. Find out whether the DoD safeguarding requirements reach your contract, and which CMMC level your answers point to.
og_image: ''
faqs: null
hero_description: Eight questions, about two minutes. Find out whether the DoD safeguarding requirements reach your contract, and which level your answers point to.
hide_cta: true
---
<!--
  The form is the Formbricks link survey "CMMC Exposure Check" on forms.blk.ing
  (survey cmw9m36xu000102o86y94lnkm). Edit the questions and results in Formbricks,
  not here. This page only frames it and passes src/utm_* through to its hidden fields.
-->

## How it works

- Answer eight multiple-choice questions about your contract, the data you handle and what you already have in place.
- You see your result as soon as you finish: Level 1 (FCI), Level 2 (CUI), or unclear and worth a quick review.
- The last step asks for your name, email and company so we can send you a copy of your result.

Which level applies to you is decided by your contract's DFARS clauses and CUI markings, not by the size of your company.

<div class="ec-embed">
  <iframe id="ec-frame"
          src="https://forms.blk.ing/s/cmw9m36xu000102o86y94lnkm?embed=true"
          title="CMMC Exposure Check form"
          loading="eager"></iframe>
</div>

<p class="ec-fallback">If the form does not load, <a href="https://forms.blk.ing/s/cmw9m36xu000102o86y94lnkm" id="ec-direct">open it in its own window</a>, or <a href="/contact/?src=exposure_check">contact us</a> and we will go through the questions with you.</p>

<p class="ec-note">This is a first read from your answers, not an assessment. How we handle what you enter is in our <a href="/privacy-policy/">privacy policy</a>.</p>

<style>
  .ec-embed { position: relative; width: 100%; max-width: 760px; height: 760px; margin: 1.5em auto; border: 1px solid #d6dbe1; border-radius: 8px; overflow: hidden; }
  .ec-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
  .ec-fallback, .ec-note { max-width: 760px; margin-left: auto; margin-right: auto; }
  .ec-note { font-size: 0.9rem; color: var(--gray-700); }
  @media (max-width: 600px) { .ec-embed { height: 820px; } }
</style>

<script>
(function () {
  "use strict";
  var FORM_ORIGIN = "https://forms.blk.ing";
  var KEYS = ["src", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

  /* Pass the visit's src and UTM values to the form's hidden fields. */
  var here = new URLSearchParams(window.location.search);
  var pass = new URLSearchParams();
  KEYS.forEach(function (k) {
    var v = here.get(k);
    if (v) { pass.set(k, v.slice(0, 80)); }
  });
  if (!pass.get("src")) { pass.set("src", "exposure_check_page"); }
  var extra = pass.toString();
  var frame = document.getElementById("ec-frame");
  var direct = document.getElementById("ec-direct");
  frame.src = frame.src + "&" + extra;
  direct.href = direct.href + "?" + extra;

  /* Formbricks posts "formbricksSurveyCompleted" when someone finishes. */
  window.addEventListener("message", function (event) {
    if (event.origin !== FORM_ORIGIN || event.data !== "formbricksSurveyCompleted") { return; }
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "exposure_check_completed", src: pass.get("src") });
    } catch (e) { /* analytics is never required */ }
  });
})();
</script>
