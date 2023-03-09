<main class="container clear-header security-tips bg-dark" data-page-label="Security Tips">
  <div class="row jst-cntr">
    <div class="col-12 no-vertical-padding">
      <h2 class="top-headline mw-550">
        {{ getString "security-tips-headline" }}
      </h2>
      <ul class="security-tip-list flx">
        {{#each (articleLinks)}}
        <li class="security-tip-list-item flx">
          <div class="article-icon {{ class }}">{{> (lookup . 'pathToPartial') }}</div>
          <div class="flx flx-col">
            <a class="security-tip-link flx {{ class }} send-ga-ping" href="#{{ class }}"
              {{>analytics/security-tips-link linkTitle=title}}>{{ stringId }}{{> svg/arrow-head-right }}</a>
            <p class="security-tip-link-subhead">{{ subhead }}</p>
          </div>
        </li>
        {{/each}}
      </ul>
    </div>
  </div>
  <section class="container bg-light articles">
    <div class="row">
      <div class="col-9">
        <section class="st-intro-wrap">
          {{#each (getSecurityTipsIntro)}}
          <p class="st-intro">{{{ this }}}</p>
          {{/each}}
        </section>

        {{#each (getArticleCopy)}}
        <div id="{{ class }}" class="st-{{ class }} article-wrapper">
          <div class="ico {{ class }}">{{> (lookup . 'pathToPartial')}}</div>
          <span class="security-tip-subhead">{{subhead}}</span>
          <h2 class="article-headline mw-500 {{ class }}">{{ title }}</h2>
          {{#each copy}}
          {{#each leads}}
          <p class="article-paragraph lead">
            <span class="drop-cap">
              {{ ./../dropCap }}
            </span>
            <span>{{ this }}</span>
          </p>
          {{/each}}

          {{#if toggles}}
          {{#each this.toggles}}
          {{#if securityTip}}
          {{> top-level/security-tips/security-tip-callout }}
          {{/if}}
          {{#if subhead}}
          <div class="toggle-parent inactive st-toggle-wrapper">
            <div class="toggle-info-wrapper">
              <button class="toggle svg-wrap article-toggle" aria-label="{{ getString " show-content" }}">
                <span class="article-subhead toggle-subhead">{{{ subhead }}}</span>
                {{> svg/toggle-down }}
              </button>
            </div>
            <div class="toggle-child">
              {{> top-level/security-tips/tip-content }}
            </div>
            <!--closes toggle-child-->
          </div>
          {{/if}}
          {{/each}}
          {{/if}}
          {{#if subhead}}
          <h3 class="article-subhead">{{{ subhead }}}</h3>
          {{/if}}
          {{> top-level/security-tips/tip-content }}

          {{> top-level/security-tips/dos-and-donts }}
          {{/each}}
        </div>
        {{/each}}
      </div>
    </div>
  </section>
</main>