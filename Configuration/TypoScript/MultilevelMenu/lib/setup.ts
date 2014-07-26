lib.navigation {
  main {
    10 {
      1 {
        NO {
          linkWrap = {$introductionplus.bootstrap.themes.linkwrap}
        }
        ACT {
          linkWrap = {$introductionplus.bootstrap.themes.linkwrap}
        }
        CUR {
          linkWrap = {$introductionplus.bootstrap.themes.linkwrap}
        }
        ACTIFSUB {
          linkWrap = {$introductionplus.bootstrap.themes.linkwrap}
        }
        CURIFSUB {
          linkWrap = {$introductionplus.bootstrap.themes.linkwrap}
        }
        IFSUB {
          linkWrap = {$introductionplus.bootstrap.themes.linkwrap}
        }
      }
      2 {
        NO {
          linkWrap = {$introductionplus.bootstrap.themes.linkwrap}
        }
        ACT {
          linkWrap = {$introductionplus.bootstrap.themes.linkwrap}
        }
        CUR {
          linkWrap = {$introductionplus.bootstrap.themes.linkwrap}
        }
        IFSUB < lib.navigation.main.10.1.IFSUB
        IFSUB {
          allWrap         = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|</a>
          linkWrap        = <div class="glyphicon glyphicon-chevron-right" style="float:right"></div>|
          wrapItemAndSub  = <li class="dropdown dropdown-submenu">|</li>
        }
        ACTIFSUB < lib.navigation.main.10.1.ACTIFSUB
        ACTIFSUB {
          allWrap         = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|</a>
          linkWrap        = <div class="glyphicon glyphicon-chevron-right" style="float:right"></div>|
          wrapItemAndSub  = <li class="dropdown dropdown-submenu">|</li>
        }
        CURIFSUB < lib.navigation.main.10.1.CURIFSUB
        CURIFSUB {
          allWrap         = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|</a>
          linkWrap        = <div class="glyphicon glyphicon-chevron-right" style="float:right"></div>|
          wrapItemAndSub  = <li class="dropdown dropdown-submenu">|</li>
        }
      }
      3 < .2
      4 < .2
      5 < .2
    }
  }
}
