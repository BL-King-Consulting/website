---
layout: page
title: "Exposure Check"
permalink: /exposure-check/
description: "Eight questions, about two minutes, no sales call. Find out whether the DoD safeguarding requirement reaches your contract and which level it points to."
sitemap: true
exposure_check: true
---

<!--
  Exposure Check: self-contained form. No external scripts, no external styles.
  The eight questions and their options are the verbatim question bank from the
  Exposure Check database (Zite base 81f272e91bba8975, table Questions), so the
  page, the Zite form the campaign copy already links, and the GHL fields agree.
  Set EC_WEBHOOK_URL below to the n8n webhook once exposure-check-intake is
  imported and activated. Until then the page still shows the on-page result and
  simply reports that the copy could not be sent.
-->

<style>
  .ec{max-width:720px;margin:0 auto;padding:0 16px;line-height:1.5}
  .ec h1{font-size:1.9rem;margin:0 0 .25rem}
  .ec .ec-lede{font-size:1.05rem;margin:0 0 1.25rem}
  .ec .ec-frame{border-left:4px solid #1f4e79;padding:.5rem .9rem;margin:0 0 1.5rem;background:#f4f7fb}
  .ec fieldset{border:1px solid #d6dbe1;border-radius:6px;padding:.9rem 1rem;margin:0 0 1rem}
  .ec legend{font-weight:600;padding:0 .3rem}
  .ec .ec-section{font-size:.8rem;letter-spacing:.04em;text-transform:uppercase;color:#5b6572;margin:1.5rem 0 .5rem}
  .ec label.ec-opt{display:block;padding:.3rem 0;cursor:pointer}
  .ec label.ec-opt input{margin-right:.5rem}
  .ec .ec-field{margin:0 0 .9rem}
  .ec .ec-field label{display:block;font-weight:600;margin-bottom:.25rem}
  .ec .ec-field input{width:100%;max-width:420px;padding:.5rem .6rem;border:1px solid #b9c2cc;border-radius:4px;font-size:1rem}
  .ec button{background:#1f4e79;color:#fff;border:0;border-radius:4px;padding:.7rem 1.2rem;font-size:1rem;cursor:pointer}
  .ec button[disabled]{opacity:.6;cursor:default}
  .ec .ec-result{border:1px solid #1f4e79;border-radius:6px;padding:1rem 1.2rem;margin:1.5rem 0}
  .ec .ec-result h2{margin:0 0 .5rem;font-size:1.3rem}
  .ec .ec-muted{color:#5b6572;font-size:.9rem}
  .ec .ec-error{color:#8a1c1c}
  .ec .ec-hidden{display:none}
  .ec .ec-progress{font-size:.85rem;color:#5b6572;margin:0 0 1rem}
  @media (max-width:480px){.ec h1{font-size:1.5rem}}
</style>

<div class="ec" id="exposure-check">

<h1>Exposure Check</h1>
<p class="ec-lede">Eight questions. About two minutes. No sales call attached. You get a plain-language read of whether the Department of Defense safeguarding requirement reaches your contract, and which level it points to, on this page, as soon as you answer the last question.</p>

<div class="ec-frame">
  <p><strong>The pause is not a pass.</strong> The 13 July 2026 Phase 2 suspension and Class Deviation 2026-O0025 Rev 3 (3 September 2026) paused the CMMC rollout. The underlying safeguarding obligations survived it. Through 9 November 2028 the clause applies at program-office discretion; from 10 November 2028 it applies to all FCI and CUI contracts. Which level applies to you is decided by your contract's DFARS clauses and CUI markings, never by the size of your company.</p>
</div>

<noscript>
  <p class="ec-error">The on-page result needs JavaScript. The eight questions are below so you can read them now; to get a result, enable JavaScript or call the office and we will walk through them with you on the phone.</p>
</noscript>

<form id="ec-form" novalidate>

  <p class="ec-progress" id="ec-progress" aria-live="polite">Answered 0 of 8</p>

  <p class="ec-section">Contract basics</p>

  <fieldset data-q="q1">
    <legend>1. Do you currently hold a contract (as prime or subcontractor) with the Department of Defense, or with a company that contracts with the DoD?</legend>
    <label class="ec-opt"><input type="radio" name="q1" value="Yes, direct DoD contract">Yes, direct DoD contract</label>
    <label class="ec-opt"><input type="radio" name="q1" value="Yes, subcontractor to a DoD prime">Yes, subcontractor to a DoD prime</label>
    <label class="ec-opt"><input type="radio" name="q1" value="Not yet, but bidding">Not yet, but bidding</label>
    <label class="ec-opt"><input type="radio" name="q1" value="No / not sure">No / not sure</label>
  </fieldset>

  <fieldset data-q="q2">
    <legend>2. Does your contract reference DFARS 252.204-7012, NIST 800-171, or CMMC?</legend>
    <label class="ec-opt"><input type="radio" name="q2" value="Yes">Yes</label>
    <label class="ec-opt"><input type="radio" name="q2" value="No">No</label>
    <label class="ec-opt"><input type="radio" name="q2" value="Not sure">Not sure</label>
  </fieldset>

  <p class="ec-section">Data handling</p>

  <fieldset data-q="q3" data-multi="1">
    <legend>3. Do you create, store, or transmit any of the following as part of your contract work? (select all that apply)</legend>
    <label class="ec-opt"><input type="checkbox" name="q3" value="Technical drawings/specs">Technical drawings/specs</label>
    <label class="ec-opt"><input type="checkbox" name="q3" value="Export-controlled info">Export-controlled info</label>
    <label class="ec-opt"><input type="checkbox" name="q3" value="Contract-tied PII">Contract-tied PII</label>
    <label class="ec-opt"><input type="checkbox" name="q3" value="Controlled technical data">Controlled technical data</label>
    <label class="ec-opt"><input type="checkbox" name="q3" value="None of these" data-none="1">None of these</label>
  </fieldset>

  <fieldset data-q="q4">
    <legend>4. Has your prime or contracting officer ever told you your information is "CUI" or asked you to mark documents as controlled?</legend>
    <label class="ec-opt"><input type="radio" name="q4" value="Yes">Yes</label>
    <label class="ec-opt"><input type="radio" name="q4" value="No">No</label>
    <label class="ec-opt"><input type="radio" name="q4" value="Not sure what that means">Not sure what that means</label>
  </fieldset>

  <fieldset data-q="q5" data-multi="1">
    <legend>5. Where does your contract-related data live today? (select all that apply)</legend>
    <label class="ec-opt"><input type="checkbox" name="q5" value="Personal email">Personal email</label>
    <label class="ec-opt"><input type="checkbox" name="q5" value="Shared drive, no extra security">Shared drive, no extra security</label>
    <label class="ec-opt"><input type="checkbox" name="q5" value="Managed, access-controlled system">Managed, access-controlled system</label>
    <label class="ec-opt"><input type="checkbox" name="q5" value="Not sure" data-none="1">Not sure</label>
  </fieldset>

  <p class="ec-section">Current posture</p>

  <fieldset data-q="q6" data-multi="1">
    <legend>6. Which of these do you already have in place? (select all that apply)</legend>
    <label class="ec-opt"><input type="checkbox" name="q6" value="MFA">MFA (multi-factor authentication)</label>
    <label class="ec-opt"><input type="checkbox" name="q6" value="Written IT security policy">Written IT security policy</label>
    <label class="ec-opt"><input type="checkbox" name="q6" value="Managed antivirus/endpoint protection">Managed antivirus/endpoint protection</label>
    <label class="ec-opt"><input type="checkbox" name="q6" value="None of these" data-none="1">None of these</label>
  </fieldset>

  <fieldset data-q="q7">
    <legend>7. Who manages your IT/cybersecurity today?</legend>
    <label class="ec-opt"><input type="radio" name="q7" value="In-house IT">In-house IT</label>
    <label class="ec-opt"><input type="radio" name="q7" value="Outside IT/MSP">Outside IT/MSP</label>
    <label class="ec-opt"><input type="radio" name="q7" value="We handle it ourselves">We handle it ourselves</label>
    <label class="ec-opt"><input type="radio" name="q7" value="Not sure">Not sure</label>
  </fieldset>

  <p class="ec-section">Timing</p>

  <fieldset data-q="q8">
    <legend>8. How soon do you need to show compliance (recompete, new requirement, audit notice)?</legend>
    <label class="ec-opt"><input type="radio" name="q8" value="Within 30 days">Within 30 days</label>
    <label class="ec-opt"><input type="radio" name="q8" value="Within 6 months">Within 6 months</label>
    <label class="ec-opt"><input type="radio" name="q8" value="Just researching">Just researching</label>
    <label class="ec-opt"><input type="radio" name="q8" value="Not sure">Not sure</label>
  </fieldset>

  <p><button type="button" id="ec-see">See where you stand</button></p>
  <p class="ec-error ec-hidden" id="ec-incomplete">Please answer all eight questions first.</p>

</form>

<div class="ec-result ec-hidden" id="ec-result" aria-live="polite">
  <h2 id="ec-band-title"></h2>
  <p id="ec-band-body"></p>
  <p id="ec-band-next"></p>
  <p class="ec-muted">This is a first read from eight answers, not an assessment. Your contract's clauses and markings decide the level.</p>

  <form id="ec-contact" novalidate>
    <p><strong>Want a copy of this result, or a short written note on what it means for your contract?</strong> Optional. Leave both blank if you would rather not.</p>
    <div class="ec-field">
      <label for="ec-email">Email</label>
      <input type="email" id="ec-email" name="email" autocomplete="email" placeholder="you@company.com">
    </div>
    <div class="ec-field">
      <label for="ec-company">Company</label>
      <input type="text" id="ec-company" name="company" autocomplete="organization" placeholder="Company name">
    </div>
    <p><button type="submit" id="ec-send">Send me the result</button>
       <button type="button" id="ec-skip">No thanks, I have what I need</button></p>
    <p class="ec-muted">We use the address for this result and, if you ask, one follow-up. No list, no drip sequence, no sales call unless you book one.</p>
    <p class="ec-error ec-hidden" id="ec-send-error"></p>
  </form>
</div>

<div class="ec-result ec-hidden" id="ec-thanks">
  <h2>Thank you</h2>
  <p id="ec-thanks-body"></p>
  <p>BL King passed its own C3PAO certification in November 2024 on the first attempt. If your result points to Level 1 or Level 2 and you want help, the guarantee is simple: we work free until you pass.</p>
  <p><a href="/contact/?src=exposure_check">Talk to a person</a> or <a href="/compliance/cmmc/?src=exposure_check">read how the work is done</a>.</p>
</div>

</div>

<script>
(function () {
  "use strict";

  /* ---- configuration ------------------------------------------------ */
  var EC_WEBHOOK_URL = "https://n8n.blk.ing/webhook/exposure-check-intake"; /* n8n exposure-check-intake; change when the workflow is activated on a different host */
  var EC_VERSION = "2026-09-20";

  /* ---- helpers ------------------------------------------------------ */
  function $(id) { return document.getElementById(id); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function show(el) { el.classList.remove("ec-hidden"); }
  function hide(el) { el.classList.add("ec-hidden"); }
  function track(name, data) {
    try {
      window.dataLayer = window.dataLayer || [];
      var ev = { event: name, ec_version: EC_VERSION };
      for (var k in (data || {})) { ev[k] = data[k]; }
      window.dataLayer.push(ev);
    } catch (e) { /* analytics is never load-bearing */ }
  }
  function param(name) {
    try {
      var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.search);
      return m ? decodeURIComponent(m[1].replace(/\+/g, " ")).slice(0, 80) : "";
    } catch (e) { return ""; }
  }

  var form = $("ec-form");
  var progress = $("ec-progress");
  var started = false;

  /* ---- answers ------------------------------------------------------ */
  function readAnswers() {
    var a = {};
    qsa("fieldset[data-q]", form).forEach(function (fs) {
      var q = fs.getAttribute("data-q");
      if (fs.getAttribute("data-multi")) {
        a[q] = qsa("input:checked", fs).map(function (i) { return i.value; });
      } else {
        var c = fs.querySelector("input:checked");
        a[q] = c ? c.value : "";
      }
    });
    return a;
  }
  function answeredCount(a) {
    var n = 0;
    for (var k in a) { if (Array.isArray(a[k]) ? a[k].length : a[k]) { n++; } }
    return n;
  }
  function updateProgress() {
    var a = readAnswers();
    var n = answeredCount(a);
    progress.textContent = "Answered " + n + " of 8";
    if (!started && n > 0) { started = true; track("exposure_check_started", { src: param("src") }); }
  }

  /* "None of these" / "Not sure" checkbox is exclusive within its group */
  form.addEventListener("change", function (ev) {
    var t = ev.target;
    if (t && t.type === "checkbox") {
      var fs = t.closest("fieldset");
      if (t.getAttribute("data-none") && t.checked) {
        qsa("input[type=checkbox]", fs).forEach(function (i) { if (i !== t) { i.checked = false; } });
      } else if (t.checked) {
        qsa("input[data-none]", fs).forEach(function (i) { i.checked = false; });
      }
    }
    updateProgress();
  });

  /* ---- banding (mirrors the Scoring Notes in the question bank) ------- */
  /* Three bands. No numbers shown to the visitor. */
  function band(a) {
    var hasAny = function (arr, vals) { return arr.some(function (v) { return vals.indexOf(v) !== -1; }); };
    var noContract = a.q1 === "No / not sure";
    var toldCui = a.q4 === "Yes";
    var cuiUnsure = a.q4 === "Not sure what that means";
    var dataCui = a.q3.length > 0 && !(a.q3.length === 1 && a.q3[0] === "None of these");

    if (toldCui || dataCui) { return "level2"; }
    if (noContract || cuiUnsure) { return "unclear"; }
    return "level1";
  }

  var BANDS = {
    level1: {
      title: "Your answers point to Level 1 (FCI) scope",
      body: "Nothing you told us says you handle Controlled Unclassified Information, but you do hold or pursue DoD work, and any DoD contract carries the basic safeguarding clause for Federal Contract Information. That is the Level 1 set of requirements: the basics that FAR 52.204-21 has required since 2016. The pause did not remove them.",
      next: "Next step, if you want one: confirm the clauses in your contract, then close whatever gaps the basics show. BL King's position is audit-ready in 60 days for Level 1."
    },
    level2: {
      title: "Your answers point to Level 2 (CUI) scope",
      body: "Either you have been told your information is CUI, or you handle the kinds of technical data that usually carry that marking. That puts your contract in the NIST 800-171 set of requirements under DFARS 252.204-7012, which the pause did not touch, and a current SPRS score is still expected by primes.",
      next: "Next step, if you want one: confirm the markings and the clauses with your prime or contracting officer, then get a gap read against 800-171. BL King's position is audit-ready in 60 days for Level 2."
    },
    unclear: {
      title: "Unclear. This one is worth a quick review",
      body: "Your answers do not settle it. Either you are not sure you hold DoD work at all, or you were not sure what CUI means for your contract. Both are common, and both are settled by reading the contract's DFARS clauses and looking for CUI markings, not by company size or by guessing.",
      next: "Next step, if you want one: send the result to yourself below and we will tell you exactly which clause and marking to look for. That is a short written note, not a call, unless you ask for one."
    }
  };

  /* ---- see result --------------------------------------------------- */
  var answers = null, currentBand = null;

  $("ec-see").addEventListener("click", function () {
    var a = readAnswers();
    if (answeredCount(a) < 8) { show($("ec-incomplete")); return; }
    hide($("ec-incomplete"));
    answers = a;
    currentBand = band(a);
    var b = BANDS[currentBand];
    $("ec-band-title").textContent = b.title;
    $("ec-band-body").textContent = b.body;
    $("ec-band-next").textContent = b.next;
    show($("ec-result"));
    track("exposure_check_completed", { band: currentBand, src: param("src") });
    try { $("ec-result").scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
  });

  /* ---- send --------------------------------------------------------- */
  function payload(email, company) {
    return {
      version: EC_VERSION,
      submitted_at: new Date().toISOString(),
      page: window.location.pathname,
      src: param("src"),
      utm: {
        source: param("utm_source"), medium: param("utm_medium"), campaign: param("utm_campaign"),
        content: param("utm_content"), term: param("utm_term")
      },
      band: currentBand,
      answers: answers,
      contact: { email: email || "", company: company || "" }
    };
  }

  function finish(sent, withContact) {
    hide($("ec-result"));
    $("ec-thanks-body").textContent = withContact
      ? (sent ? "Your result is on its way. If you asked for a note on what it means for your contract, it comes from a person, usually within one business day."
              : "We could not send the copy just now. Your result is still shown above this note in your browser, and the office can resend it if you call.")
      : "Your result stays on this page. Nothing was sent and no record was kept beyond an anonymous page count.";
    show($("ec-thanks"));
    try { $("ec-thanks").scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
  }

  function post(body) {
    if (!EC_WEBHOOK_URL || !window.fetch) { return Promise.resolve(false); }
    return fetch(EC_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true
    }).then(function (r) { return r.ok; }).catch(function () { return false; });
  }

  $("ec-contact").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var email = $("ec-email").value.trim();
    var company = $("ec-company").value.trim();
    var err = $("ec-send-error");
    hide(err);
    if (!email) { err.textContent = "Enter an email address, or choose the other button to keep the result on this page only."; show(err); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = "That email address does not look complete."; show(err); return; }
    var btn = $("ec-send"); btn.disabled = true;
    track("exposure_check_contact_submitted", { band: currentBand, src: param("src") });
    post(payload(email, company)).then(function (ok) { btn.disabled = false; finish(ok, true); });
  });

  $("ec-skip").addEventListener("click", function () {
    /* No contact details: nothing is posted. The visitor asked for nothing to be kept. */
    finish(false, false);
  });

  updateProgress();
})();
</script>
