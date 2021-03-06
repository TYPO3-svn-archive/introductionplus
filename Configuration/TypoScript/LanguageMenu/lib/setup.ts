  // navigation
introductionplus.lib =
introductionplus.lib {
    // language
  nav =
  nav {
      // text, icons
    language =
    language {
      text = HMENU
      text {
        special = language
        special {
          value = {$introductionplus.lib.nav.language.special}
          normalWhenNoLanguage = 0
        }
        wrap =
        1 = TMENU
        1 {
          noBlur = 1
          NO = 1
          NO {
            linkWrap = <li>|</li>
            doNotLinkIt = 1
            stdWrap {
              override = {$introductionplus.lib.nav.language.override.text}
              typolink {
                parameter {
                  data = page:uid
                }
                additionalParams = {$introductionplus.lib.nav.language.additionalParams}
                addQueryString = 1
                addQueryString {
                  exclude = L,id,cHash,no_cache
                  method = GET
                }
                useCacheHash = 1
                no_cache = 0
              }
            }
          }
          ACT < .NO
          ACT.linkWrap = <li class="active">|</li>
          #### NO TRANSLATION AVAILABLE STATES ####
          USERDEF1 < .NO
          USERDEF1 {
            linkWrap = <li class="text-muted">|</li>
            stdWrap.typolink >
          }
          USERDEF2 < .ACT
          USERDEF2 {
            linkWrap = <li class="text-muted">|</li>
            stdWrap.typolink >
          }
        }
        wrap = <ul id="language_menu" class="list-inline">|</ul>
      }
      icons < .text
      icons {
        1 {
          NO {
            stdWrap {
              override = {$introductionplus.lib.nav.language.override.icons}
            }
          }
          ACT {
            stdWrap {
              override = {$introductionplus.lib.nav.language.override.icons}
            }
          }
          USERDEF1 {
            stdWrap {
              override = {$introductionplus.lib.nav.language.override.icons}
            }
          }
          USERDEF2 {
            stdWrap {
              override = {$introductionplus.lib.nav.language.override.icons}
            }
          }
        }
      }
    }
  }
}

tt_content.menu.20.introductionplusNavLangText < introductionplus.lib.nav.language.text
tt_content.menu.20.introductionplusNavLangIcons < introductionplus.lib.nav.language.icons