            {{#if passwordDosAndDonts }}
              <section class="dos-and-donts container">
                <h3 class="password-tip-list-headline txt-cntr"> {{ passwordDosAndDonts.listHeadline }}</h3>
                <div class="password-tip-list-wrapper">
                  <div class="pw-tip-table">
                    <div class="pw-tip-headlines flx">
                      <div class="pw-do-hl do-dont-hl flx jst-cntr">
                        <h4 class="flx icon-do">Do</h4>
                      </div>
                      <div class="pw-dont-hl do-dont-hl flx jst-cntr">
                        <h4 class="flx icon-dont">Don't</h4>
                      </div>
                    </div>
                    <div class="password-tip-list flx">
                      {{#each passwordDosAndDonts.doDontList}}
                        <div class="pw-tip-item flx">
                          <div class="pw-do do-dont-wrap flx jst-cntr">
                            <span class="do-dont">
                              <span class="do-dont-hl-mobile show-mobile icon-do">Do:</span>
                              {{{ this.do }}}
                            </span>
                          </div>
                          <div class="pw-dont do-dont-wrap flx jst-cntr">
                            <span class="do-dont">
                              <span class="do-dont-hl-mobile show-mobile icon-dont">Don't:</span>
                              {{ this.dont }}
                            </span>
                          </div>
                        </div>
                      {{/each}}
                    </div>
                  </div>
                </div>
              </section>
            {{/if}}
