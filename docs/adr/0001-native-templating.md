# Use Native Javascript Templating (Template Literals) For Site Refresh

* Status: accepted
* Deciders: Amri Toufali, Joe Zhou, Rob Helmer, Florian Zia, Emmett Lynch
* Date: 2023-01-11

## Context and Problem Statement

The Monitor site has been completely reimagined with new user-flows, designs, and content.  All templates need to be rebuilt or created new. With this change, there is opportunity to update the legacy template engine, Handlebars.

## Decision Drivers <!-- optional -->

* Handlebars is a 3rd-party template engine which necessitates additional 3rd-party connectors to work with other modules like email. 
* Handlebars and associated connectors have been associated with multiple vulnerabilities, and will continue to be vulnerable going forward.
* Code patterns used by Handlebars ("helpers" and business logic within HTML) have led to confusing or redundant functions scattered around the codebase
* Having to learn the old and proprietary Handlebars syntax requires time, and can discourage open-source developer assistance.

## Considered Options

1. Rebuild the site using Handlebars (no architecture change)
2. Rebuild the site using an alternate template engine, such as EJS
3. Rebuild the site using native Javascript templating (Template Literals)

## Decision Outcome

Chosen option: 3, because Template Literal technology is more modern than the other options, it's part of the ECMAScript standard, and removes 3rd-party dependencies for templating.

### Positive Consequences <!-- optional -->

* Both front and back-end developers can contribute to templates without knowing proprietary syntax or patterns; it's all just Javascript.
* Functions directly related to a template can now be included in that module, rather than dispersed among "helper" files.
* Template rendering speed is improved by using native code, instead of additional processing through a 3rd-party engine. (Published benchmarks are scarse, but supporting links below)
* No longer need to maintain or resolve vulnerabilities relating to Handlebars and other associated 3rd-party connectors
* A more modern codebase is more likely to attract volunteer open-source development

### Negative Consequences <!-- optional -->

* Freedom on native template patterns can lead to uncertainty or confusion, especially in initial stages before typical patterns have been established.

## Pros and Cons of the Options <!-- optional -->

### [option 1]

Rebuild the site using Handlebars

* Good, because Handlebars is very mature and has been used successfully in many apps
* Bad, because Handlebars is outdated tech, initially created in 2009 to to fill a void that has since been filled by native templating solutions
* Bad, because Handlebars is a 3rd-party tool prone to vulnerabilities
* Bad, because Handlebars uses a proprietary syntax and requires abiding by its rules – anything beyond basic templating requires extra thought

Example code:
```hbs
// example.hbs template

<section>
  <div>
    {{#if user}}
    <h2>{{user.name}}</h2>
    {{/if}}  
  </div>
</section>
```

### [option 2]

Rebuild the site using EJS

* Good, because EJS is very mature and has been used successfully in many apps
* Good, because EJS is suggested to render templates faster than Handlebars
* Good, because EJS syntax is suggested to be closer to native Javascript
* Bad, for the same reasons as Option 1 (EJS was created in 2010)
* Bad, because developers familiar with existing Handlebars codebase need to learn another templating syntax and new rules
* Bad, because switching to EJS doesn't address Decision Drivers, above

Example code:
```ejs
// example.ejs template

<section>
  <div>
    <% if (user) { %>
      <h2><%= user.name %></h2>
    <% } %>
  </div>
</section>
```

### [option 3]

Rebuild the site using native Javascript templating (Template Literals)

* Good, because we are not dependent on 3rd-party tools
* Good, because there's no need to maintain additional tools or fix vulnerabilities
* Good, because no additional syntax or rules are needed to learn; uses standard javascript
* Good, because rendering performance is expected to increase
* Good, because code specific to a certain template can live in the same module
* Good, because we're not restricted by previous template tool limitations
* Bad, because established patterns are not as easy to find
* Bad, because unknowns are more likely to exist and reveal in time

Example code:
```js
// example.js template

export const example = data => `
<section>
  <div>
    <h2>${data.user?.name}</h2>
  </div>
</section>
`
```

## Links <!-- optional -->

* [Handlebars, EJS, ETA, Template Literals performance](https://javascript.plainenglish.io/handlebars-eta-ejs-1623a6140e56)

* [Template Literals vs Handlebars performance](https://www.codeblocq.com/2016/05/Performance-Comparison-ES6-Template-Literals-vs-HandleBars-in-Node/)

* [No Framework: Is it as hard as you think?](https://javarome.medium.com/design-noframework-bbc00a02d9b3)