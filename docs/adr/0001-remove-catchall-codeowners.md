# ADR 0001: Remove catch-all CODEOWNERS

## Status

Proposed ([#2](https://git.cl8y.com/code/tradair-landing/issues/2)). Not
accepted by this design-author pass. Do not call this tip accepted until
independent review names **this commit SHA** in a review comment. Keywords
in the issue body are not architecture approval. There is no separate
standing issue `#2`; the issues URL and the product PR share one number.

**Accepted SHA** = the SHA named in that independent-review comment. It is
not implementer choice of “this SHA or a successor.” Implement copies the
two `docs/` files from **that named SHA** onto the product tip. After
review names this SHA, implement **may** flip **only** the Status line from
`Proposed` to `Accepted` on the product tip; that one-line flip does not
require a new design loop. Every other byte of the two files must match the
named SHA. A Status-only successor invented on `cac-design-issue-2` is not a
substitute for the named SHA.

`cac-design-issue-2` is never the merge vehicle. Land criterion: the two
`docs/` files on the product tip are byte-identical to the named SHA except
that allowed Status line.

Overview (merge gate, runtime): [`architecture.md`](../architecture.md) is
the standing T2 contract after land. Do not copy that table here. **T2**
there is three groups: protection GET (six flags), merge procedure
(**T2-4**), tree contracts (**T2-1**, **T2-6**, **T2-7**). Occupying-PR
procedure (merge-relevant tip, ghost `cc21b56`, received-the-tip /
successor close-without-merge), design-branch transport
(`cac-design-issue-2`), Status-line flip, and the CI-enablement iid gap
live **only** in this ADR. Do not restate them in architecture.

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
requests on every change. Merge to `main` stays: pull request, host-required
Woodpecker context `ci/woodpecker/pr/woodpecker` (already listed on public
`GET .../branches/main`, 2026-09-21), SHA-pinned `Do: merge`, no direct push,
no `force_merge`.

**Land vehicle B:** product PR
[#2](https://git.cl8y.com/code/tradair-landing/pulls/2) (or a successor, only
if `#2` does not receive the tip — Decision 8) ships **S0+S1+S2 on one
tip** — copy the two design files from **the SHA named in independent
review**, delete `CODEOWNERS`, add the README pointer pasted in Decision 3.
Merging that PR closes `#2` **only if** that PR is `#2`. Design branch
`cac-design-issue-2` is review/transport only; it is **not** merged as a
docs-only PR and is **not** the product PR.

**Merge-relevant tip (source of truth is the live ref, not PR `/files`).**
`GET .../pulls/2` `head.sha` and `refs/heads/chore/remove-catchall-codeowners`
are the merge-relevant tip. On 2026-09-21 both equal `d2d09db` — the same
SHA as `main` (`changed_files: 0`). Ignore `GET .../pulls/2/files` and
`GET .../pulls/2/commits` while they still name orphan
`cc21b56907629875a57d92f5c9b50992b6eadf18` (message `Remove catch-all
CODEOWNERS (not a merge gate.)`, parent `d2d09db`, `CODEOWNERS` deleted,
6-line blob). That object is **not** on
`chore/remove-catchall-codeowners` or `main`. Do **not** cherry-pick, reset
onto, or merge `cc21b56`. Doing so ships hello-shaped **S1-only** and fails
land criteria 2–5. Fast-forward the occupying branch from `d2d09db` with
S0+S1+S2.

Forgejo HTML may say “This pull request is broken due to missing fork
information.” The repo is not a fork (`fork: false`, `parent: null`). That
banner is not the received-the-tip check (Decision 8).

**`#2` received the tip** iff after one
`git push origin chore/remove-catchall-codeowners`, `GET .../pulls/2` has
`head.sha` equal to the pushed S0+S1+S2 tip **and**
`head.repo.full_name == "code/tradair-landing"`. If that fails, a successor
is required: close occupying `#2` **without merge**, do not leave empty `#2`
open, and record that merge of `{successor}` plus leftover-tracker existence
is what completes the chore. Merging a successor does not close the chore
iid (issue `#2` is PR `#2`).

**Leftover issue (land gate).** Before merge of `#2` (or `{successor}`), S2
opens one leftover issue in **`code/tradair-landing` only** (title, repo,
and body template under Migration). That issue owns S3. Land criterion 5
fails if the issue is missing, empty, or opened in another repo.

**Leftover-complete** (S3: dated **admin** protection GET of the six **T2**
flags + dedicated post-merge plant-check PR `{n}` + four-path absence,
**T2-1 last**) lives on that leftover issue. S3 is not a close gate for `#2`.
The public `GET .../branches/main` slice is **not** that six-flag GET.

This repo is a product tree, not the forge #48 canary (`code/hello`). #2 is
the file delete plus in-repo docs/README pointer. It does not re-roll
protection, does not implement CAC autoland, and does not deploy Render or
change sale/token custody.

**Implement success** is a reachable product-PR tip with S0+S1+S2, not a
`main` land. Plants stop only after the delete is on default `main`. Waiting
on Woodpecker is the **observed** land gate (public T2-8 / T2-3, 2026-09-21),
not an implement defect, and is not a reason to grow #2 into CI. The S2
implementer opens the CI-enablement issue in this repo before that wait is
called “a named CI issue.”

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
stop plants while `main` still has `.* @code/maintainers`. An empty PR whose
head equals `main` also does not stop plants: there is no delete on either
tip.

Live proof that the file still plants requests: PR
[#2](https://git.cl8y.com/code/tradair-landing/pulls/2) itself has
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

Do **not** map `user_can_push` to **T2-2** (`enable_push`). Do **not** treat
this object as leftover-complete. `enable_status_check` and the context list
already match **T2-8** / **T2-3**: land of `#2` waits on
`ci/woodpecker/pr/woodpecker` success on the **product tip**. Statuses on
`d2d09db` are `[]`. There is no `.woodpecker.yaml`. **T2-10**, **T2-5**, and
`enable_push` are **absent** from this object; keep a fail-closed **admin**
`GET .../branch_protections` (unauthenticated is 401) for those flags and
for leftover-complete.

Fleet protection under #48 is described as
`block_on_official_review_requests=false` (**T2-10**) and
`required_approvals=0` (**T2-9**). Public `required_approvals: 0` on
`branches/main` is **not** that leftover GET. Do **not** treat the leftover
request on `#2` as non-blocking from fleet values or from this public
slice. It is non-blocking **only if** a dated **admin** GET of **this**
repo’s `main` rule shows **T2-9** and **T2-10**. If **T2-10** is still
`true` here, merge is 405; that stop is a
[cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48)
dependency, not a silent implement stop. Do not land `#2` on an unverified
admin GET. That leftover request also must not be treated as S3 evidence.

Ghost commit `cc21b56907629875a57d92f5c9b50992b6eadf18` remains in the PR
index (`/files`, `/commits`) while the occupying ref is `d2d09db`. Source
of truth is `GET .../pulls/2` `head.sha` and
`refs/heads/chore/remove-catchall-codeowners`.

`origin/main` has **no** `docs/` tree. Relative README links to ADR 0001 /
architecture 404 unless those two files land on the **same merged tip** as
the README pointer. README today is the marketing product map; it has **no**
CODEOWNERS / maintainers-as-gate language (that comment lives in the file
S1 deletes). S2 adds the pointer pasted in Decision 3 and does not stub the
map. Do not invent a denial that “maintainers review every change.”

Issue body points at forgejo `docs/INVARIANTS.md`. Treat #48/#50 as source.
Do not fork INVARIANTS into this repo.

Open PRs in this repo when #2 was filed:
[#1](https://git.cl8y.com/code/tradair-landing/pulls/1) (Renovate onboarding)
and #2. Renovate benefits from fewer planted reviews; it is not a sequencing
dep. Do not close or retarget it.

This SPA may rebuild on `main` via the existing static host. Landing #2 is
still not a #297 deploy grant: the product-PR diff must not change `src/`,
`public/`, sale/token addresses, ABIs, `package.json`, `package-lock.json`,
`.npmrc`, `.nvmrc`, or host config.

Drain comment on #2 (`drain skip: no occupying job for rebase/fix-pr/CI-wait`)
is [#429](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/429),
not a #2 failure.

No Woodpecker-enablement iid exists in `code/tradair-landing` today
(2026-09-21; open items are PR `#1` and PR `#2` only). That is a missing
owner, not a footnote. **The S2 implementer** opens that issue in this repo
before land calls the wait “a named CI issue” (Decision 7).

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
  on #2 are **#429**, not a #2 failure.
- Dismissing reviewers from the controller (forbidden substitute in #388).
- Path-specific CODEOWNERS, a second maintainer, or `required_approvals: 1`.
- Adding, enabling, or digest-pinning Woodpecker for this repo. Missing
  `ci/woodpecker/pr/woodpecker` statuses are pre-existing. Do not add
  `.woodpecker.yaml` / `.woodpecker/` in the #2 diff. Do not copy hello’s
  pipeline. Opening the CI-enablement issue (Decision 7) is not implementing
  the pipeline.
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
- Renovate onboarding ([#1](https://git.cl8y.com/code/tradair-landing/pulls/1)).
  Do not close or retarget it.
- Waiting on [hello#15](https://git.cl8y.com/code/hello/pulls/15) or other
  sibling file-delete PRs. Canary is informational, not a local dep.
- Merging `#2` while its head is still `d2d09db` (empty diff).
- Cherry-picking, resetting onto, or merging ghost
  `cc21b56907629875a57d92f5c9b50992b6eadf18`.
- Editing `autonomy.rs` / HMAC, self-approval, or a founder card for this
  ordinary design.
- A docs-only PR from `cac-design-issue-2` (vehicle **A**). That branch
  transports design between VMs; it is not a merge vehicle.

## Decision

1. **Delete** root `CODEOWNERS`. Do not leave an empty or comments-only file
   (Forgejo still parses it).
2. **Do not add** `docs/CODEOWNERS`, `.gitea/CODEOWNERS`, or
   `.forgejo/CODEOWNERS`. After land, `test -f` fails on all four paths. None
   of those paths may contain a reviewer rule for any pattern (not only `.*`).
3. **Keep** the merge gate in [`architecture.md`](../architecture.md) **T2**.
   On the product PR (or successor), copy
   `docs/adr/0001-remove-catchall-codeowners.md` and `docs/architecture.md`
   from **the SHA named in the independent-review comment** onto that
   **same tip**. Recipe must `git fetch origin cac-design-issue-2` so that
   SHA exists locally. After review names the SHA, implement **may** flip
   **only** the Status line from `Proposed` to `Accepted` on the product
   tip (no new design loop). Do not invent a Status-only successor instead
   of using the named SHA.

   Then add this README pointer under the existing `## 🤝 Contributing`
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
   that tip. The two `docs/` files on the product tip must be
   byte-identical to the named SHA except the allowed Status line. Do not
   rewrite `STYLE_GUIDE.md` / `TODO.md` / visitor copy.
4. **Leave** already-planted official requests on open PRs (including #2 and
   #1). Treat them as non-blocking **only if** a dated **admin** GET of
   `code/tradair-landing` `main` shows **T2-9** and **T2-10**. Do not dismiss
   them from CAC. Human dismiss is optional leftover, not AC. If **T2-10**
   is `true`, stop; that is a forge #48 dependency, not a silent implement
   stop.
5. **Do not** PATCH branch protection from this repository.
6. **Split land from leftover-complete.** Product PR `#2` (or successor) is
   S0+S1+S2 (vehicle **B**). S3 lives on the leftover issue S2 opens in this
   repo before that merge (template below). Require a **dedicated** post-merge
   plant-check PR. Do not accept `#2`’s own official request, `#1`, or “the
   next natural PR.”
7. **Host CI is not an in-diff deliverable.** Public `GET .../branches/main`
   (2026-09-21) already shows `enable_status_check: true` and
   `status_check_contexts: ["ci/woodpecker/pr/woodpecker"]`. Product tip can
   be pushed; merge of `#2` **waits** on `ci/woodpecker/pr/woodpecker`
   success on **that** tip. Do not add the pipeline in the CODEOWNERS diff.
   Do not copy hello’s yaml. Do not fake statuses. Do not `force_merge`.

   No Woodpecker iid exists in this repo today. **The S2 implementer**
   (whoever pushes the S0+S1+S2 tip) opens one issue in
   **`code/tradair-landing`** before treating the wait as named. Suggested
   title: `chore: enable Woodpecker ci/woodpecker/pr/woodpecker`. Record
   that iid on the product PR. Opening the issue is S2; enabling the
   pipeline is not this diff. Do not add a local `DEPS` until that iid
   exists.
8. **Do not merge the empty occupying tip. Do not land `cc21b56`.** `#2`
   merge-relevant head is `d2d09db` (live ref). Implement fast-forwards
   `chore/remove-catchall-codeowners` from `d2d09db` with S0 files +
   `git rm CODEOWNERS` + README pointer. Occupying `--force-with-lease` is
   **not** required while that branch has not diverged; it is not
   `force_merge` if a later non-FF update of the PR branch needs it.

   **Received the tip** (discriminator): after one
   `git push origin chore/remove-catchall-codeowners`, `GET .../pulls/2`
   has `head.sha` equal to the pushed S0+S1+S2 tip **and**
   `head.repo.full_name == "code/tradair-landing"`. Ignore `/files` and
   `/commits` while they name `cc21b56`. The HTML “missing fork
   information” banner is not this check.

   If received: `#2` is the land vehicle. Do not open a successor.

   If not received (push rejected, or GET `head.sha` / `head.repo.full_name`
   mismatch): successor is **required**. Close occupying `#2` **without
   merge**. Do not leave empty `#2` open. Record on `{successor}` and on
   the leftover issue that merge of `{successor}` plus leftover-tracker
   existence completes the chore (shared iid means merging `#3` closes
   `#3`, not the original chore).

## Component / state / interface changes

| Surface | Change |
| --- | --- |
| `CODEOWNERS` (root) | Remove file. Not done at this design SHA (`d2d09db` still has the six-line catch-all). Do not ship ghost `cc21b56` as the delete. |
| `docs/CODEOWNERS`, `.gitea/CODEOWNERS`, `.forgejo/CODEOWNERS` | Must remain absent (no empty file). |
| `docs/adr/0001-remove-catchall-codeowners.md`, `docs/architecture.md` | Copy from the SHA named in independent review onto the product PR so the merged tip is S0+S1+S2 (byte-identical except allowed Status flip). Standing T2 contract lands with the delete. |
| Forgejo PR review interface | After land, a **dedicated** plant-check PR against `main` must not get an official CODEOWNERS team request. |
| Branch protection API | No write from this ticket. Operator leftover-complete reads must still match architecture **protection GET** (six flags for the `main` rule). In-repo CI cannot perform that GET. Public `GET .../branches/main` (2026-09-21) is the land Woodpecker wait, not that GET. Land of `#2` while leftover official requests remain additionally requires a dated **admin** GET of **T2-9** and **T2-10** on **this** repo. |
| `.woodpecker.yaml` / `.woodpecker/` | Must remain absent in this ticket. Do not add one to unblock merge. S2 opens the CI-enablement issue; it does not add the pipeline. |
| `src/`, `public/`, `package.json`, `package-lock.json`, `.npmrc`, `.nvmrc`, sale/token addresses | Unchanged. |
| README | Mandatory on the product PR: paste Decision 3 pointer; product map stays README. Relative links to ADR 0001 / architecture, which exist on that same tip. |
| Leftover issue | New issue in `code/tradair-landing` only, opened before merge of `#2` (or `{successor}`), body quotes leftover-complete items 1–3. |
| Occupying PR `#2` | Receive the S0+S1+S2 tip, or close without merge and succeed with `{successor}`. |
| CAC / static host / org team `maintainers` in org `code` | Unchanged. The team may keep existing; it simply is not planted as official review. Host may rebuild from a `main` push; that is existing follow, not a new deploy grant. |

No runtime state, schema, or HTTP API.

## Affected invariants

IDs live in [`architecture.md`](../architecture.md). This ADR changes **T2-1**
(four-path absence). It does not write protection JSON. Leftover-complete
**reads** the six protection flags (**T2-2**, **T2-8**, **T2-3**, **T2-9**,
**T2-10**, **T2-5**) via **admin** GET. Public `GET .../branches/main`
already shows **T2-8** / **T2-3** for land planning; it does not prove the
six GET flags. Land **does** require a dated **admin** GET of **T2-9** and
**T2-10** on this repo before treating leftover official requests as
non-blocking. Merge procedure remains **T2-4**. Host follow and CAC policy
remain **T2-6** and **T2-7**. **T2-2** is `enable_push == false` (no direct
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
| Keep file, rely on `block_on_official_review_requests=false` | Requests still plant on every PR; drain noise; Renovate/agent PRs look like they need a human stamp; templates can re-teach the old gate. |
| Replace `.*` with path owners | No second reviewer exists; same 405/422 if official-review is ever turned on; out of scope. |
| Add a second maintainer | Founder ops, not this implement. |
| Dismiss official requests from CAC | Forbidden by #388 as a substitute for policy reversal. |
| Direct-push the delete to `main` | Violates **T2-2**. File deletes go through a PR (already [#2](https://git.cl8y.com/code/tradair-landing/pulls/2)). |
| Empty or comments-only CODEOWNERS | Forgejo still parses it. Absence is the contract. |
| Merge `#2` at `d2d09db` | Empty diff. Catch-all remains on `main`. |
| Cherry-pick / reset onto / merge `cc21b56` | Ghost object. Hello-shaped S1-only. Fails land criteria 2–5. Live tip is `d2d09db`. |
| Add `.woodpecker.yaml` in the same PR | Different change (CI enablement). Missing statuses are pre-existing. Public `branches/main` already names the required context. |
| `force_merge` or fake Woodpecker statuses to land #2 | Forbidden by **T2-4** / **T2-3**. |
| Treat file-delete + docs as merge-ready while Woodpecker has not posted on that tip | Host will refuse. S2 opens a named CI issue; do not restore CODEOWNERS. |
| Treat `#2`’s plant, `#1`, or the next natural PR as S3 | Merge closes `#2` before leftover-complete. A dedicated post-merge PR is the evidence. |
| Vehicle **A**: docs-only PR from `cac-design-issue-2` onto `main`, then `#2` as S1+S2 | Second merge vehicle. That branch is design transport, not a product PR. Vehicle **B** puts the two files on the deletion PR so README links resolve on one tip. |
| Wait on sibling `code/*` CODEOWNERS PRs / hello#15 | Wrong repo; no product iid dependency. |
| Open the leftover issue in `PlasticDigits/*` or leave it empty | Land criterion 5 would pass a wrong-repo or vacant issue. S2 names this repo and quotes leftover-complete items 1–3. |
| Leave empty `#2` open and also merge successor `#3` | Shared iid: merge of `#3` closes `#3`, not the chore. Close `#2` without merge first. |
| Treat a Render rebuild after merge as leftover-complete | **T2-6**. Plant-check and protection GET are leftover-complete. |
| Add a Jest case in `src/App.test.js` solely for four-path absence | Grows #2 into a harness. Use the pathspec `test -f` recipe. |
| Rewrite marketing README / `STYLE_GUIDE.md` / sale copy | Product surfaces are not this chore. Pointer only. |
| Invent a README denial that maintainers do not review every change | Current README has no such claim. S1 deletes it with the file. |
| Use `src/`, `public/`, `package.json`, addresses, ABIs, or legal pages as the plant-check probe | Looks mergeable on a `main` that may rebuild `traken.xyz`. Use `docs/_codeowners-plant-check.txt`. |
| Copy hello’s `.woodpecker.yaml` or protection JSON as proof | Wrong repo; Coolify/secrets SPA. Public `branches/main` already lists the context. |

## Complexity added / removed

**Removed:** catch-all official-review robot on every diff (after the delete
is on `main`); operator dismiss step for this repo’s self-request deadlock on
new PRs; false “CODEOWNERS is the trusted-PR gate” story in this repo.

**Added:** a small standing doc (this ADR + architecture **T2**) that lands on
`main` via the product PR so later agents do not re-add `.* @code/maintainers`
as a merge requirement, a leftover issue in this repo that survives merge of
`#2`, and (S2) a CI-enablement issue so the observed Woodpecker wait has an
owner. No new services, jobs, flags, pipelines, or test harnesses.

Net: one six-line process file gone from `main` after land. Occupying tip can
delete it earlier; plants continue until land. Merge gate stays host CI + no
direct `main`.

## Migration

1. Fleet protection is owned by forge #48. This ticket does not PATCH. Do not
   treat a GET recorded on `code/hello` as proof for this repo. Do not treat
   public `GET .../branches/main` as the six-flag leftover GET.
2. **Leftover issue (S2, land gate).** Before merging the product PR, open
   **one** follow-up issue in **`code/tradair-landing` only**. Do not open it
   in `PlasticDigits/cl8y-forgejo`, `PlasticDigits/cl8y-agent-control`, or any
   other repo. Suggested title: `chore: leftover CODEOWNERS S3 (protection GET
   + plant-check)`. Body **must quote** leftover-complete items 1–3 from this
   ADR (dated `main` **admin** protection GET of the six **T2** flags;
   dedicated post-merge plant-check `{n}` on
   `docs/_codeowners-plant-check.txt`, close without merge; four-path
   `test -f` **T2-1 last**). Record that issue’s iid on the product PR before
   merge. Merging [#2](https://git.cl8y.com/code/tradair-landing/pulls/2)
   closes that number; S3 must not live only there. If a successor is
   required, the leftover issue still records that merge of `{successor}`
   plus this tracker completes the chore.

   Body template (quote onto the leftover issue):

   ```
   Leftover-complete for ADR 0001 after merge of product PR #2 (or
   {successor} if #2 was closed without merge). This issue does not close
   #2. Opened in code/tradair-landing before that merge.

   1. Dated operator GET of this repo's `main` protection rule equals the six
      T2 protection flags (T2-2, T2-8, T2-3, T2-9, T2-10, T2-5) in
      docs/architecture.md. Admin GET .../branch_protections (unauthenticated
      is 401). Attest the JSON here. Not copied from code/hello. Not the
      public GET .../branches/main slice. A GET recorded before a later
      template re-copy does not count.

   2. After the delete is on `main`: dedicated plant-check PR {n} changing
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
   ```

3. **Vehicle B.** Land
   [#2](https://git.cl8y.com/code/tradair-landing/pulls/2) once it **received
   the tip**, else `{successor}` after closing `#2` without merge. Tip is
   S0+S1+S2: copy `docs/adr/0001-remove-catchall-codeowners.md` and
   `docs/architecture.md` from **the SHA named in independent review**,
   delete root `CODEOWNERS`, paste the Decision 3 README pointer with
   relative links to those two paths. `cac-design-issue-2` stays the
   review/transport branch; do not open it as the product PR; do not merge
   it as docs-only first. Do not merge a README that points at those paths
   until they exist on that tip. The two `docs/` files on the product tip
   must be byte-identical to that named SHA except the allowed Status flip.
   Head `d2d09db` is not that tip. Ghost `cc21b56` is not that tip.

   Occupying branch today equals `main`. Implement may fast-forward
   `chore/remove-catchall-codeowners` from `d2d09db` (no `--force-with-lease`
   required while it has not diverged):

   ```bash
   git fetch origin cac-design-issue-2 chore/remove-catchall-codeowners main
   DESIGN_SHA=<sha named in the independent-review comment>
   git rev-parse --verify "${DESIGN_SHA}^{commit}"
   git checkout -B chore/remove-catchall-codeowners origin/chore/remove-catchall-codeowners
   test "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)"
   git checkout "$DESIGN_SHA" -- docs/adr/0001-remove-catchall-codeowners.md docs/architecture.md
   # Optional after review named this SHA: flip only the Status line
   # Proposed -> Accepted in the ADR. No other docs edits.
   git rm CODEOWNERS
   # README: paste Decision 3 pointer under ## Contributing; keep product map.
   git add README.md docs
   git commit -m "$(cat <<'EOF'
   chore: remove catch-all CODEOWNERS (issue 2).

   EOF
   )"
   git push origin chore/remove-catchall-codeowners
   # Received iff GET .../pulls/2 head.sha == $(git rev-parse HEAD)
   # and head.repo.full_name == "code/tradair-landing".
   # Ignore /files and /commits while they name cc21b56.
   ```

   Do **not**:

   ```bash
   git cherry-pick cc21b56907629875a57d92f5c9b50992b6eadf18
   git reset --hard cc21b56907629875a57d92f5c9b50992b6eadf18
   git merge cc21b56907629875a57d92f5c9b50992b6eadf18
   ```

   If that branch later diverges and a non-FF update is needed,
   `--force-with-lease` of the **PR branch** is allowed. It is not
   `force_merge`. If `#2` does not receive the tip, close `#2` without
   merge and open `{successor}` (Decision 8). Do not leave empty `#2` open.

4. Open PRs created while the file existed (#2, #1) may still show an
   official team request. Non-blocking **only if** a dated **admin** GET of
   this repo shows **T2-9** and **T2-10**. No bulk dismiss required to land
   `#2` under that GET. If **T2-10** is `true`, stop; that is a forge #48
   dependency, not a silent implement stop; merge is 405.
5. Do not restore the file from `docs/templates/CODEOWNERS` in cl8y-forgejo;
   that template is owned by #48.
6. Merge of `#2` waits on `ci/woodpecker/pr/woodpecker` success on the
   **product tip** (public T2-8 / T2-3, 2026-09-21). The S2 implementer
   opens the CI-enablement issue in `code/tradair-landing` before calling
   that wait named. That is a **separate** host/CI issue, not a reason to
   restore catch-all CODEOWNERS, add `.woodpecker.yaml` in this diff, copy
   hello’s yaml, fake statuses, or `force_merge`. No such iid exists in
   this repo today.

## Observability

Relative reads. Do not log tokens, hosts, or protection-script inventories. Do
not add a Forgejo admin token to Woodpecker, `react-scripts test`, or Render.

**Public land wait (T2-8 / T2-3, not leftover-complete).** Unauthenticated
`GET /api/v1/repos/code/tradair-landing/branches/main` (2026-09-21) already
lists `enable_status_check: true` and
`status_check_contexts: ["ci/woodpecker/pr/woodpecker"]`. Do not map
`user_can_push` to **T2-2**. Merge of `#2` waits until
`GET .../statuses/{product-tip-sha}` includes that context in a success
state. Empty statuses on `d2d09db` do not count.

**Land GET (T2-9 / T2-10, this repo, admin).** Before merging `#2` while
leftover official requests remain, repo admin of `code/tradair-landing`
attests a dated JSON of the `main` rule showing **T2-9**
(`required_approvals == 0`) and **T2-10**
(`block_on_official_review_requests == false`). Same endpoints as the
leftover-complete GET. Fleet #48 / `code/hello` / public `branches/main` is
not this GET. If **T2-10** is `true`, do not land; that stop is a forge #48
dependency.

**Protection (operator, leftover-complete).** Repo admin of
`code/tradair-landing` attests dated JSON of the six protection flags for the
`main` rule onto the leftover issue in this repo.
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
deploy, or the public `branches/main` slice does not satisfy this read.
In-repo CI cannot perform this GET.

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
`main`, changing **only** `docs/_codeowners-plant-check.txt`. GET both
endpoints **immediately after open**. If either plant signal is present,
fail. If both signals are empty, wait once **30 seconds** and re-GET both
before pass; pass only if the second pair is still empty. PR GET must have
`draft == false`. Title must not contain `WIP` (case-insensitive). Record
`{n}` **and** the two JSON bodies (the pair used for the pass decision) on
the leftover issue, then **close without merge immediately**. Merging `{n}`
fails leftover-complete. PR `#2`’s own official request does not pass. `#1`
does not pass. “The next natural PR” does not pass.

**CI / deploy.** Required host context is `ci/woodpecker/pr/woodpecker`
(observed on public `branches/main`, 2026-09-21). This tree does not post it
today. Drain comments such as `drain skip: no occupying job…` are **#429**,
not a #2 failure. A static host rebuild on `main` is **T2-6** (existing
follow), not leftover-complete.

**Ghost commit.** `GET .../pulls/2/files` and `.../pulls/2/commits` may list
`cc21b56` while `GET .../pulls/2` `head.sha` is `d2d09db`. Do not treat
`/files` as the occupying tip.

## Failure modes

| Mode | Handling |
| --- | --- |
| File deleted on a branch but still on `main` | New PRs keep planting official review until the product PR merges. Expected until land. |
| Merge `#2` while head is `d2d09db` | Empty diff. Catch-all remains. Land fails criterion 1. |
| Cherry-pick / reset onto / merge `cc21b56` | Ghost S1-only tip. Fails land criteria 2–5. Use live ref `d2d09db` + S0+S1+S2. |
| Trust `/files` or `/commits` over `head.sha` | Lands the orphan object. Merge-relevant tip is `GET .../pulls/2` `head.sha` and the occupying ref. |
| README links ADR/architecture but those files are not on the same tip | 404 after merge. Land fails criterion 2. Vehicle **B**: copy both files onto the product PR before merging README. |
| Copy left in `docs/`, `.gitea/`, or `.forgejo/` (including empty/comments-only) | Forgejo still loads the first existing path and may plant. Land fails **T2-1**; delete those paths too (none exist on current `main`). |
| Whole-tree `git grep` for `.* @` | Hits this ADR after a correct delete. Use the pathspec in Tests item 1. |
| cl8y-forgejo migrate/apply re-copies a template | Sister-repo race ([cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48) `_ensure_codeowners`). Out of this slice. If a later apply re-adds the file, leftover-complete is **not** done: delete again via PR, then one new dated leftover comment with all three leftover-complete items, **T2-1 last**. A GET or plant-check from before a re-copy does not count. Never direct-push `main`. |
| Plant-check → re-copy → stale-green GET | Void. Leftover-complete requires one dated leftover comment with (1) protection GET, (2) plant-check `{n}` + JSON, (3) four-path `test -f` fails — **T2-1 last** (or all three timestamps in one attest). |
| Official request leftover on #2 or #1 | Non-blocking **only if** dated **admin** GET of this repo shows **T2-9** / **T2-10**. If **T2-10** is `true`, merge is 405; stop is a forge #48 dependency, not a silent implement stop; do not `force_merge`; optional human dismiss is not a CAC substitute. Not S3 evidence. Not a rollback signal. |
| Treating merge of `#2` as leftover-complete | Merge closes `#2` before S3. Use the leftover issue in this repo. |
| Leftover issue opened in the wrong repo, or empty | Land fails criterion 5. Open in `code/tradair-landing` with the quoted body. |
| `#2` does not receive the tip; empty `#2` left open; successor `#3` merged | Merging `#3` closes `#3`, not the chore. Close `#2` without merge; record leftover-tracker + `{successor}` merge as completion. |
| Plant-check matcher uses `team.name == "code/maintainers"` or requires `team.organization` on reviews GET | Misses the live plant (`team.name == "maintainers"`, `team.organization == null` on reviews). Use the Observability fail-closed pair. |
| Plant-check is draft (`draft != false` on PR GET), title contains `WIP` (case-insensitive), has no changed file, or reviewers were requested in the UI / `POST .../requested_reviewers` | False pass (CODEOWNERS skipped or would not have planted) or false fail (manual team request). Recipe fails closed; open a new probe. |
| Plant-check changes `src/`, `public/`, `package.json`, addresses, ABIs, or legal pages | Looks mergeable on a `main` that may rebuild `traken.xyz`. Use `docs/_codeowners-plant-check.txt`. |
| Merging the plant-check PR | A `main` push **may** rebuild the static host. **Close without merge.** Merging `{n}` fails leftover-complete. |
| Protection silently reverted to official-review true | Merge 405 returns. Out of this repo; re-apply via forge #48, do not `force_merge`. Not proven by scanners. |
| `enable_push` flipped true | **T2-2** regression (direct push). Refuse. Not a force-push claim. Not `user_can_push`. |
| Host requires Woodpecker and nothing posts on the product tip | Observed deadlock (public T2-8 / T2-3). Not solved by restoring CODEOWNERS. Not #2 implement of a pipeline. S2 implementer opens the CI-enablement issue. Do not fake statuses. Do not add `.woodpecker.yaml` in this diff. Do not copy hello’s yaml. |
| Re-adding CODEOWNERS “for safety” in a follow-up | Violates **T2-1**. Reviewers must reject unless a new ADR allowlists path owners. |
| `src/` / sale addresses / `STYLE_GUIDE.md` / `package.json` sneak into the MR | Fail review. |
| README treats `docs/architecture.md` as product architecture or stubs the product map | Fail S2. Two architecture docs must not collide. |
| Implement copies “this SHA or a successor” instead of the SHA named in review | Fail land criterion 2. Accepted SHA is the named SHA. |
| Implement deploys Render, rotates sale/token addresses, or edits `autonomy.rs` / HMAC | Forbidden (#297). |

## Ordered implementation slices

| Slice | Work | Depends on |
| --- | --- | --- |
| **S0** | This design (ADR 0001 + architecture **T2**). Transport on `cac-design-issue-2`. Copy **the SHA named in independent review** onto the product tip; one-line Status flip to Accepted is allowed on that tip. Do not call this tip accepted until independent review names the SHA. `cac-design-issue-2` is never the merge vehicle. | None in `code/tradair-landing`. |
| **S1** | Delete root `CODEOWNERS`. Confirm `test -f` fails on all four Forgejo paths. Occupying **ref** is `d2d09db`; ignore ghost `cc21b56`. Do not cherry-pick it. | S0 files present on the **same product-PR tip** (not “S0 accepted” alone). |
| **S2** | README pointer on that **same** tip (paste Decision 3). Open the leftover issue in **`code/tradair-landing` only**, before merge, with the body template under Migration. **The S2 implementer** also opens the CI-enablement issue in this repo before treating the Woodpecker wait as a named CI issue. Attest dated **admin** **T2-9** / **T2-10** GET of this repo before treating leftover official requests as non-blocking. | S0 files on the same tip as S1. Same PR as S1. |
| **S3** | Leftover-complete: one dated leftover comment with (1) admin protection GET six flags, (2) dedicated plant-check `{n}` on `docs/_codeowners-plant-check.txt` + JSON, (3) four-path `test -f` fails — **T2-1 last**. Does **not** close `#2`. | S0+S1+S2 merged to `main`. Tracked on the leftover issue in this repo. |

PR `#2` ships **S0+S1+S2** if it received the tip; otherwise `{successor}`
does, after `#2` is closed without merge. S2 depends on S0 files being on the
same tip, not only on S1.

Merge of that PR waits for `ci/woodpecker/pr/woodpecker` on **that** tip
(public T2-8 / T2-3, 2026-09-21). That wait is not a slice of #2 pipeline
work. The CI-enablement iid does not exist today, so it is not a local
`DEPS` of this design.

Sister repos (not slices of #2, not local `DEPS`): forge #48
protection+templates; CAC #429 autoland occupying job; hello#15 canary. If
admin GET shows **T2-10** `true`, the land stop is a forge #48 dependency.

## Tests

In-repo CI cannot GET branch protection. Do not add a `react-scripts test`
case solely for four-path absence (`src/App.test.js` is leftover CRA smoke,
not this contract). Do not require that stale case to pass as a land gate.

1. **Absence (land, T2-1).** After S1, `test -f CODEOWNERS`,
   `test -f docs/CODEOWNERS`, `test -f .gitea/CODEOWNERS`, and
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
   land criterion 7 (`ci/woodpecker/pr/woodpecker` success on the product
   tip). That wait is owned by the S2 CI-enablement issue, not by this
   ticket implementing Woodpecker.
3. **Protection (leftover-complete, operator read).** Repo admin of
   `code/tradair-landing` attests dated JSON:
   `GET .../branch_protections` `main` rule equals the six architecture
   **protection GET** flags. Fail if any differ. Not inferred from a green
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
   (item 3): repo admin; not `react-scripts`; not Render.
   Leftover-complete attest order is Integration: **T2-1 last**. Do not treat
   a passing GET or plant-check from before a later `_ensure_codeowners` apply
   as done.
5. **Reject still blocks (doc-level).** Do not turn off
   `block_on_rejected_reviews` to “make autoland easier.”
6. **Diff guard (land).** Product PR does not change `src/`, `public/`,
   `package.json`, `package-lock.json`, `.npmrc`, `.nvmrc`, `STYLE_GUIDE.md`,
   `TODO.md`, or add `.woodpecker.yaml` / `render.yaml`.
7. **Land GET (T2-9 / T2-10).** If leftover official requests remain on `#2`
   or `#1`, a dated **admin** GET of this repo’s `main` rule shows **T2-9**
   and **T2-10** before merge. Fail closed if missing or if **T2-10** is
   `true` (forge #48 dependency, not a silent stop).
8. **README collision (land, S2).** Product PR README still is the product map
   and contains the Decision 3 pointer (architecture **only** for **T2**, ADR
   0001 for the delete). Do not invent a maintainers-as-gate denial.
9. **Host context (merge of #2).** Public `GET .../branches/main` (2026-09-21)
   already shows **T2-8** / **T2-3**. Before merge,
   `GET .../statuses/{product-tip-sha}` includes context
   `ci/woodpecker/pr/woodpecker` in a success state. Empty statuses on
   `d2d09db` mean that SHA is not merge-ready. The wait is on the **pushed
   product tip**. Slice S2 (opening the CI-enablement issue) does not satisfy
   this. Do not treat this as leftover-complete six-flag proof.

## Rollout

- Merge vehicle **B**: existing
  [#2](https://git.cl8y.com/code/tradair-landing/pulls/2) once that branch
  **received** the S0+S1+S2 tip, **or** `{successor}` after `#2` is closed
  without merge. Design-only `cac-design-issue-2` must not be opened as the
  product PR and must not be merged first as docs-only. Do not merge `#2` at
  `d2d09db`. Do not land `cc21b56`.
- Order: fleet protection already owned by #48 → copy S0 files from the SHA
  named in independent review + delete file + README via one product PR,
  leftover issue open in this repo, CI-enablement issue opened by the S2
  implementer, dated **admin** **T2-9** / **T2-10** GET of this repo if
  leftover official requests remain (land) → wait for Woodpecker success on
  **that** tip → leftover issue remains open → leftover-complete as one dated
  comment with admin protection GET, plant-check (close without merge), then
  four-path `test -f` (**T2-1 last**).
- Do not weaken **T2-3** / **T2-8** to land #2; do not add the pipeline in
  this diff; do not copy hello’s yaml; do not fake statuses; do not
  `force_merge`.
- Canary role: other `code/*` catch-all deletions may copy this pattern; this
  ADR does not merge those repos. hello#15 is not a gate.
- [#297](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/297): no
  deploy, spend, custody, or CAC policy expansion. Landing #2 does not
  authorize Render config changes, sale/token rotation, or autonomy changes.
  An existing static-host `main` follow that rebuilds after merge is not a
  new grant.

## Rollback

Restore the previous `CODEOWNERS` **via PR**, not direct `main`, from
`d2d09db` (six-line catch-all). That re-plants official requests. It does
**not** by itself re-enable merge-block
(`block_on_official_review_requests`); restoring the 405 gate is a
forge-policy revert, founder-scoped, and is not a tradair-landing rollback
step.

Woodpecker / Render / `src/` rollback is unused: those files are untouched.

If S0 docs need revert, revert via PR together with README so relative links
do not 404.

## Integration completion criteria

### Land (S0+S1+S2) — merge of PR `#2` if it received the tip, else `{successor}`

**Received the tip:** after one `git push origin chore/remove-catchall-codeowners`,
`GET .../pulls/2` has `head.sha` equal to the pushed S0+S1+S2 tip and
`head.repo.full_name == "code/tradair-landing"`. Ignore `/files` and
`/commits` while they name `cc21b56`.

If received, merging `#2` is what completes land (this section). If not
received, close occupying `#2` **without merge**, do not leave it open, and
land is merge of `{successor}` **plus** leftover-tracker existence. Merging
`{successor}` alone does not close the original chore iid.

All must be true on the merged tip. Land does **not** wait for S3.

1. `main` has no CODEOWNERS file at the four Forgejo paths: `test -f` fails on
   `CODEOWNERS`, `docs/CODEOWNERS`, `.gitea/CODEOWNERS`, `.forgejo/CODEOWNERS`
   (**T2-1**). Head is not `d2d09db`. Head is not `cc21b56`.
2. Merged tip contains `docs/adr/0001-remove-catchall-codeowners.md` and
   `docs/architecture.md` **byte-identical** to the SHA **named in the
   independent-review comment**, except the Status line may read `Accepted`
   instead of `Proposed`. README relative links to those paths resolve. Do
   not merge a README that points at those paths until they exist on that
   tip. Implementer must not pick a different successor SHA. Recipe
   `git fetch origin cac-design-issue-2` so `DESIGN_SHA` exists.
3. README keeps the product map and contains the Decision 3 pointer
   (`docs/architecture.md` **only** for **T2**; ADR 0001 for the delete). It
   does not imply CODEOWNERS is what makes merge trusted. Do not invent a
   maintainers-as-gate denial. Product overview remains. No stub escape.
4. Diff does not change `src/`, `public/`, `package.json`,
   `package-lock.json`, `.npmrc`, `.nvmrc`, `STYLE_GUIDE.md`, `TODO.md`, or
   add `.woodpecker.yaml` / `render.yaml`. No `force_merge`, no direct
   `main`, no CAC dismiss-as-merge, no Render/HMAC/`autonomy.rs` edits in the
   product-PR diff.
5. A leftover issue exists in **`code/tradair-landing` only**, opened before
   this merge, whose body quotes leftover-complete items 1–3 (dated `main`
   **admin** protection GET of the six **T2** flags; dedicated post-merge
   plant-check `{n}` on `docs/_codeowners-plant-check.txt`, close without
   merge; four-path `test -f` **T2-1 last**). An empty issue or an issue in
   another repo does not satisfy this criterion. Record its iid on the
   product PR. If a successor was required, that leftover issue also records
   that merge of `{successor}` plus this tracker completes the chore.
6. If leftover official requests remain on `#2` or `#1`, a dated **admin**
   GET of this repo’s `main` rule shows **T2-9** and **T2-10**. Do not land
   on an unverified GET. If **T2-10** is `true`, merge is 405; stop is a
   forge #48 dependency, not a silent implement stop.
7. Public `GET .../branches/main` (2026-09-21) already shows
   `enable_status_check: true` and context `ci/woodpecker/pr/woodpecker`.
   Product tip can be pushed; merge waits until that context has posted
   **success** on **that** tip. Empty statuses on `d2d09db` do not satisfy
   this. Do not fake the context. Do not add `.woodpecker.yaml` in this
   ticket. Do not copy hello’s yaml. Do not `force_merge`. The S2
   implementer has opened a CI-enablement issue in `code/tradair-landing`
   before treating the wait as named (no iid existed at design time,
   2026-09-21).

Empty commit statuses on `d2d09db` document the CI gap; they are not
leftover-complete. Occupying head `d2d09db` is incomplete without S0 files,
S1 delete, and S2. Ghost `cc21b56` is not a landable tip.

### Leftover-complete (S3) — leftover issue in this repo; survives merge of `#2`

Require **one dated leftover comment** with all three items, **T2-1 last**
(or all three timestamps in one attest). A GET or plant-check from before a
later `_ensure_codeowners` apply does not count; re-delete via PR and write a
new comment. Public `GET .../branches/main` is not item 1.

1. Protection GET six flags: repo admin of `code/tradair-landing` attests
   dated JSON: `GET .../branch_protections` `main` rule equals the six
   architecture **protection GET** flags (**T2-2**, **T2-8**, **T2-3**,
   **T2-9**, **T2-10**, **T2-5**). Not the Merge API row. Not inferred from a
   green scanner. Not copied from another repo. Not `user_can_push`. **T2-2**
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
this ADR only removes the in-tree file that plants requests. Independent
review of this proposal is a later gate. Design author must not write
`DESIGN: APPROVE`.
