# Architecture overview

`code/tradair-landing` is the **Traken AI** visitor SPA (`https://traken.xyz`):
Create React App + React Router, marketing home, `/sale` (wagmi / RainbowKit,
BSC sale contracts), and legal pages. Product copy, style, and sale addresses
stay in [`README.md`](../README.md), [`STYLE_GUIDE.md`](../STYLE_GUIDE.md),
and `src/`. This file is the **merge gate** plus a short runtime index. Do not
copy README narrative here. Do not treat this file as a second product
architecture.

Catch-all `CODEOWNERS` removal is decided in
[ADR 0001](adr/0001-remove-catchall-codeowners.md)
([#2](https://git.cl8y.com/code/tradair-landing/issues/2)); do not duplicate
that narrative. Vehicle **B** copies this file and ADR 0001 onto the product
PR so `main` holds the standing contract. Design branch `cac-design-issue-2`
is transport only.

## Runtime

| Layer | Choice |
|-------|--------|
| App | CRA (`react-scripts` 5) + React 19. Routes in `src/App.js`: `/`, `/sale`, `/privacy`, `/terms`, `/cookies`, `/disclaimer`, `/ai-bias`. |
| Chain | BSC. Sale / token addresses in `src/constants/smart-contracts.js`. Not this ticket. |
| Host | Static site at `traken.xyz`. Git history records Render builds (`.npmrc` `legacy-peer-deps`). **No** in-tree `render.yaml`. `public/_redirects` is the SPA fallback. |
| Secrets | WalletConnect / RPC if any are host-side. Not this ticket. |
| CI file | None. No `.woodpecker.yaml` / `.woodpecker/`. No `.gitlab-ci.yml`. Host may still require `ci/woodpecker/pr/woodpecker`. |
| Tests | `src/App.test.js` is the leftover CRA “learn react” case. Do not grow #2 into a CODEOWNERS harness. |

```mermaid
flowchart LR
  visitor[Visitor] --> spa[traken.xyz SPA]
  spa --> sale["/sale wagmi"]
  sale --> bsc[BSC contracts]
  git[PR into main] --> gate[Forgejo merge gate T2]
  gate --> main[protected main]
  main --> host[Existing static host follow]
```

Visitor copy, sale addresses, ABIs, `STYLE_GUIDE.md`, and `TODO.md` are
**unchanged** by ADR 0001. A static-host rebuild from a `main` push is
existing follow, not a
[#297](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/297)
deploy grant.

## Forgejo merge gate {#forgejo-merge-gate}

Official CODEOWNERS review is **not** a merge gate. Decision, slices, tests,
rollback: [ADR 0001](adr/0001-remove-catchall-codeowners.md). Host write-up:
[cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48)
and forgejo PR **#50** (`docs/INVARIANTS.md` + ADR 0003 item 8). The issue
body points at forgejo `docs/INVARIANTS.md`, not a file in this tree. Do not
fork INVARIANTS here. Deploy / spend / custody / policy expansion:
[agent-control #297](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/297)
— this ticket is none of those. Sister CAC autoland predicates are
[#429](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/429), not
this SPA. [hello#15](https://git.cl8y.com/code/hello/pulls/15) is the fleet
canary, not a local iid.

### Merge gate (T2)

Three contract groups. Operator
`GET /api/v1/repos/code/tradair-landing/branch_protections` must equal the
**protection** rows only. That list endpoint returns an **array**; pick
`rule_name == "main"` (or
`GET /api/v1/repos/code/tradair-landing/branch_protections/main`).
Unauthenticated GET is **401**. A green `react-scripts test`, a Render
rebuild, empty commit statuses, or a GET on a different `code/*` repo is
**not** proof of **T2-2**, **T2-8**, **T2-3**, **T2-9**, **T2-10**, or
**T2-5**. Fleet values recorded for #48 / `code/hello` are not proof for this
repo. This tree has **no** dated protection JSON for `code/tradair-landing`.

#### Protection GET (six flags)

| ID | Flag | Required value |
| --- | --- | --- |
| **T2-2** | `enable_push` | `false` (no direct push to `main`) |
| **T2-8** | `enable_status_check` | `true` |
| **T2-3** | `status_check_contexts` | `["ci/woodpecker/pr/woodpecker"]` (array **equal**, not subset) |
| **T2-9** | `required_approvals` | `0` |
| **T2-10** | `block_on_official_review_requests` | `false` |
| **T2-5** | `block_on_rejected_reviews` | `true` |

GET equality is these six rows for the `main` rule. Merge procedure is not a
protection field.

**T2-2** is `enable_push == false` only. It does **not** mean “no force-push
of a PR branch.” Force-push allowlist fields (if the host exposes them) and
`apply_to_admins` stay
[cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48),
not this ticket.

A leftover official CODEOWNERS request on an open PR (including
[#2](https://git.cl8y.com/code/tradair-landing/pulls/2) and
[#1](https://git.cl8y.com/code/tradair-landing/pulls/1)) is non-blocking
**only if** a dated GET of **this** repo’s `main` rule shows **T2-9** and
**T2-10**. If `block_on_official_review_requests` is still `true` here, merge
is 405. Do not infer those two flags from fleet #48.

This tree had **no** `.woodpecker.yaml` / `.woodpecker/` on `main` when #2 was
filed; commit `d2d09db` has **empty** commit statuses (`[]`). Host may still
require `ci/woodpecker/pr/woodpecker` (**T2-8** / **T2-3**). Adding a pipeline
is **not** ADR 0001. Missing statuses are a pre-existing host/CI gap, not a
reason to keep catch-all CODEOWNERS, fake a context, or `force_merge`. If a
dated GET of this repo shows **T2-8**, merge of #2 waits until that context
posts (separate named CI issue when one exists). File-delete + docs on the
tip does not satisfy **T2-8**.

#### Merge procedure

| ID | Rule |
| --- | --- |
| **T2-4** | SHA-pinned `Do: merge` with `head_commit_id`. Never document or use `force_merge`. |

#### Tree contracts

| ID | Rule |
| --- | --- |
| **T2-1** | `test -f` fails on `CODEOWNERS`, `docs/CODEOWNERS`, `.gitea/CODEOWNERS`, and `.forgejo/CODEOWNERS`. |
| **T2-6** | Static host stays `main`-follow (existing Render dashboard if any). This ticket does not add PR deploys, `render.yaml`, rotate sale/token addresses, edit `src/` / `public/` / `package.json`, or treat a host rebuild as leftover-complete. Host secrets never attach to `pull_request` events. |
| **T2-7** | This tree does not expand CAC merge/deploy/spend/custody policy. |

Forgejo loads CODEOWNERS from `pr.BaseRepo.DefaultBranch`, first existing file
among `CODEOWNERS`, `docs/CODEOWNERS`, `.gitea/CODEOWNERS`, and
`.forgejo/CODEOWNERS` (Go-regexp, not GitHub globs; `.forgejo/` added in
forgejo#8773; `.gitea/` remains in the walk). Plants continue while
`.* @code/maintainers` remains on `main`. After ADR 0001 lands, **T2-1**
holds. None of those four paths may contain a reviewer rule for any pattern
(ADR 0001 Decision 2). Do not leave an empty or comments-only file; Forgejo
still parses it.

```mermaid
flowchart LR
  PR[Pull request into main] --> WP[Required context ci/woodpecker/pr/woodpecker]
  WP --> MERGE[Do: merge SHA-pinned]
  MERGE --> MAIN[protected main]
  MAIN --> HOST[Existing static host follow]
```

`react-scripts test` / `react-scripts build` are contributor checks, not
**T2-3**.

This tree does not change Forgejo protection JSON, CAC autoland predicates, or
host app config. Those remain
[cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48),
[cl8y-agent-control#429](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/429),
and [agent-control #297](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/297)
respectively.

## Directory (agents)

```
src/App.js                 routes
src/components/            marketing UI
src/pages/                 sale + legal
src/constants/             links, sale/token addresses, ABIs
public/_redirects          SPA fallback
STYLE_GUIDE.md             visual identity
README.md                  product map (S2 adds merge-gate pointer)
docs/adr/                  versioned decisions
docs/architecture.md       this file (merge gate T2; not product architecture)
CODEOWNERS                 catch-all; ADR 0001 deletes it
```

## ADRs

| ADR | Topic |
|-----|--------|
| [0001](adr/0001-remove-catchall-codeowners.md) | Remove catch-all CODEOWNERS ([#2](https://git.cl8y.com/code/tradair-landing/issues/2)) |
