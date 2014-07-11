  // navigation
introductionplus.bootstrap =
introductionplus.bootstrap {
    // topbar
  components =
  components {
      // 1, stdWrap, wrap
    pills < tt_content.menu.20.default
    pills {
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

tt_content.menu.20.introductionplusBootstrapPills < introductionplus.bootstrap.components.pills