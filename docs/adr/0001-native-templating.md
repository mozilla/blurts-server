# Use Native Javascript Templating (Template Literals) For Site Refresh

* Status: accepted
* Deciders: Amri Toufali, Joe Zhou, Rob Helmer, Florian Zia, Emmett Lynch
* Date: 2023-01-11

## Context and Problem Statement

The Monitor site has been completely redesigned with new content, user-flows, and copy.  All templates need to be rebuilt, and we have an opportunity to update the template engine, Handlebars, which was first released in 2009 before existence of many modern Javascript features we currently use.

## Decision Drivers <!-- optional -->

* Handlebars is a 3rd-party template engine which necessitates additional 3rd-party connectors to work with other modules like email. 
* Handlebars and associated connectors have been associated with multiple vulnerabilities, and will continue to be vulnerable going forward.
* Code patterns used by Handlebars ("helpers" and business logic within HTML) have led to confusing or redundant functions scattered around the codebase
* Having to learn the old and proprietary Handlebars syntax requires time, and can discourage open-source developer assistance.

## Considered Options

1. Rebuild the site using Handlebars (no architecture change)
2. Rebuild the site using an alternate template engine, such as EJS
3. Rebuild the site using native Javascript templating functionality (Template Literals)

## Decision Outcome

Chosen option: 3, because Template Literal technology is more modern than the other options, it's part of the ECMAScript standard, and removes 3rd-party dependencies for templating.

### Positive Consequences <!-- optional -->

* [e.g., improvement of quality attribute satisfaction, follow-up decisions required, …]
* …

### Negative Consequences <!-- optional -->

* [e.g., compromising quality attribute, follow-up decisions required, …]
* …

## Pros and Cons of the Options <!-- optional -->

### [option 1]

[example | description | pointer to more information | …] <!-- optional -->

* Good, because [argument a]
* Good, because [argument b]
* Bad, because [argument c]
* … <!-- numbers of pros and cons can vary -->

### [option 2]

[example | description | pointer to more information | …] <!-- optional -->

* Good, because [argument a]
* Good, because [argument b]
* Bad, because [argument c]
* … <!-- numbers of pros and cons can vary -->

### [option 3]

[example | description | pointer to more information | …] <!-- optional -->

* Good, because [argument a]
* Good, because [argument b]
* Bad, because [argument c]
* … <!-- numbers of pros and cons can vary -->

## Links <!-- optional -->

* [Link type] [Link to ADR] <!-- example: Refined by [ADR-0005](0005-example.md) -->
* … <!-- numbers of links can vary -->