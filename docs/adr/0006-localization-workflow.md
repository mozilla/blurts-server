# L10N Workflow

* Status: proposed
* Deciders: Monitor Team, L10N Team
* Date: 2023-06-09

Technical Story: [MNTOR-1795](https://mozilla-hub.atlassian.net/browse/MNTOR-1795)

## Context and Problem Statement

The current L10N workflow is a complex, multiple manual-step process to sync strings between two branches. This process is error-prone. Because of its lack of automation, it also often does not give the L10N team enough time to localize strings. 

## Decision Drivers 

* With the React refactor, this is a good time to revisit our processes, and determine what makes the most since
  * This is also a chance to better align with other Mozilla projects

## Considered Options

* Separate Repo / git Submodules (Relay)
* Seperate Repo / Automated Syncing 
* Leave as-is (Dedicated branch on repo)

## Decision Outcome

Seperate Repo / Automated Syncing because is has the best experience (that process/security allows) for both developers and localizers. 

Final process is an automated pull request workflow. The automation runs once a day, and creates a PR that needs to be manually reviewed.

*See [this document](https://docs.google.com/document/d/12dRW85DNZpljmoS-U9KrZqV1nBDrT2g8WTpvTAM0HgY/edit?usp=sharing) for additional details on why complete automation is not currently possible.*

## Pros and Cons of the Options <!-- optional -->



### Seperate Repo / git Submodules (Relay)

Instead of having Pontoon read and write translations from a separate branch, Relay uses a separate l10n repository, which is then imported as a git submodule in the main repository. [A GitHub action](https://github.com/mozilla/fx-private-relay/blob/main/.github/workflows/l10n-sync.yml) is used to automatically update the submodule revision once a day.

* Bad, git submodules are complex and have led to complex merge conflict issues in the past. 
* Bad, The developer cannot add new English strings to the repository, they need to be added to the l10n repository.
    * This led the Relay team to create a [pendingTranslations.ftl](https://github.com/mozilla/fx-private-relay/blob/main/frontend/pendingTranslations.ftl) file to fill this gap. These strings are not tracked by L10N team and this files contents should constantly be removed/blank.
* Bad, Adding new strings to the l10n repository is a manual process (pull request).

### Seperate Repo / Semi-automated Syncing 

The proposal is to use a separate l10n repository instead of a separate branch, then use automation to sync only the relevant files between the two repositories instead of a git submodule.

*For additional sentistive considerations, see [this document](https://docs.google.com/document/d/12dRW85DNZpljmoS-U9KrZqV1nBDrT2g8WTpvTAM0HgY/edit?usp=sharing)* 

* Good, there are no changes for development compared to the existing workflow:
* Good, This workflow doesn’t block developers from landing code in the main branch as part of code pull requests.
* Good, It also allows queuing multiple changes before exposing them for localization, since strings are exposed through a pull request, which is manually reviewed by the localization EPM.
* Good, localizers workflow, new strings will trigger localization review requests via CODEOWNERS.
* Good, There is no need to have a separate [localization review instance](https://monitor-localization.herokuapp.com/) for localizers.

### Leave as-is (Dedicated branch on repo)

Currently, all new translations are committed to the branch via Pontoon. To expose new English strings for localization, the updated English (en) FTL file needs to be added in this branch (manually).

* Good, The same branch is also used to publish a [special instance of Monitor](https://monitor-localization.herokuapp.com/) for localization for localizers to review
* Bad, Pontoon commits every 10 minutes, and once per locale, polluting the repository’s history
* Bad, Pontoon needs write access to the target branch, it doesn’t support a pull request workflow. (Must be excluded from branch protection rules)
* Good, Developers can land content and code without exposing it immediately for localization.
* Bad, since the localization branch is used also to deploy a separate instance, it needs to periodically be synced with main to import new code.
* Bad, the sync between localization and main is completely manual, easy to forget, and can lead to errors (merge conflicts).


## Links <!-- optional -->

* [Full proposal from @flodolo](https://docs.google.com/document/d/1vc2TV9iMHY8lpDDd9aJUYAvhu-Ms1RcZBG80LqqDH0E/edit?usp=sharing)

## Images

Monitor workflow proposal
![monitor-workflow-proposal](/docs/adr/images/0006-localization-workflow/monitor-workflow-proposal.png)


Current Monitor workflow
![monitor-workflow](/docs/adr/images/0006-localization-workflow/monitor-workflow.png)