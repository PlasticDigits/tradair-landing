# ADR 0001: Remove catch-all CODEOWNERS

## Status

Accepted ([#2](https://git.cl8y.com/code/tradair-landing/issues/2); merged #2 is S1-only and does not complete this ADR).

Not accepted by this design-author pass. Do not call this tip accepted until
independent review names **this commit SHA** in a review comment. Keywords
in the issue body are not architecture approval. Originating chore iid `#2`
is **closed** (squash-merged 2026-09-21T13:18:55Z). The successor product PR
gets a **new** iid. Do not treat issues URL `#2` as the land vehicle.

**Accepted SHA** = the SHA named in that independent-review comment. It is
not implementer choice of “this SHA or a successor,” and it is **not**
previous Proposed `590fd76143dc2bcec058767c0c70f7d1a33d5b5b`. Implement
copies the two `docs/` files from **that named SHA** onto the successor
product tip. `origin/main` `0197f8c` is **not** a copy source (S1-only; no
`docs/`). After review names this SHA, implement **may** flip **only** the single
Status value line of `docs/adr/0001-remove-catchall-codeowners.md` from
`Proposed (` to `Accepted (` on the **product** tip (identical suffix;
author-pass / named-SHA / transport-ref paragraphs below that line are
not part of the flipped token). That one-line flip does not require a
new design loop. `docs/architecture.md` must be **fully** byte-identical to
the named SHA (it has no Status line; do not invent one). Every other byte
of the ADR must match the named SHA. A Status-only successor invented on
`cac-design-issue-2` is not a substitute for the named SHA.

`cac-design-issue-2` is never the merge vehicle. This SHA is published on
that live transport ref so `git fetch origin cac-design-issue-2` and
`git merge-base --is-ancestor "$DESIGN_SHA" origin/cac-design-issue-2` are
executable. Land criterion: `docs/architecture.md` on the successor product
tip is byte-identical to the named SHA with no exceptions; the ADR is
byte-identical except that allowed Status flip on the product tip.

Overview (merge gate, runtime): [`architecture.md`](../architecture.md) is
the standing T2 contract after land. Do not copy that table here. **T2**
there is three groups: protection GET (six flags), merge procedure
(**T2-4**), tree contracts (**T2-1**, **T2-6**, **T2-7**). Successor-PR
procedure after spent vehicle B, design-branch transport
(`cac-design-issue-2`), single Status value-line flip, pre-merge admin GET attestation
(**successor PR comment**), and the CI-enablement iid gap live **only** in
this ADR. Do not restate them in architecture.

Sister CAC autoland work is
[#429](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/429).
CAC [#388](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/388)
historically forbade deleting CODEOWNERS;
[cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48)
reversed that. Do not revive the skip. Deploy / spend / custody / policy
expansion:
[agent-control #297](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/297)
— **out of scope**.

Sibling product PRs with the same chore title (hello canary
[#15](https://git.cl8y.com/code/hello/pulls/15), CL8Y-web, DEX, …) are **other
repos**. Do not edit them from this worktree. hello#15 is not a tradair-landing
iid.

## Outcome

Delete the catch-all `CODEOWNERS` so Forgejo does not plant **official** review
requests on every change. **S1 is already on `main`.** Merge to `main` stays:
pull request, host-required Woodpecker context `ci/woodpecker/pr/woodpecker`
(already listed on public `GET .../branches/main`, 2026-09-21), SHA-pinned
`Do: merge`, no direct push, no `force_merge`.

**Vehicle B is spent.** Product PR
[#2](https://git.cl8y.com/code/tradair-landing/pulls/2) squash-merged
2026-09-21T13:18:55Z as **S1-only** (`merge_commit_sha`
`0197f8c14c20a1814b3d4150d72bfed2c422f845`, single parent `d2d09db`, diff
vs `d2d09db` = six-line `CODEOWNERS` delete). Shared iid `#2` is **closed**.
Merged `#2` **does not complete this ADR**. Remaining work is **S0 docs +
S2 README pointer + leftover S3**.

**Land vehicle:** a **mandatory successor product PR** opened from
`origin/main` (`0197f8c` or a descendant that still has four-path absence).
That PR ships **S0+S2 on one tip** — copy the two design files from **the
SHA named in independent review**, paste the Decision 3 README pointer.
Do **not** `git rm CODEOWNERS` (file already gone). Do **not** use “close
`#2` without merge.” Record on **that successor PR** and on a **new leftover
issue** in `code/tradair-landing` that merged `#2` does not complete ADR
0001. Design branch `cac-design-issue-2` is review/transport only; it is
**not** merged as a docs-only PR and is **not** the product PR. That
transport branch still carries root `CODEOWNERS` from pre-S1 ancestry; merging
it onto `0197f8c` risks re-adding the file. Copy the two `docs/` paths only.

**Live snapshot (2026-09-21, after 13:18:55Z). Do not use the obsolete
occupying snapshot.** Earlier design text that said occupying `#2` was
open, `head.sha` / `refs/heads/chore/remove-catchall-codeowners` =
`d2d09db`, `changed_files: 0`, and “ghost `cc21b56` is not on the occupying
ref” is **false**. Live:

| Fact | Value |
| --- | --- |
| `#2` | `merged` / `closed` (`merged_at` 2026-09-21T13:18:55Z) |
| `merge_commit_sha` / `origin/main` | `0197f8c14c20a1814b3d4150d72bfed2c422f845` |
| `#2` `head.sha` (historical PR head) | `cc21b56907629875a57d92f5c9b50992b6eadf18` |
| `refs/heads/chore/remove-catchall-codeowners` | **deleted** |
| `refs/pull/2/head` | `cc21b56` (same tree as `0197f8c`) |
| `#2` `changed_files` | **1** (S1 `CODEOWNERS` delete), not 0 |
| `docs/` on `main` | **absent** |
| README Decision 3 pointer | **absent** |
| leftover issue / CI-enablement iid | **neither exists** (`issues?state=all`: closed `#2` + open Renovate `#1`) |
| `GET .../statuses/0197f8c` and `.../cc21b56` | `[]` |
| `git fetch origin cac-design-issue-2` at previous Proposed SHA | **404**; this successor restores the ref |

Do **not** treat `GET .../pulls/2` `head.sha` as a live land tip. `#2` is
merged. `cc21b56` and `0197f8c` share tree `46d1d8e` (S1-only). Do **not**
cherry-pick, reset onto, or merge `cc21b56` (already in history via the
squash tree).

**Leftover issue (land gate).** Before merge of `{successor}`, S2 opens one
leftover issue in **`code/tradair-landing` only** (title, repo, and body
template under Migration). That issue owns S3. Land criterion 5 fails if
the issue is missing, empty, or opened in another repo. Opening it “before
merge of `#2`” is **impossible** (`#2` is already merged).

**Leftover-complete** (S3: dated **admin** protection GET of the six **T2**
flags + dedicated post-merge plant-check PR `{n}` + four-path absence,
**T2-1 last**) lives on that leftover issue. S3 is not a close gate for `#2`
(`#2` is already closed). Root `CODEOWNERS` absence on `main` is **not**
leftover-complete. The public `GET .../branches/main` slice is **not** that
six-flag GET. Do not use `#2` or `#1` as S3 evidence.

This repo is a product tree, not the forge #48 canary (`code/hello`). The
successor is the in-repo docs/README pointer on top of the already-landed
delete. It does not re-roll protection, does not implement CAC autoland,
and does not deploy Render or change sale/token custody.

**Implement success** is a reachable successor-PR tip with S0+S2 (S1 already
on the base), not a `main` land of this transport branch. Plants stop for
**new** PRs because the delete is already on default `main`; leftover
requests on `#2` / `#1` are Observability, not S3. Waiting on Woodpecker is
the **observed** land gate (public T2-8 / T2-3, 2026-09-21), not an
implement defect, and is not a reason to grow this chore into CI. The S2
implementer opens the CI-enablement issue in this repo before that wait is
called “a named CI issue.” Empty statuses on `0197f8c` / `cc21b56` are
**not** a precedent to skip that wait on `{successor}`.

## Context

`d2d09db` added root `CODEOWNERS` (2026-09-02, “Add CODEOWNERS for org code
maintainers.”):

```
# Request review from trusted maintainers on every change.
# Forgejo CODEOWNERS uses Go regular expressions, not GitHub glob syntax.
# Place this file at the repository root, or in docs/ or .forgejo/.
# Product repos live in org `code` (git.cl8y.com/code/{repo}).

.* @code/maintainers
```

Forgejo uses Go regular expressions, not GitHub globs. Combined with
historical `block_on_official_review_requests`, every PR requested team
**maintainers** in org **code**. That team’s only member is the usual PR
author, so self-approve is 422 and merge is 405. CAC `RECOMMEND: ACCEPT` is
not a Forgejo `APPROVED` review.
[cl8y-agent-control#388](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/388)
skipped the deadlock; it did not remove the file or the protection.

Forgejo loads CODEOWNERS from `pr.BaseRepo.DefaultBranch`, then matches files
changed from merge-base to head. Deleting the file on a PR branch does not
stop plants while `main` still has `.* @code/maintainers`. After land of S1,
new PRs against `main` should not get a CODEOWNERS plant; that is Tests
item 4 / leftover-complete, **not** proven by `#2` or `#1`.

Live proof of the historical plant (matcher sample, **not** S3 evidence): PR
[#2](https://git.cl8y.com/code/tradair-landing/pulls/2) still has
`requested_reviewers_teams` containing team `name: "maintainers"` (org
`code`, `id: 4`) and an `official: true` `REQUEST_REVIEW` whose `team.name`
is `"maintainers"` (review `id: 214`, `submitted_at`
2026-09-21T07:42:40Z). Forgejo `Team.name` is `"maintainers"`, not
`"code/maintainers"`. On the reviews GET, `team.organization` is `null`.
Renovate [#1](https://git.cl8y.com/code/tradair-landing/pulls/1) has the same
planted team request.

**Public `GET .../branches/main` (2026-09-21, unauthenticated), not the
six-flag leftover GET:**

```json
{
  "protected": true,
  "required_approvals": 0,
  "enable_status_check": true,
  "status_check_contexts": ["ci/woodpecker/pr/woodpecker"],
  "user_can_push": false
}
```

Do **not** map `user_can_push` to **T2-2** (`enable_push`). Public
`branches/main` does **not** carry `enable_push`; “no direct `main`” is
otherwise unproven at land. Do **not** treat this object as leftover-complete.
`enable_status_check` and the context list already match **T2-8** / **T2-3**:
land of `{successor}` waits on `ci/woodpecker/pr/woodpecker` success on
**that** tip. Statuses on `0197f8c` and `cc21b56` are `[]`. There is no
`.woodpecker.yaml`. **T2-10**, **T2-5**, and `enable_push` are **absent**
from this object; keep a fail-closed **admin** `GET .../branch_protections`
(unauthenticated is 401) for those flags, for **T2-2**, and for
leftover-complete.

If the host merged `#2` with `[]` statuses, treat that as a
forge-enforcement gap (`apply_to_admins` / equivalent on
[cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48)),
**not** as `force_merge` and **not** as a T2-3 bypass for `{successor}`.
Do not PATCH `apply_to_admins` from this tree.

Fleet protection under #48 is described as
`block_on_official_review_requests=false` (**T2-10**) and
`required_approvals=0` (**T2-9**). Public `required_approvals: 0` on
`branches/main` is **not** that leftover GET. Do **not** treat leftover
requests on `#2` and `#1` as non-blocking from fleet values or from this
public slice. A dated **admin** GET of **this** repo’s `main` rule showing
**T2-2**, **T2-9**, and **T2-10** is **mandatory** before merge of
`{successor}` (known plants on `#2` and `#1`; dismissing them does not skip
the GET). Attest that JSON as a **comment on the successor product PR**
(not an unspecified paste). If **T2-10** is still `true` here, merge is
405; that stop is a
[cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48)
dependency, not a silent implement stop. Public `branches/main` / fleet
`#48` / `code/hello` do not count. Those leftover requests also must not be
treated as S3 evidence.

`origin/main` has **no** `docs/` tree. Relative README links to ADR 0001 /
architecture 404 unless those two files land on the **same merged successor
tip** as the README pointer. README today is the marketing product map; it
has **no** CODEOWNERS / maintainers-as-gate language and **no** Decision 3
pointer. S2 scripts the insert pasted in Decision 3 and does not stub the
map. Do not invent a denial that “maintainers review every change.”

Issue body points at forgejo `docs/INVARIANTS.md`. Treat #48/#50 as source.
Do not fork INVARIANTS into this repo.

Open items in this repo at this snapshot: Renovate
[#1](https://git.cl8y.com/code/tradair-landing/pulls/1) only. `#2` is closed.
Renovate benefits from fewer planted reviews; it is not a sequencing dep.
Do not close or retarget it.

This SPA may rebuild on `main` via the existing static host. Landing the
successor is still not a #297 deploy grant: the product-PR diff must not
change `src/`, `public/`, sale/token addresses, ABIs, `package.json`,
`package-lock.json`, `.npmrc`, `.nvmrc`, or host config.

Drain comment on #2 (`drain skip: no occupying job for rebase/fix-pr/CI-wait`)
is [#429](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/429),
not a successor failure.

No leftover issue and no Woodpecker-enablement iid exist in
`code/tradair-landing` today (2026-09-21, after 13:18:55Z; `issues?state=all`
is closed `#2` + open `#1`). That is a missing owner, not a footnote.
**The S2 implementer** opens both issues in this repo (leftover-complete
tracker, and CI-enablement before land calls the wait “a named CI issue”;
Decision 7).

## Non-goals

- Forgejo protection JSON / `apply_repo_policy.py` / migrate
  `_ensure_codeowners` / templates
  ([cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48)
  / [pulls/50](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/pulls/50)).
  Sister-repo `_ensure_codeowners` stays out of this slice; leftover-complete
  still fails if a later apply has put the file back (Failure modes).
- PATCHing branch protection from this tree, including force-push allowlist
  fields and `apply_to_admins` (forge #48).
- CAC autoland predicates, occupying jobs, or `DrainSkip::OfficialReview`
  cleanup ([cl8y-agent-control#429](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/429),
  leftover of #388). Drain comments such as `drain skip: no occupying job…`
  on #2 are **#429**, not a successor failure.
- Dismissing reviewers from the controller (forbidden substitute in #388).
- Path-specific CODEOWNERS, a second maintainer, or `required_approvals: 1`.
- Adding, enabling, or digest-pinning Woodpecker for this repo. Missing
  `ci/woodpecker/pr/woodpecker` statuses are pre-existing. Do not add
  `.woodpecker.yaml` / `.woodpecker/` in the successor diff. Do not copy
  hello’s pipeline. Opening the CI-enablement issue (Decision 7) is not
  implementing the pipeline.
- Changing `src/`, `public/`, `package.json`, `package-lock.json`,
  `.npmrc`, `.nvmrc`, `STYLE_GUIDE.md`, `TODO.md`, sale/token addresses,
  ABIs, wallet/RPC config, or legal page copy.
- Inventing `render.yaml`, rotating Render credentials, or treating a host
  rebuild as leftover-complete
  ([agent-control #297](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/297)).
- Adding a Jest/Playwright harness solely for four-path absence. Do not
  rewrite `src/App.test.js`.
- Weakening existing contributor checks, adding `force_merge`, enabling
  direct `main`, or posting fake commit statuses.
- Treating empty statuses on `0197f8c` / `cc21b56` as a T2-3 bypass for
  `{successor}`.
- Renovate onboarding ([#1](https://git.cl8y.com/code/tradair-landing/pulls/1)).
  Do not close or retarget it.
- Waiting on [hello#15](https://git.cl8y.com/code/hello/pulls/15) or other
  sibling file-delete PRs. Canary is informational, not a local dep.
- Re-deleting `CODEOWNERS` on `0197f8c` (`git rm` fails; file already gone).
- Cherry-picking, resetting onto, or merging
  `cc21b56907629875a57d92f5c9b50992b6eadf18` (squash tree already on `main`).
- Closing `#2` without merge (already merged; that discriminator does not
  apply).
- Treating merge of `#2` / four-path absence on `main` as ADR-complete or as
  leftover-complete.
- Using `#2` or `#1` as S3 plant-check evidence.
- Copying `docs/` from previous Proposed `590fd76` or from `0197f8c`.
- Editing `autonomy.rs` / HMAC, self-approval, or a founder card for this
  ordinary design.
- A docs-only PR from `cac-design-issue-2` (vehicle **A**). That branch
  transports design between VMs; it is not a merge vehicle. Merging it
  would risk re-adding root `CODEOWNERS`.

## Decision

1. **Root `CODEOWNERS` is already absent on `main` (S1).** Successor **asserts**
   `test -f` fails on all four Forgejo paths. Do not leave an empty or
   comments-only file (Forgejo still parses it). Do not `git rm` a missing
   file.
2. **Do not add** `docs/CODEOWNERS`, `.gitea/CODEOWNERS`, or
   `.forgejo/CODEOWNERS`. After land, `test -f` fails on all four paths. None
   of those paths may contain a reviewer rule for any pattern (not only `.*`).
3. **Keep** the merge gate in [`architecture.md`](../architecture.md) **T2**.
   On the successor product PR, copy
   `docs/adr/0001-remove-catchall-codeowners.md` and `docs/architecture.md`
   from **the SHA named in the independent-review comment** onto that
   **same tip**. Recipe must `git fetch origin cac-design-issue-2` so that
   SHA exists locally and `git merge-base --is-ancestor` confirms it is a
   reachable commit on that **live** transport branch, not an arbitrary
   object. `0197f8c` and `590fd76` are not copy sources. After review names
   the SHA, implement **may** flip **only** the single Status value line of
   the ADR from `Proposed (` to `Accepted (` on the **product** tip
   (identical suffix; author-pass / named-SHA / transport-ref paragraphs
   below that line are not part of the flipped token; no new design loop).
   `docs/architecture.md` must stay fully byte-identical (no Status line;
   do not invent one). Do not invent a Status-only successor on
   `cac-design-issue-2` instead of using the named SHA.

   Then **script** this README pointer under the existing `## 🤝 Contributing`
   heading (keep the product map and the numbered fork/PR steps). Link
   `docs/architecture.md` **only** for **T2**. Link this ADR for the
   delete. Drop “maintainers review every change” **only if present in
   README**; do not invent a denial. Current README has no such sentence.

   ```markdown
   Merge to `main` follows the Forgejo gate in
   [`docs/architecture.md`](docs/architecture.md) (**T2** only: no direct
   push, required context `ci/woodpecker/pr/woodpecker`, SHA-pinned
   `Do: merge`, no `force_merge`). The catch-all `CODEOWNERS` delete is
   [ADR 0001](docs/adr/0001-remove-catchall-codeowners.md).
   ```

   Do not merge a README that points at those paths until they exist on
   that tip. On the product tip, `docs/architecture.md` must be fully
   byte-identical to the named SHA; the ADR must be byte-identical except
   the allowed single Status value line. Do not rewrite `STYLE_GUIDE.md` /
   `TODO.md` / visitor copy.
4. **Leave** already-planted official requests on open PRs (including closed
   `#2` and open `#1`). A dated **admin** GET of **this** repo’s `main` rule
   showing **T2-2** (`enable_push == false`), **T2-9**, and **T2-10** is
   **mandatory** before merge of `{successor}`. Attest that JSON as a
   **comment on the successor product PR**. Known plants (team
   `maintainers`, review `id: 214` on `#2`; same team plant on `#1`) do not
   skip it. Human dismiss is optional leftover, not AC, and does
   **not** skip the GET. Do not dismiss them from CAC. If **T2-10** is
   `true`, stop; that is a forge #48 dependency, not a silent implement
   stop. Public `branches/main` / fleet `#48` / `code/hello` do not count.
5. **Do not** PATCH branch protection from this repository.
6. **Split land from leftover-complete.** Successor product PR `{successor}`
   is **S0+S2** (S1 already on `main`). S3 lives on the leftover issue S2
   opens in this repo before that merge (template below). Require a
   **dedicated** post-merge plant-check PR. Do not accept `#2`’s own
   official request, `#1`, or “the next natural PR.” Four-path absence on
   `main` is not leftover-complete.
7. **Host CI is not an in-diff deliverable.** Public `GET .../branches/main`
   (2026-09-21) already shows `enable_status_check: true` and
   `status_check_contexts: ["ci/woodpecker/pr/woodpecker"]`. Successor tip
   can be pushed; merge of `{successor}` **waits** on
   `ci/woodpecker/pr/woodpecker` success on **that** tip. Empty statuses on
   `0197f8c` / `cc21b56` are **not** a precedent. Do not add the pipeline in
   the successor diff. Do not copy hello’s yaml. Do not fake statuses. Do
   not `force_merge`. If `#2` merged with `[]` statuses, that is a
   forge-enforcement gap (`apply_to_admins` / equivalent), not permission to
   skip T2-3 on `{successor}`.

   No Woodpecker iid exists in this repo today. **The S2 implementer**
   (whoever pushes the S0+S2 tip) opens one issue in
   **`code/tradair-landing`** before treating the wait as named. Suggested
   title: `chore: enable Woodpecker ci/woodpecker/pr/woodpecker`. Record
   that iid on the successor PR. Opening the issue is S2; enabling the
   pipeline is not this diff. Do not add a local `DEPS` until that iid
   exists.
8. **Open the successor from `origin/main`. Do not revive vehicle B.**
   Occupying branch `chore/remove-catchall-codeowners` is deleted. Suggested
   product branch: `chore/adr-0001-s0-s2`. Base is `origin/main` with S1
   squash `0197f8c` as ancestor. Record on `{successor}` and on the leftover
   issue: merged `#2` does not complete ADR 0001; remaining work is S0 docs
   + S2 README pointer + leftover S3. Do **not** close `#2` without merge.
   Do **not** reopen `#2` as the land vehicle.

## Component / state / interface changes

| Surface | Change |
| --- | --- |
| `CODEOWNERS` (root) | Already removed on `main` (`0197f8c`). Successor asserts four-path `test -f` fails. Do not `git rm` again. Design-transport SHA still has the six-line file in ancestry; do not merge that branch. |
| `docs/CODEOWNERS`, `.gitea/CODEOWNERS`, `.forgejo/CODEOWNERS` | Must remain absent (no empty file). |
| `docs/adr/0001-remove-catchall-codeowners.md`, `docs/architecture.md` | Copy from the SHA named in independent review onto the successor PR so the merged tip is S0+S2. `docs/architecture.md` fully byte-identical to that SHA. ADR byte-identical except the single Status value line `Proposed (` → `Accepted (` (identical suffix; author-pass paragraphs below that line are not flipped) on the **product** tip (not a Status-only successor on `cac-design-issue-2`). Standing T2 contract lands with the README pointer. Not copied from `590fd76` or `0197f8c`. |
| Forgejo PR review interface | After S1, a **dedicated** plant-check PR against `main` must not get an official CODEOWNERS team request. |
| Branch protection API | No write from this ticket. Operator leftover-complete reads must still match architecture **protection GET** (six flags for the `main` rule). In-repo CI cannot perform that GET. Public `GET .../branches/main` (2026-09-21) is the land Woodpecker wait, not that GET. Dated **admin** GET of **this** repo’s `main` rule showing **T2-2**, **T2-9**, and **T2-10** is **mandatory** before merge of `{successor}`. Attest as a **comment on the successor product PR**. Attested by **repo admin of `code/tradair-landing`**, distinct from the S2 pusher. The GET is a read, not a #297 grant. **T2-10** `true` → stop on forge `#48`. Do not dismiss then skip GET. Fleet `#48` / `code/hello` / public `branches/main` do not count. |
| `.woodpecker.yaml` / `.woodpecker/` | Must remain absent in this ticket. Do not add one to unblock merge. S2 opens the CI-enablement issue; it does not add the pipeline. |
| `src/`, `public/`, `package.json`, `package-lock.json`, `.npmrc`, `.nvmrc`, sale/token addresses | Unchanged. |
| README | Mandatory on the successor PR: script Decision 3 pointer under `## 🤝 Contributing`; product map stays README. Relative links to ADR 0001 / architecture, which exist on that same tip. |
| Leftover issue | New issue in `code/tradair-landing` only, opened before merge of `{successor}`, body quotes leftover-complete items 1–3 **and** records that merged `#2` does not complete ADR 0001. |
| Occupying PR `#2` | Spent. Merged S1-only. Not the land vehicle. Not S3 evidence. |
| Successor product PR `{successor}` | Land vehicle. S0+S2 from `origin/main`. |
| CAC / static host / org team `maintainers` in org `code` | Unchanged. The team may keep existing; it simply is not planted as official review. Host may rebuild from a `main` push; that is existing follow, not a new deploy grant. |

No runtime state, schema, or HTTP API.

## Affected invariants

IDs live in [`architecture.md`](../architecture.md). This ADR records **T2-1**
(four-path absence) as already true on `main` after S1; leftover-complete
still re-checks it **last**. It does not write protection JSON.
Leftover-complete **reads** the six protection flags (**T2-2**, **T2-8**,
**T2-3**, **T2-9**, **T2-10**, **T2-5**) via **admin** GET. Public
`GET .../branches/main` already shows **T2-8** / **T2-3** for land planning;
it does not prove the six GET flags. Land of `{successor}` **requires** a
dated **admin** GET of **T2-2**, **T2-9**, and **T2-10** on this repo before
merge (mandatory; not gated on whether leftover official requests remain;
dismiss does not skip). Attest on a **successor PR comment**. Attested by
**repo admin of `code/tradair-landing`**, distinct from the S2 pusher.
Merge procedure remains **T2-4**. Host follow and CAC policy remain
**T2-6** and **T2-7**. **T2-2** is `enable_push == false` (no direct
push); it does not claim force-push policy and is not `user_can_push`.

Visitor / sale / style invariants in `src/` and `STYLE_GUIDE.md` are
**unchanged**.

Sister forge invariants (do not re-implement here): product-tree half of
cl8y-forgejo 5+8 is delete catch-all via PR, never direct `main`. Re-adding
CODEOWNERS later plants requests again but does **not** restore the
official-review merge **block** (forgejo invariant 9) unless an admin PATCHes
protection.

## Alternatives

| Option | Why not |
| --- | --- |
| Keep file, rely on `block_on_official_review_requests=false` | Requests still plant on every PR; drain noise; Renovate/agent PRs look like they need a human stamp; templates can re-teach the old gate. S1 already deleted the file; do not restore it. |
| Replace `.*` with path owners | No second reviewer exists; same 405/422 if official-review is ever turned on; out of scope. |
| Add a second maintainer | Founder ops, not this implement. |
| Dismiss official requests from CAC | Forbidden by #388 as a substitute for policy reversal. |
| Direct-push the remaining docs to `main` | Violates **T2-2**. Remaining work goes through `{successor}`. |
| Empty or comments-only CODEOWNERS | Forgejo still parses it. Absence is the contract. |
| Treat merge of `#2` as ADR-complete | S1-only. No `docs/`, no README pointer, no leftover issue, no S3. |
| `git rm CODEOWNERS` on `0197f8c` | File already gone; command fails. Assert four-path `test -f`. |
| Cherry-pick / reset onto / merge `cc21b56` | Squash tree already on `main`. Hello-shaped S1-only; would not add S0+S2. |
| Trust obsolete occupying snapshot (`d2d09db`, `changed_files: 0`, ghost not on occupying ref) | False after 13:18:55Z. `#2` `head.sha` was the ghost; `main` is the squash. |
| Close `#2` without merge | Already merged. Discriminator does not apply. |
| Add `.woodpecker.yaml` in the successor PR | Different change (CI enablement). Missing statuses are pre-existing. Public `branches/main` already names the required context. |
| `force_merge` or fake Woodpecker statuses to land `{successor}` | Forbidden by **T2-4** / **T2-3**. `#2` merging with `[]` statuses is an `apply_to_admins` gap, not a precedent. |
| Treat file-delete + docs as merge-ready while Woodpecker has not posted on the successor tip | Host required context still applies. S2 opens a named CI issue; do not restore CODEOWNERS. |
| Treat `#2`’s plant, `#1`, or the next natural PR as S3 | `#2` is closed before leftover-complete. A dedicated post-merge PR is the evidence. Four-path absence is not S3. |
| Vehicle **A**: docs-only PR from `cac-design-issue-2` onto `main` | Second merge vehicle. Transport ancestry still has `CODEOWNERS`. Copy two `docs/` paths onto `{successor}` instead. |
| Wait on sibling `code/*` CODEOWNERS PRs / hello#15 | Wrong repo; no product iid dependency. |
| Open the leftover issue in `PlasticDigits/*` or leave it empty | Land criterion 5 would pass a wrong-repo or vacant issue. S2 names this repo and quotes leftover-complete items 1–3. |
| Treat a Render rebuild after merge as leftover-complete | **T2-6**. Plant-check and protection GET are leftover-complete. |
| Add a Jest case in `src/App.test.js` solely for four-path absence | Grows the successor into a harness. Use the pathspec `test -f` recipe. |
| Rewrite marketing README / `STYLE_GUIDE.md` / sale copy | Product surfaces are not this chore. Pointer only. |
| Invent a README denial that maintainers do not review every change | Current README has no such claim. |
| Use `src/`, `public/`, `package.json`, addresses, ABIs, or legal pages as the plant-check probe | Looks mergeable on a `main` that may rebuild `traken.xyz`. Use `docs/_codeowners-plant-check.txt`. |
| Copy hello’s `.woodpecker.yaml` or protection JSON as proof | Wrong repo; Coolify/secrets SPA. Public `branches/main` already lists the context. |
| Copy docs from `590fd76` | Previous Proposed SHA is not the Accepted copy source. |

## Complexity added / removed

**Removed (already on `main` after S1):** catch-all official-review robot on
every **new** diff; operator dismiss step for this repo’s self-request
deadlock on new PRs; false “CODEOWNERS is the trusted-PR gate” story in this
repo’s default branch file.

**Added (remaining):** a small standing doc (this ADR + architecture **T2**)
that still must land on `main` via `{successor}` so later agents do not
re-add `.* @code/maintainers` as a merge requirement, a leftover issue in
this repo that survives the successor merge, and (S2) a CI-enablement issue
so the observed Woodpecker wait has an owner. No new services, jobs, flags,
pipelines, or test harnesses.

Net: six-line process file already gone from `main`. Docs + README pointer
still missing. Merge gate stays host CI + no direct `main`.

## Migration

1. Fleet protection is owned by forge #48. This ticket does not PATCH. Do not
   treat a GET recorded on `code/hello` as proof for this repo. Do not treat
   public `GET .../branches/main` as the six-flag leftover GET.
2. **Leftover issue (S2, land gate).** Before merging `{successor}`, open
   **one** follow-up issue in **`code/tradair-landing` only**. Do not open it
   in `PlasticDigits/cl8y-forgejo`, `PlasticDigits/cl8y-agent-control`, or any
   other repo. Suggested title: `chore: leftover CODEOWNERS S3 (protection GET
   + plant-check)`. Body **must quote** leftover-complete items 1–3 from this
   ADR (dated `main` **admin** protection GET of the six **T2** flags;
   dedicated post-merge plant-check `{n}` on
   `docs/_codeowners-plant-check.txt`, close without merge; four-path
   `test -f` **T2-1 last**) **and** record that merged
   [#2](https://git.cl8y.com/code/tradair-landing/pulls/2) does **not**
   complete ADR 0001. Record that issue’s iid on `{successor}` before merge.
   Merging `#2` already closed that number; S3 must not live only there.

   Body template (quote onto the leftover issue):

   ```
   Leftover-complete for ADR 0001 after merge of successor product PR
   {successor}. Merged #2 (0197f8c14c20a1814b3d4150d72bfed2c422f845,
   2026-09-21T13:18:55Z) does not complete ADR 0001. Remaining work is S0
   docs + S2 README pointer + this S3 tracker. This issue does not reopen
   #2. Opened in code/tradair-landing before successor merge.

   1. Dated GET by **repo admin of `code/tradair-landing`** (distinct from
      the S2 pusher) of this repo's `main` protection rule equals the six
      T2 protection flags (T2-2, T2-8, T2-3, T2-9, T2-10, T2-5) in
      docs/architecture.md. Admin GET .../branch_protections (unauthenticated
      is 401). The GET is a read, not a #297 grant; in-repo CI cannot do it.
      Attest the JSON here. Not copied from code/hello. Not the
      public GET .../branches/main slice. A GET recorded before a later
      template re-copy does not count. Not proven by CODEOWNERS absence
      on main.

   2. After S1 is on `main`: dedicated plant-check PR {n} changing
      only docs/_codeowners-plant-check.txt (never src/, public/,
      package.json, addresses, ABIs, or legal pages); draft: false; title
      not WIP; no manual reviewer request. GET immediately after open; if
      both plant signals empty, wait 30s and re-GET. Pass iff
      requested_reviewers_teams length 0 AND no review with official == true,
      state == "REQUEST_REVIEW", team.name == "maintainers" (optional
      team.id == 4). Do not require team.organization on reviews. Record {n}
      and the two JSON bodies, then close without merge immediately. Merging
      {n} fails leftover-complete. Not #2, not #1, not the next natural PR.

   3. T2-1 last: test -f fails on CODEOWNERS, docs/CODEOWNERS,
      .gitea/CODEOWNERS, .forgejo/CODEOWNERS. Recorded after items 1 and 2.
      Four-path absence alone (already true on 0197f8c) is not leftover-complete.
   ```

3. **Successor from `origin/main`.** Open `{successor}` (suggested branch
   `chore/adr-0001-s0-s2`) from current `origin/main` with S1 squash
   `0197f8c14c20a1814b3d4150d72bfed2c422f845` as ancestor. Tip is S0+S2:
   copy `docs/adr/0001-remove-catchall-codeowners.md` and
   `docs/architecture.md` from **the SHA named in independent review**,
   script the Decision 3 README pointer with relative links to those two
   paths. `cac-design-issue-2` stays the review/transport branch; do not
   open it as the product PR; do not merge it as docs-only first. Do not
   merge a README that points at those paths until they exist on that tip.
   On the product tip, `docs/architecture.md` must be fully byte-identical
   to that named SHA; the ADR must be byte-identical except the allowed
   single Status value line on the **product** tip. Any Status flip is
   that one line, **before** `git add`; architecture identity and the
   Status filter run on **`git diff --cached`** (fail if worktree ≠
   index). `0197f8c` is not a docs copy source. `590fd76` is not a copy
   source. `cc21b56` is not a copy source.

   ```bash
   set -euo pipefail
   git fetch origin cac-design-issue-2 main
   DESIGN_SHA=<sha named in the independent-review comment>
   S1_SHA=0197f8c14c20a1814b3d4150d72bfed2c422f845
   git rev-parse --verify "${DESIGN_SHA}^{commit}"
   git merge-base --is-ancestor "$DESIGN_SHA" origin/cac-design-issue-2
   git merge-base --is-ancestor "$S1_SHA" origin/main
   test "$(git rev-parse "$DESIGN_SHA")" != "$(git rev-parse origin/main)"
   git checkout -B chore/adr-0001-s0-s2 origin/main
   test ! -f CODEOWNERS
   test ! -f docs/CODEOWNERS
   test ! -f .gitea/CODEOWNERS
   test ! -f .forgejo/CODEOWNERS
   git checkout "$DESIGN_SHA" -- docs/adr/0001-remove-catchall-codeowners.md docs/architecture.md
   python3 - <<'PY'
   from pathlib import Path
   path = Path("README.md")
   text = path.read_text()
   heading = "## 🤝 Contributing\n"
   if heading not in text:
       raise SystemExit("README missing ## 🤝 Contributing")
   if "[ADR 0001](docs/adr/0001-remove-catchall-codeowners.md)" in text:
       raise SystemExit("Decision 3 pointer already present")
   insert = (
       "\n"
       "Merge to `main` follows the Forgejo gate in\n"
       "[`docs/architecture.md`](docs/architecture.md) (**T2** only: no direct\n"
       "push, required context `ci/woodpecker/pr/woodpecker`, SHA-pinned\n"
       "`Do: merge`, no `force_merge`). The catch-all `CODEOWNERS` delete is\n"
       "[ADR 0001](docs/adr/0001-remove-catchall-codeowners.md).\n"
   )
   idx = text.index(heading) + len(heading)
   path.write_text(text[:idx] + insert + text[idx:])
   PY
   grep -F '[`docs/architecture.md`](docs/architecture.md)' README.md
   grep -F '[ADR 0001](docs/adr/0001-remove-catchall-codeowners.md)' README.md
   grep -F 'ci/woodpecker/pr/woodpecker' README.md
   # Optional after review named this SHA: flip only the single Status
   # value line of the ADR (`Proposed (` -> `Accepted (`, identical suffix)
   # on this product tip BEFORE git add. Do not flip author-pass /
   # named-SHA / transport-ref paragraphs below that line. No architecture
   # edits. No Status-only successor on cac-design-issue-2.
   git add README.md docs
   # Fail if worktree ≠ index (git commit records the index).
   git diff --exit-code
   # architecture identity and ADR Status filter on the INDEX.
   # architecture: fully byte-identical (no Status exception).
   git diff --cached --exit-code "$DESIGN_SHA" -- docs/architecture.md
   # Allow no ADR diff, or a 1:1 Proposed ( -> Accepted ( with identical suffix.
   adr_hunk=$(git diff --cached -U0 "$DESIGN_SHA" -- docs/adr/0001-remove-catchall-codeowners.md \
     | grep -E '^[+-]' | grep -vE '^(--- |\+\+\+ )' || true)
   if test -n "$adr_hunk"; then
     test "$(printf '%s\n' "$adr_hunk" | grep -c '^')" -eq 2
     minus=$(printf '%s\n' "$adr_hunk" | sed -n '/^-Proposed (/p')
     plus=$(printf '%s\n' "$adr_hunk" | sed -n '/^+Accepted (/p')
     test -n "$minus"
     test -n "$plus"
     suf_m=${minus#-Proposed (}
     suf_p=${plus#+Accepted (}
     test -n "$suf_m"
     test "$suf_m" = "$suf_p"
   fi
   git commit -m "$(cat <<'EOF'
   chore: land ADR 0001 S0+S2 (docs + README pointer).

   EOF
   )"
   git push -u origin chore/adr-0001-s0-s2
   # Open successor PR from that branch into main.
   # Record on the PR and leftover issue: merged #2 does not complete ADR 0001.
   ```

   Do **not**:

   ```bash
   git rm CODEOWNERS
   git cherry-pick cc21b56907629875a57d92f5c9b50992b6eadf18
   git reset --hard cc21b56907629875a57d92f5c9b50992b6eadf18
   git merge cc21b56907629875a57d92f5c9b50992b6eadf18
   git checkout -B chore/remove-catchall-codeowners origin/chore/remove-catchall-codeowners
   test "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)"
   ```

   Occupying `--force-with-lease` of a deleted branch is unused. If the
   successor branch later diverges and a non-FF update is needed,
   `--force-with-lease` of the **PR branch** is allowed. It is not
   `force_merge`.

4. Open PRs created while the file existed (closed #2, open #1) may still
   show an official team request. A dated **admin** GET of this repo showing
   **T2-2**, **T2-9**, and **T2-10** is **mandatory** before merge of
   `{successor}` (**repo admin of `code/tradair-landing`**, distinct from
   the S2 pusher). Attest as a **comment on the successor product PR**.
   The GET is a read, not a #297 grant; in-repo CI cannot perform it. Do
   not skip if plants were dismissed. If **T2-10** is `true`, stop; that is
   a forge #48 dependency, not a silent implement stop; merge is 405.
   Public `branches/main` / fleet `#48` / `code/hello` do not count.
5. Do not restore the file from `docs/templates/CODEOWNERS` in cl8y-forgejo;
   that template is owned by #48.
6. Merge of `{successor}` waits on `ci/woodpecker/pr/woodpecker` success on
   the **successor tip** (public T2-8 / T2-3, 2026-09-21). Empty statuses
   on `0197f8c` / `cc21b56` do not satisfy this and are not a precedent.
   The S2 implementer opens the CI-enablement issue in
   `code/tradair-landing` before calling that wait named. That is a
   **separate** host/CI issue, not a reason to restore catch-all
   CODEOWNERS, add `.woodpecker.yaml` in this diff, copy hello’s yaml, fake
   statuses, or `force_merge`. No such iid exists in this repo today.

## Observability

Relative reads. Do not log tokens, hosts, or protection-script inventories. Do
not add a Forgejo admin token to Woodpecker, `react-scripts test`, or Render.

**Public land wait (T2-8 / T2-3, not leftover-complete).** Unauthenticated
`GET /api/v1/repos/code/tradair-landing/branches/main` (2026-09-21) already
lists `enable_status_check: true` and
`status_check_contexts: ["ci/woodpecker/pr/woodpecker"]`. Do not map
`user_can_push` to **T2-2**. Merge of `{successor}` waits until
`GET .../statuses/{successor-tip-sha}` includes that context in a success
state. Empty statuses on `0197f8c` / `cc21b56` do not count and must not be
treated as a T2-3 bypass.

**Pre-merge GET (T2-2 / T2-9 / T2-10, this repo, admin).** **Mandatory**
before merge of `{successor}`. **Repo admin of `code/tradair-landing`**
(distinct from the S2 pusher) attests a dated JSON of the `main` rule
showing **T2-2** (`enable_push == false`), **T2-9**
(`required_approvals == 0`), and **T2-10**
(`block_on_official_review_requests == false`). **Attest as a comment on
the successor product PR.** The GET is a read, not a #297 grant, and not
something in-repo CI can do. Known plants on `#2` and `#1` (Decision 4) do
not skip it. Dismiss then skip GET is forbidden. Same endpoints as the
leftover-complete GET. Fleet #48 / `code/hello` / public `branches/main` is
not this GET. If **T2-10** is `true`, do not land; that stop is a forge #48
dependency, not a silent implement stop.

**Protection (operator, leftover-complete).** **Repo admin of
`code/tradair-landing`** (distinct from the S2 pusher) attests dated JSON of
the six protection flags for the `main` rule onto the leftover issue in this
repo. The GET is a read, not a #297 grant, and not something in-repo CI can
do. Endpoint:
`GET /api/v1/repos/code/tradair-landing/branch_protections` (array; pick
`rule_name == "main"`) or
`GET /api/v1/repos/code/tradair-landing/branch_protections/main`.
Unauthenticated GET is 401. Pass iff that rule equals architecture
**protection GET** for **T2-2**, **T2-8**, **T2-3**, **T2-9**, **T2-10**, and
**T2-5**. `status_check_contexts` must **equal**
`["ci/woodpecker/pr/woodpecker"]`. Fail if any of those six differ. Do not
compare the Merge API / **T2-4** row (not a protection field). Do not treat
`enable_push == false` as a force-push read. Do not treat `user_can_push` as
**T2-2**. A green `react-scripts test`, empty commit statuses, a Render
deploy, four-path absence on `main`, or the public `branches/main` slice
does not satisfy this read.

**Plant-check (dedicated post-merge PR, leftover-complete).** Recipe is Tests
item 4. Probe path is `docs/_codeowners-plant-check.txt` only. Fail-closed
pair (jq on the two GETs):

- Pass iff `(requested_reviewers_teams // []) | length == 0`
- **and** no review with `official == true && state == "REQUEST_REVIEW" && team.name == "maintainers"`
  (optional extra pin: `team.id == 4`). Do **not** require `team.organization`
  on the reviews GET. Do **not** match `team.name == "code/maintainers"` (that
  string is the CODEOWNERS target, not the live JSON).

`official` alone means assigned/write-access, not “planted by CODEOWNERS”; the
conjunction is the plant signal. `REQUEST_REVIEW` is `state`, not a sibling
key.

Known-plant sample: PR
[#2](https://git.cl8y.com/code/tradair-landing/pulls/2) (must **fail** this
predicate; not S3 evidence).

`GET /api/v1/repos/code/tradair-landing/pulls/2` fragment:

```json
{
  "draft": false,
  "requested_reviewers_teams": [
    {
      "id": 4,
      "name": "maintainers",
      "organization": { "id": 4, "name": "code" }
    }
  ]
}
```

`GET /api/v1/repos/code/tradair-landing/pulls/2/reviews` fragment:

```json
[
  {
    "id": 214,
    "official": true,
    "state": "REQUEST_REVIEW",
    "team": { "id": 4, "name": "maintainers", "organization": null }
  }
]
```

On `#2`, `requested_reviewers_teams[0].name == "maintainers"` and
`.organization.name == "code"`. On **reviews**, `team.name == "maintainers"`,
`team.id == 4`, and `team.organization == null`. An operator who checks
`team.name == "code/maintainers"` misses the plant. An operator who requires
`team.organization.name == "code"` on reviews also misses it.

`{n}` is the dedicated plant-check PR opened **after** the delete is on
`main` (already true), changing **only** `docs/_codeowners-plant-check.txt`.
GET both endpoints **immediately after open**. If either plant signal is
present, fail. If both signals are empty, wait once **30 seconds** and
re-GET both before pass; pass only if the second pair is still empty. PR
GET must have `draft == false`. Title must not contain `WIP`
(case-insensitive). Record `{n}` **and** the two JSON bodies (the pair used
for the pass decision) on the leftover issue, then **close without merge
immediately**. Merging `{n}` fails leftover-complete. PR `#2`’s own
official request does not pass. `#1` does not pass. “The next natural PR”
does not pass.

**CI / deploy.** Required host context is `ci/woodpecker/pr/woodpecker`
(observed on public `branches/main`, 2026-09-21). This tree does not post it
today. Drain comments such as `drain skip: no occupying job…` are **#429**,
not a successor failure. A static host rebuild on `main` is **T2-6**
(existing follow), not leftover-complete.

**Historical PR `#2` head.** `GET .../pulls/2` `head.sha` is `cc21b56` and
`refs/pull/2/head` still names that object. `refs/heads/chore/remove-catchall-codeowners`
is deleted. Do not treat either as a live land tip. `origin/main` is
`0197f8c` (same tree).

## Failure modes

| Mode | Handling |
| --- | --- |
| File deleted on a branch but still on `main` | Expected until S1. S1 already landed; new PRs should not plant. Prove with `{n}`, not with `#2`. |
| Treat merge of `#2` / `0197f8c` as ADR-complete | S1-only. Land fails criteria 2–5 and 7. Open `{successor}` for S0+S2. |
| `git rm CODEOWNERS` on current `main` | Command fails; file already gone. Assert four-path `test -f`. |
| Cherry-pick / reset onto / merge `cc21b56` | Squash tree already on `main`. Adds no S0+S2. Forbidden. |
| Trust obsolete occupying snapshot (`d2d09db`, `changed_files: 0`, “ghost not on occupying ref”) | `#2` merged with head `cc21b56`. Use `origin/main` `0197f8c`. |
| Trust `GET .../pulls/2` `head.sha` as a live land tip | PR is merged; occupying branch deleted. Land vehicle is `{successor}`. |
| README links ADR/architecture but those files are not on the same tip | 404 after merge. Land fails criterion 2. Copy both files onto `{successor}` before merging README. |
| Product tip ships S0 without the Decision 3 README pointer | Fail land criterion 3. Recipe scripts the insert then greps. |
| Copy left in `docs/`, `.gitea/`, or `.forgejo/` (including empty/comments-only) | Forgejo still loads the first existing path and may plant. Land fails **T2-1**; delete those paths too (none exist on current `main`). |
| Whole-tree `git grep` for `.* @` | Hits this ADR after a correct delete. Use the pathspec in Tests item 1. |
| cl8y-forgejo migrate/apply re-copies a template | Sister-repo race ([cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48) `_ensure_codeowners`). Out of this slice. If a later apply re-adds the file, leftover-complete is **not** done: delete again via PR, then one new dated leftover comment with all three leftover-complete items, **T2-1 last**. A GET or plant-check from before a re-copy does not count. Never direct-push `main`. |
| Plant-check → re-copy → stale-green GET | Void. Leftover-complete requires one dated leftover comment with (1) protection GET, (2) plant-check `{n}` + JSON, (3) four-path `test -f` fails — **T2-1 last** (or all three timestamps in one attest). |
| Official request leftover on #2 or #1 | Non-blocking only after the **mandatory** dated **admin** GET of this repo shows **T2-9** / **T2-10** (standing rule). Land of `{successor}` also requires **T2-2** in that same GET, attested on the successor PR comment. Dismiss does not skip the GET. If **T2-10** is `true`, merge is 405; stop is a forge #48 dependency, not a silent implement stop; do not `force_merge`; optional human dismiss is not a CAC substitute. Not S3 evidence. Not a rollback signal. |
| Treating four-path absence on `main` as leftover-complete | No plant-check `{n}`, no six-flag admin JSON, no leftover issue. S3 still required. |
| Leftover issue opened in the wrong repo, or empty | Land fails criterion 5. Open in `code/tradair-landing` with the quoted body. |
| Close `#2` without merge | Already merged. Do not use that discriminator. |
| Plant-check matcher uses `team.name == "code/maintainers"` or requires `team.organization` on reviews GET | Misses the live plant (`team.name == "maintainers"`, `team.organization == null` on reviews). Use the Observability fail-closed pair. |
| Plant-check is draft (`draft != false` on PR GET), title contains `WIP` (case-insensitive), has no changed file, or reviewers were requested in the UI / `POST .../requested_reviewers` | False pass (CODEOWNERS skipped or would not have planted) or false fail (manual team request). Recipe fails closed; open a new probe. |
| Plant-check changes `src/`, `public/`, `package.json`, addresses, ABIs, or legal pages | Looks mergeable on a `main` that may rebuild `traken.xyz`. Use `docs/_codeowners-plant-check.txt`. |
| Merging the plant-check PR | A `main` push **may** rebuild the static host. **Close without merge.** Merging `{n}` fails leftover-complete. |
| Protection silently reverted to official-review true | Merge 405 returns. Out of this repo; re-apply via forge #48, do not `force_merge`. Not proven by scanners. |
| `enable_push` flipped true | **T2-2** regression (direct push). Refuse. Not a force-push claim. Not `user_can_push`. Unproven by public `branches/main`. |
| Host requires Woodpecker and nothing posts on the successor tip | Observed deadlock (public T2-8 / T2-3). Not solved by restoring CODEOWNERS. Not successor implement of a pipeline. S2 implementer opens the CI-enablement issue. Do not fake statuses. Do not add `.woodpecker.yaml` in this diff. Do not copy hello’s yaml. Do not treat `[]` on `0197f8c` as a bypass. |
| `#2` merged with `[]` statuses | Forge-enforcement gap (`apply_to_admins` / equivalent). Not `force_merge` for `{successor}`. Successor still waits on T2-3. |
| Re-adding CODEOWNERS “for safety” in a follow-up | Violates **T2-1**. Reviewers must reject unless a new ADR allowlists path owners. |
| Merge `cac-design-issue-2` onto `main` | Transport ancestry still has root `CODEOWNERS`. Copy two `docs/` paths only. |
| `src/` / sale addresses / `STYLE_GUIDE.md` / `package.json` sneak into the MR | Fail review. |
| README treats `docs/architecture.md` as product architecture or stubs the product map | Fail S2. Two architecture docs must not collide. |
| Implement copies `0197f8c`, `590fd76`, or “this SHA or a successor” instead of the SHA named in review | Fail land criterion 2. Accepted SHA is the named SHA. |
| Status flip after `git add` (worktree `Accepted`, index `Proposed`) | `git commit` would record `Proposed`. Recipe fails `git diff --exit-code` (worktree ≠ index). Flip the single Status value line **before** `git add`; architecture identity and the Status filter run on `git diff --cached`. |
| `DESIGN_SHA` is an arbitrary object not on `origin/cac-design-issue-2` | Fail land criterion 2. After `git fetch origin cac-design-issue-2`, `git merge-base --is-ancestor "$DESIGN_SHA" origin/cac-design-issue-2` must succeed. |
| Implement deploys Render, rotates sale/token addresses, or edits `autonomy.rs` / HMAC | Forbidden (#297). |

## Ordered implementation slices

| Slice | Work | Depends on |
| --- | --- | --- |
| **S0** | This design (ADR 0001 + architecture **T2**). Transport on **live** `cac-design-issue-2`. Copy **the SHA named in independent review** onto the successor tip (not `0197f8c`, not `590fd76`). `docs/architecture.md` fully byte-identical. ADR: one-line Status value flip `Proposed (` → `Accepted (` (identical suffix; author-pass paragraphs below that line stay) allowed on the **product** tip only. Do not call this tip accepted until independent review names the SHA. `cac-design-issue-2` is never the merge vehicle. | None in `code/tradair-landing`. |
| **S1** | Already on `main` at `0197f8c` (six-line delete). Successor asserts four-path `test -f` fails. Do not cherry-pick `cc21b56`. Do not `git rm` again. | None remaining. |
| **S2** | README pointer on the **same** successor tip (script Decision 3; recipe greps after insert). Open the leftover issue in **`code/tradair-landing` only**, before successor merge, with the body template under Migration (merged `#2` does not complete ADR 0001). **The S2 implementer** (pusher of the S0+S2 tip) also opens the CI-enablement issue in this repo before treating the Woodpecker wait as a named CI issue. **Repo admin of `code/tradair-landing`** (distinct from the S2 pusher) attests the dated **admin** **T2-2** / **T2-9** / **T2-10** GET of this repo as a **comment on the successor PR** before merge; the GET is a read, not a #297 grant, and not something in-repo CI can do. Mandatory; do not dismiss then skip. | S0 files on the successor tip. S1 already on the base. |
| **S3** | Leftover-complete: one dated leftover comment with (1) **repo admin of `code/tradair-landing`** (distinct from the S2 pusher) protection GET six flags, (2) dedicated plant-check `{n}` on `docs/_codeowners-plant-check.txt` + JSON, (3) four-path `test -f` fails — **T2-1 last**. Does **not** reopen `#2`. Four-path absence on `main` is not leftover-complete. Not `#2`, not `#1`. | S0+S2 merged to `main` (S1 already there). Tracked on the leftover issue in this repo. |

`{successor}` ships **S0+S2**. S1 already landed via merged `#2`. S2 depends
on S0 files being on the same tip.

Merge of `{successor}` waits for `ci/woodpecker/pr/woodpecker` on **that**
tip (public T2-8 / T2-3, 2026-09-21). That wait is not a slice of pipeline
work. The CI-enablement iid does not exist today, so it is not a local
`DEPS` of this design.

Sister repos (not slices of this chore, not local `DEPS`): forge #48
protection+templates; CAC #429 autoland occupying job; hello#15 canary. If
admin GET shows **T2-10** `true`, the land stop is a forge #48 dependency.

## Tests

In-repo CI cannot GET branch protection. Do not add a `react-scripts test`
case solely for four-path absence (`src/App.test.js` is leftover CRA smoke,
not this contract). Do not require that stale case to pass as a land gate.

1. **Absence (land, T2-1).** On the successor base and after S2, `test -f
   CODEOWNERS`, `test -f docs/CODEOWNERS`, `test -f .gitea/CODEOWNERS`, and
   `test -f .forgejo/CODEOWNERS` all fail. Optional content check, **pathspec
   those four paths only**:
   `git grep -nE '^\.\* @' -- CODEOWNERS docs/CODEOWNERS .gitea/CODEOWNERS .forgejo/CODEOWNERS`
   — no match is pass. Do **not** whole-tree `git grep` (the escaped form
   `git grep -n '^\\.\\* @'` matches nothing even while the catch-all file
   exists; the unescaped `git grep -nE '^\.\* @'` hits this ADR after a
   correct delete).
2. **Existing contributor checks (land).** In-repo only: do not treat
   `react-scripts test` / `react-scripts build` / leftover
   `src/App.test.js` as **T2-3**. Do not treat empty commit statuses as
   leftover-complete or as **T2-3**. Do not add `.woodpecker.yaml` /
   `.woodpecker/` in this diff. Host merge still waits on Tests item 9 /
   land criterion 7 (`ci/woodpecker/pr/woodpecker` success on the successor
   tip). That wait is owned by the S2 CI-enablement issue, not by this
   ticket implementing Woodpecker.
3. **Protection (leftover-complete, operator read).** **Repo admin of
   `code/tradair-landing`** (distinct from the S2 pusher) attests dated JSON:
   `GET .../branch_protections` `main` rule equals the six architecture
   **protection GET** flags. The GET is a read, not a #297 grant; in-repo
   CI cannot perform it. Fail if any differ. Not inferred from a green
   scanner. Not compared to the Merge API row. Not copied from `code/hello`.
   Not the public `GET .../branches/main` slice. **T2-2** pass is
   `enable_push == false` only (not `user_can_push`).
4. **No new plant (leftover-complete).** After the delete is on `main`, on the
   leftover issue in this repo run this recipe:
   1. Delete already on `main` (**T2-1** still holds; if a later apply
      re-copied the file, delete again via PR first).
   2. Open a **dedicated** plant-check PR that changes **only**
      `docs/_codeowners-plant-check.txt` (never `src/`, `public/`,
      `package.json`, sale/token addresses, ABIs, or legal pages). PR GET
      must have `draft == false`. Title must not contain `WIP`
      (case-insensitive).
   3. Do not request users or teams in the UI or via
      `POST .../requested_reviewers`.
   4. GET `.../pulls/{n}` and `.../pulls/{n}/reviews` **immediately after
      open**.
   5. Pass iff Observability’s fail-closed pair holds. If either plant signal
      is present, fail. If both signals are empty, wait once **30 seconds**
      and re-GET both; pass only if the second pair is still empty.
   6. Record `{n}` **and** the two JSON bodies (the pair used for the pass
      decision) on the leftover issue, then **close without merge
      immediately**. Merging `{n}` fails leftover-complete.
   Fail if `draft != false`, if the title contains `WIP` (case-insensitive),
   if the PR has no changed file, if the changed path is not
   `docs/_codeowners-plant-check.txt`, if reviewers were requested manually,
   or if either GET signal is present after the wait. Do not use `#2`. Do
   not use `#1`. Do not use “the next natural PR.” Who opens the PR: anyone
   who can create a PR on `code/tradair-landing`. Who GETs protection
   (item 3) and the pre-merge GET (item 7): **repo admin of
   `code/tradair-landing`**, distinct from the S2 pusher; not
   `react-scripts`; not Render; not in-repo CI. The GET is a read, not a
   #297 grant.
   Leftover-complete attest order is Integration: **T2-1 last**. Do not treat
   a passing GET or plant-check from before a later `_ensure_codeowners` apply
   as done.
5. **Reject still blocks (doc-level).** Do not turn off
   `block_on_rejected_reviews` to “make autoland easier.”
6. **Diff guard (land).** Successor PR does not change `src/`, `public/`,
   `package.json`, `package-lock.json`, `.npmrc`, `.nvmrc`, `STYLE_GUIDE.md`,
   `TODO.md`, or add `.woodpecker.yaml` / `render.yaml`. Does not
   re-introduce `CODEOWNERS`.
7. **Pre-merge GET (T2-2 / T2-9 / T2-10).** Dated **admin** GET of this
   repo’s `main` rule by **repo admin of `code/tradair-landing`** (distinct
   from the S2 pusher) showing **T2-2**, **T2-9**, and **T2-10** is
   **mandatory** before merge of `{successor}`. Attest as a **comment on
   the successor product PR**. Known plants on `#2` and `#1` do not skip
   it. Do not dismiss then skip GET. Fail closed if missing, if **T2-2**
   is not `false`, or if **T2-10** is `true` (forge #48 dependency, not a
   silent implement stop). Public `branches/main` / fleet `#48` /
   `code/hello` do not count. The GET is a read, not a #297 grant; in-repo
   CI cannot perform it.
8. **README collision (land, S2).** Successor PR README still is the product
   map and contains the Decision 3 pointer (architecture **only** for **T2**,
   ADR 0001 for the delete). Do not invent a maintainers-as-gate denial.
9. **Host context (merge of `{successor}`).** Public `GET .../branches/main`
   (2026-09-21) already shows **T2-8** / **T2-3**. Before merge,
   `GET .../statuses/{successor-tip-sha}` includes context
   `ci/woodpecker/pr/woodpecker` in a success state. Empty statuses on
   `0197f8c` / `cc21b56` mean those SHAs are not a T2-3 precedent. The wait
   is on the **pushed successor tip**. Slice S2 (opening the CI-enablement
   issue) does not satisfy this. Do not treat this as leftover-complete
   six-flag proof. Do not `force_merge` because `#2` merged with `[]`.

## Rollout

- Merge vehicle: **successor product PR** from `origin/main` (`0197f8c`
  ancestor) shipping S0+S2. Design-only `cac-design-issue-2` must not be
  opened as the product PR and must not be merged first as docs-only. Do
  not reopen `#2`. Do not land `cc21b56`. Do not `git rm CODEOWNERS`.
- Order: fleet protection already owned by #48 → copy S0 files from the SHA
  named in independent review + README via one successor PR, leftover issue
  open in this repo (records merged `#2` does not complete ADR 0001),
  CI-enablement issue opened by the S2 implementer, dated **admin**
  **T2-2** / **T2-9** / **T2-10** GET of this repo by **repo admin of
  `code/tradair-landing`** (distinct from the S2 pusher; attested as a
  **successor PR comment**; mandatory, not skipped if plants were
  dismissed) → wait for Woodpecker success on **that** tip → leftover issue
  remains open → leftover-complete as one dated comment with admin
  protection GET, plant-check (close without merge), then four-path
  `test -f` (**T2-1 last**).
- Do not weaken **T2-3** / **T2-8** to land `{successor}`; do not add the
  pipeline in this diff; do not copy hello’s yaml; do not fake statuses; do
  not `force_merge`; do not treat `[]` on `0197f8c` as a bypass.
- Canary role: other `code/*` catch-all deletions may copy this pattern; this
  ADR does not merge those repos. hello#15 is not a gate.
- [#297](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/297): no
  deploy, spend, custody, or CAC policy expansion. Landing `{successor}` does
  not authorize Render config changes, sale/token rotation, or autonomy
  changes. An existing static-host `main` follow that rebuilds after merge
  is not a new grant.

## Rollback

If S1-only `main` (`0197f8c`) must be undone, restore the previous
`CODEOWNERS` **via PR**, not direct `main`, from `d2d09db` (six-line
catch-all). That re-plants official requests. It does **not** by itself
re-enable merge-block (`block_on_official_review_requests`); restoring the
405 gate is a forge-policy revert, founder-scoped, and is not a
tradair-landing rollback step.

Woodpecker / Render / `src/` rollback is unused: those files are untouched.

If S0 docs need revert after `{successor}` lands, revert via PR together with
README so relative links do not 404.

## Integration completion criteria

### Land (S0+S2) — merge of successor product PR `{successor}`

Merged `#2` does **not** complete this section. Occupying “received the tip”
/ “close `#2` without merge” does **not** apply.

All must be true on the merged successor tip. Land does **not** wait for S3.

1. `main` has no CODEOWNERS file at the four Forgejo paths: `test -f` fails on
   `CODEOWNERS`, `docs/CODEOWNERS`, `.gitea/CODEOWNERS`, `.forgejo/CODEOWNERS`
   (**T2-1**). Already true on `0197f8c`; must still hold. Head is not a
   re-introduction of the six-line catch-all.
2. Merged tip contains `docs/architecture.md` **fully byte-identical** to
   the SHA **named in the independent-review comment** (no Status
   exception; that file has no Status line). Merged tip contains
   `docs/adr/0001-remove-catchall-codeowners.md` byte-identical to that
   SHA except the single Status value line `Proposed (` → `Accepted (`
   (identical suffix; author-pass paragraphs below that line are not
   flipped) on the **product** tip (not a Status-only successor on
   `cac-design-issue-2`).
   README relative links to those paths resolve. Do not merge a README
   that points at those paths until they exist on that tip. Implementer
   must not pick `0197f8c`, `590fd76`, or a different successor SHA.
   Recipe `git fetch origin cac-design-issue-2` and
   `git merge-base --is-ancestor "$DESIGN_SHA" origin/cac-design-issue-2`.
3. README keeps the product map and contains the Decision 3 pointer
   (`docs/architecture.md` **only** for **T2**; ADR 0001 for the delete). It
   does not imply CODEOWNERS is what makes merge trusted. Do not invent a
   maintainers-as-gate denial. Product overview remains. No stub escape.
4. Diff does not change `src/`, `public/`, `package.json`,
   `package-lock.json`, `.npmrc`, `.nvmrc`, `STYLE_GUIDE.md`, `TODO.md`, or
   add `.woodpecker.yaml` / `render.yaml`. No `force_merge`, no direct
   `main`, no CAC dismiss-as-merge, no Render/HMAC/`autonomy.rs` edits in the
   product-PR diff. No `git rm` of an already-absent `CODEOWNERS`.
5. A leftover issue exists in **`code/tradair-landing` only**, opened before
   merge of `{successor}`, whose body quotes leftover-complete items 1–3
   (dated `main` **admin** protection GET of the six **T2** flags; dedicated
   post-merge plant-check `{n}` on `docs/_codeowners-plant-check.txt`, close
   without merge; four-path `test -f` **T2-1 last**) and records that merged
   `#2` does **not** complete ADR 0001. An empty issue or an issue in
   another repo does not satisfy this criterion. Record its iid on
   `{successor}`. Opening it before merge of `#2` is impossible.
6. Dated **admin** GET of **this** repo’s `main` rule showing **T2-2**,
   **T2-9**, and **T2-10** is **mandatory** before merge. Attested by
   **repo admin of `code/tradair-landing`**, distinct from the S2 pusher, as
   a **comment on the successor product PR**. The GET is a read, not a
   #297 grant; in-repo CI cannot perform it. Do not dismiss then skip GET.
   Do not land on an unverified GET. If **T2-2** is not `false` or
   **T2-10** is `true`, stop (**T2-10** `true` is a forge #48 dependency,
   not a silent implement stop). Public `branches/main` / fleet `#48` /
   `code/hello` do not count.
7. Public `GET .../branches/main` (2026-09-21) already shows
   `enable_status_check: true` and context `ci/woodpecker/pr/woodpecker`.
   Successor tip can be pushed; merge waits until that context has posted
   **success** on **that** tip. Empty statuses on `0197f8c` / `cc21b56` do
   not satisfy this and are not a precedent. Do not fake the context. Do
   not add `.woodpecker.yaml` in this ticket. Do not copy hello’s yaml. Do
   not `force_merge`. If `#2` merged with `[]` statuses, treat that as
   `apply_to_admins` / equivalent, not a T2-3 bypass. The S2 implementer
   has opened a CI-enablement issue in `code/tradair-landing` before
   treating the wait as named (no iid existed at design time, 2026-09-21
   after 13:18:55Z).

Empty commit statuses on `0197f8c` / `cc21b56` document a CI gap and a
possible forge-enforcement gap; they are not leftover-complete and not a
merge precedent. `0197f8c` is incomplete without S0 files and S2.
`cc21b56` is not a landable tip.

### Leftover-complete (S3) — leftover issue in this repo; survives merge of `{successor}`

Require **one dated leftover comment** with all three items, **T2-1 last**
(or all three timestamps in one attest). A GET or plant-check from before a
later `_ensure_codeowners` apply does not count; re-delete via PR and write a
new comment. Public `GET .../branches/main` is not item 1. Root `CODEOWNERS`
absence on `main` is not leftover-complete. `#2` is not leftover-complete.
`#1` is not leftover-complete.

1. Protection GET six flags: **repo admin of `code/tradair-landing`**
   (distinct from the S2 pusher) attests dated JSON:
   `GET .../branch_protections` `main` rule equals the six architecture
   **protection GET** flags (**T2-2**, **T2-8**, **T2-3**, **T2-9**,
   **T2-10**, **T2-5**). The GET is a read, not a #297 grant; in-repo CI
   cannot perform it. Not the Merge API row. Not inferred from a green
   scanner. Not copied from another repo. Not `user_can_push`. **T2-2**
   is `enable_push == false` only.
2. Plant-check `{n}` + JSON: a **dedicated** plant-check PR following Tests
   item 4 and Observability’s fail-closed pair, changing only
   `docs/_codeowners-plant-check.txt`. Record `{n}` and the two JSON bodies,
   then close without merge immediately. Merging `{n}` fails
   leftover-complete. `#2`’s own official request does not count. `#1` does
   not count. “The next natural PR” does not count.
3. **T2-1 last:** `test -f` fails on `CODEOWNERS`, `docs/CODEOWNERS`,
   `.gitea/CODEOWNERS`, and `.forgejo/CODEOWNERS`. Recorded after items 1 and
   2 (same comment or later timestamp in the same attest).

Forgejo#50 and CAC#429 may stay open; they are not land or leftover gates for
this tree.

## Authority

[cl8y-agent-control#297](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/297):
this design does not grant deploy, spend, custody, or agent-permission
expansion. Relaxing official-review as a **forge merge gate** is fleet policy
under [cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48);
this ADR only removes the in-tree file that plants requests (S1 already on
`main`) and lands the standing docs/README pointer. Independent review of
this proposal is a later gate. Design author must not write
`DESIGN: APPROVE`.
