---
layout: page
title: "Shared Responsibility Matrix"
permalink: /cmmc/shared-responsibility-matrix/
seo_title: "CMMC Shared Responsibility Matrix | BL King Consulting"
seo_description: "Who does what for NIST SP 800-171 compliance: what BL King Consulting handles, what stays with you, and what is shared. A representative sample of assessment objectives across the control families."
faqs:
  - question: "What is a shared responsibility matrix?"
    answer: "It is the assessor's answer to \"who does this?\" for every one of the 110 NIST SP 800-171 controls that make up CMMC Level 2. Some controls are entirely technical and BL King handles them. Some are entirely organizational (your policies, your HR records, your facility) and stay with you. Some are shared, where you set the business rule and BL King implements the technical mechanism."
  - question: "Why does this matter if I hire BL King?"
    answer: "Because an assessor does not just check that a control is met. They check who can produce the evidence for it. A control assigned to you that nobody has evidence for is a finding, even if BL King's technology happens to satisfy it in practice. The matrix exists so nothing falls in the gap between what the contract implies and what an assessor actually asks for."
  - question: "What do the letters O, BL, and S mean?"
    answer: "O is your responsibility, since \"organizational\" controls come from your policies, your people, and your facility. BL is BL King's responsibility, the technical controls we implement and manage directly. S is shared: you set the business rule, we implement or enforce the technical side of it."
  - question: "Is this the complete list of controls?"
    answer: "No. This page shows a representative sample across the control families to explain how responsibility gets split. The complete matrix, all 110 controls, is part of the engagement documentation and gets built against your actual environment and contract."
---

# Who does what: the Shared Responsibility Matrix

CMMC Level 2 compliance rests on NIST SP 800-171, and every one of its 110 controls has an owner. Not
"BL King handles security" in the abstract — a specific answer, control by control, to who configures it,
who documents it, and who an assessor should ask for evidence.

That answer is never all one party. Some controls are entirely technical, and once you have a managed
security provider, they are the obvious owner. Some are entirely organizational — your HR records, your
facility access list, your policy that says who is authorized to do what — and no vendor can own those for
you. And a meaningful slice are shared: you set the business rule, your provider implements the technical
side of enforcing it.

Getting this wrong is not academic. An assessor checking a control does not just ask "is this met." They
ask who can produce the evidence. A control quietly assumed to be someone else's job, with nobody actually
holding the evidence for it, is a finding — even when the underlying technology would have passed.

## How to read it

| Code | Meaning |
|---|---|
| **O** | Your responsibility. Organizational controls: policy, personnel, facility. |
| **BL** | BL King's responsibility. Technical controls we implement and manage directly. |
| **S** | Shared. You set the business rule; BL King implements or enforces the technical mechanism. |

Assessment methods (how an assessor checks each one): **E** = Examine, **I** = Interview, **T** = Test.

## A representative sample across the control families

The full matrix runs to all 110 controls, built against your actual environment and contract once you
engage us. This sample shows how the split works across the families most contractors ask about first.

### Access Control (AC)

| Control | Test objective | Resp. | Methods |
|---|---|---|---|
| 3.1.1 Account Management | Authorized users are identified | O | E,I |
| | Processes acting on behalf of authorized users are identified | S | E,I,T |
| | System accounts are managed in accordance with organizational requirements | BL | E,I,T |
| 3.1.3 Information Flow Control | Information flow control policies are defined | O | E,I |
| | Methods and enforcement mechanisms for controlling CUI flow are defined | S | E,I |
| | Designated sources/destinations for CUI are identified | S | E,I |
| | Authorizations for controlling CUI flow are defined | O | E,I |
| | Approved authorizations for controlling CUI flow are enforced | BL | E,I,T |
| 3.1.6 Non-Privileged Accounts | Nonsecurity functions are identified | S | E,I |
| | Users are required to use non-privileged accounts for nonsecurity functions | BL | E,I,T |
| 3.1.17 Wireless Protection | Authentication mechanisms for wireless access are identified | BL | E,I |
| | Encryption mechanisms for wireless access are implemented | BL | E,I,T |

### Audit and Accountability (AU)

| Control | Test objective | Resp. | Methods |
|---|---|---|---|
| 3.3.1 Audit Record Creation | Events to be audited are defined | S | E,I |
| | Audit records are generated for defined events | BL | E,I,T |
| | Audit records are retained in accordance with policy | BL | E,I,T |
| 3.3.4 Audit Process Failure | Personnel/roles to be alerted for audit logging failures are identified | BL | E,I |
| | Types of audit logging failures for alerts are defined | BL | E,I |
| | Identified personnel/roles are alerted for audit logging failures | BL | E,I,T |

### Incident Response (IR)

| Control | Test objective | Resp. | Methods |
|---|---|---|---|
| 3.6.1 Incident Handling | Operational incident-handling capability is established | BL | E,I,T |
| | Capability includes preparation, detection, analysis, containment, and recovery | BL | E,I,T |
| | Capability includes user response activities | S | E,I,T |
| 3.6.2 Incident Reporting | Incidents are tracked and documented | BL | E,I,T |
| | Authorities to whom incidents are reported are identified | O | E,I |
| | Organizational officials to whom incidents are reported are identified | O | E,I |
| | Identified authorities are notified of incidents | O | E,I,T |
| | Identified organizational officials are notified of incidents | S | E,I,T |

### Physical Protection (PE)

| Control | Test objective | Resp. | Methods |
|---|---|---|---|
| 3.10.1 Physical Access | Authorized individuals for physical access are identified | O | E,I |
| | Physical access to organizational systems is limited to authorized individuals | O | E,I,T |
| | Physical access to equipment is limited to authorized individuals | O | E,I,T |
| | Physical access to operating environments is limited to authorized individuals | O | E,I,T |

### Risk Assessment (RA) and System & Communications Protection (SC)

| Control | Test objective | Resp. | Methods |
|---|---|---|---|
| 3.11.2 Vulnerability Scanning | Frequency of vulnerability scans is defined, scans are performed, results are analyzed and remediated | BL | E,I,T |
| 3.13.1 Boundary Protection | External and internal system boundaries are defined, monitored, controlled, and protected | BL | E,I,T |
| 3.13.10 Key Management | Cryptographic keys are established and managed when cryptography is employed | BL | E,I,T |

### System and Information Integrity (SI)

| Control | Test objective | Resp. | Methods |
|---|---|---|---|
| 3.14.1 Flaw Remediation | System flaws are identified, reported, and corrected | BL | E,I,T |
| 3.14.6 System Monitoring | Organizational systems and inbound, outbound, and internal traffic are monitored | BL | E,I,T |

## What this sample shows

Across this sample, roughly a fifth of the assessment objectives stay with you, a little over half sit
with BL King, and the rest are shared. The technical weight — monitoring, enforcement, encryption,
incident handling — concentrates on BL King's side. The organizational weight — who is authorized to do
what, who your facility lets in, who your policy says gets notified — stays with you, because no vendor
can hold that evidence on your behalf.

That split is also why "audit-ready" does not mean "BL King's problem." A handful of controls need
something only you can produce: an access list, a policy, a name. We tell you exactly which ones, early,
so nothing surfaces for the first time in front of an assessor.

## Where this fits

Most small contractors never see a document like this until an assessment is already underway. We show it
up front because it is the actual answer to "who handles this," not a sales pitch.

Take the [CMMC Exposure Check](/exposure-check/) to see where your contract puts you, or read about
[CMMC-in-a-Box](/cmmc-in-a-box/) to see how the full 110-control matrix gets built against your own
environment.
