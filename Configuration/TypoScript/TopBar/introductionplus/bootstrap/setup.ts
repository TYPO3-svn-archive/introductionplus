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
          ACT = 1
          ACT {
            wrapItemAndSub = <li class="active">|</li>
          }
          CUR < .ACT
        }
        stdWrap {
          outerWrap = <ul class="nav nav-pills">|</ul>
        }
      }
    }
  }
}

tt_content.menu.20.introductionplusTopBar < introductionplus.bootstrap.components.topbar.default