  // navigation
introductionplus.bootstrap =
introductionplus.bootstrap {
    // topbar
  components =
  components {
      // default
    topbar =
    topbar {
        // 1, 2, 3, 4, stdWrap, wrap
      default = HMENU
      default {
        1 = TMENU
        1 {
          expAll    = 1
          collapse  = 0
          noBlur    = 1
          wrap (
            <ul class="title-area">
              <li class="name">
                <!-- Leave this empty -->
              </li>
              <li class="toggle-topbar menu-icon">
                <a href="#"><span>{$topbar.top-bar.smallTitle}</span></a>
              </li>
            </ul>
            <section class="top-bar-section">
              <ul class="{$t3foundation.components.navigation.topbar.section.position}">|</ul>
            </section>
)

          NO = 1
          NO {
            ATagTitle {
              field = abstract // subtitle // title
            }
            wrapItemAndSub = <li>|</li>
            ATagParams {
              wrap = class="first level-0 |" |*| class="all level-0 |" |*| class="last level-0 |"
            }
            stdWrap {
              htmlSpecialChars = 1
            }
          }
          ACT < .NO
          ACT {
            wrapItemAndSub = <li class="act">|</li>
          }
          ACTIFSUB < .NO
          ACTIFSUB {
            wrapItemAndSub = <li class="act has-dropdown">|</li>
          }
          CUR < .NO
          CUR {
            wrapItemAndSub = <li class="cur">|</li>
          }
          CURIFSUB < .NO
          CURIFSUB {
            wrapItemAndSub = <li class="cur has-dropdown">|</li>
          }
          IFSUB < .NO
          IFSUB {
            wrapItemAndSub = <li class="has-dropdown">|</li>
          }
        }
        2 < .1
        2 {
          NO {
            ATagParams {
              wrap = class="level-1 |"
            }
          }
          ACT {
            ATagParams {
              wrap = class="level-1 |"
            }
          }
          ACTIFSUB {
            ATagParams {
              wrap = class="level-1 |"
            }
          }
          CUR {
            ATagParams {
              wrap = class="level-1 |"
            }
          }
          CURIFSUB {
            ATagParams {
              wrap = class="level-1 |"
            }
          }
          IFSUB {
            ATagParams {
              wrap = class="level-1 |"
            }
          }
          wrap = <ul class="dropdown">|</ul>
        }
        3 < .1
        3 {
          NO {
            ATagParams {
              wrap = class="level-2 |"
            }
          }
          ACT {
            ATagParams {
              wrap = class="level-2 |"
            }
          }
          ACTIFSUB {
            ATagParams {
              wrap = class="level-2 |"
            }
          }
          CUR {
            ATagParams {
              wrap = class="level-2 |"
            }
          }
          CURIFSUB {
            ATagParams {
              wrap = class="level-2 |"
            }
          }
          IFSUB {
            ATagParams {
              wrap = class="level-2 |"
            }
          }
          wrap = <ul class="dropdown">|</ul>
        }
        4 < .1
        4 {
          NO {
            ATagParams {
              wrap = class="level-3 |"
            }
          }
          ACT {
            ATagParams {
              wrap = class="level-3 |"
            }
          }
          ACTIFSUB {
            ATagParams {
              wrap = class="level-3 |"
            }
          }
          CUR {
            ATagParams {
              wrap = class="level-3 |"
            }
          }
          CURIFSUB {
            ATagParams {
              wrap = class="level-3 |"
            }
          }
          IFSUB {
            ATagParams {
              wrap = class="level-3 |"
            }
          }
          wrap = <ul class="dropdown">|</ul>
        }
        stdWrap {
          if {
            isTrue = {$t3foundation.components.navigation.topbar.position}
          }
          wrap = <div class="{$t3foundation.components.navigation.topbar.position}">|</div>
        }
        wrap = <nav class="top-bar" data-topbar>|</nav>
      }
    }
  }
}

tt_content.menu.20.introductionplusTopBar < introductionplus.bootstrap.components.topbar.default