lib.navigation {
  main {
    10 {
      2 {
        IFSUB < lib.navigation.main.10.1.IFSUB
        IFSUB {
          wrapItemAndSub  = <li class="dropdown dropdown-submenu">|</li>
          allWrap         = <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-chevron-right"></i>|</a>
        }
        ACTIFSUB < lib.navigation.main.10.1.ACTIFSUB
        ACTIFSUB {
          wrapItemAndSub = <li class="dropdown dropdown-submenu">|</li>
          allWrap         = <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-chevron-right"></i>|</a>
        }
        CURIFSUB < lib.navigation.main.10.1.CURIFSUB
        CURIFSUB {
          wrapItemAndSub = <li class="dropdown dropdown-submenu">|</li>
          allWrap         = <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-chevron-right"></i>|</a>
        }
      }
      3 < .2
      4 < .2
      5 < .2
    }
  }
}