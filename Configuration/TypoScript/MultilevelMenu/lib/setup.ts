lib.navigation {
  main {
    10 {
      2 {
        IFSUB < lib.navigation.main.10.1.IFSUB
        IFSUB {
          wrapItemAndSub  = <li class="dropdown XXdropdown-submenu">|</li>
          linkWrap        = <div class="glyphicon glyphicon-chevron-right" style="float:right"></div>|
        }
        ACTIFSUB < lib.navigation.main.10.1.ACTIFSUB
        ACTIFSUB {
          wrapItemAndSub = <li class="dropdown XXdropdown-submenu">|</li>
          linkWrap        = <div class="glyphicon glyphicon-chevron-right" style="float:right"></div>|
        }
        CURIFSUB < lib.navigation.main.10.1.CURIFSUB
        CURIFSUB {
          wrapItemAndSub = <li class="dropdown XXdropdown-submenu">|</li>
          linkWrap        = <div class="glyphicon glyphicon-chevron-right" style="float:right"></div>|
        }
      }
      3 < .2
      4 < .2
      5 < .2
    }
  }
}