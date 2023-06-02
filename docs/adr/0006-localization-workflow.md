# L10N Workflow

* Status: proposed
* Deciders: Monitor Team, L10N Team
* Date: 2023-06-01

Technical Story: [MNTOR-1795](https://mozilla-hub.atlassian.net/browse/MNTOR-1795)

## Context and Problem Statement

The current L10N workflow is a complex, multiple manual-step process to sync strings between two branches. This process is error-prone. Because of its lack of automation, it also often does not give the L10N team enough time to localize strings. 

## Decision Drivers 

* With the React refactor, this is a good time to revisit our processes, and determine what makes the most since
  * This is also a chance to better align with other Mozilla projects

## Considered Options

* Seperate Repo / git Submodules (Relay)
* Seperate Repo / Automated Syncing 
* Leave as-is (Dedicated branch on repo)

## Decision Outcome

Seperate Repo / Automated Syncing because ... 

## Pros and Cons of the Options <!-- optional -->

* LOREM IPSUM

### Seperate Repo / git Submodules (Relay)

Instead of having Pontoon read and write translations from a separate branch, Relay uses a separate l10n repository, which is then imported as a git submodule in the main repository. [A GitHub action](https://github.com/mozilla/fx-private-relay/blob/main/.github/workflows/l10n-sync.yml) is used to automatically update the submodule revision once a day.

* Good, 
* Bad, git submodules are complex and have led to complex merge conflict issues in the past 
* Bad, The developer cannot add new English strings to the repository, they need to be added to the l10n repository.
    * This led the Relay team to create a [pendingTranslations.ftl](https://github.com/mozilla/fx-private-relay/blob/main/frontend/pendingTranslations.ftl) file to fill this gap. These strings are not tracked by L10N team and this files contents should constantly be removed/blank.
* Bad, Adding new strings to the l10n repository is a manual process (pull request).

### Seperate Repo / Automated Syncing 

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

* Good, Ut enim ad minim veniam, quis nostrud exercitation
* Bad, ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Leave as-is (Dedicated branch on repo)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

* Good, Ut enim ad minim veniam, quis nostrud exercitation
* Bad, ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Links <!-- optional -->

* [Full proposal from @flodolo](https://docs.google.com/document/d/1vc2TV9iMHY8lpDDd9aJUYAvhu-Ms1RcZBG80LqqDH0E/edit?usp=sharing)