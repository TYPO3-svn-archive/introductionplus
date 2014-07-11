  // navigation
introductionplus.bootstrap =
introductionplus.bootstrap {
    // topbar
  components =
  components {
      // default
    topbar =
    topbar {
        // 1, stdWrap, wrap
      default < tt_content.menu.20.default
      default {
        1 {
          NO {
          }
          ACT < .NO
          ACT {
            wrapItemAndSub = <li class="act">|</li>
          }
        }
      }
    }
  }
}

tt_content.menu.20.introductionplusTopBar < introductionplus.bootstrap.components.topbar.default